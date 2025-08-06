const {
  NODE_ENV,
  PORT,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  COOKIE_SECRET,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_LIFE,
} = process.env;

// Provide default values for development environment
const isDev = NODE_ENV === 'development';

module.exports = {
  NODE_ENV,
  PORT,
  ACCESS_TOKEN_SECRET:
    ACCESS_TOKEN_SECRET ||
    (isDev ? 'dev-access-token-secret-key-123' : undefined),
  REFRESH_TOKEN_SECRET:
    REFRESH_TOKEN_SECRET ||
    (isDev ? 'dev-refresh-token-secret-key-456' : undefined),
  COOKIE_SECRET:
    COOKIE_SECRET || (isDev ? 'dev-cookie-secret-key-789' : undefined),
  ACCESS_TOKEN_LIFE: ACCESS_TOKEN_LIFE || '15m',
  REFRESH_TOKEN_LIFE: REFRESH_TOKEN_LIFE || '7d',
};
