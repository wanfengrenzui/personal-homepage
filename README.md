<div align="center">
  <p>
    <a href="#-english-version">English</a> | <a href="#-中文版本">中文</a>
  </p>
</div>

# Asta · Personal Homepage

一个面向产品/工业设计方向的中文个人主页，展示项目、实习、教育经历与笔记。页面采用单页设计、沉浸式背景图、移动端适配和轻量交互。

**[➡️ 在线地址](https://asta.net.cn/)**

> 如需展示预览图，可自行在 `assets/images/screenshot.webp` 放一张截图后在 README 中引用。

---

# 🇺🇸 English Version

## ✨ Highlights

- **Single-page portfolio** focused on projects, internships, education timeline, notes, skills, and contact.
- **Responsive layout** with immersive background and card-style sections for long-form content.
- **Interactive details**: mobile nav, active-link highlight, QR modals for WeChat/QQ, project filter, and scroll reveal.
- **Lightweight stack**: semantic HTML, component-based CSS via `@import`, vanilla JS (GA4 events for scroll depth & card clicks), Font Awesome icons, Google Fonts.
- **Ready for GitHub Pages** with a custom domain (`CNAME` → `asta.net.cn`).

## 🗂 Project Structure

```
personal-homepage/
├─ index.html                # Main landing page (Chinese content)
├─ assets/
│  ├─ css/                   # Global styles + component CSS
│  ├─ images/                # Avatar, background, project covers, QR codes
│  ├─ js/main.js             # Navigation, modals, filters, GA4 tracking
│  └─ pdf/                   # Downloadable PDFs used in notes/projects
├─ projects/                 # Project detail pages (HTML)
├─ notes/                    # Note detail pages (HTML)
├─ CNAME                     # Custom domain for GitHub Pages
└─ README.md
```

## 🚀 Local Preview

```sh
git clone https://github.com/wanfengrenzui/personal-homepage.git
cd personal-homepage
# 打开 index.html 即可，也可以用 VS Code Live Server 或 `python -m http.server`
```

## 🎨 Customize

- 文案：编辑 `index.html` 中各区块（Hero、关于、实习、学习经历、项目&笔记、技能、联系）。
- 图片：替换 `assets/images/` 下的 `avatar.webp`、背景 `background.webp`、各项目封面、微信/QQ 二维码。
- 样式：在 `assets/css/main.css` 顶部修改 CSS 变量；组件样式在 `assets/css/components/`。
- 互动：`assets/js/main.js` 负责导航、模态、筛选与 GA4 事件；如不需要统计，移除 `gtag` 脚本及相关代码。
- 域名：更换自定义域名时更新 `CNAME`。

## 📜 License

MIT License.

---

# 🇨🇳 中文版本

## ✨ 亮点

- **单页作品集**：包含项目/笔记卡片、实习时间线、教育经历、技能与联系方式。
- **响应式与沉浸式背景**：暗色系、固定背景+蒙版，手机端与桌面端均优化。
- **交互设计**：导航高亮与收起、微信/QQ 弹窗、项目分类筛选、滚动显隐动画、GA4 滚动深度与卡片点击埋点。
- **轻量技术栈**：HTML + 模块化 CSS + 原生 JS，依赖 Font Awesome、Google Fonts。
- **一键部署**：支持 GitHub Pages，自定义域名由 `CNAME` 指定（当前为 `asta.net.cn`）。

## 🗂 目录说明

- `index.html`：主页。
- `assets/`：样式、图片、脚本、PDF 资料。
- `projects/`：每个项目详情页。
- `notes/`：笔记/调研文章详情页。
- `CNAME`：自定义域名配置。

## 🚀 快速预览

```sh
git clone https://github.com/wanfengrenzui/personal-homepage.git
cd personal-homepage
# 直接用浏览器打开 index.html，或 VS Code Live Server，或 `python -m http.server`
```

## 🎨 定制指引

- 修改文案：在 `index.html` 调整 Hero、关于、实习、教育、项目&笔记、技能、联系模块。
- 替换素材：将头像、背景图、项目封面、二维码放到 `assets/images/`，路径已在页面中引用。
- 调整配色与布局：修改 `assets/css/main.css` 顶部的 CSS 变量或对应组件文件。
- 关闭/调整埋点：不需要统计时，删除 `<head>` 中的 GA4 脚本并清理 `assets/js/main.js` 中的相关事件。
- 域名：如需改用其他域名，更新 `CNAME` 并在 DNS 配置对应的 CNAME 记录。

## 📜 许可证

MIT License.
