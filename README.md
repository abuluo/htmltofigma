# Telegram 带单信号应用

这是一个基于 Web 的 Telegram 带单信号应用，支持带单员发布信号和跟单员自动跟单功能。

## 功能特点

- 带单员功能：
  - 在 APP 上发布带单信号
  - 绑定 Telegram 后在群组发送信号
  - 系统自动解析 TG 信号并同步到 APP

- 跟单员功能：
  - 在 APP 上手动跟单
  - 开启自动跟单功能
  - 绑定 Telegram 接收信号
  - 在 TG 上快速操作

- Telegram 小程序：
  - 一键注册登录
  - 绑定 Telegram 账号
  - 快速充值入金
  - 开启跟单功能

## 技术栈

- 前端框架：Tailwind CSS
- UI 组件：Font Awesome
- 交互处理：原生 JavaScript
- 响应式设计：移动优先

## 项目结构

```
src/
├── components/          # 页面组件
│   ├── home.html       # 首页
│   ├── signals.html    # 信号页面
│   ├── traders.html    # 带单员页面
│   └── profile.html    # 个人中心
├── css/                # 样式文件
│   └── style.css       # 自定义样式
├── js/                 # JavaScript 文件
│   └── main.js         # 主要交互逻辑
└── index.html          # 主入口文件
```

## 开发指南

### 环境要求

- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 支持 ES6+ 的 JavaScript 环境

### 本地开发

1. 克隆项目：
```bash
git clone [项目地址]
```

2. 进入项目目录：
```bash
cd telegram-signal-app
```

3. 启动本地服务器：
```bash
# 使用 Python 的简单 HTTP 服务器
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server
```

4. 访问开发环境：
```
http://localhost:8000
```

### 开发规范

1. HTML 规范：
   - 使用语义化标签
   - 保持结构清晰
   - 添加适当的注释

2. CSS 规范：
   - 使用 Tailwind CSS 类名
   - 自定义样式放在 style.css
   - 遵循移动优先原则

3. JavaScript 规范：
   - 使用 ES6+ 语法
   - 模块化组织代码
   - 添加必要的注释

### 部署

1. 构建生产版本：
```bash
# 压缩 CSS
npx tailwindcss -i ./src/css/style.css -o ./dist/style.css --minify

# 压缩 JavaScript
npx terser ./src/js/main.js -o ./dist/main.js --compress
```

2. 部署到服务器：
   - 将 dist 目录下的文件部署到 Web 服务器
   - 确保服务器配置正确的 MIME 类型
   - 启用 HTTPS 支持

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License 