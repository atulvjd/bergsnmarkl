import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { FadeInSection } from "@/components/motion-wrapper"
import { ContactInviteForm } from "@/components/contact-invite-form"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What happens in the first consultation?",
    answer: "We review your current funnel, business priorities, and growth constraints, then outline immediate opportunities and a recommended service mix.",
  },
  {
    question: "Do you work with in-house teams?",
    answer: "Yes. We often operate as an extension of internal marketing and product teams with clear ownership boundaries.",
  },
  {
    question: "What engagement models are available?",
    answer: "We offer project-based delivery, monthly retainers, and phased roadmaps depending on your goals and timeline.",
  },
  {
    question: "How quickly can we start?",
    answer: "Most engagements start within 1-2 weeks after scope alignment and kickoff planning.",
  },
]

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
              Contact Our <span className="text-accent-beige">Growth Team</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-foreground/70">Tell us your goals and we’ll design a clear, professional path to measurable outcomes.</p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <FadeInSection>
            <div className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-8">
              <h2 className="mb-4 text-4xl font-black">Consultation Booking</h2>
              <p className="mb-6 text-foreground/70">Book a 30-minute strategy call to review your current setup and identify high-leverage improvements.</p>
              <ul className="mb-8 space-y-3 text-sm text-foreground/75">
                {[
                  "Business and channel audit summary",
                  "Priority recommendations",
                  "Suggested service roadmap",
                  "Timeline and resourcing guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-beige" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-auto w-fit rounded-lg bg-accent-beige font-bold text-background hover:bg-accent-beige/90">
                <Link href="https://calendly.com/bergsandmark" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </Link>
              </Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="relative h-[420px] overflow-hidden rounded-lg border border-border/50">
              <Image src="/consultation-meeting-planning.jpg" alt="Consultation planning session" fill className="object-cover" />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-40">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <FadeInSection>
            <div className="rounded-lg border border-border/50 bg-card p-8">
              <h2 className="mb-4 text-4xl font-black">Send an Invite</h2>
              <p className="mb-8 text-foreground/70">Invite us into your project with key details and we will reply with a structured next-step plan.</p>
              <ContactInviteForm />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8">
              <h3 className="mb-4 text-3xl font-black">Connect on Social Media</h3>
              <p className="mb-8 text-foreground/70">Follow and message us directly on social channels.</p>
              <div className="mt-2 flex flex-wrap gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background transition-colors hover:border-accent-beige/60 hover:text-accent-beige"
                >
                  <Instagram className="size-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background transition-colors hover:border-accent-beige/60 hover:text-accent-beige"
                >
                  <Facebook className="size-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background transition-colors hover:border-accent-beige/60 hover:text-accent-beige"
                >
                  <Linkedin className="size-5" />
                </Link>
              </div>

              <div className="mt-10 rounded-lg border border-border/50 bg-background p-6">
                <h4 className="mb-2 text-xl font-bold">Need Faster Support?</h4>
                <p className="mb-4 text-foreground/70">Book directly and we will align quickly on your priorities and timeline.</p>
                <ul className="mb-5 space-y-2 text-sm text-foreground/75">
                  {[
                    "Quick response and scheduling",
                    "Priority goals review",
                    "Timeline and delivery alignment",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-beige" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="rounded-lg bg-accent-beige font-bold text-background hover:bg-accent-beige/90">
                  <Link href="https://calendly.com/bergsandmark" target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-background px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-5xl font-black leading-tight md:text-6xl">Contact Methods</h2>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Email",
                detail: "hello@bergsandmark.com",
                note: "Best for project details",
                icon: Mail,
              },
              {
                title: "Phone",
                detail: "+1 (555) 234-5678",
                note: "Business hours support",
                icon: Phone,
              },
              {
                title: "Calendar",
                detail: "calendly.com/bergsandmark",
                note: "Direct strategy booking",
                icon: CalendarDays,
              },
            ].map((method, index) => (
              <FadeInSection key={method.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8 text-center transition-colors hover:border-accent-beige/50">
                  <method.icon className="mx-auto mb-4 size-6 text-accent-beige" />
                  <h3 className="mb-2 text-2xl font-bold">{method.title}</h3>
                  <p className="mb-1 font-semibold text-accent-beige">{method.detail}</p>
                  <p className="text-sm text-foreground/60">{method.note}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-40">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-5xl font-black leading-tight md:text-6xl">Quick FAQ</h2>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <FadeInSection key={faq.question} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-lg border border-border/50 bg-background p-7 transition-colors hover:border-accent-beige/50">
                  <h3 className="mb-2 text-xl font-bold">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Ready to Start?</h2>
            <p className="mb-10 text-lg text-foreground/70">We’ll help you prioritize the right next move for your growth stage.</p>
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-10 py-5 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="https://calendly.com/bergsandmark" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Contact — Bergs & Mark",
  description: "Book a consultation, connect by phone or email, and review common questions before kickoff.",
}
