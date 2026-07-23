export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export const defaultLang = 'en';

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

    'home.hero.title': '杨嘉奇',
    'home.hero.subtitle': '大数据专家 · 业务风控',
    'home.hero.desc':
      '10 年以上大数据与分布式系统经验，5 年以上业务风控实战。专注实时图技术与风控资损治理，曾将营销补贴资损率从 10% 降至 1% 以内。',
    'home.hero.readBlog': '阅读专栏 →',
    'home.hero.learnMore': '了解更多',
    'home.recent.title': '最新文章',
    'home.recent.seeAll': '查看全部 →',
    'home.stats.title': '数据概览',
    'home.focus.title': '专业领域',

    'blog.title': '专栏',
    'blog.description': '技术文章与思考',
    'blog.count': (n: number) => `共 ${n} 篇文章`,

    'about.title': '关于',
    'about.description': '关于杨嘉奇',
    'about.heading': '关于我',
    'about.bio.1':
      '10 年以上深耕大数据领域，5 年以上风控领域经验；在大数据、分布式系统、风控等方面有多年研究与开发积累，擅长把复杂的技术问题拆解为可落地的工程方案。',
    'about.bio.2':
      '我长期参与开源社区建设（Apache HugeGraph Committer），持续打磨内部技术栈。这个网站既是我的在线简历，也是我沉淀技术思考的地方——欢迎通过下方方式与我联系。',
    'about.skills.title': '技能栈',
    'about.experience.title': '工作经历',
    'about.education.title': '教育经历',
    'about.awards.title': '荣誉奖项',
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

    'home.hero.title': 'Jiaqi Yang',
    'home.hero.subtitle': 'Big Data Expert · Risk Control',
    'home.hero.desc':
      '10+ years in big data & distributed systems, 5+ years in risk control. Focused on real-time graph tech and loss-rate governance — cut subsidy loss rate from 10% to under 1%.',
    'home.hero.readBlog': 'Read the blog →',
    'home.hero.learnMore': 'Learn more',
    'home.recent.title': 'Latest posts',
    'home.recent.seeAll': 'See all →',
    'home.stats.title': 'At a glance',
    'home.focus.title': 'Focus Areas',

    'blog.title': 'Blog',
    'blog.description': 'Articles and thoughts on engineering',
    'blog.count': (n: number) => `${n} article${n === 1 ? '' : 's'} in total`,

    'about.title': 'About',
    'about.description': 'About Jiaqi Yang',
    'about.heading': 'About me',
    'about.bio.1':
      '10+ years in big data with 5+ years in risk control. I have spent years researching and building in big data, distributed systems and risk control, and I enjoy turning hard technical problems into shippable engineering.',
    'about.bio.2':
      "I'm an Apache HugeGraph Committer and keep refining our internal tech stack through open source. This site is both my online resume and a place to distill my thinking — feel free to reach me via the channels below.",
    'about.skills.title': 'Tech stack',
    'about.experience.title': 'Experience',
    'about.education.title': 'Education',
    'about.awards.title': 'Honors & Awards',
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

/** 给定语言，返回带前缀的路径。en 为默认语言，无前缀；zh 带 /zh 前缀。 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
