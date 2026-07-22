import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // ⚠️ 替换为你的 GitHub 用户名与仓库名
  // - 用户页仓库 username.github.io：site 设为 https://username.github.io，base 保持 '/'
  // - 项目页仓库 my-website：site 设为 https://username.github.io，base 设为 '/my-website'
  //   部署时可经 .github/workflows/deploy.yml 中的 ASTRO_BASE 注入，无需改这里
  site: 'https://yourusername.github.io',
  base: process.env.ASTRO_BASE || '/',

  integrations: [react()],

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
