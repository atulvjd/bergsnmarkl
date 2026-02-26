import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Building2, Globe, HeartPulse, Landmark, PenTool, ShoppingBag, Smartphone, Sparkles, Target, TrendingUp, Users } from "lucide-react"
import NewHeroSection from "@/components/new-hero-section"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Website Design",
    overview: "Build high-trust digital experiences that reflect your positioning and drive qualified inquiries.",
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
    benefits: ["Conversion-focused UX", "Mobile-first performance", "SEO-ready architecture", "CMS flexibility"],
  },
  {
    title: "Social Media",
    overview: "Create consistent, channel-native communication that turns brand visibility into business conversations.",
    image: "/social-media-content-creation-team.jpg",
    benefits: ["Editorial calendars", "Brand-consistent content", "Community engagement", "Performance reporting"],
  },
  {
    title: "Paid Ads",
    overview: "Scale predictable acquisition with audience-led campaigns and disciplined budget management.",
    image: "/paid-ads-campaign-google-meta-optimization.jpg",
    benefits: ["Audience segmentation", "Channel-specific creative", "Bid and budget optimization", "ROAS tracking"],
  },
  {
    title: "Email Marketing",
    overview: "Strengthen retention and customer value with lifecycle sequences built around buying behavior.",
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
    benefits: ["Lifecycle automation", "List segmentation", "Revenue-driving campaigns", "A/B test framework"],
  },
  {
    title: "SEO",
    overview: "Capture long-term demand with technical SEO, structured content systems, and authority-building.",
    image: "/growth-metrics-analytics.jpg",
    benefits: ["Keyword strategy", "Technical improvements", "Content optimization", "Authority building"],
  },
  {
    title: "Branding",
    overview: "Clarify your message, visual identity, and category positioning across every customer touchpoint.",
    image: "/abstract-brand-concept.jpg",
    benefits: ["Positioning systems", "Visual identity design", "Messaging hierarchy", "Guidelines and rollout"],
  },
]

const process = [
  {
    title: "Audit",
    description: "We map your funnel, channels, and performance baseline to identify growth blockers and opportunities.",
    output: "Output: baseline scorecard, priority bottlenecks, and quick-win actions.",
    icon: Target,
  },
  {
    title: "Strategy",
    description: "We define a prioritized roadmap with channel mix, KPIs, creative direction, and execution timelines.",
    output: "Output: 90-day roadmap with measurable targets and ownership.",
    icon: Sparkles,
  },
  {
    title: "Execution",
    description: "Our team ships the work across design, media, content, and automation with clear weekly momentum.",
    output: "Output: campaign assets, launches, and implementation milestones.",
    icon: Users,
  },
  {
    title: "Optimization",
    description: "We test, measure, and iterate continuously to improve performance and compounding outcomes.",
    output: "Output: experiment backlog, learning loops, and efficiency gains.",
    icon: TrendingUp,
  },
  {
    title: "Creative Production",
    description: "We build platform-ready creative assets, messaging variations, and campaign materials for each channel.",
    output: "Output: ad creatives, landing copy, and channel-specific content variants.",
    icon: PenTool,
  },
  {
    title: "Reporting & Alignment",
    description: "We share clear reporting dashboards and priority actions so your team always knows what happens next.",
    output: "Output: executive summaries, KPI movement, and next-step plans.",
    icon: BarChart3,
  },
]

const industries = [
  {
    title: "SaaS & Tech Startups",
    description: "Growth-led marketing and technical solution alignment for scaling software platforms.",
    example: "Focused on trial-to-paid conversion, user retention, and platform authority.",
    icon: Smartphone,
  },
  {
    title: "B2B Technology",
    description: "Enhancing market presence for firms providing complex technical solutions and infrastructure.",
    example: "Built for companies that depend on technical credibility and long-cycle lead quality.",
    icon: Globe,
  },
  {
    title: "Digital Agencies",
    description: "Helping other service providers grow through better systems and marketing execution.",
    example: "Scaling operations for creative, dev, and consulting firms through technical marketing.",
    icon: Users,
  },
  {
    title: "Professional Services",
    description: "Authority-led content and lead generation for specialized service firms.",
    example: "Supports legal, financial, and architectural firms with regulated communication needs.",
    icon: Landmark,
  },
  {
    title: "Coaches & Consultants",
    description: "Positioning, content systems, and automated systems to help people grow.",
    example: "For experts who need stronger thought leadership and consistent inbound pipelines.",
    icon: TrendingUp,
  },
  {
    title: "E-commerce & D2C",
    description: "Technical optimization and performance marketing for digital-first brands.",
    example: "Ideal for brands that rely on conversion-led UX and data-driven acquisition.",
    icon: ShoppingBag,
  },
]

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SITE_NAME} Digital Marketing Agency`,
  url: absoluteUrl("/"),
  description:
    "Digital marketing agency services including website design, social media management, paid ads, SEO, branding, and lifecycle marketing for service-focused brands.",
}

const homeServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Services",
  itemListElement: coreServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    description: service.overview,
    url: absoluteUrl("/services"),
  })),
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeServiceListSchema),
        }}
      />
      <NewHeroSection />

      <section className="bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Core Services</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Six focused service lines that work together as one centralized growth engine.</p>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
                Each service is planned to support the others, so your website, social presence, paid channels, and lifecycle programs move in one commercial direction instead of competing priorities.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {coreServices.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-accent-beige/50">
                  <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70">{service.overview}</p>
                  <ul className="space-y-2 text-sm text-foreground/75">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-beige" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">How We Work</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">A structured six-step methodology designed for clarity, speed, and measurable business impact.</p>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
                Our operating model minimizes communication gaps and keeps teams aligned on weekly priorities, launch readiness, and measurable outcomes across every channel.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <FadeInSection key={step.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-6 transition-colors hover:border-accent-beige/50">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-accent-beige/40">0{index + 1}</span>
                    <step.icon className="size-5 text-accent-beige" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{step.output}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Featured Case Studies</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Representative engagements showing how we solve specific growth challenges.</p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Elite Core Gym",
                result: "Digital Transformation",
                description: "High-performance digital platform with streamlined class scheduling and membership management.",
                detail: "Designed to drive athlete engagement and retention through a dynamic, user-centric interface.",
                image: "/professional-service-provider-website.jpg",
                url: "https://elitecoregym.vercel.app/",
              },
              {
                title: "Vellora Fashion",
                result: "E-commerce Excellence",
                description: "Premium e-commerce experience with minimalist design and seamless product discovery.",
                detail: "Optimized for the modern shopper with a focus on visual storytelling and conversion-led checkout flows.",
                image: "/luxury-e-commerce-storefront.jpg",
                url: "https://vellora-nrev.vercel.app/",
              },
              {
                title: "Filter Kaapi Co.",
                result: "Brand Identity & UX",
                description: "Inviting digital presence for a specialty coffee cafe with an integrated menu and ordering system.",
                detail: "Focused on driving local foot traffic through a warm, accessible interface and clear location-based CTAs.",
                image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
                url: "https://cafe-website-mu-neon.vercel.app/",
              },
              {
                title: "Prime Ledger",
                result: "Financial Technology",
                description: "High-performance financial management platform for modern businesses with real-time tracking.",
                detail: "Featuring automated bookkeeping and a secure, intuitive interface designed to streamline enterprise-grade accounting.",
                image: "/saas-dashboard-design-interface.jpg",
                url: "https://prime-ledger-2-t2cb.vercel.app/",
              },
            ].map((study, index) => (
              <FadeInSection key={study.title} delay={index * 0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-64">
                    <Image src={study.image} alt={study.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-beige">{study.result}</p>
                    <h3 className="mb-3 text-3xl font-bold">{study.title}</h3>
                    <p className="mb-6 text-foreground/70">{study.description}</p>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/65">{study.detail}</p>
                    <Link
                      href={study.url}
                      target={study.url.startsWith("http") ? "_blank" : undefined}
                      rel={study.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-auto inline-flex items-center font-semibold text-accent-beige transition-opacity hover:opacity-80"
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
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Why Choose Us</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Three principles that keep work centralized, accountable, and commercially focused.</p>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
                We are structured for long-term operating reliability, not one-off campaign bursts. That means stronger process control, cleaner reporting, and better performance continuity.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Centralized Delivery",
                description: "One integrated team manages strategy, production, and optimization across your channels.",
                detail: "You get unified planning and fewer handoff failures between vendors, freelancers, and internal teams.",
              },
              {
                title: "Commercial Focus",
                description: "Every campaign and asset is tied to revenue outcomes, not vanity metrics.",
                detail: "We prioritize lead quality, conversion value, retention health, and channel efficiency.",
              },
              {
                title: "Structured Execution",
                description: "Clear roadmaps, weekly priorities, and transparent reporting keep momentum consistent.",
                detail: "Execution discipline helps your business scale without losing speed or message consistency.",
              },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-accent-beige/50">
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Industries We Serve</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Sector expertise built around repeatable growth systems tailored to your market dynamics.</p>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
                We focus on service-driven categories where trust, authority, and consistent lead generation matter as much as channel-level performance.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry, index) => (
              <FadeInSection key={industry.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-7 transition-colors hover:border-accent-beige/50">
                  <industry.icon className="mb-4 size-6 text-accent-beige" />
                  <h3 className="mb-2 text-2xl font-bold">{industry.title}</h3>
                  <p className="text-foreground/70">{industry.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{industry.example}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-secondary/50 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Ready to Centralize Your Growth?</h2>
            <p className="mb-10 text-lg text-foreground/70">Let’s align your website, content, media, and lifecycle marketing into one professional system.</p>
            <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-foreground/65">
              We’ll review your current positioning, channel mix, and operational constraints, then recommend the most practical path to stronger lead quality and revenue consistency.
            </p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Book Your Strategy Call</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Agency for Service Businesses",
  description:
    "Bergs & Mark is a digital marketing agency delivering website design, social media management, paid ads, SEO, branding, and lifecycle marketing for measurable growth.",
  path: "/",
  keywords: [
    "marketing agency",
    "digital marketing company",
    "online marketing agency",
    "growth marketing services",
    "performance marketing",
    "service business marketing agency",
  ],
})
