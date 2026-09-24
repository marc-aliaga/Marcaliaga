// Each valuation is an Excel model shown as HTML tables. To add one:
//   1. python scripts/xlsx_to_json.py <model.xlsx> src/content/valuations/<slug>.json
//   2. copy the workbook to public/valuations/<slug>-dcf.xlsx for the download link
//   3. add an entry below.
import rosneft2026 from "../content/valuations/rosneft-2026.json";

export const valuations = [
  {
    slug: "rosneft-2026",
    title: "Rosneft 2026",
    date: "2026-09-22",
    excerpt:
      "Discounted cash flow valuation of Rosneft (ROSN.ME): WACC and CAPM build, oil price deck, Vostok Oil production ramp, and financial statements.",
    workbookUrl: "/valuations/rosneft-2026-dcf.xlsx",
    sourceUrl:
      "https://github.com/marc-aliaga/Valuation-Methods/tree/main/Valuation/Case_Studies/Rosneft_2026/Rosneft",
    sheets: rosneft2026.sheets,
  },
];
