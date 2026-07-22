---
title: 'From Zero to Live with WorkBuddy: A Full Retrospective'
description: 'A review of building this personal site with WorkBuddy (Ardot design + Astro + Giscus + GitHub Pages), and a reusable methodology and Skill distilled from it.'
pubDate: 2026-07-22
tags: ['WorkBuddy', 'Astro', 'GitHub Pages', 'Tutorial', 'Retrospective']
---

This site started from a single sentence — "help me build a personal website and host it on GitHub" — and today it's officially live with a comment section. There were plenty of pitfalls along the way.
This post revisits the whole process and distills it into a reusable methodology — and along the way explains **how to quickly build a personal site with WorkBuddy**.

## 1. Starting point and goals

The requirement was plain: an **online resume + tech blog**, hosted on GitHub Pages, zero cost, easy to write and publish.

I broke it into five stages:

```
Design → Engineering → Deployment → Comments → Writing & Publishing
```

At every stage, WorkBuddy could do the work for me directly in the conversation — I only had to make decisions and do the final push.

## 2. Designing with Ardot (minimal black & white)

The first step was producing visuals in Ardot. Instead of piling on effects, we settled on a restrained, buildable set of design tokens:

| Token | Value | Notes |
| --- | --- | --- |
| Canvas base | `#EFEEEA` | Warm gray, easy on the eyes |
| White card | `#FFFFFF` | Card container |
| Hairline | `#000000` | 1px thin divider |
| Accent red | `#C8102E` | Links / emphasis |
| Fonts | Noto Sans SC / Inter / Roboto Mono | Chinese / Latin / code |
| Radius | `2px` | Nearly square |
| Shadow | none | Rely on whitespace and hairlines |

> The design principle is one sentence: **lots of whitespace, grid alignment, zero shadows, a single accent red for emphasis.**

After Ardot produced the draft, a `capture_screenshot` self-check was enough. The visual tokens eventually landed directly as CSS variables in `global.css` — the design file itself never needed to be exported.

## 3. Building the project with Astro

Once the visuals were set, WorkBuddy generated an Astro static project following a build guide:

- **Content Collections**: articles are managed as `src/content/blog/*.md`, with type-validated frontmatter — a wrong format fails at build time, not in production.
- **Zero-JS default output**: pages load fast, a perfect Lighthouse score isn't just a dream.
- **Native Markdown**: writing posts feels like writing docs.

The key lines in `astro.config.mjs` are these two:

```javascript
site: 'https://your-username.github.io',
base: process.env.ASTRO_BASE || '/',   // for a project page use /my-website
output: 'static',                       // GitHub Pages requires static
```

## 4. Automatic deployment with GitHub Actions

Deployment is where the pitfalls were densest — noting each one down:

1. **Root cause of 404**: the Pages Source must be set to **GitHub Actions**, not "Deploy from a branch".
2. **CI build failure**: Astro requires Node ≥ 22.12.0, so `node-version` in `deploy.yml` must be `22`; writing `20` fails immediately.
3. **Multiple SSH account conflicts**: when a public key is already bound to another GitHub account, you get `Key is already in use` / `Permission denied`.
   Fix: generate a dedicated key `id_ed25519_formyresume`, configure an alias `github-formyresume` in `~/.ssh/config`,
   then change the repo remote to `git@github-formyresume:owner/repo.git`. When SSH is blocked, use `ssh.github.com:443`.
4. **Local dependency install failures**: when `npm install` throws TLS errors, run `source ~/.bash_profile` first so the proxy takes effect.

After pushing, one Actions run (about 30 seconds to a minute) brings the site online, and every subsequent `git push` redeploys automatically.

## 5. Adding comments with Giscus

Comments use [Giscus](https://giscus.app/), with data stored in GitHub Discussions in my own repo — free, no ads, no tracking. Three steps to integrate:

1. Enable **Discussions** on the repo, install the Giscus App, and authorize it;
2. Create a category named **Announcements**;
3. Get the `repo-id` / `category-id` from giscus.app and fill them into `Giscus.astro` (**change both places**: the config object + the `<script>`).

When not yet configured, there's a **graceful degradation**: the bottom of the post shows "Comments are coming soon", without affecting builds. That's also why the early posts didn't error out — they simply weren't wired up yet.

## 6. Writing & publishing an article, in just three steps

```markdown
---
title: 'Article title'
description: 'One-sentence description'
pubDate: 2026-07-22
tags: ['tag1', 'tag2']
draft: false
---

Body text, with full Markdown and syntax highlighting support.
```

Create a `.md` → write the body → `git push`, and it's live automatically. The post you're reading was published exactly this way.

## 7. Distilling it into a Skill

The whole process is worth reusing, so I organized the flow above (design tokens, key Astro file templates, a deployment runbook, a pitfall checklist) into a WorkBuddy Skill: **`personal-website-astro`**.

It triggers automatically when you say things like "help me build a personal site / design a homepage with Ardot / host it on GitHub Pages / integrate Giscus",
handing over copy-pasteable file templates and deployment steps, saving you from figuring it out from scratch each time.

The Skill is packaged and ready to download and import: **<a href="/skills/personal-website-astro.zip" download>personal-website-astro.zip</a>**.
Local path: `~/.workbuddy/skills/personal-website-astro/` (user level, available to all projects).

## 8. The shortest path to a personal site with WorkBuddy

If you want one too, you can open the conversation like this:

> Help me use Ardot to design a minimal black-and-white online resume + tech blog, generate a static site with Astro, host it on GitHub Pages, and integrate Giscus comments.

Then follow the five steps: ① confirm the visuals in Ardot → ② generate the local Astro project → ③ replace placeholders and configure SSH per the runbook → ④ fill in the Giscus IDs → ⑤ `git push` to go live.
When you hit a problem, paste the error straight back into the conversation — it'll pinpoint whether it's the Node version, the Pages Source, or the SSH config, and give you the fix commands.

---

**In one sentence**: WorkBuddy compressed the five tasks of "design → engineering → deployment → comments → writing" into a single continuous conversation,
and the only thing I really needed to do by hand was that one `git push`.

If you're building your own site, feel free to leave a comment below, or check out the source of this site on GitHub.
