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
      owner_id: user.id,
    },
  });

  if (!device) {
    return res.status(200).json([]);
  }
  try {
    const startedChats = await prisma.ai_agent_chat_history.findMany({
      where: {
        user_id: user.id,
      },
      distinct: ['user_id'],
      orderBy: {
        created_at: 'desc',
      },
    });
    const participants = await prisma.User.findMany({
      where: {
        id: {
          in: startedChats.map((item) => item.participant_id),
        },
      },
      select: {
        id: true,
        username: true,
        profile: {
          select: {
            id: true,
            name: true,
            img: true,
          },
        },
      },
    });
    const participantChats = await prisma.ai_agent_chat_history.findMany({
      where: {
        participant_id: user.id,
      },
      distinct: ['participant_id'],
    });
    const users = await prisma.User.findMany({
      where: {
        id: {
          in: participantChats.map((item) => item.user_id),
        },
      },
      select: {
        id: true,
        username: true,
        profile: {
          select: {
            id: true,
            name: true,
            img: true,
          },
        },
      },
    });
    const startedChatsWithUsers = startedChats.map((item) => ({
      ...item,
      user: participants.find((p) => p.id === item.participant_id),
    }));
    const participantChatsWithUsers = participantChats.map((item) => ({
      ...item,
      user: users.find((p) => p.id === item.user_id),
    }));
    return res
      .status(200)
      .json([...startedChatsWithUsers, ...participantChatsWithUsers]);
  } catch (error) {
    return next(error);
  }
};

const getChatById = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  const currentUser = await prisma.User.findFirst({
    where: {
      sys_user_id: BigInt(userId),
    },
  });
  if (!currentUser) {
    return res.status(401).json({ message: '请登录账号！' });
  }
  const chat = await prisma.ai_agent_chat_history.findUnique({
    where: {
      id,
    },
  });
  if (!chat) {
    return res.status(404).json({ message: '聊天消息不存在' });
  }
  if (
    currentUser.id !== chat.user_id &&
    currentUser.id !== chat.participant_id
  ) {
    return res.status(403).json({ message: '无权限查看此消息！' });
  }
  try {
    const messages = await prisma.ai_agent_chat_history.findMany({
      where: {
        user_id: chat.user_id,
        participant_id: chat.participant_id,
      },
    });
    const targetUserId =
      currentUser.id === chat.user_id ? chat.participant_id : chat.user_id;
    const user = await prisma.User.findUnique({
      where: {
        id: targetUserId,
      },
      select: {
        id: true,
        username: true,
        profile: {
          select: {
            id: true,
            name: true,
            img: true,
          },
        },
      },
    });
    return res.status(200).json({
      user,
      messages,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllChatsOfUser,
  getChatById,
};
