// eslint-disable-next-line  no-extend-native
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const createError = require('http-errors');

const redisClient = require('../utils/redis');
const prisma = require('../services/connect-db');

const getUserByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await prisma.User.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        sys_user_id: true,
        create_at: true,
        username: true,
        profile: true,
      },
    });
    if (!user) {
      const error = createError.NotFound();
      throw error;
    }
    return res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};

const getMyDevices = async (req, res, next) => {
  const { userId } = req;
  try {
    const user = await prisma.User.findFirst({
      where: {
        sys_user_id: BigInt(userId),
      },
    });
    if (!user) {
      const error = createError.NotFound();
      throw error;
    }
    const devices = await prisma.ai_device.findMany({
      where: {
        owner_id: user.id,
      },
    });
    return res.status(200).json(devices);
  } catch (error) {
    return next(error);
  }
};

/**
 * @description 激活设备控制器
 * 该函数负责处理设备的激活请求，将设备与用户关联，并更新其状态。
 * 新增需求：绑定设备时可选择角色，如果未选择则自动绑定第一个角色。
 * @param {object} req - Express请求对象，包含chatUserId、code参数。
 * @param {object} res - Express响应对象，用于发送HTTP响应。
 * @param {function} next - Express next中间件函数，用于传递错误。
 */
const activateMyDevice = async (req, res, next) => {
  const { userId } = req;
  const { code, chatUserId } = req.body; // userId

  // 1. 参数校验：检查userId和激活码是否提供
  if (!chatUserId || !code) {
    return res.status(400).json({
      message: '用户ID和激活码是设备激活的必需参数。',
    });
  }

  try {
    // 2. 从Redis获取设备ID (对应Java的 deviceKey)
    const deviceKey = `ota:activation:code:${code}`;
    const cachedDeviceId = await redisClient.get(deviceKey);

    if (!cachedDeviceId) {
      return res.status(400).json({ message: '激活码错误：无法找到设备ID。' });
    }
    // 关键修复：清理从Redis获取的deviceId，移除可能存在的引号和空格
    const deviceId = cachedDeviceId.trim().replace(/^"|"$/g, ''); // deviceId 是 String 类型

    // 3. 从Redis获取设备详细信息 (对应Java的 cacheDeviceKey)
    // Java中对 deviceId 做了 replace 和 toLowerCase，这里也进行类似处理
    const safeDeviceId = deviceId.replace(/:/g, '_').toLowerCase(); // 使用全局替换
    const cacheDeviceKey = `ota:activation:data:${safeDeviceId}`;
    const cacheMapString = await redisClient.get(cacheDeviceKey);
    // eslint-disable-next-line no-console
    console.log('cacheDeviceKey: ', cacheDeviceKey);
    if (!cacheMapString) {
      return res
        .status(400)
        .json({ message: '激活码错误：无法找到设备详细数据。' });
    }

    let cacheMap;
    try {
      cacheMap = JSON.parse(cacheMapString); // 假设Redis中的Map是以JSON字符串形式存储的
    } catch (parseError) {
      // 在生产环境中，应该记录此错误
      // console.error('解析Redis设备数据失败:', parseError);
      return res
        .status(500)
        .json({ message: '服务器内部错误：无法解析设备数据。' });
    }

    // 4. 再次校验激活码（与Redis中存储的激活码比对）
    const cachedCode = cacheMap.activation_code;
    if (code !== cachedCode) {
      // JavaScript字符串比较使用 !== 或 ===
      return res.status(400).json({ message: '激活码错误：激活码不匹配。' });
    }

    // 5. 检查设备是否已被激活（在数据库中是否存在具有此 deviceId 的 ai_device 记录）
    // 使用 ai_device 模型，id 是 String 类型
    const existingDevice = await prisma.ai_device.findUnique({
      where: {
        id: deviceId, // id 是 String 类型
      },
    });

    if (existingDevice) {
      // 如果设备已存在于数据库
      if (
        existingDevice.user_id !== null &&
        existingDevice.user_id.toString() !== userId
      ) {
        return res.status(409).json({ message: '设备已被其他用户关联。' });
      }
      // 如果设备已存在且用户ID相同，则表示已激活，直接返回成功（防止重复激活）
      return res.status(200).json({
        message: '设备已激活。',
        deviceId: existingDevice.id,
        userId,
        createDate: existingDevice.create_date, // 返回创建时间
      });
    }

    // 7. 获取 agentId (从req.body 或 req.query，取决于API设计)
    // Java方法 signature: public Boolean deviceActivation(String agentId, String activationCode)
    // 假设 agentId 应该作为请求的一部分传入。
    const user = await prisma.User.findFirst({
      where: {
        sys_user_id: BigInt(userId),
      },
    });
    const chatUser = await prisma.User.findUnique({
      where: {
        id: chatUserId,
      },
    });
    const agent = await prisma.ai_agent.findFirst({});
    if (!user) {
      return res.status(401).json({
        message: '用户不存在。',
      });
    }
    if (!chatUser) {
      return res.status(400).json({
        message: '聊天的用户不存在。',
      });
    }
    if (!agent) {
      return res.status(401).json({
        message: '当前系统没有助理。',
      });
    }

    // 8. 构建设备数据并创建新设备条目
    const currentTime = new Date();
    const deviceData = {
      id: deviceId, // 使用从Redis获取的deviceId作为主键，String类型
      user_id: BigInt(userId), // user_id 是 BigInt 类型
      owner_id: user.id,
      chat_user_id: chatUser.id,
      mac_address: cacheMap.mac_address || null, // 从Redis获取
      board: cacheMap.board || null, // 从Redis获取
      app_version: cacheMap.app_version || null, // 从Redis获取
      agent_id: agent.id, // agent_id 是 String 类型，直接使用
      last_connected_at: currentTime, // 首次连接时间
      create_date: currentTime, // 创建日期
      update_date: currentTime, // 更新日期
      creator: BigInt(userId), // 创建者 ID，假设与 userId 相同
      updater: BigInt(userId), // 更新者 ID，假设与 userId 相同
      auto_update:
        cacheMap.auto_update !== undefined ? cacheMap.auto_update : 0, // 默认值 0 (UnsignedTinyInt)
    };

    const newDevice = await prisma.ai_device.create({
      data: deviceData,
    });

    // 10. 清理Redis缓存
    await redisClient.del(cacheDeviceKey);
    await redisClient.del(deviceKey);

    // 11. 存储设备的激活状态到Redis（可选，与Java端有所不同，但可以保留）
    await redisClient.set(
      `activated_device:${newDevice.id}`, // Redis键名：`activated_device:<设备ID>`
      userId.toString(), // 键值：用户ID的字符串形式
      'EX', // 设置过期时间
      86400 // 过期时间：24小时（86400秒）
    );

    // 12. 返回成功响应
    return res.status(200).json({
      message: '设备激活成功并绑定角色。',
      deviceId: newDevice.id,
      userId,
      createDate: newDevice.create_date,
    });
  } catch (error) {
    // 统一错误处理
    // Prisma 唯一约束冲突错误，如果 `id` 或其他字段有唯一约束且发生冲突
    if (error.code === 'P2002') {
      return res.status(409).json({
        message: '冲突：设备ID或某些数据可能已存在。',
      });
    }
    return next(error);
  }
};

const updateMyConnectedDevice = async (req, res, next) => {
  const { userId } = req;
  const { chatUserId } = req.body;
  const user = await prisma.User.findFirst({
    where: {
      sys_user_id: BigInt(userId),
    },
  });
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  const chatUser = await prisma.User.findUnique({
    where: {
      id: chatUserId,
    },
  });
  if (!chatUser) {
    return res.status(404).json({ error: '选择的聊天用户不存在' });
  }
  const device = await prisma.ai_device.findFirst({
    where: {
      owner_id: user.id,
    },
  });
  if (!device) {
    return res.status(404).json({ error: '当前用户未绑定任何设备。' });
  }
  try {
    const updated = await prisma.ai_device.update({
      where: {
        id: device.id,
      },
      data: {
        chat_user_id: chatUserId,
      },
    });
    return res.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
};

const updateProfile = async (req, res, next) => {
  const { userId } = req;
  const { name, bio, website, dateOfBirth } = req.body;
  const user = await prisma.User.findFirst({
    where: {
      sys_user_id: BigInt(userId),
    },
  });
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  try {
    const updatedUser = await prisma.User.update({
      where: {
        id: user.id,
      },
      data: {
        profile: {
          update: {
            name,
            bio,
            website,
            dob: dateOfBirth,
          },
        },
      },
      select: {
        id: true,
        username: true,
        sys_user_id: true,
        profile: true,
      },
    });
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return next(error);
  }
};

const getAuthUserInfo = async (req, res, next) => {
  const { userId } = req;
  const sysUser = await prisma.sys_user.findUnique({
    where: {
      id: BigInt(userId),
    },
  });
  try {
    const user = await prisma.user.findFirst({
      where: {
        sys_user_id: sysUser.id,
      },
      select: {
        id: true,
        username: true,
        profile: true,
      },
    });
    return res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};

const updateUsername = async (req, res, next) => {
  const { userId } = req;
  const { username } = req.body;
  try {
    const user = await prisma.User.findFirst({
      where: {
        sys_user_id: BigInt(userId),
      },
    });
    if (!user) {
      throw createError.NotFound();
    }
    const updatedUser = await prisma.User.update({
      where: {
        id: user.id,
      },
      data: {
        username: username.toLowerCase(),
      },
      select: {
        id: true,
        username: true,
        profile: true,
      },
    });
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return next(error);
  }
};

const updateDateOfBirth = async (req, res, next) => {
  const { userId } = req;
  // eslint-disable-next-line no-console
  console.log('userId:', userId);
  const { dateOfBirth } = req.body;
  try {
    const user = await prisma.User.findFirst({
      where: {
        sys_user_id: BigInt(userId),
      },
    });
    if (!user) {
      throw createError.NotFound();
    }
    const updatedUser = await prisma.User.update({
      where: {
        id: user.id,
      },
      data: {
        profile: {
          update: {
            dob: dateOfBirth,
          },
        },
      },
      select: {
        id: true,
        username: true,
        profile: true,
      },
    });
    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    return next(error);
  }
};

const getFeaturedUsers = async (_, res, next) => {
  try {
    const users = await prisma.User.findMany({
      where: {
        featured: true,
      },
      select: {
        id: true,
        username: true,
        profile: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getMyDevices,
  activateMyDevice,
  updateMyConnectedDevice,
  getUserByUsername,
  updateProfile,
  getAuthUserInfo,
  updateUsername,
  getFeaturedUsers,
  updateDateOfBirth,
};
