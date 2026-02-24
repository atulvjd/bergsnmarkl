import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"

const categories = ["All", "Strategy", "Website", "Paid Ads", "SEO", "Email", "Branding"]

const articles = [
  {
    title: "How to Centralize Marketing Ops for Faster Execution",
    excerpt: "A practical operating model to align strategy, content, media, and reporting under one workflow.",
    category: "Strategy",
    readTime: "8 min read",
    takeaway: "Learn how shared ownership, weekly planning rhythms, and aligned KPIs reduce execution friction.",
    image: "/team-collaboration-meeting-professional-environmen.jpg",
    href: "/contact",
  },
  {
    title: "Website Design Systems That Lift Conversion Rates",
    excerpt: "Design and UX decisions that reduce friction and increase commercial outcomes.",
    category: "Website",
    readTime: "7 min read",
    takeaway: "Covers page structure, credibility signals, and conversion architecture for service-led sites.",
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
    href: "/insights/website-design-systems-that-lift-conversion-rates",
  },
  {
    title: "Paid Media Budget Allocation by Funnel Stage",
    excerpt: "How to distribute spend across prospecting, retargeting, and lifecycle campaigns.",
    category: "Paid Ads",
    readTime: "9 min read",
    takeaway: "Explains budget split logic that balances short-term efficiency with long-term demand building.",
    image: "/digital-marketing-analytics-dashboard-with-convers.jpg",
    href: "/contact",
  },
  {
    title: "SEO Content Clusters for Sustainable Pipeline Growth",
    excerpt: "A structured framework for topic authority and demand capture.",
    category: "SEO",
    readTime: "10 min read",
    takeaway: "Details how cluster planning, internal linking, and intent mapping improve qualified organic traffic.",
    image: "/growth-metrics-analytics.jpg",
    href: "/contact",
  },
  {
    title: "Email Automation Flows That Increase LTV",
    excerpt: "Foundational lifecycle sequences every growth-focused brand should implement.",
    category: "Email",
    readTime: "6 min read",
    takeaway: "Breaks down onboarding, nurture, and retention flows that improve repeat revenue and engagement.",
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
    href: "/contact",
  },
  {
    title: "Brand Positioning Signals That Improve CAC Efficiency",
    excerpt: "Why clear differentiation makes every acquisition channel perform better.",
    category: "Branding",
    readTime: "7 min read",
    takeaway: "Shows how stronger market narrative reduces wasted spend and improves conversion consistency.",
    image: "/abstract-brand-concept.jpg",
    href: "/insights/brand-positioning-hegemony-cac-efficiency",
  },
]

const insightsPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Marketing Insights`,
  url: absoluteUrl("/insights"),
  description:
    "Marketing insights on website design, paid ads, SEO, social media management, email automation, and growth strategy.",
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    url: absoluteUrl(article.href || "/insights"),
  })),
}

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(insightsPageSchema),
        }}
      />
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Insights for <span className="text-accent-beige">Modern Growth Teams</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">
              Practical articles and frameworks on strategy, execution, and performance optimization.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
              Built for operators, founders, and marketing teams that want applicable guidance on positioning, channel orchestration, and measurable growth systems.
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
            <p className="mx-auto mb-12 max-w-4xl text-center text-sm leading-relaxed text-foreground/65">
              Every insight focuses on practical implementation so you can apply the recommendations to real campaigns, workflows, and reporting structures.
            </p>
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
                    <p className="mb-5 text-sm leading-relaxed text-foreground/60">{article.takeaway}</p>
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/50">{article.readTime}</p>
                    <Link href={article.href || "/contact"} className="mt-auto font-semibold text-accent-beige transition-opacity hover:opacity-80">
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

export const metadata: Metadata = buildPageMetadata({
  title: "Marketing Insights and Growth Guides",
  description:
    "Read practical digital marketing insights on SEO, website design, paid advertising, social media strategy, branding, and lifecycle growth.",
  path: "/insights",
  keywords: [
    "digital marketing blog",
    "marketing strategy insights",
    "seo insights",
    "paid ads strategy guides",
    "website conversion insights",
    "growth marketing resources",
  ],
})
