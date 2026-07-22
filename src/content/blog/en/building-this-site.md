---
title: 'A Complete Log of Building a Personal Site with Astro'
description: 'The full flow from project init to GitHub Pages deployment, including the pitfalls along the way.'
pubDate: 2026-07-20
tags: ['Astro', 'Tutorial', 'GitHub Pages']
---

This post documents the complete process of building this site from scratch.

## Why Astro

I had considered other static site generators before, but Astro's advantages stood out:

- Component-based development, so UI components can be reused
- Support for Island interactivity with frameworks like React/Vue/Svelte
- Native TypeScript support, with type validation for content collections

## Project structure

```text
src/
├── components/      # Reusable components
├── content/blog/    # Markdown articles
├── layouts/         # Page layouts
├── pages/           # Route pages
└── styles/          # Global styles
```

## Content Collections

Astro's Content Collections make managing articles type-safe:

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

If the frontmatter format is wrong when writing a post, the build fails right away — you won't discover the problem only after it's live.

## Deploying to GitHub Pages

I use GitHub Actions for automatic deployment: pushing code to the `main` branch triggers a build.

The whole process takes under 30 seconds, and the site is updated.

## Summary

Astro + Giscus + GitHub Pages is the golden combo for a personal tech blog: zero cost, high performance, type-safe. If you want to build your own site, I recommend giving this setup a try.
