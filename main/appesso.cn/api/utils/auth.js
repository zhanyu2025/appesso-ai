const jwt = require('jsonwebtoken');

const prisma = require('../services/connect-db');

const generateJWT = (userId, secret, expiresIn) =>
  jwt.sign(
    {
      userId,
    },
    secret,
    { expiresIn }
  );

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: false, // 改为 false，因为服务器没有使用 HTTPS
  signed: true,
  sameSite: 'lax', // 统一使用 'lax'，因为 secure 是 false
  // 移除 domain 设置，因为使用 IP 地址而不是域名
};

const clearTokens = async (req, res, next) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  if (refreshToken) {
    try {
      const token = await prisma.session.findUnique({
        where: {
          refreshToken,
        },
      });
      if (token) {
        await prisma.session.delete({
          where: {
            refreshToken,
          },
        });
      }
    } catch (error) {
      return next(error);
    }
  }
  return res.clearCookie('refreshToken', COOKIE_OPTIONS);
};

module.exports = { generateJWT, COOKIE_OPTIONS, clearTokens };
