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

module.exports = {
  getAllRoles,
};
