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
