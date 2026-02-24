import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const filters = ["All", "SaaS", "E-commerce", "Healthcare", "Paid Ads", "SEO", "Branding"]

const caseStudies = [
  {
    company: "NovaSuite",
    industry: "SaaS",
    challenge: "Low trial-to-demo conversion despite steady traffic.",
    solution: "Reframed messaging, redesigned landing paths, and aligned paid + lifecycle nurture.",
    results: "3.2x qualified pipeline, 41% lower CAC",
    scope: "Scope: messaging architecture, landing UX updates, ad journey alignment, and lifecycle email sequencing.",
    image: "/saas-dashboard-design-interface.jpg",
  },
  {
    company: "Atelier Commerce",
    industry: "E-commerce",
    challenge: "High ad spend with inconsistent conversion rates.",
    solution: "Creative testing cadence, PDP redesign, and automated retention email sequences.",
    results: "+214% conversion rate, 4.8x blended ROAS",
    scope: "Scope: product page CRO, paid creative matrix, audience segmentation, and retention automation.",
    image: "/fashion-ecommerce-website.png",
  },
  {
    company: "HealthBridge Clinics",
    industry: "Healthcare",
    challenge: "Weak local visibility and fragmented acquisition channels.",
    solution: "Local SEO foundation, location pages, and intent-led paid search campaigns.",
    results: "289% growth in booked consultations",
    scope: "Scope: local search structure, map listing optimization, provider page strategy, and conversion tracking.",
    image: "/consultation-meeting-planning.jpg",
  },
  {
    company: "PrimeLedger",
    industry: "Financial Services",
    challenge: "Premium product, unclear market positioning.",
    solution: "Positioning framework, conversion-led site update, and authority content program.",
    results: "2.6x inbound SQL volume in 5 months",
    scope: "Scope: value proposition refinement, website narrative rewrite, and thought-leadership content planning.",
    image: "/strategy-planning-whiteboard.jpg",
  },
  {
    company: "CloudAnchor",
    industry: "B2B Infrastructure",
    challenge: "Strong product, low category visibility.",
    solution: "Integrated SEO-content system with paid amplification for priority assets.",
    results: "401% increase in organic non-brand traffic",
    scope: "Scope: topic cluster architecture, strategic editorial calendar, and demand-capture distribution workflows.",
    image: "/results-analytics-dashboard.jpg",
  },
  {
    company: "MediPulse",
    industry: "Healthcare Tech",
    challenge: "Growth stalled after initial launch momentum.",
    solution: "Full-funnel media plan, refreshed creative, and CRM-backed reactivation flow.",
    results: "+176% MQL growth, 34% better CPL efficiency",
    scope: "Scope: audience expansion strategy, creative refresh cadence, and lifecycle reactivation automation.",
    image: "/hero-digital-marketing-agency.jpg",
  },
]

const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SITE_NAME} Case Studies`,
  url: absoluteUrl("/work"),
  description:
    "Digital marketing case studies with measurable outcomes across healthcare, SaaS, e-commerce, and professional service categories.",
}

const caseStudyItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Marketing Agency Case Studies",
  itemListElement: caseStudies.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: `${study.company} case study`,
      description: `${study.challenge} ${study.solution} ${study.results}`,
      url: absoluteUrl("/work"),
      about: study.industry,
    },
  })),
}

export default function WorkPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudyItemListSchema),
        }}
      />
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Case Studies That Show <span className="text-accent-beige">Measured Outcomes</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">
              A portfolio of engagements across industries where centralized execution produced consistent, trackable growth.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
              Each engagement highlights the same principle: strong outcomes come from coordinated planning, creative discipline, and continuous optimization across the full customer journey.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${index === 0 ? "border-accent-beige/50 bg-accent-beige/10 text-accent-beige" : "border-border/50 text-foreground/70"}`}
                >
                  {filter}
                </span>
              ))}
            </div>
            <p className="mx-auto mb-12 max-w-4xl text-center text-sm leading-relaxed text-foreground/65">
              These examples cover category positioning, acquisition efficiency, local visibility, and lifecycle retention programs delivered through one integrated operating model.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <FadeInSection key={study.company} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-52 w-full">
                    <Image src={study.image} alt={study.company} fill className="object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-beige">{study.industry}</p>
                    <h2 className="mb-5 text-2xl font-bold">{study.company}</h2>

                    <div className="space-y-4 text-sm text-foreground/75">
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground/50">Challenge</p>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground/50">Solution</p>
                        <p>{study.solution}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground/50">Results</p>
                        <p className="font-semibold text-accent-beige">{study.results}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-foreground/65">{study.scope}</p>

                    <Link href="/contact" className="mt-6 font-semibold text-accent-beige transition-opacity hover:opacity-80">
                      View Full Case Study
                    </Link>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Want Similar Results?</h2>
            <p className="mb-10 text-lg text-foreground/70">We can assess your current funnel and identify the highest-impact growth opportunities.</p>
            <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-foreground/65">
              You will receive a practical recommendation set focused on positioning clarity, channel priorities, implementation order, and the metrics that matter most to your growth stage.
            </p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = buildPageMetadata({
  title: "Marketing Case Studies and Results",
  description:
    "Review Bergs & Mark marketing case studies showing measurable outcomes in lead generation, conversion improvement, SEO growth, and paid media performance.",
  path: "/work",
  keywords: [
    "marketing agency case studies",
    "digital marketing results",
    "lead generation case studies",
    "seo case studies",
    "paid ads case studies",
    "service business growth results",
  ],
})
