import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, buildPageMetadata, SITE_NAME } from "@/lib/seo"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Strategic Clarity",
    description: "We define clear objectives, priorities, and decision criteria before execution starts.",
    impact: "This prevents reactive decisions and keeps every initiative tied to a commercial objective.",
  },
  {
    title: "Execution Discipline",
    description: "Structured workflows and accountability ensure quality, speed, and consistency.",
    impact: "Defined operating cadence helps teams deliver reliably without losing creative standards.",
  },
  {
    title: "Measurable Impact",
    description: "Every initiative is tied to outcomes that matter to your business and revenue goals.",
    impact: "Transparent reporting connects channel activity with pipeline quality, retention, and revenue growth.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Strategy Lead",
    bio: "Growth strategist focused on positioning, commercial planning, and leadership alignment.",
    specialty: "Leads market positioning workshops, service mix planning, and executive growth roadmaps.",
    image: "/professional-headshot-woman-ceo-founder.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Leads design systems, storytelling, and visual quality across every engagement.",
    specialty: "Owns visual systems, creative frameworks, and cross-channel brand consistency.",
    image: "/professional-headshot-man-designer-creative-direct.jpg",
  },
  {
    name: "Alex Martinez",
    role: "Performance Marketing Lead",
    bio: "Builds and scales paid acquisition systems with rigorous tracking and optimization.",
    specialty: "Manages media architecture, testing cadence, and budget efficiency optimization.",
    image: "/professional-headshot-man-marketing-growth.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Content & Social Lead",
    bio: "Develops editorial and social frameworks that drive relevance and engagement.",
    specialty: "Builds content systems designed for authority, relevance, and demand generation.",
    image: "/professional-headshot-woman-entrepreneur.jpg",
  },
]

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: absoluteUrl("/about"),
  description:
    "Learn about Bergs & Mark, a digital marketing agency focused on service business growth through integrated strategy, creative, media, and optimization.",
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <section className="border-b border-border/50 bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              About <span className="text-accent-beige">Bergs & Mark</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">We help ambitious brands centralize their marketing and scale through structured, integrated execution.</p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-foreground/65">
              Our work is built for service-focused businesses that need stronger demand generation, clearer positioning, and reliable operational momentum across every channel.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <FadeInSection>
            <div>
              <h2 className="mb-6 text-5xl font-black leading-tight">Our Story</h2>
              <p className="mb-4 text-foreground/70">Bergs & Mark was founded to solve a common problem: fragmented marketing execution. Too many businesses work with disconnected vendors, resulting in inconsistent messaging and uneven performance.</p>
              <p className="mb-4 text-foreground/70">We built a model where strategy, creative, media, and optimization live in one coordinated system. The result is faster execution, clearer decision-making, and stronger growth outcomes.</p>
              <p className="text-foreground/70">
                Today, we partner with healthcare teams, consultants, legal and financial firms, and other growth-minded service brands that value discipline, transparency, and long-term performance.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="relative h-[420px] overflow-hidden rounded-lg border border-border/50">
              <Image src="/team-collaboration.jpg" alt="Bergs and Mark team collaboration" fill className="object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Mission & Vision</h2>
            <p className="mb-4 text-lg text-foreground/70">
              Mission: Build centralized growth systems that help brands scale with confidence.
            </p>
            <p className="mb-4 text-lg text-foreground/70">
              Vision: Be the strategic partner known for combining operational rigor with creative quality.
            </p>
            <p className="text-base leading-relaxed text-foreground/65">
              We believe sustainable growth comes from alignment between brand narrative, channel execution, and performance accountability, not isolated campaign activity.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-10 text-center text-5xl font-black leading-tight md:text-6xl">Core Values</h2>
            <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-foreground/65">
              Our values directly shape planning priorities, communication cadence, and delivery standards across every engagement.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-8 transition-colors hover:border-accent-beige/50">
                  <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{value.impact}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-10 text-center text-5xl font-black leading-tight md:text-6xl">Team</h2>
            <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-foreground/65">
              A cross-functional team built around strategic planning, creative execution, performance optimization, and transparent reporting.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-colors hover:border-accent-beige/50">
                  <div className="relative h-64 w-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="mb-3 text-sm font-semibold text-accent-beige">{member.role}</p>
                    <p className="mb-3 text-foreground/70">{member.bio}</p>
                    <p className="text-sm leading-relaxed text-foreground/60">{member.specialty}</p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-10 text-center text-5xl font-black leading-tight md:text-6xl">Why Choose Us</h2>
            <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-foreground/65">
              We are designed to function like an extension of your core team, with clear ownership, proactive communication, and measurable delivery.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Unified strategy and delivery across channels",
              "Senior-led planning with practical execution detail",
              "Transparent reporting and measurable outcomes",
            ].map((item, index) => (
              <FadeInSection key={item} delay={index * 0.08}>
                <div className="flex h-full items-center rounded-lg border border-border/50 bg-background p-8 text-center transition-colors hover:border-accent-beige/50">
                  <p className="text-lg font-semibold text-foreground/80">{item}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Let’s Build What’s Next</h2>
            <p className="mb-10 text-lg text-foreground/70">Partner with a team that combines strategic structure with execution excellence.</p>
            <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-foreground/65">
              We will assess your current setup, identify the biggest growth constraints, and map a practical implementation plan built around your priorities.
            </p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = buildPageMetadata({
  title: "About Bergs & Mark Marketing Agency",
  description:
    "Learn the Bergs & Mark agency story, mission, values, and team behind our structured digital marketing execution model.",
  path: "/about",
  keywords: [
    "about marketing agency",
    "digital marketing experts",
    "growth marketing team",
    "performance marketing specialists",
    "service business marketing partner",
  ],
})
