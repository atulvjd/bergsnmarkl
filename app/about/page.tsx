import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Strategic Clarity",
    description: "We define clear objectives, priorities, and decision criteria before execution starts.",
  },
  {
    title: "Execution Discipline",
    description: "Structured workflows and accountability ensure quality, speed, and consistency.",
  },
  {
    title: "Measurable Impact",
    description: "Every initiative is tied to outcomes that matter to your business and revenue goals.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Strategy Lead",
    bio: "Growth strategist focused on positioning, commercial planning, and leadership alignment.",
    image: "/professional-headshot-woman-ceo-founder.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Leads design systems, storytelling, and visual quality across every engagement.",
    image: "/professional-headshot-man-designer-creative-direct.jpg",
  },
  {
    name: "Alex Martinez",
    role: "Performance Marketing Lead",
    bio: "Builds and scales paid acquisition systems with rigorous tracking and optimization.",
    image: "/professional-headshot-man-marketing-growth.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Content & Social Lead",
    bio: "Develops editorial and social frameworks that drive relevance and engagement.",
    image: "/professional-headshot-woman-entrepreneur.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              About <span className="text-accent-beige">Bergs & Mark</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">We help ambitious brands centralize their marketing and scale through structured, integrated execution.</p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <FadeInSection>
            <div>
              <h2 className="mb-6 text-5xl font-black leading-tight">Our Story</h2>
              <p className="mb-4 text-foreground/70">Bergs & Mark was founded to solve a common problem: fragmented marketing execution. Too many businesses work with disconnected vendors, resulting in inconsistent messaging and uneven performance.</p>
              <p className="text-foreground/70">We built a model where strategy, creative, media, and optimization live in one coordinated system. The result is faster execution, clearer decision-making, and stronger growth outcomes.</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="relative h-[420px] overflow-hidden rounded-lg border border-border/50">
              <Image src="/team-collaboration.jpg" alt="Bergs and Mark team collaboration" fill className="object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Mission & Vision</h2>
            <p className="mb-4 text-lg text-foreground/70">
              Mission: Build centralized growth systems that help brands scale with confidence.
            </p>
            <p className="text-lg text-foreground/70">
              Vision: Be the strategic partner known for combining operational rigor with creative quality.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-5xl font-black leading-tight md:text-6xl">Core Values</h2>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-8 transition-colors hover:border-accent-beige/50">
                  <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-5xl font-black leading-tight md:text-6xl">Team</h2>
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
                    <p className="text-foreground/70">{member.bio}</p>
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
            <h2 className="mb-16 text-center text-5xl font-black leading-tight md:text-6xl">Why Choose Us</h2>
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

      <section className="border-y border-border/50 bg-background px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Let’s Build What’s Next</h2>
            <p className="mb-10 text-lg text-foreground/70">Partner with a team that combines strategic structure with execution excellence.</p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "About — Bergs & Mark",
  description: "Learn our story, mission, values, and team behind our centralized digital growth model.",
}
