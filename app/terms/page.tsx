import type { Metadata } from "next"
import { generateMeta } from "@/lib/seo/seo-builder"

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="border-b border-border/50 bg-background px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Terms and Conditions
          </h1>
          <p className="text-lg text-foreground/70">
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Bergs & Mark website or engaging our services.
          </p>
          <p className="mt-4 text-sm text-foreground/50">
            Last Updated: March 9, 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-12 text-foreground/80">
          
          {/* 1. Definitions */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">1. Interpretation and Definitions</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>1.1. Definitions:</strong> For the purposes of these Terms and Conditions:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-accent-beige">
                <li><strong>"Agency"</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Bergs & Mark.</li>
                <li><strong>"Client"</strong> refers to the individual or legal entity accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                <li><strong>"Service"</strong> refers to the digital marketing, design, development, strategy, and consulting services provided by the Agency.</li>
                <li><strong>"Agreement"</strong> refers to the specific contract, proposal, or statement of work (SOW) signed by the Client and the Agency, incorporating these Terms.</li>
                <li><strong>"Deliverables"</strong> refers to all materials, reports, software, designs, and other work product created by the Agency for the Client as specified in the Agreement.</li>
              </ul>
            </div>
          </article>

          {/* 2. Services */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">2. Services</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>2.1. Scope of Services:</strong> The Agency shall provide the Services to the Client as described in the applicable Agreement or Statement of Work (SOW). Any changes to the scope of the Services must be agreed upon in writing by both parties and may be subject to additional fees.
              </p>
              <p>
                <strong>2.2. Performance:</strong> The Agency will perform the Services in a professional and workmanlike manner, in accordance with industry standards. The Agency retains the right to use third-party contractors, tools, or platforms to facilitate the delivery of Services.
              </p>
              <p>
                <strong>2.3. Exclusions:</strong> Unless explicitly stated in the Agreement, the Services do not include the cost of third-party software licenses, advertising media spend (e.g., Google Ads, Meta Ads), hosting fees, or domain registration. These costs are the sole responsibility of the Client.
              </p>
            </div>
          </article>

          {/* 3. Client Obligations */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">3. Client Obligations</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>3.1. Cooperation:</strong> The Client agrees to cooperate with the Agency in the performance of the Services and to provide any information, content, access credentials, or materials reasonably required by the Agency in a timely manner.
              </p>
              <p>
                <strong>3.2. Approvals:</strong> The Client is responsible for promptly reviewing and approving deliverables. Failure to provide feedback within [5] business days of receipt may be deemed as approval, and the Agency may proceed to the next stage of the project.
              </p>
              <p>
                <strong>3.3. Compliance:</strong> The Client represents and warrants that any materials provided to the Agency (including text, images, and data) do not infringe upon the intellectual property rights of any third party and comply with all applicable laws and regulations.
              </p>
            </div>
          </article>

          {/* 4. Fees and Payment */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">4. Fees and Payment</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>4.1. Invoicing:</strong> Fees for the Services will be set forth in the Agreement. Unless otherwise specified, invoices are due and payable within [14] days of the invoice date.
              </p>
              <p>
                <strong>4.2. Late Payments:</strong> Late payments may incur interest at a rate of [1.5%] per month or the maximum rate permitted by law, whichever is lower. The Agency reserves the right to suspend Services if any undisputed amount remains unpaid after the due date.
              </p>
              <p>
                <strong>4.3. Taxes:</strong> All fees are exclusive of applicable taxes, levies, or duties imposed by taxing authorities. The Client shall be responsible for the payment of all such taxes, excluding taxes based solely on the Agency's income.
              </p>
            </div>
          </article>

          {/* 5. Intellectual Property Rights */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">5. Intellectual Property Rights</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>5.1. Agency IP:</strong> The Agency retains all rights, title, and interest in and to its pre-existing intellectual property, including but not limited to proprietary methodologies, tools, code libraries, and generic design elements ("Agency Tools").
              </p>
              <p>
                <strong>5.2. Client IP:</strong> The Client retains all rights, title, and interest in and to its pre-existing intellectual property and any materials provided to the Agency.
              </p>
              <p>
                <strong>5.3. Deliverables:</strong> Upon full payment of all fees due, the Agency assigns to the Client all rights, title, and interest in the final Deliverables created specifically for the Client under the Agreement. This assignment does not include Agency Tools or third-party materials incorporated into the Deliverables, for which the Client is granted a non-exclusive, non-transferable license to use.
              </p>
            </div>
          </article>

          {/* 6. Confidentiality */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">6. Confidentiality</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>6.1. Definition:</strong> "Confidential Information" means any non-public information disclosed by one party to the other, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.
              </p>
              <p>
                <strong>6.2. Obligations:</strong> Each party agrees to hold the other party's Confidential Information in strict confidence and not to disclose it to any third party without the other party's prior written consent, except as required by law or to its employees, contractors, or advisors who have a need to know and are bound by confidentiality obligations.
              </p>
            </div>
          </article>

          {/* 7. Warranties and Disclaimers */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">7. Warranties and Disclaimers</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>7.1. Agency Warranty:</strong> The Agency warrants that the Services will be performed in a professional manner consistent with industry standards.
              </p>
              <p>
                <strong>7.2. Disclaimer:</strong> EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS". THE AGENCY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE AGENCY DOES NOT GUARANTEE SPECIFIC RESULTS, TRAFFIC LEVELS, OR REVENUE INCREASES FROM THE SERVICES.
              </p>
            </div>
          </article>

          {/* 8. Limitation of Liability */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>8.1. Limitation:</strong> IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT.
              </p>
              <p>
                <strong>8.2. Cap on Liability:</strong> THE AGENCY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT TO THE AGENCY IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </div>
          </article>

          {/* 9. Termination */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">9. Termination</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>9.1. Termination for Convenience:</strong> Unless otherwise specified in the Agreement, either party may terminate the Agreement for convenience upon providing [30] days' written notice to the other party.
              </p>
              <p>
                <strong>9.2. Termination for Cause:</strong> Either party may terminate the Agreement immediately upon written notice if the other party materially breaches the Agreement and fails to cure such breach within [14] days of receiving notice.
              </p>
              <p>
                <strong>9.3. Effect of Termination:</strong> Upon termination, the Client shall pay the Agency for all Services performed and expenses incurred up to the effective date of termination.
              </p>
            </div>
          </article>

          {/* 10. Non-Solicitation */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">10. Non-Solicitation</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                During the term of this Agreement and for a period of [12] months thereafter, neither party shall directly or indirectly solicit, hire, or attempt to hire any employee or contractor of the other party without the prior written consent of the other party.
              </p>
            </div>
          </article>

          {/* 11. Governing Law */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">11. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>11.1. Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction/State/Country], without regard to its conflict of law principles.
              </p>
              <p>
                <strong>11.2. Dispute Resolution:</strong> Any dispute arising out of or relating to this Agreement shall be resolved through good faith negotiations. If the dispute cannot be resolved within [30] days, it shall be submitted to binding arbitration in [City, State/Country] or the courts of [Jurisdiction].
              </p>
            </div>
          </article>

          {/* 12. Changes to Terms */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">12. Changes to Terms</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                The Agency reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least [30] days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use our Service after those revisions become effective, You agree to be bound by the revised terms.
              </p>
            </div>
          </article>

          {/* 13. Contact Information */}
          <article>
            <h2 className="mb-4 text-2xl font-bold text-foreground">13. Contact Us</h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-accent-beige">
                <li>By email: <span className="font-semibold text-accent-beige">bergsnmark@gmail.com</span></li>
                <li>By visiting the contact page on our website: <a href="/contact" className="text-accent-beige hover:underline">/contact</a></li>
              </ul>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = generateMeta({
  pageType: "general",
  title: "Terms and Conditions",
  description:
    "Comprehensive terms and conditions for Bergs & Mark, outlining service agreements, client obligations, intellectual property, and liability policies.",
  path: "/terms",
  keywords: ["terms and conditions", "agency service agreement", "legal terms", "digital agency contract"],
})
