# 云飞扬社团官网 (Yun Fei Yang Official Site)

> "We Code the Future" - 伟大的想法始于单行代码。

![Preview](https://yunfeiyang.club/og-image.png)

## 🚀 项目概览

这是 **云飞扬 (Yun Fei Yang / YFY)** 的官方网站。云飞扬是一个成立于 2014 年的学生科技社团。本网站旨在展示我们的项目、成就以及技术文化。

本项目基于 **Nuxt 4** 构建，致力于打造 Awwwards 级别的视觉美感与极致性能。

### ✨ 核心特性 (v3.0)

- **🎨 双主题系统**: 支持无缝切换明亮/暗黑模式，并支持状态持久化 (`useTheme`)。
- **🏆 无限证书墙**: 高性能、随滚动速度动态响应的跑马灯效果，用于展示获奖证书。
- **✨ 动效设计**:
  - 滚动揭示动画 (Scroll-driven reveal)。
  - 交互式悬停效果与鼠标视差 (Magnetic Tilt)。
  - 平滑的背景模糊导航栏。
- **📝 加入申请**: 集成带有验证功能的申请表单，支持 EmailJS 发送，具备高鲁棒性。
- **📊 统计与 SEO**:
  - 集成 Google Analytics 4 (GA4)。
  - 完整的 SEO 优化，包含 JSON-LD 结构化数据和 Open Graph 标签。
- **📦 部署友好**: 完美支持 GitHub Pages 等静态托管平台。

## 🛠 技术栈

- **框架**: [Nuxt 4](https://nuxt.com) (Vue 3, Nitro)
- **样式**: 原生 CSS (CSS Variables, 现代布局, 响应式设计)
- **语言**: TypeScript
- **构建**: Vite
- **部署**: 静态站点生成 (SSG) / 服务端渲染 (SSR)

## 📦 安装与开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
```

访问 `http://localhost:3000` 查看效果。

## 🏗 构建与部署

本项目推荐使用 **静态站点生成 (SSG)** 模式进行部署。

```bash
# 生成静态站点 (.output/public)
npm run generate

# 本地预览生成的站点
npm run preview
```

详细的部署教程（包含 GitHub Pages, Vercel, Netlify 配置）请参阅：
👉 **[部署指南 (DEPLOY.md)](public/docs/DEPLOY.md)**

## 📁 项目结构

- `app/components`: 可复用的 UI 组件 (Hero, Nav, CertificateWall 等)
- `app/composables`: 共享逻辑 (`useTheme`, `useScrollReveal` 等)
- `app/assets/css`: 全局样式与变量 (`main.css`)
- `content`: 静态数据源 (JSON 格式)
- `public`: 静态资源 (图片, 图标等)

## 📄 许可证

MIT License © 2024 Yun Fei Yang Club
