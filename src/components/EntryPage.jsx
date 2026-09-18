import { formatDate } from "../lib/formatDate.js";

export default function EntryPage({ sectionLabel, title, date, Body }) {
  return (
    <main className="entry-page">
      <a className="back-link" href="#/">
        ← Back
      </a>
      <p className="eyebrow">
        {sectionLabel} · {formatDate(date)}
      </p>
      <h1 className="entry-title">{title}</h1>
      <div className="entry-body">
        <Body />
      </div>
    </main>
  );
}
