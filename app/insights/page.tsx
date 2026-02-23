import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "@/components/motion-wrapper"

const categories = ["All", "Strategy", "Website", "Paid Ads", "SEO", "Email", "Branding"]

const articles = [
  {
    title: "How to Centralize Marketing Ops for Faster Execution",
    excerpt: "A practical operating model to align strategy, content, media, and reporting under one workflow.",
    category: "Strategy",
    image: "/team-collaboration-meeting-professional-environmen.jpg",
  },
  {
    title: "Website Design Systems That Lift Conversion Rates",
    excerpt: "Design and UX decisions that reduce friction and increase commercial outcomes.",
    category: "Website",
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
  },
  {
    title: "Paid Media Budget Allocation by Funnel Stage",
    excerpt: "How to distribute spend across prospecting, retargeting, and lifecycle campaigns.",
    category: "Paid Ads",
    image: "/digital-marketing-analytics-dashboard-with-convers.jpg",
  },
  {
    title: "SEO Content Clusters for Sustainable Pipeline Growth",
    excerpt: "A structured framework for topic authority and demand capture.",
    category: "SEO",
    image: "/growth-metrics-analytics.jpg",
  },
  {
    title: "Email Automation Flows That Increase LTV",
    excerpt: "Foundational lifecycle sequences every growth-focused brand should implement.",
    category: "Email",
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
  },
  {
    title: "Brand Positioning Signals That Improve CAC Efficiency",
    excerpt: "Why clear differentiation makes every acquisition channel perform better.",
    category: "Branding",
    image: "/abstract-brand-concept.jpg",
  },
]

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Insights for <span className="text-accent-beige">Modern Growth Teams</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">
              Practical articles and frameworks on strategy, execution, and performance optimization.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${index === 0 ? "border-accent-beige/50 bg-accent-beige/10 text-accent-beige" : "border-border/50 text-foreground/70"}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article, index) => (
              <FadeInSection key={article.title} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-52 w-full">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-beige">{article.category}</p>
                    <h2 className="mb-3 text-2xl font-bold">{article.title}</h2>
                    <p className="mb-6 text-foreground/70">{article.excerpt}</p>
                    <Link href="/contact" className="mt-auto font-semibold text-accent-beige transition-opacity hover:opacity-80">
                      Read More
                    </Link>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Insights — Bergs & Mark",
  description: "Read practical resources on website design, paid ads, SEO, email marketing, and growth strategy.",
}
