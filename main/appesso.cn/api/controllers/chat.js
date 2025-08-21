const prisma = require('../services/connect-db');

const getAllChatsOfUser = async (req, res, next) => {
  const { userId } = req;
  const user = await prisma.User.findFirst({
    where: {
      sys_user_id: BigInt(userId),
    },
  });
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  const device = await prisma.ai_device.findFirst({
    where: {
      ownerId: user.id,
    },
  });

  if (!device) {
    return res.status(200).json([]);
  }
  try {
    // wip
    return res.status(200).json([]);
  } catch (error) {
    return next(error);
  }
};

const getChatById = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  const user = await prisma.User.findFirst({
    where: {
      ai_role_id: id,
    },
    select: {
      id: true,
      username: true,
      profile: true,
    },
  });
  if (!user) {
    return res.status(404).json({ message: '用户不存在！' });
  }
  const device = await prisma.ai_device.findFirst({
    where: {
      user_id: BigInt(userId),
    },
  });

  if (!device) {
    return res.status(404).json({ message: '未绑定任何设备，请先绑定设备！' });
  }
  try {
    const messages = await prisma.ai_agent_chat_history.findMany({
      where: {
        role_id: id,
        mac_address: device.id,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    return res.status(200).json({ user, messages });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllChatsOfUser,
  getChatById,
};
