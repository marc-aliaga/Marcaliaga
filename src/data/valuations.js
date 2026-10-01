// Each valuation is an Excel model shown as HTML tables. To add one:
//   1. python scripts/xlsx_to_json.py <model.xlsx> src/content/valuations/<slug>.json
//      (add --bold-header if the sheets' header rows aren't bold in Excel)
//   2. copy the workbook to public/valuations/<slug>-<method>.xlsx for the download link
//   3. add an entry below.
import rosneft2026 from "../content/valuations/rosneft-2026.json";
import nbix2026 from "../content/valuations/nbix-2026.json";

export const valuations = [
  {
    slug: "nbix-2026",
    title: "Neurocrine Biosciences 2026",
    date: "2026-09-26",
    excerpt:
      "Relative valuation of Neurocrine Biosciences (NBIX) against ten neuroscience and specialty biopharma peers: P/E, EV/EBITDA, EV/Sales and PEG multiples, peer statistics, and a cross-check against Yahoo Finance.",
    workbookUrl: "/valuations/nbix-2026-multiples.xlsx",
    sourceUrl:
      "https://github.com/marc-aliaga/Valuation-Methods/tree/main/Valuation/Case_Studies/NBIX_2026_Relative",
    sheets: nbix2026.sheets,
  },
  {
    slug: "rosneft-2026",
    title: "Rosneft 2026",
    date: "2026-09-22",
    excerpt:
      "Discounted cash flow valuation of Rosneft (ROSN.ME): WACC and CAPM build, oil price deck, Vostok Oil production ramp, and financial statements.",
    workbookUrl: "/valuations/rosneft-2026-dcf.xlsx",
    sourceUrl:
      "https://github.com/marc-aliaga/Valuation-Methods/tree/main/Valuation/Case_Studies/Rosneft_2026_DCF/Rosneft",
    sheets: rosneft2026.sheets,
  },
];
