import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getProjectBySlug } from "../data/siteData";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout activeId="">
      {() => (
        <main className="project-detail section">
          <div className="container project-detail__container">
            <Link to="/#projects" className="project-detail__back">
              ← 返回项目 & 笔记
            </Link>

            <header className="project-detail__header">
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__subtitle">{project.subtitle}</p>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-detail__github"
                >
                  GitHub：{project.github}
                </a>
              ) : null}
            </header>

            {project.meta ? (
              <section className="project-detail__meta" aria-label="项目概览">
                {project.meta.map((item) => (
                  <div className="project-detail__meta-item" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            ) : null}

            {project.overview ? (
              <section className="project-detail__panel project-detail__panel--lead">
                <p>{project.overview}</p>
              </section>
            ) : null}

            {project.sections ? (
              <section className="project-detail__content-grid">
                {project.sections.map((section) => (
                  <article className="project-detail__panel" key={section.title}>
                    <h2>{section.title}</h2>
                    {section.desc ? <p className="project-detail__section-desc">{section.desc}</p> : null}
                    {section.items ? (
                      <ul className="project-detail__list">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.groups ? (
                      <div className="project-detail__groups">
                        {section.groups.map((group) => (
                          <div className="project-detail__group" key={group.label}>
                            <h3>{group.label}</h3>
                            <ul className="project-detail__list">
                              {group.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </section>
            ) : null}

            {project.stack ? (
              <section className="project-detail__panel">
                <h2>技术栈 / 方法</h2>
                <ul className="project-detail__tags">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.images?.length ? (
              <section className="project-detail__images">
                {project.images.map((image, index) => (
                  <figure className="project-detail__figure" key={image}>
                    <img src={image} alt={`${project.title} 图 ${index + 1}`} loading="lazy" />
                  </figure>
                ))}
              </section>
            ) : null}

            <div className="project-detail__footer">
              <Link to="/#projects" className="project-detail__back project-detail__back--bottom">
                ↑ 回到项目列表
              </Link>
            </div>
          </div>
        </main>
      )}
    </Layout>
  );
}
