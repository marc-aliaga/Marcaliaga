import { formatDate } from "../lib/formatDate.js";

export default function EntryPage({ sectionLabel, title, date, Body }) {
  return (
    <main className="entry-page">
      <a className="back-link" href="/">
        ← Back
      </a>
      <p className="eyebrow">
        {sectionLabel} · <time dateTime={date}>{formatDate(date)}</time>
      </p>
      <h1 className="entry-title">{title}</h1>
      <div className="entry-body">
        <Body />
      </div>
    </main>
  );
}
