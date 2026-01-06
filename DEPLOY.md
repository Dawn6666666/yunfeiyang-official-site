# 云飞扬社团 (YFY) 部署指南

本指南提供了部署云飞扬社团网站的详细说明。

**框架**: Nuxt 4 (Vue 3)
**渲染模式**: 默认通用渲染 (SSR)，同时也完美支持静态站点生成 (SSG)。
**推荐策略**: **静态站点生成 (SSG)** (通过 `npm run generate`)。
推荐理由：网站内容主要是静态的（基于 JSON），且表单交互由客户端处理（EmailJS）。这使得我们可以使用 GitHub Pages、Vercel 或 Netlify 等平台进行免费且高性能的托管。

---

## 1. 准备工作

在部署之前，请确保你已经准备好以下环境：

*   **Node.js**: v18.0.0 或更高版本。
*   **Git**: 已安装并配置好。
*   **环境变量**:
    *   `NUXT_PUBLIC_GA_ID`: Google Analytics 4 衡量 ID (例如: `G-XXXXXXXXXX`)。

---

## 2. 本地构建与预览

在正式部署前，请务必先在本地进行构建测试。

### 静态构建 (推荐)
此命令会在 `.output/public` 目录下生成 HTML 文件。
```bash
# 生成静态站点
npm run generate

# 本地预览生成的静态站点
npm run preview
```

### 服务端构建 (Node.js)
此命令会在 `.output/server` 目录下生成 Node.js 服务端应用。
```bash
# 构建服务端应用
npm run build

# 预览服务端应用
node .output/server/index.mjs
```

---

## 3. 部署选项

### 选项 A: Vercel (最简单且免费)
Vercel 是 Next.js 的开发团队，对 Nuxt 的支持也非常完美。

1.  将你的代码推送到 GitHub 仓库。
2.  使用 GitHub 账号登录 [Vercel](https://vercel.com/)。
3.  点击 **"Add New..."** -> **"Project"**。
4.  导入你的 `YFY` 仓库。
5.  Vercel 会自动识别出这是一个 Nuxt 项目。
6.  **环境变量**: 在 Environment Variables 中添加 `NUXT_PUBLIC_GA_ID`。
7.  点击 **Deploy** 进行部署。

### 选项 B: GitHub Pages (免费，纯静态)
如果你希望直接托管在 GitHub 仓库中，这是一个很好的选择。

1.  在你的项目中创建文件 `.github/workflows/deploy.yml`：
    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [ main ]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: '20'
          
          - name: Install dependencies
            run: npm ci

          - name: Generate Static Site
            run: npm run generate
            env:
              NUXT_PUBLIC_GA_ID: ${{ secrets.NUXT_PUBLIC_GA_ID }}

          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: .output/public

      deploy:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          pages: write
          id-token: write
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```
2.  进入你的 GitHub 仓库 -> **Settings** -> **Secrets and variables** -> **Actions**。
3.  添加 `NUXT_PUBLIC_GA_ID` 为 Secret。
4.  进入 **Settings** -> **Pages** -> Build and deployment -> Source，选择 **GitHub Actions**。

### 选项 C: Netlify
与 Vercel 类似。

1.  登录 [Netlify](https://www.netlify.com/)。
2.  点击 "Add new site" -> "Import an existing project"。
3.  连接 GitHub -> 选择你的仓库。
4.  **构建命令 (Build command)**: `npm run generate`
5.  **发布目录 (Publish directory)**: `.output/public`
6.  在 "Advanced build settings" 中添加环境变量。

### 选项 D: 传统服务器 (VPS / Docker)
如果你需要 SSR（例如为了根据请求头动态生成 Meta 标签），可以使用此方式。

**使用 PM2 (Node 进程管理器):**
1.  在服务器上运行 `npm run build` (或者上传本地构建好的 `.output` 文件夹)。
2.  安装 PM2: `npm install -g pm2`。
3.  创建 `ecosystem.config.cjs`:
    ```javascript
    module.exports = {
      apps: [
        {
          name: 'YFY-Site',
          exec_mode: 'cluster',
          instances: 'max',
          script: './.output/server/index.mjs',
          env: {
            PORT: 3000,
            NUXT_PUBLIC_GA_ID: 'your-ga-id'
          }
        }
      ]
    }
    ```
4.  启动服务: `pm2 start ecosystem.config.cjs`。

---

## 4. 部署后检查清单

*   [ ] **验证联系表单**: 测试提交 "加入我们" (Join Us) 表单，确保 EmailJS 在生产环境域名下能正常工作（你可能需要在 EmailJS 后台将你的新域名加入白名单）。
*   [ ] **检查统计**: 验证 Google Analytics 是否接收到了实时数据。
*   [ ] **静态资源**: 检查图片和字体是否加载正常 (没有 404 错误)。
*   [ ] **响应式检查**: 在手机和电脑上分别测试页面显示效果。
