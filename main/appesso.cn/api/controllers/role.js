const crypto = require('node:crypto');
const prisma = require('../services/connect-db');

const getAllRoles = async (req, res, next) => {
  try {
    const roles = await prisma.ai_role.findMany({
      select: {
        id: true,
      },
    });
    const ids = roles.map(({ id }) => id);
    const users = await prisma.User.findMany({
      where: {
        ai_role_id: {
          in: ids,
        },
      },
      select: {
        id: true,
        username: true,
        ai_role_id: true,
        profile: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const updateConnectedDevice = async (req, res, next) => {
  try {
    const { userId } = req;
    const { id } = req.params;

    const role = await prisma.ai_role.findUnique({ where: { id } });
    if (!role) return res.status(404).json({ message: '角色不存在' });
    const device = await prisma.ai_device.findFirst({
      where: { user_id: userId },
    });
    if (!device)
      return res
        .status(404)
        .json({ message: '当前用户未绑定设备，请先绑定设备' });
    const deviceRole = await prisma.ai_device_role.findFirst({
      where: { device_id: device.id },
    });
    if (!deviceRole) {
      await prisma.ai_device_role.create({
        data: {
          id: crypto.randomBytes(16).toString('hex'),
          device_id: device.id,
          create_date: new Date(),
          role_id: role.id,
        },
      });
    } else {
      await prisma.ai_device_role.update({
        where: { id: deviceRole.id },
        data: { role_id: role.id },
      });
    }
    return res.status(200).json({ message: '选择角色成功' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllRoles,
  updateConnectedDevice,
};
