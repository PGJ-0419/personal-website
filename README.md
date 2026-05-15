# Personal Website

一个面向国内访问环境的 Google Sites 个人主页复现项目，采用 Vite + React 构建。

## 环境要求

- Node.js 22
- npm 10+

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建结果会输出到：

```text
dist/
```

## 页面结构

- `#/my-profile` My Profile
- `#/publications-resources` Publications & Resources
- `#/reflections` Reflections
- `#/more` More

右上角导航子栏目与搜索框均已实现。页面内容集中在 `src/data/site.js`，页面文件独立放置于 `src/pages`。

## GitHub Pages 部署

项目已包含 GitHub Actions 工作流：

```text
.github/workflows/deploy-github-pages.yml
```

将代码推送到 GitHub 仓库的 `main` 分支后，在仓库设置中启用 GitHub Pages：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

本项目使用 Hash 路由，因此 GitHub Pages 刷新页面不会出现子路径 404。

## 腾讯云静态托管 / Serverless 部署

推荐使用腾讯云 COS 静态网站、CloudBase 静态托管或 Serverless Webify。

部署步骤：

```bash
npm install
npm run build
```

然后上传 `dist/` 目录中的所有文件。

由于项目使用 Hash 路由，腾讯云侧通常不需要额外配置路径重写。
