type RenderBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: string[][] }
  | { type: "formula"; lines: string[] }

function compactLine(line: string): string {
  return line.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim()
}

function splitCells(line: string): string[] {
  return line
    .split("|")
    .map((cell) => compactLine(cell))
    .filter((cell) => cell.length > 0)
}

function isDividerRow(cells: string[]): boolean {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function isTableLines(lines: string[]): boolean {
  if (lines.length < 2) return false
  return lines.every((line) => splitCells(line).length >= 2)
}

function isLikelyFormula(lines: string[]): boolean {
  if (lines.length < 2) return false
  if (lines.some((line) => line.includes("|"))) return false

  const hasEquation = lines.some((line) => /=/.test(line))
  const hasDivider = lines.some((line) => /-{5,}/.test(line))
  const hasMathTokens = lines.some((line) => /\b(Delta|Sum|ARPU|LTV|CAC|iROAS)\b/.test(line))

  return hasEquation || (hasDivider && hasMathTokens)
}

function isLikelyHeading(line: string): boolean {
  if (!line) return false
  if (line.length > 120) return false
  if (/^[*-]\s+/.test(line)) return false
  if (line.includes("|")) return false
  if (/[.!?]$/.test(line)) return false
  if (/^\d+\)$/.test(line)) return false
  if (/=$/.test(line)) return false

  const words = line.split(/\s+/).filter(Boolean)
  if (words.length < 2 || words.length > 16) return false

  return /[A-Za-z]/.test(line)
}

function isLikelyList(lines: string[]): boolean {
  if (lines.length < 2) return false
  if (lines.some((line) => line.includes("|"))) return false

  const bulletLines = lines.filter((line) => /^[-*•]\s+/.test(line)).length
  if (bulletLines === lines.length) return true

  const keyedLines = lines.filter((line) => /^[A-Za-z0-9][^:|]{1,90}:\s+.+/.test(line)).length
  if (keyedLines / lines.length >= 0.6) return true

  const plainList = lines.length >= 3 && lines.every((line) => line.length <= 110 && !/[.!?]$/.test(line))
  return plainList
}

function pushBodyBlocks(blocks: RenderBlock[], lines: string[]) {
  if (lines.length === 0) return
  if (isTableLines(lines)) {
    blocks.push({ type: "table", rows: lines.map(splitCells).filter((row) => row.length >= 2) })
    return
  }
  if (isLikelyFormula(lines)) {
    blocks.push({ type: "formula", lines })
    return
  }
  if (isLikelyList(lines)) {
    blocks.push({ type: "list", items: lines })
    return
  }
  blocks.push({ type: "paragraph", text: lines.join(" ") })
}

function parseContent(content: string): RenderBlock[] {
  const blocks: RenderBlock[] = []
  const rawBlocks = content.split(/\n{2,}/)

  for (const rawBlock of rawBlocks) {
    const lines = rawBlock
      .split("\n")
      .map(compactLine)
      .filter(Boolean)

    if (lines.length === 0) continue

    if (isTableLines(lines)) {
      blocks.push({ type: "table", rows: lines.map(splitCells).filter((row) => row.length >= 2) })
      continue
    }

    if (isLikelyFormula(lines)) {
      blocks.push({ type: "formula", lines })
      continue
    }

    if (lines.length > 1 && isLikelyHeading(lines[0])) {
      blocks.push({ type: "heading", text: lines[0] })
      pushBodyBlocks(blocks, lines.slice(1))
      continue
    }

    if (lines.length === 1 && isLikelyHeading(lines[0])) {
      blocks.push({ type: "heading", text: lines[0] })
      continue
    }

    if (isLikelyList(lines)) {
      blocks.push({ type: "list", items: lines })
      continue
    }

    blocks.push({ type: "paragraph", text: lines.join(" ") })
  }

  return blocks
}

function renderListItem(item: string) {
  const cleanedItem = item.replace(/^[-*•]\s+/, "").trim()
  const keyedMatch = cleanedItem.match(/^([^:]{2,90}):\s+(.+)$/)
  if (!keyedMatch) return cleanedItem

  const [, key, value] = keyedMatch
  return (
    <>
      <span className="font-semibold text-foreground">{key.trim()}:</span> {value.trim()}
    </>
  )
}

export function InsightArticleContent({ content }: { content: string }) {
  const blocks = parseContent(content)

  return (
    <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={`heading-${index}`} className="pt-3 text-xl font-bold leading-tight text-foreground md:text-2xl">
              {block.text}
            </h2>
          )
        }

        if (block.type === "paragraph") {
          return (
            <p key={`paragraph-${index}`} className="text-sm leading-7 text-foreground/80">
              {block.text}
            </p>
          )
        }

        if (block.type === "list") {
          return (
            <ul key={`list-${index}`} className="space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`} className="list-disc leading-7 text-foreground/80">
                  {renderListItem(item)}
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === "formula") {
          return (
            <pre
              key={`formula-${index}`}
              className="overflow-x-auto rounded-md border border-border/60 bg-secondary/50 px-4 py-3 text-xs leading-relaxed text-foreground/80"
            >
              {block.lines.join("\n")}
            </pre>
          )
        }

        const maxColumns = Math.max(...block.rows.map((row) => row.length))
        const normalizedRows = block.rows.map((row) => [...row, ...Array(Math.max(0, maxColumns - row.length)).fill("")])
        const [firstRow, ...otherRows] = normalizedRows
        const bodyRows = otherRows.length > 0 && isDividerRow(otherRows[0]) ? otherRows.slice(1) : otherRows

        return (
          <div key={`table-${index}`} className="overflow-x-auto rounded-md border border-border/60">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-secondary/70">
                <tr>
                  {firstRow.map((cell, cellIndex) => (
                    <th key={`th-${index}-${cellIndex}`} className="border-b border-border/60 px-4 py-3 font-semibold text-foreground">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIndex) => (
                  <tr key={`row-${index}-${rowIndex}`} className="align-top">
                    {row.map((cell, cellIndex) => (
                      <td key={`td-${index}-${rowIndex}-${cellIndex}`} className="border-t border-border/40 px-4 py-3 text-foreground/80">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}
