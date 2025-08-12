const prisma = require('../services/connect-db');

const getAllRoles = async (req, res, next) => {
  try {
    const roles = await prisma.ai_role.findMany();
    return res.status(200).json(roles);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllRoles,
};
