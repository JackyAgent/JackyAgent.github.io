---
title: '用 Astro 搭建个人网站的完整记录'
description: '从项目初始化到 GitHub Pages 部署的完整流程，包含踩坑记录。'
pubDate: 2026-07-20
tags: ['Astro', '教程', 'GitHub Pages']
---

这篇文章记录了从零搭建这个网站的完整过程。

## 为什么选 Astro

之前也考虑过其他静态站点生成器，但 Astro 的优势在于：

- 组件化开发，可以复用 UI 组件
- 支持 React/Vue/Svelte 等框架的 Island 交互
- TypeScript 原生支持，内容集合有类型校验

## 项目结构

```text
src/
├── components/      # 可复用组件
├── content/blog/    # Markdown 文章
├── layouts/         # 页面布局
├── pages/           # 路由页面
└── styles/          # 全局样式
```

## Content Collections

Astro 的 Content Collections 让文章管理变得类型安全：

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

写文章时如果 frontmatter 格式不对，构建阶段就会报错，不会到线上才发现问题。

## 部署到 GitHub Pages

使用 GitHub Actions 实现自动部署，推送代码到 `main` 分支即触发构建。

整个过程不到 30 秒，网站就更新了。

## 总结

Astro + Giscus + GitHub Pages 是个人技术博客的黄金组合：零成本、高性能、类型安全。如果你也想搭建自己的网站，推荐试试这个方案。
