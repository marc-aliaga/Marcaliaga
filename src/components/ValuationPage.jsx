import { useState } from "react";
import { formatDate } from "../lib/formatDate.js";

function cellClass(cell) {
  if (!cell) return undefined;
  const classes = [
    cell.n && "sheet-num",
    cell.b && "sheet-bold",
    cell.v.length > 60 && "sheet-note",
  ].filter(Boolean);
  return classes.length ? classes.join(" ") : undefined;
}

function SheetTable({ rows }) {
  return (
    <div className="sheet-scroll">
      <table className="sheet">
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} className={cellClass(cell)}>
                  {cell?.v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ValuationPage({
  title,
  date,
  excerpt,
  workbookUrl,
  sourceUrl,
  sheets,
}) {
  const [active, setActive] = useState(0);

  return (
    <main className="entry-page valuation-page">
      <a className="back-link" href="/">
        ← Back
      </a>
      <p className="eyebrow">
        Valuation · <time dateTime={date}>{formatDate(date)}</time>
      </p>
      <h1 className="entry-title">{title}</h1>
      <p className="valuation-excerpt">{excerpt}</p>
      <div className="valuation-links">
        <a href={workbookUrl} download>
          Download Excel
        </a>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          Source on GitHub ↗
        </a>
      </div>
      <div className="sheet-tabs" role="tablist" aria-label="Workbook sheets">
        {sheets.map((sheet, i) => (
          <button
            key={sheet.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            className="sheet-tab"
            onClick={() => setActive(i)}
          >
            {sheet.name.replace(/_/g, " ")}
          </button>
        ))}
      </div>
      <SheetTable rows={sheets[active].rows} />
    </main>
  );
}
