export const navItems = [
  { label: "首页", href: "/#hero", id: "hero" },
  { label: "关于我", href: "/#about", id: "about" },
  { label: "项目", href: "/#projects", id: "projects" },
  { label: "技能", href: "/#skills", id: "skills" },
  { label: "联系我", href: "/#contact", id: "contact" },
];

export const heroData = {
  title: "你好，我是 Asta。",
  subtitle: "工业设计工程 | 东南大学",
  description: "Noise is data, silence is signal.",
  avatar: "/assets/images/avatar.webp",
  cta: { label: "查看我的项目", href: "/#projects" },
  secondaryCta: {
    label: "我的 GitHub",
    href: "https://github.com/wanfengrenzui/personal-homepage",
  },
};

export const aboutData = {
  intro:
    "我是一名产品经理，对产品、AI、数据分析与人机交互有持续兴趣。",
  description: "此网站用于求职、记录实践项目、文献阅读、日记。",
  quote: "“搭建个人主页，是给好奇的人一张名片，也是给自己的一面镜子。”",
  educationTimeline: [
    {
      date: "2025-08 研究生阶段",
      school: "东南大学（985）",
      detail: "东南大学机械工程学院工业设计工程专业",
    },
    {
      date: "2020.09 – 2024.06 本科阶段",
      school: "南京工程学院（一本）",
      detail: "南京工程学院 艺术与设计学院 工业设计专业",
    },
  ],
  tags: ["产品设计", "AI coding", "人机交互", "UI设计"],
};

export const internshipCards = [
  {
    date: "2024.03 – 2025.09",
    badge: "AI产品经理",
    title: "上海敏开科技有限公司 · AI产品经理实习",
    summary:
      "期间参与儿童 AI 阅读学习产品与 Gensmo AI 试穿产品，围绕 OCR 文本提取、TTS 朗读、AI 伴读互动、Quiz 反馈、Avatar 生成与 Try on 效果展示等模块，完成需求分析、体验验证、产品链路设计、PRD 输出、测试用例编写与迭代跟进。",
    tags: ["AI 产品", "教育产品", "AI 试穿", "PRD", "体验验证"],
    projects: [
      {
        title: "📘 儿童 AI 阅读学习产品",
        summary:
          "面向儿童数字阅读与英语启蒙场景，设计 AI 阅读学习产品。用户上传或扫描儿童读物后，系统通过 OCR 提取文本并使用 TTS 朗读，同时引入 AI 伴读精灵，在阅读过程中提供单词 / 短语讲解、内容问答与情绪反馈；阅读结束后结合 Quiz 答题与错误讲解，形成“内容转化 - 伴读互动 - 理解检测 - 学习反馈”的完整学习闭环。",
        steps: [
          {
            title: "用户体验验证与功能定义：",
            desc: "设计首本儿童读物体验流程，阅读结束后弹窗征询用户是否需要 AI 伴读功能，收集用户选择与反馈，为 AI 功能优先级和个性化参数优化提供依据；埋点关键行为数据，包括伴读触发次数、答题正确率与互动时长，用于功能迭代。",
          },
          {
            title: "AI 阅读学习链路设计：",
            desc: "规划“儿童读物上传 - OCR 文本提取 - TTS 朗读 - AI 伴读互动 - Quiz 答题 - 反馈讲解”完整链路，定义 AI 输入 / 输出、用户路径、异常处理和兜底流程，同时设计数据埋点指标用于监控生成内容和伴读效果。",
          },
          {
            title: "AI 伴读与 Quiz 反馈设计：",
            desc: "设计伴读精灵触发机制、对话入口和任务类型，覆盖单词 / 短语讲解、段落解释、内容问答、答题鼓励、错误讲解与情绪反馈，提升儿童阅读过程中的互动性和个性化学习体验。",
          },
          {
            title: "Login 模块与产品文档：",
            desc: "负责登录方式选型及注册 / 登录 / 找回密码流程设计，输出 PRD、用户流程图、交互原型、异常状态说明和验收标准，协同研发推进需求评审与迭代。",
          },
        ],
      },
      {
        title: "👗 Gensmo · AI 试穿产品",
        summary:
          "Gensmo 是一款面向时尚电商场景的 AI 试穿产品，基于 AI 与计算机视觉技术，为用户提供线上服装试穿、Avatar 生成、Try on 效果展示、智能夸赞反馈与场景融合能力，帮助用户更直观地感知服装上身效果，提升线上购物决策效率与互动体验。",
        steps: [
          {
            title: "AI 试穿需求分析：",
            desc: "参与 AI 试穿 App 需求收集、整理与优先级梳理，围绕 Avatar 生成、Try on 效果展示、Login、交互操作等模块拆解用户路径、功能边界与异常场景，协助明确版本迭代范围。",
          },
          {
            title: "AI 试穿链路设计：",
            desc: "参与规划“用户 / Avatar 生成 - 商品选择 - Try on 融合展示 - 结果页反馈 - 场景融合”的核心体验链路，梳理图像生成任务的输入输出、等待状态、结果承接方式与失败兜底逻辑。",
          },
          {
            title: "Avatar 异步生成优化：",
            desc: "针对用户反馈 Avatar 生成等待 1-2 分钟影响体验的问题，推动将生成任务异步化处理，设计前端无阻塞流程与 Feed 消息提醒机制，降低用户等待感并提升任务完成后的触达效率。",
          },
          {
            title: "Try on 结果页优化：",
            desc: "针对试穿结果页互动性与情绪反馈不足的问题，新增智能夸赞与场景融合能力，根据试穿服装风格生成个性化正向反馈，并支持将试穿效果一键融入不同生活场景，增强结果页可分享性与体验沉浸感。",
          },
          {
            title: "PRD 与测试闭环：",
            desc: "撰写 AI 试穿 App 相关 PRD，覆盖需求范围、页面命名规则、交互说明、产品架构与流程图；编写并执行测试用例，覆盖 Avatar 生成、Login、Try on 效果和交互操作等功能点，输出测试报告并跟进 Bug 修复与回归验证。",
          },
        ],
      },
    ],
  },
  {
    date: "2022.09 – 2022.11",
    badge: "市场部实习",
    title: "南京宜家 · 市场部实习生",
    summary:
      "在高客流零售环境中负责商品陈列巡检、补货记录、顾客动线观察与缺货分析，支持市场部保持货架完整性与商场运营效率。",
    tags: ["零售运营", "商品陈列", "用户观察", "库存管理"],
    projects: [
      {
        title: "🛒 南京宜家 · 市场部实习生",
        summary:
          "在高客流零售环境中持续跟进陈列、补货、缺货分析和顾客动线观察，协助市场团队优化展示与运营节奏。",
        steps: [
          {
            title: "商品陈列检查与补货记录：",
            desc: "定期巡检高流转区域、促销区与样板间，记录缺货与低库存商品，确保陈列完整性与销售连续性。",
          },
          {
            title: "建立补货清单并对接仓库：",
            desc: "根据巡检结果整理补货清单，标注商品编号、变化量与优先级，协助仓库制定补货计划。",
          },
          {
            title: "缺货原因分类分析：",
            desc: "按消耗量、后台补货滞后、展示损耗等分类，帮助市场团队理解库存波动原因。",
          },
          {
            title: "监测顾客动线与商品暴露度：",
            desc: "观察顾客在重点区域的停留点与拿取频次，评估陈列位置对购买率的影响。",
          },
          {
            title: "每日记录与例会同步：",
            desc: "整理巡检数据并输出日报，支持陈列团队及时调整策略与补货节奏。",
          },
        ],
      },
    ],
  },
];

export const educationCards = [
  {
    logo: "/assets/images/logo-undergrad-placeholder.webp",
    logoAlt: "南京工程学院 校徽",
    school: "南京工程学院（本科）",
    major: "工业设计 Industrial Design",
    time: "2020 – 2024",
    tags: [
      "Industrial Design",
      "Human-computer interaction",
      "UX design",
      "Research",
    ],
    featuredProjects: [
      "基于 AHP 法和模糊综合评价的全季候城市环卫问题综合治理系统研究 · AHP / Environmental protection / System Design",
      "面向可持续发展的城市公共设施设计研究 · Sustainable Design / Urban public facilities design / Public service design",
      "多健康饮食观念下的智能果蔬存储产品设计 · Health-oriented design / Fruit and vegetable storage design / Intelligent Interaction Design",
    ],
    groups: [
      {
        title: "论文 Publications",
        items: [
          "汪骏，汪群民，闫胜昝。基于层次分析法的智能服务机器人设计研究，《工业设计》，2023 (07): 152–155.",
          "Shengzan Yan, Jun Wang, Guodong Liang. The Design of Agricultural UAV System Based on KANO-AHP-QFD, Proceedings of ICEB, 2023（EI 会议）",
        ],
      },
      {
        title: "专利 Patents",
        items: [
          "作为第一发明人，授权实用新型专利“一种全季候模块化城市清洁车”（ZL 2023 2 2103123.5）",
        ],
      },
      {
        title: "科研经历 Research",
        items: [
          "2021–2022 · 校级科创项目“基于 stm32 的多足机器人”（TB202215040，团队成员，已顺利结项）",
          "2022–2024 · 省大创重点项目（第一负责人）“基于 AHP 法和模糊综合评价的全季候城市环卫问题综合治理系统研究”（202211276046Z，按计划结项）",
          "2022–2023 · 校级科研项目（第一负责人）“面向可持续发展的城市公共设施设计研究”（TB20231010，结项优秀）",
          "2022–2023 · 科创项目“健康饮食观念下的智能果蔬存储产品设计”（TB202310023，团队成员，已顺利结项）",
        ],
      },
      {
        title: "获奖 Awards",
        compact: true,
        items: [
          "中国好创意第十七届全国数字艺术设计大赛 · 国赛二等奖",
          "第 11 届未来设计师 · 全国高校数字艺术设计大赛 · 江苏赛区二等奖",
          "2023 睿抗机器人开发者大赛（RAICOM）全国总决赛 · 智能生活创意设计竞赛 三等奖",
          "2023 睿抗机器人开发者大赛（RAICOM）江苏赛区 · 智能生活创意设计竞赛 一等奖",
          "2022 睿抗机器人开发者大赛（RAICOM）江苏赛区 · 智能生活创意设计竞赛 三等奖",
          "米兰设计周中国高校设计学科师生优秀作品展 · 江苏分赛区 三等奖",
          "第八届“两岸新锐设计竞赛・华灿奖” · 华东赛区 三等奖",
          "安徽省第九届工业设计大赛 “信达杯”宠物家具设计专项赛 · 铜奖",
          "2022 “艺融杯”第十三届江苏艺术设计大赛 · 优秀奖",
          "2023 “艺融杯”第十四届江苏艺术设计大赛 · 银奖",
          "第四届金芦苇工业设计奖 · 入围奖 / 提名奖 / 作品展参展奖",
          "江苏首届中国高等院校设计展活动优秀作品展 · 设计类甲组三等奖",
          "第十届全国大学生艺术展演活动 · 优秀奖",
          "第十届中国高等院校设计作品大赛 · 一等奖",
        ],
      },
    ],
  },
  {
    logo: "/assets/images/logo-postgrad-placeholder.webp",
    logoAlt: "东南大学 校徽",
    school: "东南大学（研究生）",
    major: "工业设计工程 Industrial Design Engineering",
    time: "2025 – Now",
    tags: ["AI", "Fiber Speckle Sensing", "HMI", "Product Thinking"],
    featuredProjects: ["光纤传感器 * AI · FSS / Gesture / AI"],
    groups: [
      {
        title: "论文 Publications（撰写 / 投稿中）",
        items: [
          "AI-driven Fiber Speckle Sensing for Intelligent Human–Machine Interfaces（面向 IEEE Sensors Journal 特刊的综述稿 · 审稿中）",
        ],
      },
      {
        title: "科研方向 Research Projects",
        items: [
          "光纤散斑传感 × AI × HMI：面向可穿戴人机接口的多模态感知与低样本学习",
        ],
      },
      {
        title: "获奖 Awards（预留）",
        items: ["研究生阶段成果与奖项将在后续学习与项目推进中逐步更新。"],
      },
    ],
  },
];

function imageRange(folder, start, end, ext = "webp") {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const current = String(start + index).padStart(2, "0");
    return `/assets/images/${folder}/${current}.${ext}`;
  });
}

export const projects = [
  {
    slug: "starry-sleep-project",
    category: "design-project",
    title: "Starry Sleep Project",
    subtitle: "Let Darkness No Longer Be Alone.",
    cover: "/assets/images/thumbs/starry-sleep-project.webp",
    coverAlt: "Starry Sleep Project",
    description:
      "Let Darkness No Longer Be Alone —— 围绕夜间黑暗与睡眠体验的情绪光环境设计实验。",
    images: [
      "/assets/images/starry-sleep-project/01.webp",
      ...imageRange("starry-sleep-project", 8, 37),
    ],
  },
  {
    slug: "chess",
    category: "design-project",
    title: "三方对弈棋局 · Chess",
    subtitle: "Three-player battle —— 多方博弈机制与策略空间探索",
    cover: "/assets/images/thumbs/chess.webp",
    coverAlt: "Three-player battle chess",
    description: "Three-player battle —— 一款探索多方策略与博弈机制的三人棋局设计实验。",
    images: [
      "/assets/images/chess/01.webp",
      ...imageRange("chess", 39, 45),
    ],
  },
  {
    slug: "glasses",
    category: "design-project",
    title: "Glasses · 模块化眼镜",
    subtitle:
      "SwiftView Versatile Module Glasses —— 模块化镜片、可拓展视野与交互体验研究",
    cover: "/assets/images/thumbs/glasses.webp",
    coverAlt: "SwiftView Versatile Module Glasses",
    description:
      "SwiftView —— Versatile Module Glasses，探索模块化镜片与智能视野扩展交互。",
    images: [
      "/assets/images/glasses/01.webp",
      "/assets/images/glasses/02.webp",
      ...imageRange("glasses", 45, 71),
    ],
  },
  {
    slug: "all-weather-cleaning-vehicle",
    category: "design-project",
    title: "全季候模块清洁车",
    subtitle: "基于 AHP 法与模糊综合评价的全季候城市环卫问题综合治理系统研究",
    cover: "/assets/images/thumbs/all-weather-cleaning-vehicle.webp",
    coverAlt: "全季候模块清洁车",
    description:
      "基于 AHP 法和模糊综合评价的全季候城市环卫问题综合治理系统研究。",
    images: imageRange("all-weather-cleaning-vehicle", 6, 27),
  },
  {
    slug: "mars-base",
    category: "design-project",
    title: "火星基地设计 · 重黎号",
    subtitle: "基于 4D 打印技术的火星栖居结构与任务支持系统设计",
    cover: "/assets/images/thumbs/mars-base.webp",
    coverAlt: "火星基地设计 - 重黎号",
    description:
      "重黎号——基于 4D 打印技术的火星基地设计，探索极端环境下可重构栖居单元与任务支持系统。",
    images: imageRange("mars-base", 28, 38),
  },
  {
    slug: "ikea-robots",
    category: "design-project",
    title: "模块化宜家机器人",
    subtitle: "面向生活场景与家具生态的创新设计系统研究",
    cover: "/assets/images/thumbs/IKEA-robots.webp",
    coverAlt: "模块化宜家机器人",
    description: "模块化宜家机器人：面向生活场景与家具生态的创新设计系统研究。",
    images: imageRange("IKEA-robots", 39, 63),
  },
];

export const notes = [
  {
    slug: "openclaw-install-pixel-visualization",
    title: "OpenClaw 安装与像素风可视化实践",
    status: "已完成",
    statusClass: "status--done",
    miniStatusClass: "status-active",
    summary:
      "整理 OpenClaw 的安装步骤、运行参数与问题排查流程，并总结像素风可视化中的缩放策略、过滤设置与画面一致性要点。",
    meta: {
      type: "技术文档 · OpenClaw / Pixel Visualization",
      createdAt: "2026-03",
      updatedAt: "2026-03",
      footer: "技术文档 · 已完成",
    },
    tags: ["OpenClaw", "Installation", "Pixel Art", "Visualization"],
    contentHtml: `
      <h2>安装时常见困难（实战记录）</h2>
      <p>在 macOS 环境里，OpenClaw 安装阶段最容易卡在 4 个点：1）命令能执行但路径不在 PATH；2）API Key 已创建但没有 export 到当前 shell；3）代理 / 网络导致首次拉取资源超时；4）可视化窗口能开但像素边缘发糊（默认缩放和过滤导致）。</p>
      <p>建议先做环境体检再安装，优先验证「命令是否可见」「环境变量是否生效」「CLI 帮助是否可读」，这样后续问题排查成本最低。</p>
      <h2>操作指南（推荐安装顺序）</h2>
      <p>以下顺序用于减少返工。具体安装命令请以你当前 OpenClaw 版本文档为准。</p>
      <ol>
        <li>检查基础环境：终端、网络、权限、可执行路径。</li>
        <li>安装 OpenClaw CLI（按官方发布方式安装）。</li>
        <li>用 <code>--help</code> 验证子命令是否可用。</li>
        <li>配置 API（临时 export 或写入 shell 配置文件）。</li>
        <li>启动 <code>openclaw tui</code> 并进行可视化参数设置。</li>
      </ol>
      <p>安装完成后的基础验证：</p>
      <pre><code>openclaw --help
openclaw tui --help
which openclaw</code></pre>
      <h2>API 配置分支（你提到的两种模式）</h2>
      <p><strong>模式 A：没有提前配置环境变量</strong>，每次开新终端都需要手动 export：</p>
      <pre><code>export OPENCLAW_API_KEY="your_api_key"
export OPENCLAW_BASE_URL="https://your-api-endpoint"

echo "$OPENCLAW_API_KEY"

openclaw tui</code></pre>
      <p><strong>模式 B：已经写入 shell 配置</strong>（例如 <code>~/.zshrc</code>），直接启动：</p>
      <pre><code>openclaw tui</code></pre>
      <p>如果你希望长期生效，可写入 shell 配置文件后重载：</p>
      <pre><code>echo 'export OPENCLAW_API_KEY="your_api_key"' >> ~/.zshrc
echo 'export OPENCLAW_BASE_URL="https://your-api-endpoint"' >> ~/.zshrc
source ~/.zshrc</code></pre>
      <h2>像素风可视化操作（TUI 内外两层）</h2>
      <p>目标是保证像素边缘清晰、缩放不抖动、不同分辨率下观感一致。实践中优先遵循：整数倍缩放（2x/3x/4x）→ 关闭线性过滤（Nearest）→ 固定基准分辨率。</p>
      <pre><code>openclaw tui --help
openclaw viz --help</code></pre>
      <p>若你的版本支持可视化参数，可按下面思路设置（示例，按实际参数名替换）：</p>
      <pre><code>openclaw tui --scale 3 --filter nearest --fps 60</code></pre>
      <h2>排障速查</h2>
      <pre><code>which openclaw
echo "$OPENCLAW_API_KEY"
openclaw --help
openclaw --version</code></pre>
    `,
    pdf: "/assets/pdf/openclaw-install-troubleshooting-and-visualization.pdf#toolbar=0",
    related: [
      {
        title: "关联方向",
        items: ["经典游戏复刻与运行环境配置", "像素风 UI/场景渲染规范整理"],
      },
    ],
  },
  {
    slug: "ga4-demo",
    title: "GA4 调研和实操 demo",
    status: "已完成",
    statusClass: "status--done",
    miniStatusClass: "status-active",
    summary:
      "GA4 以事件模型统一 Web/App 数据，提供更灵活的追踪、归因与预测能力；Demo 汇总关键概念与常用实操方法。",
    meta: {
      type: "研究笔记 · GA4 / Tracking",
      createdAt: "2025-04",
      updatedAt: "2025-04",
      footer: "产品经理实习笔记 · 已完成",
    },
    tags: [
      "GA4",
      "Analytics",
      "Tracking",
      "Wearable Devices",
      "User Research",
      "Computer Vision",
    ],
    contentHtml: `
      <h2>概要说明</h2>
      <p>本页主要用于集中存放《GA 调研和实操 demo》这份 PDF，方便随时在线浏览；后续如果有新的追踪方案、事件设计或实验记录，也可以继续在这里补充文字小结。</p>
      <h2>PDF 在线阅读</h2>
      <p>下面内嵌的是完整 PDF，可以直接滚动阅读，不需要下载。</p>
    `,
    pdf: "/assets/pdf/ga4-research-demo.pdf#toolbar=0",
    related: [
      {
        title: "关联项目",
        items: ["实时语音翻译体验 · 数据埋点设计", "个人网站 GA4 / GTM 实操"],
      },
    ],
  },
  {
    slug: "us-social-share",
    title: "美国社交 App 分享机制拆解",
    status: "已完成",
    statusClass: "status--done",
    miniStatusClass: "status-active",
    summary:
      "梳理 Facebook、Instagram、Messenger、X、WhatsApp、TikTok、Pinterest 等平台的分享入口、链路、卡片样式与深度链接 / API 限制，用于后续产品分享模块的设计参考。",
    meta: {
      type: "分享机制调研 · Social / Growth",
      createdAt: "2025-04",
      updatedAt: "2025-04",
      footer: "分享机制调研 · 已完成",
    },
    tags: ["Social", "Share", "US"],
    contentHtml: `
      <h2>概要说明</h2>
      <p>本页集中存放《美国社交 App 分享机制拆解》完整 PDF，涵盖儿童阅读类 App 的分享逻辑，并从分享渠道、家长闸门、分享内容结构等维度进行对比，为核心产品分享模块设计提供依据。</p>
      <h2>PDF 在线阅读</h2>
      <p>下面内嵌完整 PDF，可直接滚动阅读。</p>
    `,
    pdf: "/assets/pdf/us-social-share.pdf#toolbar=0",
    related: [
      {
        title: "关联项目",
        items: ["儿童阅读 App 分享模块设计", "用户增长 · 分享激励机制探索"],
      },
      {
        title: "后续可能补充",
        items: ["各渠道卡片样式差异分析", "深度链路（Deep Link）与社交回流"],
      },
    ],
  },
  {
    slug: "voice-translate-experience",
    title: "实时语音翻译体验：延迟、可懂度与用户心智模型",
    status: "整理中",
    statusClass: "status--draft",
    miniStatusClass: "status-draft",
    summary:
      "对实时语音翻译产品的延迟表现、可懂度反馈和场景心智模型做持续记录，当前先保留内容入口，后续会补齐完整笔记。",
    meta: {
      type: "翻译体验 · HCI / LLM",
      createdAt: "2025-04",
      updatedAt: "2026-04",
      footer: "翻译体验 · 草稿",
    },
    tags: ["HCI", "Latency", "LLM"],
    contentHtml: `
      <h2>当前状态</h2>
      <p>这个条目在旧站点里已经有入口，但原始详情页文件并不存在，因此我在新的 React 版本里先把它补成了一个可维护的占位页面。</p>
      <p>后续你只需要把调研内容补进来，就可以沿用现有的详情模板，不用再单独创建新 HTML 文件。</p>
      <h2>后续可补充的方向</h2>
      <ul>
        <li>旅行 / 会议 / 面对面沟通场景下的延迟容忍区间。</li>
        <li>原声、字幕、合成音三种反馈方式的理解成本。</li>
        <li>不同产品的分段翻译、打断策略和 UX 心智模型差异。</li>
      </ul>
    `,
    related: [
      {
        title: "建议补充",
        items: ["Google / Apple / AI Translator 方案对比", "旅行场景实时翻译体验指标体系"],
      },
    ],
  },
];

export const skills = [
  { icon: "fab fa-python", label: "Python" },
  { icon: "fab fa-html5", label: "HTML" },
  { icon: "fas fa-square-root-alt", label: "LaTeX" },
  { icon: "fas fa-database", label: "MySQL" },
  { icon: "fab fa-figma", label: "Figma" },
  { icon: "fas fa-cube", label: "Rhino" },
  { icon: "fas fa-camera", label: "KeyShot" },
  { icon: "fas fa-image", label: "PS" },
  { icon: "fas fa-pen-nib", label: "AI" },
  { icon: "fab fa-github", label: "GitHub" },
];

export const contactData = {
  email: "2044186078@qq.com",
  wechatQr: "/assets/images/wechat_qr.webp",
  qqQr: "/assets/images/qq_qr.webp",
};

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNoteBySlug(slug) {
  return notes.find((note) => note.slug === slug);
}
