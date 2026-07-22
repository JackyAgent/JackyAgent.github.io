# 杨佳琦 · 个人网站（Astro + Giscus + GitHub Pages）

按《Astro + Giscus 个人网站搭建指南》搭建的静态站点：Astro 内容驱动框架 + Giscus 评论（基于 GitHub Discussions）+ GitHub Pages 免费托管。视觉采用极简黑白（暖灰底 `#EFEEEA`、白卡、黑色发丝线、强调红 `#C8102E`），支持亮/暗双主题。

## 目录结构

```plaintext
.
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署
├── public/favicon.svg
├── src/
│   ├── components/                # Header / Footer / BlogCard / FormattedDate / Giscus
│   ├── content/blog/              # Markdown 文章（写博客只改这里）
│   ├── layouts/BaseLayout.astro
│   ├── pages/                     # index / about / blog/index / blog/[...slug]
│   ├── styles/global.css          # 设计令牌（CSS 变量）集中在这里
│   └── content.config.ts          # 内容集合 schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 本地开发

```bash
npm install        # 安装依赖（首次）
npm run dev        # 开发服务器，默认 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建结果
```

> 本地 `base` 默认为 `/`，所以开发地址是 `http://localhost:4321/`（而非带仓库名的子路径）。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（二选一）：
   - **用户页**：仓库名 `username.github.io` → 访问 `https://username.github.io/`
   - **项目页**：仓库名 `my-website` → 访问 `https://username.github.io/my-website/`
2. 修改两处占位：
   - `astro.config.mjs` 里的 `site: 'https://yourusername.github.io'`
   - `src/components/Footer.astro`、`./Giscus.astro`、`./about.astro` 里的 `yourusername` / `you@example.com`
3. 项目页还需确认 `.github/workflows/deploy.yml` 中 `ASTRO_BASE: /my-website`（用户页改为 `/`）。
4. 推送后到仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，等待 Actions 跑完即上线。

### 推送命令（你自己执行）

```bash
git init
git add .
git commit -m "feat: 个人网站初版（Astro + Giscus）"
git branch -M main
git remote add origin https://github.com/yourusername/my-website.git
git push -u origin main
```

## 配置 Giscus 评论（可选）

1. 仓库开启 **Discussions**（Settings 中勾选）。
2. 安装 [Giscus App](https://github.com/apps/giscus) 并授权本仓库。
3. Discussions 新建分类 **Announcements**（Announcement 类型）。
4. 到 [giscus.app](https://giscus.app) 填仓库、映射方式 `pathname`、分类 `Announcements`，复制 `data-repo / data-repo-id / data-category / data-category-id`。
5. 填入 `src/components/Giscus.astro` 顶部的 `giscusConfig` 与 `<script>` 中的 `config`（共两处）。

> 未配置前，文章页底部评论区为空，不影响构建与发布。

## 发布新文章

在 `src/content/blog/` 新建 `.md`：

```markdown
---
title: '文章标题'
description: '一句话描述'
pubDate: 2026-07-22
tags: ['标签1', '标签2']
draft: false   # true 则不发布
---

正文，支持完整 Markdown…
```

保存并 `git push`，GitHub Actions 自动构建部署。

## 修改视觉 / 个人信息

| 内容 | 文件 |
| --- | --- |
| 配色 / 字体 / 圆角 | `src/styles/global.css` 顶部 CSS 变量 |
| 站点名 / 导航 | `src/layouts/BaseLayout.astro` + `src/components/Header.astro` |
| 首页文案 | `src/pages/index.astro` |
| 关于页 | `src/pages/about.astro` |
| 页脚社交链接 | `src/components/Footer.astro` |
