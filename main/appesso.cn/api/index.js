const http = require('http');
require('dotenv').config();

const app = require('./app');
const { PORT } = require('./utils/config');

const server = http.createServer(app);

const port = PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
  console.log(`🚀 API 服务器运行在 ${host}:${port}`);
  console.log(`🌐 环境: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 健康检查: http://${host}:${port}/api/health`);
});
