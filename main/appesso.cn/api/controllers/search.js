const prisma = require('../services/connect-db');

const searchUsersByUsername = async (req, res, next) => {
  const { username } = req.params;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  try {
    const total = await prisma.User.count({
      where: {
        username: {
          startsWith: username,
          mode: 'insensitive',
        },
      },
    });
    const users = await prisma.User.findMany({
      where: {
        username: {
          startsWith: username,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        username: true,
        profile: {
          select: {
            name: true,
            img: true,
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    return res.status(200).json({
      info: {
        total,
        nextPage: total > (page - 1) * limit + users.length ? page + 1 : null,
        prevPage: page === 1 ? null : page - 1,
      },
      results: users,
    });
  } catch (error) {
    return next(error);
  }
};

const searchUsersByName = async (req, res, next) => {
  const { name } = req.params;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  try {
    const total = await prisma.User.count({
      where: {
        profile: {
          name: {
            startsWith: name,
          },
        },
      },
    });
    const users = await prisma.User.findMany({
      where: {
        profile: {
          name: {
            startsWith: name,
          },
        },
      },
      select: {
        id: true,
        username: true,
        profile: {
          select: {
            name: true,
            img: true,
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    return res.status(200).json({
      info: {
        total,
        nextPage: total > (page - 1) * limit + users.length ? page + 1 : null,
        prevPage: page === 1 ? null : page - 1,
      },
      results: users,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  searchUsersByUsername,
  searchUsersByName,
};
