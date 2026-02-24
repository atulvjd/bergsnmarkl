import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle2, Cog, ShieldCheck } from "lucide-react"
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
    name: "Sarah Johnson",
    role: "Founder & Strategy Lead",
    bio: "Leads growth strategy, market positioning, and executive planning sessions.",
    specialty: "Owns commercial planning, market narrative clarity, and strategic prioritization.",
    image: "/professional-headshot-woman-ceo-founder.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Oversees brand systems, design quality, and creative production standards.",
    specialty: "Leads visual direction, messaging presentation, and creative quality assurance.",
    image: "/professional-headshot-man-designer-creative-direct.jpg",
  },
  {
    name: "Alex Martinez",
    role: "Performance Lead",
    bio: "Owns paid media, measurement frameworks, and budget optimization.",
    specialty: "Manages paid acquisition systems, experimentation logic, and performance accountability.",
    image: "/professional-headshot-man-marketing-growth.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Content & Social Lead",
    bio: "Builds editorial systems and platform-native social growth plans.",
    specialty: "Develops content operations that support authority building and sustained demand generation.",
    image: "/professional-headshot-woman-entrepreneur.jpg",
  },
]

export default function ExpertisePage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Expertise Backed by <span className="text-accent-beige">Process and Discipline</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">
              We combine strategic planning, specialized talent, and proven operating methods to deliver consistent growth outcomes.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
              Our expertise is built around repeatable systems that connect creative quality, channel execution, and commercial performance across complex service-oriented markets.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Our Process</h2>
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-foreground/65">
                A practical operating model that keeps strategy, execution, and optimization connected from kickoff through scaling.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-4">
            {process.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-7 transition-colors hover:border-accent-beige/50">
                  <p className="mb-3 text-4xl font-black text-accent-beige/40">0{index + 1}</p>
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70">{item.detail}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.outcome}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Team</h2>
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-foreground/65">
                Senior specialists across strategy, creative, performance, and content working as one delivery unit.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-60 w-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mb-3 text-sm font-semibold text-accent-beige">{member.role}</p>
                    <p className="mb-3 text-sm text-foreground/70">{member.bio}</p>
                    <p className="text-sm leading-relaxed text-foreground/60">{member.specialty}</p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Core Values</h2>
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-foreground/65">
                These values drive day-to-day decisions on prioritization, quality standards, and communication discipline.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Clarity", text: "Clear priorities, clear reporting, clear accountability.", icon: CheckCircle2 },
              { title: "Rigor", text: "Data-backed strategy and disciplined execution standards.", icon: ShieldCheck },
              { title: "Collaboration", text: "Integrated teams working as one system for your brand.", icon: Cog },
            ].map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-accent-beige/50">
                  <value.icon className="mb-4 size-6 text-accent-beige" />
                  <h3 className="mb-2 text-2xl font-bold">{value.title}</h3>
                  <p className="text-foreground/70">{value.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Certifications & Awards</h2>
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-foreground/65">
                Our team maintains recognized certifications and industry standards to ensure execution quality across major marketing platforms.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Google Ads Certified Team",
              "Meta Blueprint Certified",
              "Top 100 Growth Agency Recognition",
            ].map((item, index) => (
              <FadeInSection key={item} delay={index * 0.08}>
                <div className="flex h-full items-center gap-3 rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-accent-beige/50">
                  <Award className="size-5 text-accent-beige" />
                  <p className="font-semibold">{item}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Methodologies</h2>
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-foreground/65">
                Structured frameworks that help us move quickly while maintaining consistency in planning, delivery, and optimization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Full-Funnel Growth Model",
              "90-Day Experimentation Sprints",
              "Message-Market Fit Framework",
              "Conversion Rate Optimization Loop",
              "Lifecycle Value Expansion",
              "Integrated Reporting Cadence",
            ].map((method, index) => (
              <FadeInSection key={method} delay={index * 0.05}>
                <div className="rounded-lg border border-border/50 bg-card p-6 text-center transition-colors hover:border-accent-beige/50">
                  <p className="font-semibold text-foreground/80">{method}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2}>
            <div className="mt-16 text-center">
              <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
                <Link href="/contact">Work With Our Team</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Expertise — Bergs & Mark",
  description: "Meet our team, process, methodologies, and operating principles for consistent digital growth execution.",
}
