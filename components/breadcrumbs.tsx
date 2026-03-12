import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { generateBreadcrumbSchema, BreadcrumbItem as SchemaBreadcrumbItem } from "@/lib/seo/structured-data"

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center text-sm text-foreground/60">
        <ol className="flex flex-wrap items-center gap-y-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.path} className="flex items-center">
                {isLast ? (
                  <span className="font-medium text-foreground/90 break-words" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-accent-beige"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight className="mx-2 h-4 w-4" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
