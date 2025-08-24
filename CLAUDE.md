# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

这是一个名为"小智"的多组件 AI 语音助手平台。系统由以下部分组成：

1. **Python WebSocket 服务器** (`main/xiaozhi-server`) - 处理语音识别、自然语言处理和语音合成的核心 AI 处理引擎
2. **Java 管理 API** (`main/manager-api`) - 基于 MySQL 数据库的后端管理系统
3. **Vue.js 管理 Web UI** (`main/manager-web`) - 基于 Web 的管理界面
4. **Node.js API 和网站** (`main/appesso.cn/api`, `main/appesso.cn/website`) - 公共 API 和网站前端
5. **Docker 基础设施** - 使用 docker-compose 的容器化部署

## 语言与代码注释规范

- 请使用中文进行沟通和代码注释
- 所有文档和说明应使用中文编写
- 代码中的变量名和函数名可以使用英文，但注释必须是中文
- 保持专业和技术性的中文表达

## 架构

系统采用微服务架构，主要组件包括：

- **语音处理管道**: 音频输入 → VAD → ASR → LLM → TTS → 音频输出
- **实时 WebSocket 通信**: 设备与后端之间的通信
- **模块化 AI 提供商**: 可插拔的 ASR、LLM、TTS、VAD、Memory 和 Intent 模块
- **数据库层**: MySQL 用于持久化存储，Redis 用于缓存
- **管理层**: 基于 Java Spring Boot 的后端和 Vue.js 前端

## 常用开发命令

### Python 后端 (xiaozhi-server)
```bash
# 启动主 WebSocket 服务器
python app.py

# 运行性能测试
python performance_tester.py
python performance_tester_vllm.py

# 安装依赖
pip install -r requirements.txt
```

### Node.js 服务
```bash
# API 服务
cd main/appesso.cn/api
npm install
npm run dev        # 开发模式
npm run start      # 生产模式
npm run lint       # 代码检查
npm run lint:fix   # 修复代码检查问题

# 网站前端
cd main/appesso.cn/website
npm install
npm run start      # 开发模式
npm run build      # 生产构建
npm run lint       # 代码检查
npm run lint:fix   # 修复代码检查问题
```

### Java 后端 (manager-api)
```bash
# 构建和运行 (使用 Maven)
cd main/manager-api
mvn clean package
java -jar target/xiaozhi-esp32-api.jar

# 或者直接使用 Maven
mvn spring-boot:run
```

### Vue.js 前端 (manager-web)
```bash
# 安装依赖
cd main/manager-web
npm install

# 开发服务器
npm run serve

# 生产构建
npm run build
```

### Docker 部署
```bash
# 构建并启动所有服务
docker-compose up --build

# 在后台启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 测试

### WebSocket 测试
在 Chrome 浏览器中打开 `main/xiaozhi-server/test/test_page.html` 进行 WebSocket 测试

### 单元测试
- Python: 未识别标准测试框架
- Java: 使用标准 Maven 测试结构
- JavaScript: Node.js 使用 Jest，Vue.js 使用内置测试

## 配置文件

### 主配置
- `main/xiaozhi-server/config.yaml` - 主服务器配置
- `main/xiaozhi-server/.env` - 环境变量

### 数据库
- MySQL 数据库: `xiaozhi_esp32_server`
- 默认凭证: root / 123456

### Docker 配置
- `docker-compose.yml` - 主编排文件
- `Dockerfile-server` - Python 后端 Docker 镜像
- `Dockerfile-web` - Java+Vue Web Docker 镜像

## 核心功能

1. **多模态 AI 处理**: 语音识别、自然语言处理、语音合成
2. **可插拔 AI 提供商**: 支持多种 ASR、LLM、TTS 服务
3. **声纹识别**: 多用户语音识别
4. **MCP 集成**: 支持外部模型连接点
5. **实时流处理**: 低延迟音频处理
6. **管理仪表板**: 基于 Web 的设备和用户管理
7. **OTA 更新**: 空中固件更新
8. **插件系统**: 可扩展的功能调用插件

## 模块结构

### 核心 Python 模块 (`main/xiaozhi-server/core`)
- `websocket_server.py` - 主 WebSocket 服务器实现
- `connection.py` - 连接处理和状态管理
- `providers/` - 可插拔的 AI 服务提供商 (ASR, LLM, TTS 等)
- `utils/` - 工具函数和辅助程序
- `handle/` - 消息处理模块

### 提供商类型
- **ASR**: 语音识别 (FunASR, Doubao, Tencent, Aliyun 等)
- **LLM**: 语言模型 (OpenAI, Gemini, ChatGLM 等)
- **TTS**: 文本到语音 (EdgeTTS, Doubao, Tencent, Aliyun 等)
- **VAD**: 语音活动检测 (Silero)
- **Memory**: 对话记忆管理
- **Intent**: 意图识别和功能调用

## 数据库模式

系统使用 MySQL，包含以下表：
- 用户管理
- 设备注册
- AI 模型配置
- 聊天历史
- 系统参数
- OTA 固件更新

## 部署架构

1. **生产部署**: 使用 docker-compose 编排的 Docker 容器
2. **端口**:
   - 8000: WebSocket 服务器
   - 8002: 管理 Web 界面
   - 8003: HTTP 服务 (OTA, 视觉分析)
   - 3306: MySQL 数据库
   - 6379: Redis 缓存

## 开发工作流程

1. **本地开发**:
   - 使用各自的服务开发命令运行单个服务
   - 使用 docker-compose 进行集成测试

2. **配置管理**:
   - 本地开发: 每个服务目录中的配置文件
   - 生产环境: 环境变量和挂载的配置文件

3. **代码结构**:
   - 每个主要组件都在自己的目录中
   - 共享工具在各自的 `utils/` 目录中
   - 配置文件在 `config/` 目录中
