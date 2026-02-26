import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    company: "Elite Core Gym",
    industry: "Fitness & Wellness",
    description:
      "A high-performance digital platform for Elite Core Gym, featuring streamlined class scheduling, membership management, and a dynamic interface designed to drive athlete engagement and retention.",
    url: "https://elitecoregym.vercel.app/",
    image: "/professional-service-provider-website.jpg",
  },
  {
    company: "Vellora",
    industry: "E-commerce & Fashion",
    description:
      "A premium e-commerce experience for Vellora, a contemporary clothing brand. The platform features a minimalist design, seamless product discovery, and an optimized checkout flow to enhance the digital shopping journey.",
    url: "https://vellora-nrev.vercel.app/",
    image: "/luxury-e-commerce-storefront.jpg",
  },
  {
    company: "Filter Kaapi Co.",
    industry: "Food & Beverage",
    description:
      "A warm and inviting digital presence for a specialty coffee cafe, featuring an integrated menu, location details, and a seamless online ordering system to drive local foot traffic.",
    url: "https://cafe-website-mu-neon.vercel.app/",
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
  },
  {
    company: "NovaSuite",
    industry: "SaaS",
    description:
      "A complete overhaul of NovaSuite's acquisition funnel, focusing on messaging architecture and landing UX updates to significantly improve trial-to-demo conversion rates.",
    url: "#",
    image: "/saas-dashboard-design-interface.jpg",
  },
  {
    company: "Atelier Commerce",
    industry: "E-commerce",
    description:
      "Strategic creative testing and product page optimization for Atelier Commerce, resulting in a dramatic increase in conversion rates and blended ROAS.",
    url: "#",
    image: "/fashion-ecommerce-website.png",
  },
  {
    company: "HealthBridge Clinics",
    industry: "Healthcare",
    description:
      "Implementing a local SEO foundation and intent-led paid search campaigns to establish HealthBridge Clinics as a leader in their regional market.",
    url: "#",
    image: "/consultation-meeting-planning.jpg",
  },
  {
    company: "PrimeLedger",
    industry: "Financial Services",
    description:
      "Refining the value proposition and narrative for PrimeLedger, coupled with a thought-leadership content program to drive high-quality inbound SQLs.",
    url: "#",
    image: "/strategy-planning-whiteboard.jpg",
  },
  {
    company: "CloudAnchor",
    industry: "B2B Infrastructure",
    description:
      "An integrated SEO-content system designed for CloudAnchor to capture market demand and increase organic non-brand traffic through strategic topic clusters.",
    url: "#",
    image: "/results-analytics-dashboard.jpg",
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
      description: study.description,
      url: study.url,
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
      <section className="border-b border-border/50 bg-background px-6 py-12">
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

      <section className="bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <FadeInSection key={study.company} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-52 w-full">
                    <Image src={study.image} alt={study.company} fill className="object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-beige">{study.industry}</p>
                    <h2 className="mb-4 text-2xl font-bold">{study.company}</h2>

                    <p className="flex-1 text-sm leading-relaxed text-foreground/75">{study.description}</p>

                    <Link
                      href={study.url}
                      target={study.url.startsWith("http") ? "_blank" : undefined}
                      rel={study.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex items-center font-semibold text-accent-beige transition-opacity hover:opacity-80"
                    >
                      Visit Project
                      {study.url.startsWith("http") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </Link>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-8">
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
