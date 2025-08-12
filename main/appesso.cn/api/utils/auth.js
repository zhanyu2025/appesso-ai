const crypto = require('crypto');
const prisma = require('../services/connect-db');

/**
 * Generates an MD5 hash of the user ID to be used as a token.
 * This replaces the previous JWT implementation to ensure a fixed length.
 * @param {string | number | BigInt} userId The user's ID.
 * @returns {string} The MD5 hash of the user ID.
 */
const generateJWT = (userId) => {
  const param = String(userId);
  return crypto.createHash('md5').update(param).digest('hex');
};

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: false, // 改为 false，因为服务器没有使用 HTTPS
  signed: true,
  sameSite: 'lax', // 统一使用 'lax'，因为 secure 是 false
  // 移除 domain 设置，因为使用 IP 地址而不是域名
};

const clearTokens = async (req, res, next) => {
  const { signedCookies = {} } = req;
  const { accessToken } = signedCookies;
  if (accessToken) {
    try {
      const token = await prisma.sys_user_token.findUnique({
        where: {
          token: accessToken,
        },
      });
      if (token) {
        await prisma.sys_user_token.delete({
          where: {
            token: accessToken,
          },
        });
      }
    } catch (error) {
      return next(error);
    }
  }
  return res.clearCookie('accessToken', COOKIE_OPTIONS);
};

module.exports = { generateJWT, COOKIE_OPTIONS, clearTokens };
