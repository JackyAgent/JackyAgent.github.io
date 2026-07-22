export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export const defaultLang = 'zh';

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    'site.name': '杨嘉奇',
    'site.description': '杨嘉奇的个人网站：在线简历与技术博客',
    'nav.home': '首页',
    'nav.blog': '专栏',
    'nav.about': '关于',
    'lang.switch': 'EN',
    'lang.label': '中文',

    'home.hero.title': '你好，我是杨嘉奇 👋',
    'home.hero.subtitle': '全栈工程师 / 技术写作者',
    'home.hero.desc':
      '我构建 Web 与云原生应用，并把踩过的坑写成文章。这里既是我的在线简历，也是我的技术博客——记录工程实践与思考沉淀。',
    'home.hero.readBlog': '阅读专栏 →',
    'home.hero.learnMore': '了解更多',
    'home.recent.title': '最新文章',
    'home.recent.seeAll': '查看全部 →',

    'blog.title': '专栏',
    'blog.description': '技术文章与思考',
    'blog.count': (n: number) => `共 ${n} 篇文章`,

    'about.title': '关于',
    'about.description': '关于杨嘉奇',
    'about.heading': '关于我',
    'about.bio.1':
      '你好，我是杨嘉奇，一名专注后端与平台工程的工程师，习惯用可维护的代码解决真实问题。日常主要使用 Go 与 TypeScript 构建后端服务与前端应用，业余时间喜欢把复杂的技术主题拆开讲清楚，并写成博客。',
    'about.bio.2':
      '这个网站既是我的在线简历，也是我的技术博客。如果你对我的文章感兴趣，或者想交流技术话题，欢迎在文章下方留言，或通过以下方式联系我。',
    'about.skills.title': '技能栈',
    'about.skills.backend': '后端',
    'about.skills.frontend': '前端',
    'about.skills.devops': '工程化',
    'about.skills.other': '其他',
    'about.skills.otherItems': ['云原生', '系统设计', '技术写作'],
    'about.contact.title': '联系方式',
    'about.contact.email': '邮箱',
    'about.contact.zhihu': '知乎',
    'about.contact.wechat': '微信',

    'post.updatedPrefix': '（更新于 ',
    'post.updatedSuffix': '）',
    'post.prev': '← 上一篇',
    'post.next': '下一篇 →',

    'footer.builtWith': '由 GitHub Pages 构建',
    'footer.email': '邮箱',
    'footer.zhihu': '知乎',
    'footer.wechat': '微信 JackyYangPassion',

    'comments.title': '评论',
    'comments.disabled': '评论功能即将开启，敬请期待。',
  },
  en: {
    'site.name': 'Jiaqi Yang',
    'site.description': "Jiaqi Yang's personal site: online resume and tech blog",
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'lang.switch': '中',
    'lang.label': 'English',

    'home.hero.title': "Hi, I'm Jiaqi Yang 👋",
    'home.hero.subtitle': 'Full-stack Engineer / Technical Writer',
    'home.hero.desc':
      'I build web and cloud-native applications, and turn the pitfalls I hit into articles. This is both my online resume and my tech blog — a place to record engineering practice and distilled thinking.',
    'home.hero.readBlog': 'Read the blog →',
    'home.hero.learnMore': 'Learn more',
    'home.recent.title': 'Latest posts',
    'home.recent.seeAll': 'See all →',

    'blog.title': 'Blog',
    'blog.description': 'Articles and thoughts on engineering',
    'blog.count': (n: number) => `${n} article${n === 1 ? '' : 's'} in total`,

    'about.title': 'About',
    'about.description': 'About Jiaqi Yang',
    'about.heading': 'About me',
    'about.bio.1':
      "Hi, I'm Jiaqi Yang, an engineer focused on backend and platform engineering, used to solving real problems with maintainable code. Day to day I mainly use Go and TypeScript to build backend services and frontend apps. In my spare time I enjoy breaking down complex technical topics and writing them up as blog posts.",
    'about.bio.2':
      "This site is both my online resume and my tech blog. If you're interested in my articles or want to talk about tech, feel free to leave a comment under any post or reach me through the channels below.",
    'about.skills.title': 'Tech stack',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.devops': 'DevOps',
    'about.skills.other': 'Other',
    'about.skills.otherItems': ['Cloud Native', 'System Design', 'Technical Writing'],
    'about.contact.title': 'Contact',
    'about.contact.email': 'Email',
    'about.contact.zhihu': 'Zhihu',
    'about.contact.wechat': 'WeChat',

    'post.updatedPrefix': ' (updated ',
    'post.updatedSuffix': ')',
    'post.prev': '← Previous',
    'post.next': 'Next →',

    'footer.builtWith': 'Built with GitHub Pages',
    'footer.email': 'Email',
    'footer.zhihu': 'Zhihu',
    'footer.wechat': 'WeChat JackyYangPassion',

    'comments.title': 'Comments',
    'comments.disabled': 'Comments are coming soon. Stay tuned.',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(key: K) {
    return (ui[lang] as (typeof ui)[typeof defaultLang])[key];
  };
}

/** 给定语言，返回带前缀的路径。zh 为默认语言，无前缀。 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
