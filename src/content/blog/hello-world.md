---
title: 'Hello World：网站上线'
description: '这是我的第一篇博客，记录这个网站从零到上线的过程。'
pubDate: 2026-07-22
tags: ['随笔', 'Astro']
---

欢迎来到我的个人网站！这是第一篇文章，简单聊聊这个网站的搭建过程。

## 技术选型

这个网站使用 [Astro](https://astro.build/) 构建，一个专注于内容驱动型网站的现代框架。选择 Astro 的原因很简单：

- **默认零 JavaScript**：页面加载极快，Lighthouse 满分不是梦
- **Markdown 原生支持**：写文章就像写文档一样自然
- **GitHub Pages 免费托管**：零成本，推送即部署

## 评论系统

评论使用 [Giscus](https://giscus.app/)，基于 GitHub Discussions。这意味着：

- 评论数据存储在我自己的 GitHub 仓库中
- 读者使用 GitHub 账号登录评论
- 完全免费，无广告，无追踪

## 写作流程

发布一篇新文章只需要三步：

1. 在 `src/content/blog/` 下新建 `.md` 文件
2. 填写 frontmatter（标题、描述、日期、标签）
3. 写正文，`git push` 即可自动发布

就是这么简单。

## 代码高亮测试

```python
def fibonacci(n):
    """生成斐波那契数列"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
```

## 接下来

我会在这里持续分享技术文章，涵盖前端、后端、工程化等话题。如果你感兴趣，欢迎在下方留言交流。

感谢阅读！
