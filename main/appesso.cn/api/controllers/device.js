const Redis = require('ioredis'); // 引入ioredis库用于连接Redis
const crypto = require('node:crypto'); // 引入node:crypto用于生成唯一ID
const prisma = require('../services/connect-db'); // 引入Prisma客户端用于数据库操作

// 配置Redis客户端。建议将这些配置（例如，主机、端口、密码）外部化，
// 例如通过环境变量来管理，以增强灵活性和安全性。
// 在Docker环境中，REDIS_HOST通常是Redis服务的容器名。
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'xiaozhi-esp32-server-redis', // Redis主机名，默认为xiaozhi-esp32-server-redis（根据docker-compose.yml）
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379, // Redis端口，默认为6379
  password: process.env.REDIS_PASSWORD || '', // Redis密码，根据docker-compose.yml，这里为空
  db: 0, // 默认的Redis数据库编号
});

// 监听Redis客户端的错误事件
redisClient.on('error', (err) => {
  // 在生产环境中，应该使用适当的日志库（如Winston, Pino等）来记录Redis客户端错误，
  // 而不是直接使用console.error。此处根据之前的反馈避免直接输出console。
  console.error('Redis客户端错误:', err);
});

/**
 * @description 激活设备控制器
 * 该函数负责处理设备的激活请求，将设备与用户关联，并更新其状态。
 * 新增需求：绑定设备时可选择角色，如果未选择则自动绑定第一个角色。
 * @param {object} req - Express请求对象，包含userId、code参数，以及可选的roleId和agentId。
 * @param {object} res - Express响应对象，用于发送HTTP响应。
 * @param {function} next - Express next中间件函数，用于传递错误。
 */
const activateDevice = async (req, res, next) => {
  const { userId } = req;
  const { code } = req.params;
  const { roleId } = req.body; // 从请求体中获取可选的roleId

  // 1. 参数校验：检查userId和激活码是否提供
  if (!userId || !code) {
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

    // 6. 确定要绑定的角色
    let targetRole;
    if (roleId) {
      // 如果请求中提供了 roleId，查找指定角色
      targetRole = await prisma.ai_role.findUnique({
        where: { id: roleId },
      });
      if (!targetRole) {
        return res.status(404).json({ message: '指定的角色不存在。' });
      }
    } else {
      // 如果未提供 roleId，查找第一个角色（按创建日期排序）
      targetRole = await prisma.ai_role.findFirst({
        orderBy: {
          create_date: 'asc', // 选择创建日期最早的角色
        },
      });
      if (!targetRole) {
        return res
          .status(404)
          .json({ message: '未找到任何可用角色，请先创建角色。' });
      }
    }

    // 7. 获取 agentId (从req.body 或 req.query，取决于API设计)
    // Java方法 signature: public Boolean deviceActivation(String agentId, String activationCode)
    // 假设 agentId 应该作为请求的一部分传入。
    const agentId = targetRole.agent_id || null; // 从目标角色中获取 agent_id

    // 8. 构建设备数据并创建新设备条目
    const currentTime = new Date();
    const deviceData = {
      id: deviceId, // 使用从Redis获取的deviceId作为主键，String类型
      user_id: BigInt(userId), // user_id 是 BigInt 类型
      mac_address: cacheMap.mac_address || null, // 从Redis获取
      board: cacheMap.board || null, // 从Redis获取
      app_version: cacheMap.app_version || null, // 从Redis获取
      agent_id: agentId, // agent_id 是 String 类型，直接使用
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

    // 9. 创建或更新设备与角色的绑定关系 (ai_device_role)
    const existingDeviceRole = await prisma.ai_device_role.findFirst({
      where: { device_id: newDevice.id },
    });

    if (existingDeviceRole) {
      // 如果已存在绑定关系，则更新
      await prisma.ai_device_role.update({
        where: { id: existingDeviceRole.id },
        data: {
          role_id: targetRole.id,
          update_date: currentTime, // 更新时间
        },
      });
    } else {
      // 如果不存在绑定关系，则创建
      await prisma.ai_device_role.create({
        data: {
          id: crypto.randomBytes(16).toString('hex'), // 生成符合 VarChar(32) 的ID
          role_id: targetRole.id,
          device_id: newDevice.id,
          create_date: currentTime,
          update_date: currentTime,
        },
      });
    }

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
      roleId: targetRole.id, // 返回已绑定的角色ID
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

// 导出activateDevice函数
module.exports = {
  activateDevice,
};
