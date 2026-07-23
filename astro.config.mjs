import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ 替换为你的 GitHub 用户名与仓库名
  // - 用户页仓库 username.github.io：site 设为 https://username.github.io，base 保持 '/'
  // - 项目页仓库 my-website：site 设为 https://username.github.io，base 设为 '/my-website'
  //   部署时可经 .github/workflows/deploy.yml 中的 ASTRO_BASE 注入，无需改这里
  site: 'https://graphjiaqi.xyz',
  base: process.env.ASTRO_BASE || '/',

  integrations: [
    react(),
    sitemap({
      // 让 sitemap 携带 hreflang 多语言标记，帮助搜索引擎区分中英文版本
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN' },
      },
    }),
  ],

  // 国际化：默认英文（根路径无前缀），中文在 /zh 下
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // GitHub Pages 需要静态输出
  output: 'static',

  markdown: {
    // 代码高亮主题（亮色: github-light, 暗色: github-dark）
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
