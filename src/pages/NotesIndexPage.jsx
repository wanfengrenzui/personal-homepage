import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { notes } from "../data/siteData";

export default function NotesIndexPage() {
  return (
    <Layout activeId="">
      {() => (
        <main>
          <section className="notes section notes-index-page">
            <div className="container">
              <div className="notes-index__header">
                <Link to="/#notes" className="note-detail__back">
                  ← 返回首页 Notes 区域
                </Link>
                <h1 className="section__title">全部 Notes</h1>
                <p className="section__subtitle">
                  这里统一收拢所有笔记入口，后续新增内容时只需要补数据，不用再手写新的静态 HTML 页面。
                </p>
              </div>

              <div className="notes__container">
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
              </div>
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
}
