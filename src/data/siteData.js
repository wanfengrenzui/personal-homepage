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
    slug: "vibe-coding-personal-homepage",
    category: "ai-product",
    title: "Vibe Coding · 个人作品集网站",
    subtitle: "用 AI 协作完成个人主页的信息架构、前端实现、性能优化与上线部署",
    cover: "/assets/images/ai-projects/vibe-coding-homepage.webp",
    coverAlt: "Vibe Coding personal homepage project cover",
    description:
      "基于 React + Vite 搭建个人作品集网站，通过 Vibe Coding 完成需求拆解、组件开发、内容结构化、图片性能优化与 GitHub Pages 部署。",
    github: "https://github.com/wanfengrenzui/personal-homepage",
    meta: [
      { label: "项目类型", value: "AI Coding / Personal Portfolio" },
      { label: "技术栈", value: "React, Vite, CSS, GitHub Pages" },
      { label: "角色", value: "产品规划 / 前端实现 / AI 协作开发" },
      { label: "状态", value: "已上线：asta.net.cn" },
    ],
    overview:
      "这个项目的目标不是简单搭建一个静态展示页，而是把个人求职信息产品化：将实习经历、AI 产品项目、设计作品、研究笔记、联系方式和 GitHub 资产整合成一个可持续维护的数字作品集。开发过程采用 Vibe Coding 工作流，把 AI 作为产品助理和工程协作者，参与需求拆解、信息架构、页面实现、性能优化和部署上线。",
    sections: [
      {
        title: "1. 项目背景与问题定义",
        desc: "传统简历只能线性呈现经历，作品集 PDF 更新成本高，GitHub 又偏代码仓库视角。对 AI 产品求职而言，需要一个能同时展示产品思考、项目过程、设计能力、技术实践和持续学习记录的入口。",
        items: [
          "信息分散：简历、作品图、GitHub、笔记和实习经历各自独立，面试官需要跨平台理解个人能力。",
          "维护成本高：每次更新项目都要重复修改多个页面或文档，难以保持内容一致。",
          "项目表达不完整：单张作品图不能说明项目背景、个人职责、方法链路和最终产出。",
          "访问体验不稳定：原作品图尺寸偏大，首页加载慢，影响第一印象和浏览完成率。",
        ],
      },
      {
        title: "2. 目标用户与使用场景",
        groups: [
          {
            label: "目标用户",
            items: [
              "AI 产品、教育产品、用户研究相关岗位的招聘方或面试官。",
              "需要快速了解个人项目能力、技术实践和设计背景的合作方。",
              "自己作为长期维护者，用于持续沉淀作品、笔记和求职材料。",
            ],
          },
          {
            label: "核心场景",
            items: [
              "投递简历后，面试官通过链接快速浏览核心经历和项目证明材料。",
              "面试前，根据不同岗位快速定位 AI 产品项目、设计作品或研究笔记。",
              "新增项目时，只更新结构化数据源，不重复手写多个静态页面。",
            ],
          },
        ],
      },
      {
        title: "3. 产品目标与成功指标",
        groups: [
          {
            label: "产品目标",
            items: [
              "建立一个可访问、可维护、可扩展的个人数字作品集。",
              "让首页在 30 秒内传达个人定位：AI 产品 / 用户研究 / 设计背景 / AI Coding 实践。",
              "让每个项目详情页具备“背景 - 目标 - 过程 - 产出 - 链接”的完整叙事结构。",
            ],
          },
          {
            label: "验收指标",
            items: [
              "首页项目卡片可按 AI 产品项目、设计项目、学习笔记进行分类浏览。",
              "项目详情页支持图片型作品和文字型 AI 产品项目两种内容形态。",
              "首页项目封面使用缩略图，避免加载 1600px 以上大图作为卡片图。",
              "项目可通过 GitHub Pages 和自定义域名稳定访问。",
            ],
          },
        ],
      },
      {
        title: "4. MVP 需求范围",
        groups: [
          {
            label: "进入 MVP",
            items: [
              "首页 Hero、关于我、实习经历、学习经历、项目与笔记、技能、联系方式。",
              "项目分类筛选、项目详情页路由、笔记详情页路由、联系方式弹窗。",
              "结构化内容数据源：项目、笔记、实习、教育经历集中维护。",
              "图片加载优化：生成项目缩略图、压缩 WebP、旧项目页补充 lazy loading。",
            ],
          },
          {
            label: "暂不进入 MVP",
            items: [
              "后台 CMS、登录系统、评论系统、在线编辑器。",
              "复杂动画或 3D 视觉效果，避免影响首屏加载和维护成本。",
              "多语言完整切换，当前优先服务中文求职场景。",
            ],
          },
        ],
      },
      {
        title: "5. 功能模块设计",
        groups: [
          {
            label: "内容展示模块",
            items: [
              "Hero 区传达姓名、身份定位和主要行动入口。",
              "实习经历以时间线和折叠详情呈现，支持长文本经历分层阅读。",
              "项目卡片统一展示封面、标题、简介、详情入口和 GitHub 链接。",
            ],
          },
          {
            label: "信息维护模块",
            items: [
              "使用 siteData.js 统一维护项目、笔记、教育经历和联系方式。",
              "新增项目时只需要补充 slug、category、cover、description、detail data 等字段。",
              "项目详情页根据字段自动判断展示图片墙、PRD 型文字内容或 GitHub 链接。",
            ],
          },
          {
            label: "体验优化模块",
            items: [
              "项目封面图生成 900px 缩略图，减少首页图片请求体积。",
              "详情页图片使用 lazy loading，降低一次性加载多张作品图的压力。",
              "移动端筛选、卡片和详情内容保持单列布局，避免文字溢出。",
            ],
          },
        ],
      },
      {
        title: "6. Vibe Coding 工作流",
        items: [
          "需求拆解：先用自然语言描述页面目标、内容模块和交互预期，再让 AI 生成实现方案。",
          "代码生成：由 AI 辅助完成 React 组件、数据结构、CSS 样式和路由逻辑。",
          "人工审校：检查文案是否符合求职语境、组件是否复用现有结构、样式是否与页面视觉一致。",
          "问题排查：通过构建日志、页面表现和 Git diff 定位错误，迭代修复图片路径、路由和样式问题。",
          "上线部署：使用 Git 提交和 GitHub Pages 部署，将个人主页发布到自定义域名。",
        ],
      },
      {
        title: "7. 后续迭代计划",
        items: [
          "为 AI 产品项目补充更多过程材料，例如 PRD 截图、流程图、Prompt 工作流和数据指标。",
          "增加作品集访问分析，根据项目点击和页面停留情况优化首页内容排序。",
          "沉淀可复用的项目详情模板，让不同类型项目都能按产品逻辑展示。",
        ],
      },
    ],
    stack: ["React", "Vite", "CSS Modules by Component", "GitHub Pages", "Vibe Coding"],
  },
  {
    slug: "agentic-rag-stroke-platform",
    category: "ai-product",
    title: "Agentic RAG · 卒中患者研究平台",
    subtitle: "面向卒中、步态分析、IMU/EMG 与临床决策支持文献的本地 RAG Web MVP",
    cover: "/assets/images/ai-projects/agentic-rag-stroke.webp",
    coverAlt: "Agentic RAG platform for stroke patients project cover",
    description:
      "构建面向卒中患者相关研究资料的 Agentic RAG 平台，支持本地 PDF 知识库、向量检索、问答生成与研究辅助分析。",
    github: "https://github.com/wanfengrenzui/Agentic-rag-platform-for-stroke-patients",
    meta: [
      { label: "项目类型", value: "Agentic RAG / Healthcare AI" },
      { label: "技术栈", value: "FastAPI, React/Vite, FAISS, DeepSeek" },
      { label: "数据源", value: "卒中、步态分析、IMU/EMG 与临床研究 PDF" },
      { label: "角色", value: "产品定义 / RAG 流程设计 / Web MVP 搭建" },
    ],
    overview:
      "该项目面向康复医学、HCI、医学工程与卒中步态分析研究场景，搭建一个基于本地学术 PDF 的 Agentic RAG Web MVP。V1 重点验证“本地文献库 - 向量检索 - Planner / Synthesizer / Critic - 带证据回答”的完整闭环；V2 进一步规划多模态运动数据上传、特征分析与文献增强报告生成能力。",
    sections: [
      {
        title: "1. 项目背景与问题定义",
        desc: "卒中康复、步态分析、IMU/EMG 传感和 clinical decision-support 相关论文数量多、术语密集、方法差异细碎。研究者在比较多篇论文的方法、传感器位置、实验指标和主要结论时，需要反复查找 PDF、记录页码、整理证据，效率较低。",
        items: [
          "文献检索成本高：用户需要在多篇 PDF 中定位方法、指标、结论和页码。",
          "证据整理困难：普通 LLM 回答容易缺少可追溯证据，不适合科研材料整理。",
          "垂直领域问题复杂：用户提问往往涉及传感器、步态事件检测、康复评估和临床意义对比。",
          "需要可解释链路：医学研究场景不能只给结论，还要给 evidence cards、页码、置信度和系统追踪信息。",
        ],
      },
      {
        title: "2. 目标用户与核心场景",
        groups: [
          {
            label: "目标用户",
            items: [
              "康复医学、医学工程、HCI 方向研究者。",
              "中风步态分析、IMU/EMG sensing 相关学生或科研助理。",
              "需要快速比较多篇论文方法和结论的项目成员。",
            ],
          },
          {
            label: "核心场景",
            items: [
              "用户将一批卒中、步态分析、IMU/EMG 相关 PDF 放入本地 Data 目录。",
              "系统重建 FAISS 索引后，用户输入研究问题，例如比较不同论文中的 IMU 步态事件检测方法。",
              "系统返回中文解释性回答、summary table、evidence cards、页码引用、confidence 与 system trace。",
            ],
          },
        ],
      },
      {
        title: "3. V1 产品目标与范围",
        groups: [
          {
            label: "V1 产品目标",
            items: [
              "交付一个可本地运行、可演示、可迭代的 Agentic RAG Web MVP。",
              "支持本地 PDF 文献解析、向量索引构建、混合检索、Agentic 生成和证据展示。",
              "通过带引用的中文回答，帮助用户快速理解和比较多篇医学工程论文。",
            ],
          },
          {
            label: "V1 已实现范围",
            items: [
              "前端：索引状态卡片、文档列表、PDF 上传、重建索引、查询输入框、回答展示。",
              "后端：健康检查、文档列表、索引状态、索引重建、PDF 上传、RAG 查询接口。",
              "数据：读取 Data/ 原始 PDF，上传 PDF 保存到 Data/uploads/，生成 faiss.index 与 chunks.jsonl。",
            ],
          },
          {
            label: "非目标",
            items: [
              "不做医疗诊断，不替代医生或康复治疗师判断。",
              "不做生产级 SaaS 权限系统、医院 HIS / EMR 集成或合规审查系统。",
              "V1 不处理实时传感器数据，先聚焦本地论文问答与证据检索。",
            ],
          },
        ],
      },
      {
        title: "4. 核心用户流程",
        items: [
          "准备文献：用户将论文 PDF 放入 Data/，或通过前端上传 PDF 到 Data/uploads/。",
          "重建索引：系统解析 PDF，按页切分 chunk，生成 embedding，并写入 FAISS 本地向量索引。",
          "输入问题：用户在前端输入研究问题，可设置 top_k 和语言参数。",
          "检索证据：系统结合 vector search 与 keyword / BM25-style 权重进行 hybrid retrieval。",
          "Agent 生成：Planner 拆解问题，Retriever 返回证据，Synthesizer 生成回答，Critic 检查证据一致性。",
          "展示结果：前端展示 answer_text、summary_table、evidence_cards、confidence 和 latency_ms。",
        ],
      },
      {
        title: "5. 功能模块设计",
        groups: [
          {
            label: "文献与索引模块",
            items: [
              "展示当前 PDF 数量、chunk 数量、FAISS 是否就绪和索引更新时间。",
              "支持上传 PDF，并将上传文件保存到本地 uploads 目录。",
              "提供重建索引入口，支持用户在更新文献库后刷新检索数据。",
            ],
          },
          {
            label: "RAG 查询模块",
            items: [
              "支持用户输入自然语言问题，默认中文回答。",
              "支持 top_k 检索参数，V1 范围为 3-12。",
              "查询接口返回 request_id、status、final_answer、evidence_cards、confidence 和 system_trace。",
            ],
          },
          {
            label: "证据展示模块",
            items: [
              "summary table 优先展示 paper_title，避免让用户看到内部 paper_id。",
              "evidence cards 展示论文标题、页码、章节、证据片段和 evidence_id。",
              "confidence 显示 low / medium / high、分数和原因，帮助用户判断回答可信度。",
            ],
          },
        ],
      },
      {
        title: "6. 技术方案与 Agent 流程",
        groups: [
          {
            label: "技术架构",
            items: [
              "后端使用 FastAPI + Pydantic，承接文档、索引、上传和查询接口。",
              "前端使用 React + Vite + TypeScript，构建查询输入、索引状态和结果展示界面。",
              "PDF 解析使用 PyMuPDF；embedding 使用 sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2。",
              "向量索引使用 FAISS IndexFlatIP；LLM 使用 DeepSeek OpenAI-compatible chat API。",
            ],
          },
          {
            label: "Agent 流程",
            items: [
              "Planner Agent：理解用户问题，判断需要比较的方法、指标、论文范围和证据类型。",
              "Retriever：基于 hybrid retrieval 返回相关证据片段，保留页码、标题和分数。",
              "Synthesizer Agent：结合证据生成中文解释性回答与论文对比表。",
              "Critic Agent：检查回答是否有证据支撑，输出置信度和系统追踪信息。",
            ],
          },
        ],
      },
      {
        title: "7. 核心数据合同",
        groups: [
          {
            label: "Query Request",
            items: [
              "user_query：用户问题，必填。",
              "paper_ids：可选，为空时检索全部文献。",
              "top_k：默认 8，范围 3-12。",
              "language：zh 或 en，V1 默认 zh。",
            ],
          },
          {
            label: "Final Response",
            items: [
              "final_answer.answer_text：4-6 句解释性中文回答。",
              "final_answer.summary_table：按论文展示 method、sensor_position、metrics、main_finding 和 evidence_ids。",
              "evidence_cards：包含 title、page、section、snippet，用于追溯证据来源。",
              "confidence：包含 label、score、reason，说明回答可信度和限制。",
            ],
          },
        ],
      },
      {
        title: "8. V2 规划：多模态康复报告",
        desc: "V2 计划从“论文 RAG 问答系统”升级为“基于用户运动数据与文献证据的专业分析报告平台”。系统不做医学诊断，只做数据驱动的康复分析辅助报告。",
        items: [
          "支持上传患者 / 对象基本信息、骨骼节点数据、IMU 数据、EMG 数据和分析目标。",
          "提取步态时空参数、关节运动特征、惯性信号特征和肌电激活特征。",
          "检索本地论文库中的相关证据，将用户数据证据与文献证据绑定。",
          "生成结构化中文分析报告，包含数据质量说明、指标表、图表、证据卡片、风险与限制、后续建议。",
          "报告中所有高风险表述使用“提示”“可能”“建议进一步评估”等审慎措辞。",
        ],
      },
      {
        title: "9. 验收指标",
        items: [
          "后端 `/api/health`、`/api/documents`、`/api/index/status`、`/api/index/rebuild`、`/api/upload`、`/api/query` 可正常工作。",
          "前端能展示索引状态、文档列表、上传入口、查询输入和结构化回答结果。",
          "回答必须包含可追溯 evidence cards，并能显示页码、章节和证据片段。",
          "未配置 DeepSeek API Key 时，后端可启动并返回清晰错误提示，不应崩溃。",
        ],
      },
    ],
    stack: ["FastAPI", "React/Vite", "FAISS", "sentence-transformers", "DeepSeek API"],
  },
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
