// eslint-disable-next-line  no-extend-native
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const createError = require('http-errors');

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
    const devices = await prisma.ai_device.findMany({
      where: {
        user_id: userId,
      },
    });
    const deviceRoles = await prisma.ai_device_role.findMany({
      where: {
        device_id: {
          in: devices.map((device) => device.id),
        },
      },
    });
    const devicesWithRoles = devices.map((device) => ({
      ...device,
      id: String(device.id),
      user_id: String(device.user_id),
      roles: deviceRoles.filter((role) => role.device_id === device.id),
    }));
    return res.status(200).json(devicesWithRoles);
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

module.exports = {
  getMyDevices,
  getUserByUsername,
  updateProfile,
  getAuthUserInfo,
  updateUsername,
  updateDateOfBirth,
};
