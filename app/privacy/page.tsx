const privacySections = [
  {
    title: "Information We Collect",
    points: [
      "Contact details you submit, such as name, email address, phone number, and company information.",
      "Project details shared through forms, email, or calls, including goals, budgets, and timelines.",
      "Basic technical and usage data from website visits, such as browser type, pages viewed, and approximate location.",
    ],
  },
  {
    title: "How We Use Information",
    points: [
      "Respond to inquiries, prepare proposals, and deliver requested services.",
      "Improve website performance, content quality, and service experience.",
      "Share relevant updates related to our services, insights, and engagement opportunities.",
    ],
  },
  {
    title: "Information Sharing",
    points: [
      "We do not sell personal information.",
      "Data may be shared with trusted service providers used for hosting, analytics, communication, and operations.",
      "Information may be disclosed when required by law, regulation, or legal process.",
    ],
  },
  {
    title: "Data Retention and Security",
    points: [
      "Information is retained only as long as needed for communication, service delivery, legal requirements, and operational records.",
      "We apply reasonable technical and organizational safeguards to protect data from unauthorized access or misuse.",
      "No online transmission or storage method can be guaranteed as fully secure, so users should avoid sharing highly sensitive data through unsecured channels.",
    ],
  },
  {
    title: "Your Rights",
    points: [
      "You may request access, correction, or deletion of your personal information where applicable.",
      "You may opt out of non-essential communications at any time.",
      "You may contact us to ask how your information is collected, processed, or retained.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Privacy Policy</h1>
          <p className="mb-4 text-lg text-foreground/70">
            Bergs & Mark is committed to responsible data practices across website usage, inquiry handling, and service delivery.
          </p>
          <p className="text-base leading-relaxed text-foreground/65">
            This policy explains what information we collect, why we collect it, and how it is used to support communication, project planning, and marketing services.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          {privacySections.map((section) => (
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
            <h2 className="mb-4 text-2xl font-bold">Contact for Privacy Requests</h2>
            <p className="text-sm leading-relaxed text-foreground/75">
              For access, correction, deletion, or privacy-related questions, contact us at <span className="font-semibold text-accent-beige">bergsnmark@gmail.com</span>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "Privacy Policy — Bergs & Mark",
  description: "Learn how Bergs & Mark collects, uses, stores, and protects information shared through the website and service inquiries.",
}
