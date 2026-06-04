import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getProjectBySlug } from "../data/siteData";

function renderInlineMarkdown(text) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function MarkdownContent({ source }) {
  const lines = source.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      const codeLines = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({
        type: "code",
        language,
        content: codeLines.join("\n"),
      });
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        content: headingMatch[2],
      });
      index += 1;
      continue;
    }

    if (trimmed.includes("|") && index + 1 < lines.length && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1])) {
      const tableLines = [trimmed];
      index += 2;

      while (index < lines.length && lines[index].trim().includes("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }

      blocks.push({
        type: "table",
        rows: tableLines.map((row) =>
          row
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split("|")
            .map((cell) => cell.trim()),
        ),
      });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph = [trimmed];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("```") &&
      !lines[index].trim().match(/^(#{1,4})\s+/) &&
      !/^[-*]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim()) &&
      !(lines[index].trim().includes("|") && index + 1 < lines.length && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1]))
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", content: paragraph.join(" ") });
  }

  return (
    <div className="project-detail__markdown">
      {blocks.map((block, blockIndex) => {
        if (block.type === "heading") {
          const HeadingTag = `h${Math.min(block.level + 1, 5)}`;
          return <HeadingTag key={blockIndex}>{renderInlineMarkdown(block.content)}</HeadingTag>;
        }

        if (block.type === "paragraph") {
          return <p key={blockIndex}>{renderInlineMarkdown(block.content)}</p>;
        }

        if (block.type === "ul") {
          return (
            <ul key={blockIndex}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={blockIndex}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineMarkdown(item)}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "table") {
          const [header, ...rows] = block.rows;
          return (
            <div className="project-detail__markdown-table-wrap" key={blockIndex}>
              <table>
                <thead>
                  <tr>
                    {header.map((cell) => (
                      <th key={cell}>{renderInlineMarkdown(cell)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={`${row.join("-")}-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`}>{renderInlineMarkdown(cell)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return (
          <pre className="project-detail__markdown-code" key={blockIndex}>
            <code>{block.content}</code>
          </pre>
        );
      })}
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [prdText, setPrdText] = useState("");

  useEffect(() => {
    if (!project?.prdSource) {
      setPrdText("");
      return;
    }

    let isActive = true;

    fetch(project.prdSource)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load PRD: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        if (isActive) {
          setPrdText(text);
        }
      })
      .catch(() => {
        if (isActive) {
          setPrdText("");
        }
      });

    return () => {
      isActive = false;
    };
  }, [project?.prdSource]);

  useEffect(() => {
    if (project?.externalUrl) {
      window.location.replace(project.externalUrl);
    }
  }, [project?.externalUrl]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  if (project.externalUrl) {
    return null;
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

            {project.prdSource ? (
              <section className="project-detail__panel project-detail__panel--prd">
                <div className="project-detail__prd-header">
                  <h2>PRD 原文</h2>
                  <a href={project.prdSource} target="_blank" rel="noreferrer">
                    打开 Markdown
                  </a>
                </div>
                {prdText ? (
                  <MarkdownContent source={prdText} />
                ) : (
                  <p className="project-detail__section-desc">PRD 正在加载中...</p>
                )}
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
