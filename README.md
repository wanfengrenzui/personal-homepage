<div align="center">
  <p>
    <a href="#-english-version">English</a> | <a href="#-中文版本">中文</a>
  </p>
</div>

# Albert's Personal Homepage

<!-- 建议您截一张网站的图，命名为 screenshot.png 并放在 assets/images/ 目录下 -->
![Website Screenshot](./assets/images/screenshot.png)

一个从零开始构建的、优雅的、完全响应式的个人作品集网站。项目注重代码整洁、模块化和高质量的用户体验。

**[➡️ 在线演示](https://me.abm48.com/)**
<!-- 部署后，请将上面的链接替换为您的真实网址 -->

---
<br>

# 🇺🇸 English Version

## ✨ Features

*   **Elegant & Modern UI**: A clean and professional design that puts content first.
*   **Dual Theme System**: Features a beautiful Day (Light) and Night (Dark) mode, with a persistent theme switcher that remembers the user's choice via `localStorage`.
*   **Atmospheric Background**: Utilizes a high-quality, fixed-position background image with a dynamic overlay that adapts to the current theme, creating a sense of depth and atmosphere.
*   **Fully Responsive**: Meticulously crafted to look and work perfectly on all devices, from large desktops to small mobile phones.
*   **Modular & Maintainable Code**: The project is structured with a clear separation of concerns: HTML for content, component-based CSS for styles, and Vanilla JavaScript for interactions.
*   **Interactive Components**: Includes smooth scrolling, modal pop-ups for contact info, and a dynamic project filter.

## 🛠️ Tech Stack

*   **HTML5**: Built with semantic and accessible markup.
*   **CSS3**:
    *   CSS Custom Properties (Variables) for effortless theming.
    *   Flexbox and Grid for robust layouts.
    *   Component-based CSS using `@import` for modularity.
*   **Vanilla JavaScript (ES6+)**:
    *   No frameworks or libraries for core functionality.
    *   `localStorage` API for theme persistence.
*   **Font Awesome**: For a rich set of high-quality icons.
*   **Google Fonts**: For elegant and readable typography.

## 📁 Project Structure

```
/Albert-Homepage/
|
|-- index.html              # Main and only HTML file
|-- README.md               # You are here!
|
`-- assets/                 # All static resources
    |-- css/
    |-- images/
    `-- js/
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

1.  Clone the repo:
    ```sh
    git clone https://github.com/Albert-Chen04/Albert-Homepage.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Albert-Homepage
    ```
3.  Run the project using the **Live Server** extension in Visual Studio Code, or by opening `index.html` directly in your browser.

## 🎨 Customization

Making this portfolio your own is easy:

1.  **Edit Content**: Open `index.html` and change the text in all sections.
2.  **Replace Images**: Add your images (`avatar.jpg`, QR codes, project covers) to the `assets/images/` folder and update the paths in `index.html`.
3.  **Change Background Image**: In `assets/css/main.css`, find the `body` selector and change the `background-image` URL to your preferred image.
4.  **Change Theme Colors**: In `assets/css/main.css`, modify the CSS variables at the top of the file to change the entire color scheme.

---
<br>

# 🇨🇳 中文版本

## ✨ 特色功能

*   **优雅 & 现代化的用户界面**: 简洁专业的设计，让内容成为焦点。
*   **双主题系统**: 支持精美的日间（亮色）与夜间（暗色）模式，并通过 `localStorage` 记忆用户的主题偏好。
*   **氛围感背景**: 采用高质量的固定背景图，并叠加一层可根据主题动态变化的蒙版，创造出独特的深度和氛围感。
*   **完全响应式设计**: 精心制作，确保在桌面、平板和手机等所有设备上都能完美呈现和运行。
*   **模块化 & 易于维护的代码**: 项目结构遵循关注点分离原则：HTML负责内容结构，组件化的CSS负责样式，原生JavaScript负责交互。
*   **丰富的交互组件**: 包括平滑滚动、联系方式弹窗、以及动态项目筛选器。

## 🛠️ 技术栈

*   **HTML5**: 使用语义化标签构建，结构清晰且对SEO友好。
*   **CSS3**:
    *   **CSS自定义属性 (变量)** 实现轻松的主题切换和颜色管理。
    *   **Flexbox** 和 **Grid** 用于构建强大而现代的布局。
    *   使用 `@import` 实现**组件化CSS**，便于维护。
*   **原生 JavaScript (ES6+)**:
    *   核心功能无任何框架或库的依赖，保持轻量。
    *   使用 `localStorage` API 实现主题持久化。
*   **Font Awesome**: 提供丰富的高质量图标。
*   **Google Fonts**: 提供优雅且易于阅读的字体。

## 📁 项目结构

```
/Albert-Homepage/
|
|-- index.html              # 主入口HTML文件
|-- README.md               # 本文件
|
`-- assets/                 # 存放所有静态资源
    |-- css/                # 样式文件夹
    |-- images/             # 图片文件夹
    `-- js/                 # 脚本文件夹
```

## 🚀 快速开始

按照以下步骤，即可在本地运行此项目。

1.  克隆本仓库:
    ```sh
    git clone https://github.com/Albert-Chen04/Albert-Homepage.git
    ```
2.  进入项目目录:
    ```sh
    cd Albert-Homepage
    ```
3.  运行项目:
    *   最简单的方式是使用 **Visual Studio Code** 的 **Live Server** 插件。
    *   或者，直接在浏览器中打开 `index.html` 文件。

## 🎨 如何定制

您可以轻松地将这个模板修改为您自己的主页：

1.  **编辑内容**: 打开 `index.html` 文件，替换所有区域的文本为您自己的信息。
2.  **替换图片**: 将您的个人头像、二维码、项目封面图等放入 `assets/images/` 文件夹，并在 `index.html` 中更新对应的路径。
3.  **更换背景图**: 在 `assets/css/main.css` 文件中，找到 `body` 选择器，将其中的 `background-image` 的 URL 替换为您喜欢的图片地址。
4.  **修改主题颜色**: 在 `assets/css/main.css` 文件顶部，通过修改CSS变量的值，即可轻松改变整个网站的配色方案。

---

## 📜 许可证

本项目采用 MIT 许可证。

## 致谢

*   背景图片来源: [Unsplash](https://unsplash.com)
*   图标来源: [Font Awesome](https://fontawesome.com)