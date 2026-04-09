import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getNoteBySlug } from "../data/siteData";

export default function NoteDetailPage() {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);

  if (!note) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <Layout activeId="">
      {() => (
        <main>
          <section className="note-detail section">
            <div className="note-detail__container container">
              <Link to="/#notes" className="note-detail__back">
                ← 返回 Notes 列表
              </Link>

              <article className="note-detail__card">
                <header className="note-detail__header">
                  <div className="note-detail__title-block">
                    <h1 className="note-detail__title">{note.title}</h1>
                    <p className="note-detail__subtitle">{note.summary}</p>
                  </div>

                  <span className={`note-detail__status ${note.statusClass}`}>{note.status}</span>
                </header>

                <section className="note-detail__meta">
                  <div className="note-detail__meta-group">
                    <span className="note-detail__meta-label">笔记类型</span>
                    <span className="note-detail__meta-value">{note.meta.type}</span>
                  </div>

                  <div className="note-detail__meta-group">
                    <span className="note-detail__meta-label">创建时间</span>
                    <span className="note-detail__meta-value">{note.meta.createdAt}</span>
                  </div>

                  <div className="note-detail__meta-group">
                    <span className="note-detail__meta-label">最后更新</span>
                    <span className="note-detail__meta-value">{note.meta.updatedAt}</span>
                  </div>

                  <div className="note-detail__tags">
                    {note.tags.map((tag) => (
                      <span className="note-detail__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                <section
                  className="note-detail__content"
                  dangerouslySetInnerHTML={{ __html: note.contentHtml }}
                />

                {note.pdf ? (
                  <div className="note-detail__pdf-wrapper">
                    <iframe
                      className="note-detail__pdf-frame"
                      src={note.pdf}
                      title={`${note.title} PDF`}
                      loading="lazy"
                    />
                  </div>
                ) : null}

                {note.related?.length ? (
                  <section className="note-detail__related">
                    {note.related.map((group) => (
                      <div className="note-detail__related-block" key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </section>
                ) : null}
              </article>

              <div className="note-detail__nav">
                <Link to="/#notes" className="note-detail__nav-link">
                  ← 返回 Notes 列表
                </Link>
                <Link to="/notes" className="note-detail__nav-link">
                  查看全部 Notes →
                </Link>
              </div>
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
}
