---
title: '用 WorkBuddy 从零到上线个人网站：完整复盘'
description: '回顾我用 WorkBuddy 搭建个人网站（Ardot 设计 + Astro + Giscus + GitHub Pages）的全过程，并总结一套可复用的方法论与 Skill。'
pubDate: 2026-07-22
tags: ['WorkBuddy', 'Astro', 'GitHub Pages', '教程', '复盘']
---

这个网站从一句"帮我做个个人网站，托管到 GitHub"开始，到今天带评论区正式上线，中间踩了不少坑。
这篇文章把整个过程复盘一遍，并把它沉淀成一套可复用的方法论——顺便讲清楚**怎么用 WorkBuddy 快速搭一个个人网站**。

## 一、起点与目标

需求很朴素：一个**在线简历 + 技术博客**，托管到 GitHub Pages，零成本、能写能发。

我把它拆成了五个阶段：

```
设计 → 工程 → 部署 → 评论 → 写作发布
```

每一个阶段，WorkBuddy 都能在对话里直接替我完成，我只需要做决策和最终推送。

## 二、用 Ardot 做设计（极简黑白）

第一步是在 Ardot 里出视觉稿。我们没有堆特效，而是定了一套克制、可落地的设计令牌：

| 令牌 | 值 | 说明 |
| --- | --- | --- |
| 画布底 | `#EFEEEA` | 暖灰，不刺眼 |
| 白卡 | `#FFFFFF` | 卡片容器 |
| 发丝线 | `#000000` | 1px 细线分区 |
| 强调红 | `#C8102E` | 链接 / 重点 |
| 字体 | Noto Sans SC / Inter / Roboto Mono | 中文 / 西文 / 代码 |
| 圆角 | `2px` | 几乎直角 |
| 阴影 | 无 | 靠留白和发丝线 |

> 设计原则就一句话：**大量留白、网格对齐、零阴影、唯一的强调红点睛。**

Ardot 出稿后，`capture_screenshot` 自检即可，视觉令牌最终直接落到 `global.css` 的 CSS 变量里——设计稿本身不需要导出成文件。

## 三、用 Astro 搭工程

视觉定下来后，WorkBuddy 按一份搭建指南生成了 Astro 静态项目：

- **内容集合（Content Collections）**：文章用 `src/content/blog/*.md` 管理，frontmatter 有类型校验，写错格式构建阶段就报错，不会到线上才翻车。
- **零 JS 默认输出**：页面加载快，Lighthouse 满分不是梦。
- **Markdown 原生**：写文章像写文档。

`astro.config.mjs` 里关键是这两行：

```javascript
site: 'https://你的用户名.github.io',
base: process.env.ASTRO_BASE || '/',   // 项目页改为 /my-website
output: 'static',                       // GitHub Pages 必须静态
```

## 四、用 GitHub Actions 自动部署

部署是踩坑最密集的地方，逐条记下来：

1. **404 根因**：Pages 的 Source 要选 **GitHub Actions**，而不是 "Deploy from a branch"。
2. **CI 构建失败**：Astro 要求 Node ≥ 22.12.0，所以 `deploy.yml` 里 `node-version` 必须写 `22`，写成 `20` 会直接报错退出。
3. **多 SSH 账号冲突**：当一个公钥已绑到别的 GitHub 账号时，会报 `Key is already in use` / `Permission denied`。
   解决：生成独立密钥 `id_ed25519_formyresume`，在 `~/.ssh/config` 配别名 `github-formyresume`，
   再把仓库 remote 改成 `git@github-formyresume:owner/repo.git`。SSH 被墙时走 `ssh.github.com:443`。
4. **本地装依赖失败**：`npm install` 报 TLS 错误时，先 `source ~/.bash_profile` 让代理生效。

推送后一次 Actions 跑完（约 30 秒～1 分钟），站点就上线了，之后每次 `git push` 自动重新部署。

## 五、用 Giscus 加评论

评论用 [Giscus](https://giscus.app/)，数据存在我自己仓库的 GitHub Discussions 里，免费、无广告、无追踪。三步接入：

1. 仓库开启 **Discussions**，安装 Giscus App 并授权；
2. 新建分类 **Announcements**；
3. 在 giscus.app 拿到 `repo-id` / `category-id`，填进 `Giscus.astro`（**两处都要改**：配置对象 + `<script>`）。

未配置时做了一个**优雅降级**：文章底部显示"评论功能即将开启"，不影响构建发布。这也是为什么早期文章没报错——只是还没接上。

## 六、写文章 & 发布，只要三步

```markdown
---
title: '文章标题'
description: '一句话描述'
pubDate: 2026-07-22
tags: ['标签1', '标签2']
draft: false
---

正文，支持完整 Markdown 与代码高亮。
```

新建 `.md` → 写正文 → `git push`，自动上线。你正在读的这篇，就是这样发出来的。

## 七、沉淀成 Skill

整个过程值得复用，所以我把上面这套流程（设计令牌、Astro 关键文件模板、部署 Runbook、踩坑清单）整理成了一个 WorkBuddy Skill：**`personal-website-astro`**。

它会在你说出"帮我做个个人网站 / 用 Ardot 设计主页 / 托管到 GitHub Pages / 接入 Giscus"时自动触发，
直接给出可复制的文件模板和部署步骤，省去每次从头摸索。

## 八、用 WorkBuddy 快速搭个人网站：最简路径

如果你也想来一个，对话里可以这样开口：

> 帮我用 Ardot 设计一个极简黑白风格的在线简历 + 技术博客，用 Astro 生成静态站点，托管到 GitHub Pages，并接入 Giscus 评论。

然后跟着它走五步：① 在 Ardot 确认视觉 → ② 生成本地 Astro 项目 → ③ 按 Runbook 改占位并配 SSH → ④ 填 Giscus ID → ⑤ `git push` 上线。
遇到问题直接把报错贴回对话，它会定位是 Node 版本、Pages Source 还是 SSH 配置，并给出修复命令。

---

**一句话总结**：WorkBuddy 把"设计 → 工程 → 部署 → 评论 → 写作"五件事压成了一次连续对话，
真正需要我动手的，只有 `git push` 这一下。

如果你正在搭自己的网站，欢迎在下方留言交流，或者去 GitHub 看这个站点的源码。
