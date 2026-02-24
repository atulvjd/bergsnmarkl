import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "website-design",
    category: "Design",
    title: "Website Design",
    description: "Conversion-focused websites that combine premium visual design with measurable performance.",
    context: "Best for brands that need clearer positioning, stronger trust signals, and better lead capture from existing traffic.",
    features: [
      "Information architecture and UX mapping",
      "Responsive design system",
      "CMS implementation and governance",
      "Technical SEO foundations",
      "Speed and accessibility optimization",
      "Conversion tracking setup",
    ],
    image: "/beautiful-responsive-website-design-on-desktop-and.jpg",
  },
  {
    id: "social-media",
    category: "Social",
    title: "Social Media Management",
    description: "Strategic social programs that strengthen brand presence and create qualified engagement.",
    context: "Ideal when your channels need consistent publishing, stronger storytelling, and clearer performance accountability.",
    features: [
      "Content pillars and monthly calendars",
      "Channel-specific creative production",
      "Community and inbox management",
      "Campaign support and coordination",
      "Audience growth strategy",
      "Performance analytics and insights",
    ],
    image: "/social-media-content-creation-team.jpg",
  },
  {
    id: "paid-ads",
    category: "Performance",
    title: "Paid Ads",
    description: "Full-funnel acquisition campaigns across Google, Meta, and short-form video channels.",
    context: "Built for teams that want predictable pipeline growth while improving CAC and channel efficiency.",
    features: [
      "Audience and intent segmentation",
      "Creative testing framework",
      "Budget allocation and pacing",
      "Landing page optimization",
      "Attribution and conversion tracking",
      "ROAS and CAC optimization",
    ],
    image: "/paid-ads-campaign-google-meta-optimization.jpg",
  },
  {
    id: "email-marketing",
    category: "Lifecycle",
    title: "Email Marketing",
    description: "Lifecycle automation and campaign systems that increase repeat revenue and retention.",
    context: "Useful for businesses with existing leads or customers that are under-monetized after first conversion.",
    features: [
      "Segmentation and lifecycle strategy",
      "Automated flow architecture",
      "Promotional and editorial campaigns",
      "Personalization frameworks",
      "Deliverability monitoring",
      "Revenue reporting dashboards",
    ],
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
  },
  {
    id: "seo",
    category: "Organic",
    title: "SEO",
    description: "Long-term organic growth through technical foundations, content strategy, and authority building.",
    context: "Designed for brands that need compounding demand generation through search visibility and topical authority.",
    features: [
      "Keyword and topic mapping",
      "Technical and on-page optimization",
      "Content brief development",
      "Internal linking architecture",
      "Authority and backlink strategy",
      "Ranking and traffic reporting",
    ],
    image: "/growth-metrics-analytics.jpg",
  },
  {
    id: "branding",
    category: "Brand",
    title: "Branding",
    description: "Clear positioning and visual identity systems designed to differentiate your company.",
    context: "Recommended when messaging is inconsistent, category fit is unclear, or market perception needs an upgrade.",
    features: [
      "Market and competitor analysis",
      "Positioning and messaging framework",
      "Visual identity design",
      "Brand voice and narrative",
      "Guideline documentation",
      "Rollout support across channels",
    ],
    image: "/abstract-brand-concept.jpg",
  },
  {
    id: "video-production",
    category: "Creative",
    title: "Video Production",
    description: "Performance-oriented video production for paid media, social, and brand storytelling.",
    context: "Supports awareness and conversion goals with platform-specific creative made for modern attention spans.",
    features: [
      "Concepting and scripting",
      "Production planning",
      "On-site or remote shooting",
      "Edit and cutdown versions",
      "Platform-specific optimization",
      "Creative performance analysis",
    ],
    image: "/promotional-video-production-setup-studio.jpg",
  },
  {
    id: "content-marketing",
    category: "Content",
    title: "Content Marketing",
    description: "Editorial and campaign content programs designed to build authority and generate demand.",
    context: "Works best for brands that want a repeatable publishing engine tied to business goals and search strategy.",
    features: [
      "Content strategy and planning",
      "Long-form and short-form production",
      "SEO-aligned topic clusters",
      "Distribution and repurposing workflows",
      "Lead magnet development",
      "Performance reporting and optimization",
    ],
    image: "/team-collaboration-meeting-professional-environmen.jpg",
  },
  {
    id: "marketing-automation",
    category: "Automation",
    title: "Marketing Automation",
    description: "Scalable automation systems for lead nurturing, handoffs, and lifecycle marketing efficiency.",
    context: "Critical for sales cycles that need better follow-up timing, routing logic, and lifecycle progression.",
    features: [
      "Automation architecture design",
      "CRM and ESP integration",
      "Lead scoring and routing logic",
      "Behavioral trigger workflows",
      "Sales and marketing alignment",
      "Operational dashboard setup",
    ],
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
  },
  {
    id: "ecommerce-growth",
    category: "E-Commerce",
    title: "E-Commerce Growth",
    description: "Retention and acquisition systems tailored for online stores and product-led businesses.",
    context: "Focused on increasing first-purchase conversion, repeat orders, and customer lifetime value.",
    features: [
      "Product page conversion optimization",
      "Cart abandonment recovery flows",
      "Catalog and merchandising strategy",
      "Offer and promotion planning",
      "Subscription and repeat purchase strategy",
      "AOV and LTV improvement plans",
    ],
    image: "/fashion-ecommerce-website.png",
  },
  {
    id: "local-seo",
    category: "Local",
    title: "Local SEO & Maps Growth",
    description: "Local search visibility programs for service businesses and multi-location brands.",
    context: "Perfect for location-driven services where map ranking and local trust influence booking volume.",
    features: [
      "Google Business Profile optimization",
      "Local landing page structure",
      "Citation and listing management",
      "Review generation strategy",
      "Geo-targeted keyword mapping",
      "Local ranking performance tracking",
    ],
    image: "/consultation-meeting-planning.jpg",
  },
  {
    id: "analytics-reporting",
    category: "Analytics",
    title: "Analytics & Reporting",
    description: "Measurement systems that connect channel performance to business outcomes and decisions.",
    context: "For teams that need cleaner visibility into what is driving qualified demand and where to reallocate spend.",
    features: [
      "GA4 and tracking implementation",
      "Attribution model setup",
      "Executive dashboard design",
      "KPI framework definition",
      "Weekly and monthly reporting cadence",
      "Insight-led optimization recommendations",
    ],
    image: "/growth-metrics-analytics.jpg",
  },
  {
    id: "reputation-management",
    category: "Trust",
    title: "Online Reputation Management",
    description: "Brand trust programs to monitor, improve, and protect public perception across channels.",
    context: "Useful when brand sentiment, review quality, or public confidence directly impacts conversion rates.",
    features: [
      "Review and sentiment monitoring",
      "Response framework and guidelines",
      "Crisis communication playbooks",
      "Trust asset development",
      "Brand mention tracking",
      "Reputation trend reporting",
    ],
    image: "/professional-team-working-on-laptop-in-modern-offi.jpg",
  },
]

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SITE_NAME} Services`,
  url: absoluteUrl("/services"),
  description:
    "Explore digital marketing services including website design, social media management, paid ads, SEO, branding, automation, and analytics.",
}

const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Agency Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: absoluteUrl(`/services#${service.id}`),
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: absoluteUrl("/"),
      },
    },
  })),
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceItemListSchema),
        }}
      />
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Services Built for <span className="text-accent-beige">Structured Growth</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">
              Every service is designed to plug into a centralized system so your brand, acquisition, and retention efforts stay aligned.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
              Instead of disconnected tactics, we plan execution around your business model, sales cycle, capacity, and commercial targets so each channel contributes to one shared growth objective.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Service Categories</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Consistent delivery models across strategy, design, content, and performance.</p>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
                Every engagement includes practical planning, transparent milestone tracking, and measurable reporting so you can see what was executed, why it was prioritized, and how it impacted outcomes.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeInSection key={service.id} delay={index * 0.04}>
                <article id={service.id} className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-56 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-accent-beige/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent-beige">
                      {service.category}
                    </span>
                    <h3 className="mb-3 text-3xl font-bold">{service.title}</h3>
                    <p className="mb-6 text-foreground/70">{service.description}</p>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/60">{service.context}</p>
                    <ul className="mb-8 space-y-2 text-sm text-foreground/75">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-beige" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-auto w-fit rounded-lg bg-accent-beige font-bold text-background hover:bg-accent-beige/90">
                      <Link href="/contact">Book Consultation</Link>
                    </Button>
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
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Need a Tailored Service Mix?</h2>
            <p className="mb-10 text-lg text-foreground/70">We’ll map the right service stack based on your goals, current capabilities, and growth stage.</p>
            <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-foreground/65">
              Our recommendations focus on delivery practicality, investment efficiency, and the fastest path to measurable progress in lead quality, conversion consistency, and retention strength.
            </p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Schedule Strategy Session</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Services",
  description:
    "Explore Bergs & Mark digital marketing services: website design, social media management, paid ads, SEO, branding, automation, content, analytics, and reputation management.",
  path: "/services",
  keywords: [
    "digital marketing services",
    "website design services",
    "social media marketing services",
    "paid advertising services",
    "search engine optimization services",
    "email marketing services",
  ],
})
