"""Convert a valuation workbook into the JSON the site renders as HTML tables.

Usage: python scripts/xlsx_to_json.py <workbook.xlsx> <output.json>

Reads the values Excel last calculated (so save the workbook in Excel first),
formats numbers with each cell's own number format, and skips hidden sheets.
Requires openpyxl.
"""

import datetime
import json
import re
import sys

import openpyxl


def decimals(section):
    match = re.search(r"\.([0#]+)", section)
    return len(match.group(1)) if match else 0


def format_number(value, fmt):
    section = fmt.split(";")[0]
    parens = value < 0 and "(" in fmt
    shown = abs(value) if parens else value

    if fmt == "General":
        if float(value).is_integer():
            return str(int(value))
        text = f"{value:,.2f}" if abs(value) >= 1 else f"{value:.4f}"
    elif "%" in section:
        text = f"{shown * 100:.{decimals(section)}f}%"
    elif "," in section:
        text = f"{shown:,.{decimals(section)}f}"
    else:
        text = f"{shown:.{decimals(section)}f}"

    if "₽" in fmt:
        text += " ₽"
    return f"({text})" if parens else text


def format_cell(value, fmt):
    if isinstance(value, bool):
        return str(value).upper()
    if isinstance(value, (int, float)):
        return format_number(value, fmt)
    if isinstance(value, datetime.datetime):
        return value.strftime("%Y-%m-%d")
    return str(value).strip()


def convert_sheet(ws):
    rows = []
    for row in ws.iter_rows():
        cells = []
        for cell in row:
            # Column A "x" cells are the model's section markers, not content.
            marker = cell.column == 1 and cell.value == "x"
            if cell.value is None or marker or ws.column_dimensions[cell.column_letter].hidden:
                cells.append(None)
                continue
            text = format_cell(cell.value, cell.number_format)
            if not text:
                cells.append(None)
                continue
            out = {"v": text}
            if isinstance(cell.value, (int, float)) and not isinstance(cell.value, bool):
                out["n"] = 1
            if cell.font and cell.font.b:
                out["b"] = 1
            cells.append(out)
        if not ws.row_dimensions[row[0].row].hidden:
            rows.append(cells)

    # Trim empty edges so each table starts at its first used row and column.
    while rows and not any(rows[-1]):
        rows.pop()
    while rows and not any(rows[0]):
        rows.pop(0)
    width = max((i + 1 for r in rows for i, c in enumerate(r) if c), default=0)
    first = min((i for r in rows for i, c in enumerate(r) if c), default=0)
    return [r[first:width] + [None] * (width - len(r)) for r in rows]


def main(src, dest):
    wb = openpyxl.load_workbook(src, data_only=True)
    sheets = [
        {"name": ws.title, "rows": convert_sheet(ws)}
        for ws in wb.worksheets
        if ws.sheet_state == "visible"
    ]
    with open(dest, "w", encoding="utf-8") as f:
        json.dump({"sheets": sheets}, f, ensure_ascii=False, separators=(",", ":"))
    print(f"Wrote {dest}: " + ", ".join(s["name"] for s in sheets))


if __name__ == "__main__":
    main(*sys.argv[1:3])
