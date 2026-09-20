import { formatDate } from "../lib/formatDate.js";
import { entryPath } from "../routes.js";

export default function EntryList({ heading, items, basePath }) {
  return (
    <section className="entry-list">
      <p className="eyebrow">{heading}</p>
      {items.map(({ slug, title, date }) => (
        <a className="article-row" href={entryPath(basePath, slug)} key={slug}>
          <span className="article-row-title">{title}</span>
          <span className="entry-date">{formatDate(date)}</span>
        </a>
      ))}
    </section>
  );
}
