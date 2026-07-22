# 杨佳琦 · 个人网站（在线简历 + 技术博客）

极简黑白风格的静态站点，托管于 GitHub Pages。无构建步骤，纯 HTML + CSS。

## 目录结构

```
.
├── index.html              # 主页：导航 / 首屏 / 关于 / 简历 / 项目 / 博客预览 / 页脚
├── blog/
│   ├── index.html          # 博客列表
│   └── post-1.html         # 示例文章页
├── assets/
│   └── css/
│       └── style.css       # 全站样式（设计令牌集中定义在 :root）
└── README.md
```

## 本地预览

```bash
cd /Users/yangjiaqi/WorkBuddy/formyresume
python3 -m http.server 4000
# 浏览器打开 http://localhost:4000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（用户/组织页用 `username.github.io`，项目页可任取名）。
2. 提交并推送（见下方命令）。
3. 仓库 Settings → Pages → Source 选 **main** 分支、**/(root)** 目录 → Save。
4. 访问 `https://username.github.io/` （项目页为 `https://username.github.io/repo/`）。
   - 项目页请注意：导航与样式使用的是相对路径（`blog/`、`../assets/...`），已兼容子路径，可直接使用。

## 提交与推送命令

```bash
git init
git add .
git commit -m "feat: 个人网站初版（在线简历 + 技术博客）"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

> 把 `USERNAME/REPO` 换成你的仓库地址（例如 `yangjq/yourname.github.io`）。

## 替换占位内容

设计稿中的姓名、公司、项目、文章均为示例，上线前请替换为真实信息：
- 个人信息与简介：`index.html` 的 Hero 与「关于我」板块
- 简历经历/技能：`index.html` 的「简历」板块
- 项目卡片：`index.html` 的「项目作品」板块
- 博客文章：复制 `blog/post-1.html` 并改内容，再在 `blog/index.html` 与 `index.html` 的博客列表里加链接
