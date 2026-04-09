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
            </header>

            <section className="project-detail__images">
              {project.images.map((image, index) => (
                <figure className="project-detail__figure" key={image}>
                  <img src={image} alt={`${project.title} 图 ${index + 1}`} loading="lazy" />
                </figure>
              ))}
            </section>

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
