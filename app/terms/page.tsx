import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/seo"

const termSections = [
  {
    title: "Service Scope",
    points: [
      "Project scope, timelines, deliverables, and responsibilities are defined in written proposals or signed agreements.",
      "Work outside the agreed scope may require a revised estimate, schedule update, or additional approval.",
      "Client cooperation, timely feedback, and required asset access are necessary to maintain delivery timelines.",
    ],
  },
  {
    title: "Fees and Payments",
    points: [
      "Pricing, billing cycles, and payment milestones are specified in each service agreement.",
      "Late payments may pause active work until balances are cleared.",
      "Any third-party platform costs, ad spend, software subscriptions, or media purchases are billed separately unless otherwise stated.",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "Client-provided content, trademarks, and assets remain the property of the client.",
      "Final approved deliverables are transferred according to agreement terms once payment obligations are met.",
      "Bergs & Mark retains rights to internal frameworks, workflows, and proprietary operating methodologies unless explicitly assigned.",
    ],
  },
  {
    title: "Performance and Outcomes",
    points: [
      "Marketing performance is influenced by market conditions, competitive activity, client responsiveness, and budget decisions.",
      "We provide strategy, execution, and optimization services but cannot guarantee specific revenue outcomes.",
      "All recommendations are intended to improve probability of growth through structured, data-informed execution.",
    ],
  },
  {
    title: "Confidentiality",
    points: [
      "Both parties agree to protect confidential information shared during planning and delivery.",
      "Confidential information may only be used for service execution, reporting, and agreed operational needs.",
      "Case study publication or other public references require client consent unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Termination",
    points: [
      "Either party may terminate services based on notice periods defined in the governing agreement.",
      "Outstanding fees for completed work and approved in-progress deliverables remain payable.",
      "Upon termination, access handoff and final transfer steps will follow the terms outlined in the project agreement.",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Terms of Service</h1>
          <p className="mb-4 text-lg text-foreground/70">
            These terms describe the working standards and service conditions for engagements with Bergs & Mark.
          </p>
          <p className="text-base leading-relaxed text-foreground/65">
            Detailed commercial terms are provided in signed proposals or service agreements before project onboarding and execution.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          {termSections.map((section) => (
            <article key={section.title} className="rounded-lg border border-border/50 bg-background p-8">
              <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
              <ul className="space-y-3 text-sm leading-relaxed text-foreground/75">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-beige" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="rounded-lg border border-border/50 bg-background p-8">
            <h2 className="mb-4 text-2xl font-bold">Terms Contact</h2>
            <p className="text-sm leading-relaxed text-foreground/75">
              For contract or terms clarification, contact <span className="font-semibold text-accent-beige">bergsnmark@gmail.com</span>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Review Bergs & Mark terms of service including scope, payment terms, confidentiality, intellectual property, and engagement conditions.",
  path: "/terms",
  keywords: ["terms of service", "marketing agency terms", "service agreement terms"],
})
