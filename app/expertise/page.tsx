import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Cog, ShieldCheck } from "lucide-react"
import { generateMeta } from "@/lib/seo/seo-builder"
import { getAbsoluteUrl, SEO_CONFIG } from "@/lib/seo/seo-config"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const process = [
  {
    title: "Discovery",
    detail: "Business audit, customer analysis, and growth opportunity mapping.",
    outcome: "Defines market context, conversion blockers, and opportunity priorities before planning starts.",
  },
  {
    title: "Planning",
    detail: "Roadmap creation with defined KPIs, channel roles, and execution cadence.",
    outcome: "Translates strategy into practical delivery milestones with clear accountability.",
  },
  {
    title: "Delivery",
    detail: "Cross-functional production and campaign deployment with weekly check-ins.",
    outcome: "Ships creative, channel, and lifecycle work in synchronized execution cycles.",
  },
  {
    title: "Optimization",
    detail: "Testing, reporting, and iterative improvements based on performance data.",
    outcome: "Improves lead quality, conversion efficiency, and revenue contribution over time.",
  },
]

const team = [
  {
    name: "Atul Sahu",
    role: "Founder & Managing Director",
    bio: "Leads growth strategy, market positioning, and executive planning sessions.",
    specialty: "Owns commercial planning, market narrative clarity, and strategic prioritization.",
    image: "/atul-sahu.jpg",
  },
  {
    name: "Utsav Doye",
    role: "Finance Operations Manager",
    bio: "Manages financial planning, budget allocation, and performance reporting systems.",
    specialty: "Ensures financial discipline, transparent reporting, and data-backed budget decisions.",
    image: "/professional-headshot-man-marketing-growth.jpg",
  },
  {
    name: "Sidharth Mishra",
    role: "Media Manager & Content Strategist",
    bio: "Oversees social media strategy, content calendar management, and platform-specific growth tactics.",
    specialty: "Drives audience engagement and brand authority through tailored content strategies and consistent social presence.",
    image: "/sidharth-mishra.png",
  },
  {
    name: "Sahitya Singh",
    role: "Design Lead & Creative Strategist",
    bio: "Leads creative direction, visual branding, and design execution across all marketing channels.",
    specialty: "Ensures cohesive brand identity and high-quality creative output that resonates with target audiences and supports campaign objectives.",
    image: "/professional-headshot-man-designer-creative-direct.jpg",
  },
]

const expertisePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SEO_CONFIG.brandName} Marketing Expertise`,
  url: getAbsoluteUrl("/expertise"),
  description:
    "Explore Bergs & Mark expertise in strategy, creative production, paid media, SEO, analytics, and disciplined growth execution.",
}

export default function ExpertisePage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(expertisePageSchema),
        }}
      />
      <section className="border-b border-border/50 bg-background px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Expertise Backed by <span className="text-accent-beige">Process and Discipline</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base md:text-lg text-foreground/70">
              We combine strategic planning, specialized talent, and proven operating methods to deliver consistent growth outcomes.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
              Our expertise is built around repeatable systems that connect creative quality, channel execution, and commercial performance across complex service-oriented markets.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Our Process</h2>
              <p className="mx-auto max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
                A practical operating model that keeps strategy, execution, and optimization connected from kickoff through scaling.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {process.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-6 md:p-7 transition-colors hover:border-accent-beige/50">
                  <p className="mb-3 text-3xl md:text-4xl font-black text-accent-beige/40">0{index + 1}</p>
                  <h3 className="mb-2 text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70">{item.detail}</p>
                  <p className="mt-3 text-xs md:text-sm leading-relaxed text-foreground/60">{item.outcome}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Team</h2>
              <p className="mx-auto max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
                Senior specialists across strategy, creative, performance, and content working as one delivery unit.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 0.05}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-accent-beige/50 hover:bg-card shadow-sm hover:shadow-lg">
                  <div className="relative h-64 w-full shrink-0">
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-1 text-xl font-black tracking-tight text-white">{member.name}</h3>
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-beige">{member.role}</p>
                    <div className="mt-auto space-y-4">
                      <p className="text-xs leading-relaxed text-foreground/70">{member.bio}</p>
                      <p className="border-l-2 border-accent-beige/30 pl-3 text-[10px] font-bold uppercase tracking-wider text-foreground/50">{member.specialty}</p>
                    </div>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Core Values</h2>
              <p className="mx-auto max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
                These values drive day-to-day decisions on prioritization, quality standards, and communication discipline.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              { title: "Clarity", text: "Clear priorities, clear reporting, clear accountability.", icon: CheckCircle2 },
              { title: "Rigor", text: "Data-backed strategy and disciplined execution standards.", icon: ShieldCheck },
              { title: "Collaboration", text: "Integrated teams working as one system for your brand.", icon: Cog },
            ].map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-6 md:p-8 transition-colors hover:border-accent-beige/50">
                  <value.icon className="mb-4 size-6 text-accent-beige" />
                  <h3 className="mb-2 text-xl md:text-2xl font-bold">{value.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70">{value.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Methodologies</h2>
              <p className="mx-auto max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
                Structured frameworks that help us move quickly while maintaining consistency in planning, delivery, and optimization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {[
              "Content-Led Authority Systems",
              "90-Day Performance Sprints",
              "High-Trust Positioning Framework",
              "Conversion-First Design Systems",
              "Lifecycle Revenue Automation",
              "Centralized Reporting Cadence",
            ].map((method, index) => (
              <FadeInSection key={method} delay={index * 0.05}>
                <div className="rounded-lg border border-border/50 bg-card p-5 md:p-6 text-center transition-colors hover:border-accent-beige/50">
                  <p className="text-sm md:text-base font-semibold text-foreground/80">{method}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2}>
            <div className="mt-12 md:mt-16 text-center">
              <Button asChild size="lg" className="h-auto w-full sm:w-auto rounded-lg bg-white px-10 py-5 text-lg font-bold text-black hover:bg-white/90">
                <Link href="/contact">Work With Our Team</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = generateMeta({
  pageType: "general",
  title: "Digital Marketing Expertise and Process",
  description:
    "Review Bergs & Mark expertise, team capabilities, operating methodology, and delivery framework for consistent digital marketing performance.",
  path: "/expertise",
  keywords: [
    "digital marketing expertise",
    "marketing strategy process",
    "performance marketing methodology",
    "agency operating model",
    "growth marketing framework",
  ],
})
