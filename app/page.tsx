import Image from "next/image"
import Link from "next/link"
import { BarChart3, Building2, Globe, HeartPulse, Landmark, PenTool, ShoppingBag, Smartphone, Sparkles, Target, TrendingUp, Users } from "lucide-react"
import NewHeroSection from "@/components/new-hero-section"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Website Design",
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
    benefits: ["Conversion-focused UX", "Mobile-first performance", "SEO-ready architecture", "CMS flexibility"],
  },
  {
    title: "Social Media",
    image: "/social-media-content-creation-team.jpg",
    benefits: ["Editorial calendars", "Brand-consistent content", "Community engagement", "Performance reporting"],
  },
  {
    title: "Paid Ads",
    image: "/paid-ads-campaign-google-meta-optimization.jpg",
    benefits: ["Audience segmentation", "Channel-specific creative", "Bid and budget optimization", "ROAS tracking"],
  },
  {
    title: "Email Marketing",
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
    benefits: ["Lifecycle automation", "List segmentation", "Revenue-driving campaigns", "A/B test framework"],
  },
  {
    title: "SEO",
    image: "/growth-metrics-analytics.jpg",
    benefits: ["Keyword strategy", "Technical improvements", "Content optimization", "Authority building"],
  },
  {
    title: "Branding",
    image: "/abstract-brand-concept.jpg",
    benefits: ["Positioning systems", "Visual identity design", "Messaging hierarchy", "Guidelines and rollout"],
  },
]

const process = [
  {
    title: "Audit",
    description: "We map your funnel, channels, and performance baseline to identify growth blockers and opportunities.",
    icon: Target,
  },
  {
    title: "Strategy",
    description: "We define a prioritized roadmap with channel mix, KPIs, creative direction, and execution timelines.",
    icon: Sparkles,
  },
  {
    title: "Execution",
    description: "Our team ships the work across design, media, content, and automation with clear weekly momentum.",
    icon: Users,
  },
  {
    title: "Optimization",
    description: "We test, measure, and iterate continuously to improve performance and compounding outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Creative Production",
    description: "We build platform-ready creative assets, messaging variations, and campaign materials for each channel.",
    icon: PenTool,
  },
  {
    title: "Reporting & Alignment",
    description: "We share clear reporting dashboards and priority actions so your team always knows what happens next.",
    icon: BarChart3,
  },
]

const industries = [
  { title: "SaaS", description: "Pipeline growth and activation systems.", icon: Globe },
  { title: "E-commerce", description: "Acquisition and retention programs.", icon: ShoppingBag },
  { title: "Healthcare", description: "Trust-first digital patient journeys.", icon: HeartPulse },
  { title: "Financial Services", description: "Compliance-aware growth strategy.", icon: Landmark },
  { title: "Professional Services", description: "Lead generation and authority building.", icon: Building2 },
  { title: "Mobile Apps", description: "Install-to-retention lifecycle marketing.", icon: Smartphone },
]

const testimonials = [
  {
    name: "Priya Mehta",
    role: "CMO, NovaSuite",
    image: "/professional-headshot-woman-ceo-founder.jpg",
    quote: "Bergs & Mark gave us a clear growth system. In six months, pipeline quality and conversion rates both materially improved.",
  },
  {
    name: "Daniel Ross",
    role: "Founder, Atelier Commerce",
    image: "/professional-headshot-man-business.jpg",
    quote: "They aligned brand, site, and paid media into one strategy. The consistency lifted revenue and made decision-making faster.",
  },
  {
    name: "Elena Cruz",
    role: "Director, HealthBridge",
    image: "/professional-headshot-woman-entrepreneur.jpg",
    quote: "Execution quality is high and communication is direct. We always know priorities, performance, and next actions.",
  },
]

export default function Home() {
  return (
    <main>
      <NewHeroSection />

      <section className="bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Core Services</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Six focused service lines that work together as one centralized growth engine.</p>
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

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">How We Work</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">A structured six-step methodology designed for clarity, speed, and measurable business impact.</p>
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
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Featured Case Studies</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Representative engagements showing how we solve specific growth challenges.</p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "E-commerce Repositioning",
                result: "+210% conversion rate",
                description: "Unified website redesign, paid acquisition, and email automation for a premium retail brand.",
                image: "/fashion-ecommerce-website.png",
              },
              {
                title: "B2B SaaS Expansion",
                result: "3x pipeline velocity",
                description: "Refined category messaging, content distribution, and demand generation sequencing.",
                image: "/saas-dashboard-design-interface.jpg",
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
                    <Link href="/work" className="mt-auto font-semibold text-accent-beige transition-opacity hover:opacity-80">
                      View Full Case Study
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Why Choose Us</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Three principles that keep work centralized, accountable, and commercially focused.</p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Centralized Delivery",
                description: "One integrated team manages strategy, production, and optimization across your channels.",
              },
              {
                title: "Commercial Focus",
                description: "Every campaign and asset is tied to revenue outcomes, not vanity metrics.",
              },
              {
                title: "Structured Execution",
                description: "Clear roadmaps, weekly priorities, and transparent reporting keep momentum consistent.",
              },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-accent-beige/50">
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Industries We Serve</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">Sector expertise built around repeatable growth systems tailored to your market dynamics.</p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry, index) => (
              <FadeInSection key={industry.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-7 transition-colors hover:border-accent-beige/50">
                  <industry.icon className="mb-4 size-6 text-accent-beige" />
                  <h3 className="mb-2 text-2xl font-bold">{industry.title}</h3>
                  <p className="text-foreground/70">{industry.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Client Testimonials</h2>
              <p className="mx-auto max-w-3xl text-lg text-foreground/70">What partners say about our process quality, communication, and results.</p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={testimonial.name} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-7 transition-colors hover:border-accent-beige/50">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/50">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/75">"{testimonial.quote}"</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-secondary/50 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Ready to Centralize Your Growth?</h2>
            <p className="mb-10 text-lg text-foreground/70">Let’s align your website, content, media, and lifecycle marketing into one professional system.</p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Book Your Strategy Call</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Bergs & Mark — Digital Growth Agency",
  description:
    "Centralized digital growth strategy for ambitious brands. Website design, social media, paid ads, email marketing, SEO, and branding under one coordinated team.",
}
