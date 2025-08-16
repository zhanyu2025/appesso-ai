const createError = require('http-errors');

const prisma = require('../services/connect-db');

const getAllChatsOfUser = async (req, res, next) => {
  const { userId } = req;
  const device = await prisma.ai_device.findFirst({
    where: {
      user_id: BigInt(userId),
    },
  });

  if (!device) {
    return res.status(404).json({ message: '未绑定任何设备，请先绑定设备！' });
  }

  try {
    // Find distinct role_ids that have chat history with this device
    const chatHistoryRoles = await prisma.ai_agent_chat_history.findMany({
      where: {
        mac_address: device.mac_address,
        agent_id: device.agent_id, // Ensure it's for this agent as well
      },
      distinct: ['role_id'],
      select: {
        role_id: true,
      },
    });

    const roleIdsWithChat = chatHistoryRoles.map((entry) => entry.role_id);

    // Fetch details for these specific roles that have chat history
    const roles = await prisma.ai_role.findMany({
      where: {
        id: {
          in: roleIdsWithChat,
        },
        agent_id: device.agent_id, // Still ensure it belongs to this agent
      },
      select: {
        id: true,
        name: true,
      },
    });

    // Map over these filtered roles and get their last chat content
    const rolesWithDetails = await Promise.all(
      roles.map(async (role) => {
        const lastChat = await prisma.ai_agent_chat_history.findFirst({
          where: {
            mac_address: device.mac_address, // Filter by mac_address
            role_id: role.id,
            agent_id: device.agent_id,
          },
          orderBy: {
            created_at: 'desc',
          },
          select: {
            content: true,
          },
        });
        const user = await prisma.User.findFirst({
          where: {
            ai_role_id: role.id,
          },
          select: {
            id: true,
            username: true,
            profile: true,
          },
        });
        return {
          id: role.id,
          name: role.name,
          user,
          lastChatContent: lastChat ? lastChat.content : null,
        };
      })
    );

    return res.status(200).json({ roles: rolesWithDetails });
  } catch (error) {
    return next(error);
  }
};

const findOrCreateNewChat = async (req, res, next) => {
  const { userId } = req;
  const { participantId } = req.body;
  try {
    if (userId === Number(participantId)) {
      const error = createError.Forbidden();
      throw error;
    }
    const existingChat = await prisma.chat.findFirst({
      where: {
        userId,
        participantId: Number(participantId),
      },
      include: {
        participant: {
          select: {
            username: true,
            profile: {
              select: {
                name: true,
                img: true,
              },
            },
          },
        },
      },
    });
    if (existingChat) {
      return res.status(200).json(existingChat);
    }
    const chat = await prisma.chat.create({
      data: {
        user: {
          connect: { id: userId },
        },
        participant: {
          connect: {
            id: Number(participantId),
          },
        },
      },
    });
    return res.status(201).json(chat);
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
        created_at: 'desc',
      },
    });

    return res.status(200).json({ user, messages });
  } catch (error) {
    return next(error);
  }
};

const addNewMessageToChat = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  const { content } = req.body;
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id: Number(id),
        userId,
      },
    });
    if (!chat) {
      const error = createError.NotFound();
      throw error;
    }
    const { participantId } = chat;
    let chatParticipatedIn = await prisma.chat.findFirst({
      where: {
        userId: participantId,
        participantId: userId,
      },
    });
    if (!chatParticipatedIn) {
      chatParticipatedIn = await prisma.chat.create({
        data: {
          user: {
            connect: { id: participantId },
          },
          participant: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }
    const message = await prisma.message.create({
      data: {
        content,
        user: {
          connect: { id: userId },
        },
        chats: {
          connect: [{ id: chat.id }, { id: chatParticipatedIn.id }],
        },
      },
    });
    return res.status(201).json({ message });
  } catch (error) {
    return next(error);
  }
};

const markMessagesAsRead = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id: Number(id),
        userId,
      },
    });
    if (!chat) {
      const error = createError.NotFound();
      throw error;
    }
    await prisma.message.updateMany({
      where: {
        userId: chat.participantId,
      },
      data: {
        read: true,
      },
    });
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllChatsOfUser,
  findOrCreateNewChat,
  getChatById,
  addNewMessageToChat,
  markMessagesAsRead,
};
