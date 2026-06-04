import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  aboutData,
  contactData,
  educationCards,
  heroData,
  internshipCards,
  notes,
  projects,
  skills,
} from "../data/siteData";
import { useScrollSpy } from "../hooks/useScrollSpy";

function HomePage() {
  const [projectFilter, setProjectFilter] = useState("all");
  const activeId = useScrollSpy(true);

  const visibleProjects = useMemo(() => {
    if (projectFilter === "all") {
      return projects;
    }

    if (projectFilter === "project") {
      return projects.filter((project) => project.category === "ai-product");
    }

    if (projectFilter === "design-project") {
      return projects.filter((project) => project.category === "design-project");
    }

    return [];
  }, [projectFilter]);

  const renderProjectLink = (project, children, className) => {
    const href = project.externalUrl ?? `/projects/${project.slug}`;

    if (project.externalUrl) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  };

  const handleFilterClick = (value) => {
    if (value === "notes") {
      const notesSection = document.getElementById("notes");
      notesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setProjectFilter(value);
  };

  return (
    <Layout activeId={activeId} withContactModals>
      {({ openWechat, openQQ }) => (
        <main>
          <section id="hero" className="hero section">
            <div className="hero__container container grid">
              <div className="hero__content">
                <h1>{heroData.title}</h1>
                <p className="hero__subtitle">{heroData.subtitle}</p>
                <p className="hero__description">{heroData.description}</p>
                <div className="hero__buttons">
                  <Link to={heroData.cta.href} className="button">
                    {heroData.cta.label}
                  </Link>
                  <a
                    href={heroData.secondaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--ghost"
                  >
                    {heroData.secondaryCta.label}
                  </a>
                </div>
              </div>
              <div className="hero__image">
                <img src={heroData.avatar} alt="Asta Avatar" loading="eager" fetchPriority="high" decoding="async" />
              </div>
            </div>
          </section>

          <section id="about" className="about section">
            <h2 className="section__title">关于我</h2>
            <div className="about__container container grid">
              <div className="about__left">
                <p>
                  我是一名 <span className="about__highlight">产品经理</span>，对{" "}
                  <span className="about__highlight">产品</span>、
                  <span className="about__highlight">AI</span>、
                  <span className="about__highlight">数据分析</span> 与{" "}
                  <span className="about__highlight">人机交互</span> 有持续兴趣。
                </p>
                <p>{aboutData.description}</p>
                <div className="musings">
                  <h3 className="musings__title">一些碎碎念</h3>
                  <blockquote>{aboutData.quote}</blockquote>
                </div>
              </div>

              <div className="about__right">
                <div className="timeline">
                  {aboutData.educationTimeline.map((item) => (
                    <div className="timeline__item" key={item.date}>
                      <div className="timeline__date">{item.date}</div>
                      <div className="timeline__content">
                        <h3 className="timeline__school">{item.school}</h3>
                        <p>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="about__tags">
                  {aboutData.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="internships" className="internships section">
            <h2 className="section__title">实习经历</h2>
            <div className="internships__timeline container">
              <div className="internships__line" />
              {internshipCards.map((card) => (
                <article className="internship-card reveal is-visible" key={card.title}>
                  <div className="internship-card__dot" />
                  <div className="internship-card__inner">
                    <header className="internship-card__header">
                      <span className="internship-card__date">{card.date}</span>
                      <span className="internship-card__badge">{card.badge}</span>
                    </header>

                    <h3 className="internship-card__title">{card.title}</h3>

                    <div className="internship-section">
                      <div className="internship-section__label">项目背景</div>
                      <p className="internship-card__summary">{card.summary}</p>
                    </div>

                    <details className="internship-card__details">
                      <summary className="internship-card__summary-toggle">
                        <span>展开详细经历</span>
                        <span className="internship-card__summary-meta">
                          {card.projects.length} 个项目 / 模块
                        </span>
                      </summary>

                      <div className="internship-card__projects">
                        {card.projects.map((project) => (
                          <div className="internship-project" key={project.title}>
                            <h4 className="internship-project__title">{project.title}</h4>

                            <div className="internship-section">
                              <div className="internship-section__label">项目背景</div>
                              <p className="internship-project__summary">{project.summary}</p>
                            </div>

                            <div className="internship-section">
                              <div className="internship-section__label">我的工作</div>
                              <ol className="internship-steps">
                                {project.steps.map((step) => (
                                  <li className="internship-step" key={step.title}>
                                    <p className="internship-step__title">{step.title}</p>
                                    <p className="internship-step__desc">{step.desc}</p>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>

                    <ul className="internship-card__tags">
                      {card.tags.map((tag) => (
                        <li className="internship-card__tag" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="education section">
            <h2 className="section__title">学习经历</h2>

            <div className="education__container container">
              {educationCards.map((card, index) => (
                <div key={card.school} className="education-card__wrapper">
                  <article className="education-card">
                    <header className="education-card__header">
                      <div className="education-card__icon">
                        <img
                          src={card.logo}
                          alt={card.logoAlt}
                          className="education-card__logo"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="education-card__meta">
                        <h3 className="education-card__school">{card.school}</h3>
                        <p className="education-card__major">{card.major}</p>
                        <p className="education-card__time">{card.time}</p>
                      </div>
                    </header>

                    <section className="education-card__section education-card__section--tags">
                      <h4 className="education-card__section-title">Tags</h4>
                      <ul className="education-card__tags">
                        {card.tags.map((tag) => (
                          <li className="education-card__tag" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="education-card__section education-card__section--projects">
                      <h4 className="education-card__section-title">Featured Projects</h4>
                      <ul className="education-card__list">
                        {card.featuredProjects.map((item) => (
                          <li className="education-card__list-item" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="education-card__section education-card__section--awards">
                      <details className="education-card__awards">
                        <summary className="education-card__awards-summary">
                          {index === 0 ? "获奖与成果 Awards" : "成果与进展 Awards & Progress"}
                        </summary>

                        {card.groups.map((group) => (
                          <div className="education-card__awards-group" key={group.title}>
                            <h5 className="education-card__awards-title">{group.title}</h5>
                            <ul
                              className={`education-card__list ${
                                group.compact ? "education-card__list--compact" : ""
                              }`}
                            >
                              {group.items.map((item) => (
                                <li className="education-card__list-item" key={item}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </details>
                    </section>
                  </article>

                  {index === 0 ? (
                    <div className="education-connector">
                      <div className="education-connector__line">
                        <span className="education-connector__particle" />
                        <span className="education-connector__particle" />
                        <span className="education-connector__particle" />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="projects section">
            <h2 className="section__title">项目 & 笔记</h2>
            <div className="projects__container container">
              <div className="projects__filters">
                <button
                  type="button"
                  className={`filter-button ${projectFilter === "all" ? "active" : ""}`}
                  onClick={() => handleFilterClick("all")}
                >
                  全部
                </button>
                <button
                  type="button"
                  className={`filter-button ${projectFilter === "project" ? "active" : ""}`}
                  onClick={() => handleFilterClick("project")}
                >
                  AI产品项目
                </button>
                <button
                  type="button"
                  className={`filter-button ${projectFilter === "design-project" ? "active" : ""}`}
                  onClick={() => handleFilterClick("design-project")}
                >
                  设计项目
                </button>
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => handleFilterClick("notes")}
                >
                  学习笔记
                </button>
              </div>

              <div className="projects__grid grid">
                {visibleProjects.length ? (
                  visibleProjects.map((project) => (
                    <div className="project-card" key={project.slug}>
                      {renderProjectLink(
                        project,
                        <img
                          src={project.cover}
                          alt={project.coverAlt}
                          className="project-card__img"
                          loading="lazy"
                          decoding="async"
                        />,
                        undefined,
                      )}

                      <div className="project-card__content">
                        <h3 className="project-card__title">
                          {renderProjectLink(project, project.title)}
                        </h3>
                        <p className="project-card__description">{project.description}</p>
                        <div className="project-card__actions">
                          {renderProjectLink(project, <>查看详情 &rarr;</>, "project-card__link")}
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="project-card__github"
                            >
                              GitHub
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="projects__empty">
                    <h3 className="projects__empty-title">AI产品项目正在整理中</h3>
                    <p className="projects__empty-text">
                      这个分区已经预留好，后续新增 AI 产品项目后会显示在这里。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section id="notes" className="notes section">
            <h2 className="section__title">NOTES · 笔记与碎片</h2>
            <p className="section__subtitle">
              一些研究随笔、产品思考和方法论草稿。点击进入可查看详情。
            </p>

            <div className="notes-mini-list">
              {notes.map((note) => (
                <Link to={`/notes/${note.slug}`} className="notes-mini-item" key={note.slug}>
                  <span className="notes-mini-title">{note.title}</span>
                  <span className={`notes-mini-status ${note.miniStatusClass}`}>{note.status}</span>
                </Link>
              ))}
            </div>

            <div className="notes__container container">
              {notes.map((note) => (
                <article className="note-card" key={note.slug}>
                  <Link to={`/notes/${note.slug}`} className="note-card__overlay-link" />
                  <header className="note-card__header">
                    <h3 className="note-card__title">{note.title}</h3>
                    <span className={`note-card__status ${note.statusClass}`}>{note.status}</span>
                  </header>
                  <p className="note-card__summary">{note.summary}</p>
                  <div className="note-card__footer">
                    <span className="note-card__meta">{note.meta.footer}</span>
                    <div className="note-card__tags">
                      {note.tags.map((tag) => (
                        <span className="note-card__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              <Link to="/notes" className="notes__more">
                查看所有 Notes →
              </Link>
            </div>
          </section>

          <section id="skills" className="skills section">
            <h2 className="section__title">我的技能</h2>
            <div className="skills__container container">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <i className={skill.icon} />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="contact section">
            <h2 className="section__title">联系我</h2>
            <div className="contact__container container">
              <p className="contact__subtitle">欢迎交流产品、设计与 AI 相关话题。</p>
              <div className="contact__buttons">
                <a href={`mailto:${contactData.email}`} className="button contact-btn">
                  <i className="fas fa-envelope" />
                  <span>发送邮件</span>
                </a>
                <button className="button contact-btn" type="button" onClick={openWechat}>
                  <i className="fab fa-weixin" />
                  <span>添加微信</span>
                </button>
                <button className="button contact-btn" type="button" onClick={openQQ}>
                  <i className="fab fa-qq" />
                  <span>添加QQ</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
}

export default HomePage;
