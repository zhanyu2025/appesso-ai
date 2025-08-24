const Redis = require('ioredis'); // 引入ioredis库用于连接Redis
// 配置Redis客户端。建议将这些配置（例如，主机、端口、密码）外部化，
// 例如通过环境变量来管理，以增强灵活性和安全性。
// 在Docker环境中，REDIS_HOST通常是Redis服务的容器名。
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'xiaozhi-esp32-server-redis', // Redis主机名，默认为xiaozhi-esp32-server-redis（根据docker-compose.yml）
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379, // Redis端口，默认为6379
  password: process.env.REDIS_PASSWORD || '', // Redis密码，根据docker-compose.yml，这里为空
  db: 0, // 默认的Redis数据库编号
});

// 监听Redis客户端的错误事件
redisClient.on('error', (err) => {
  // 在生产环境中，应该使用适当的日志库（如Winston, Pino等）来记录Redis客户端错误，
  // 而不是直接使用console.error。此处根据之前的反馈避免直接输出console。
  // eslint-disable-next-line no-console
  console.error('Redis客户端错误:', err);
});

module.exports = { redisClient };
