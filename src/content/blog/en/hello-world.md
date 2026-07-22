---
title: 'Hello World: The Site Is Live'
description: 'My very first blog post, documenting how this site went from zero to launch.'
pubDate: 2026-07-22
tags: ['Essay', 'Astro']
---

Welcome to my personal website! This is the first post — a quick note on how this site was built.

## Tech choices

This site is built with [Astro](https://astro.build/), a modern framework focused on content-driven websites. The reasons for choosing Astro are simple:

- **Zero JavaScript by default**: pages load blazingly fast, and a perfect Lighthouse score isn't just a dream
- **Native Markdown support**: writing posts feels as natural as writing docs
- **Free hosting on GitHub Pages**: zero cost, push to deploy

## Comment system

Comments use [Giscus](https://giscus.app/), backed by GitHub Discussions. That means:

- Comment data lives in my own GitHub repository
- Readers sign in and comment with their GitHub account
- Completely free, no ads, no tracking

## Writing workflow

Publishing a new post takes just three steps:

1. Create a `.md` file under `src/content/blog/`
2. Fill in the frontmatter (title, description, date, tags)
3. Write the body, `git push`, and it's published automatically

That's all there is to it.

## Syntax highlighting test

```python
def fibonacci(n):
    """Generate the Fibonacci sequence"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
```

## What's next

I'll keep sharing technical articles here, covering frontend, backend, DevOps, and more. If you're interested, feel free to leave a comment below.

Thanks for reading!
