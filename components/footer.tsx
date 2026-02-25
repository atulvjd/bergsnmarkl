"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="mb-4 text-2xl font-black tracking-tight text-accent-beige">Bergs & Mark</p>
            <p className="mb-3 text-sm text-foreground/70">Centralized digital growth systems for ambitious brands.</p>
            <p className="text-sm leading-relaxed text-foreground/65">
              We combine strategy, design, media, and lifecycle execution so your brand message stays consistent and your growth decisions stay data-backed.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">Navigation</h3>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li><Link href="/" className="transition-colors hover:text-accent-beige">Home</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-accent-beige">Services</Link></li>
              <li><Link href="/work" className="transition-colors hover:text-accent-beige">Work</Link></li>
              <li><Link href="/expertise" className="transition-colors hover:text-accent-beige">Expertise</Link></li>
              <li><Link href="/insights" className="transition-colors hover:text-accent-beige">Insights</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-accent-beige">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">Services</h3>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li><Link href="/services#website-design" className="transition-colors hover:text-accent-beige">Website Design</Link></li>
              <li><Link href="/services#social-media" className="transition-colors hover:text-accent-beige">Social Media</Link></li>
              <li><Link href="/services#paid-ads" className="transition-colors hover:text-accent-beige">Paid Ads</Link></li>
              <li><Link href="/services#email-marketing" className="transition-colors hover:text-accent-beige">Email Marketing</Link></li>
              <li><Link href="/services#seo" className="transition-colors hover:text-accent-beige">SEO</Link></li>
              <li><Link href="/services#branding" className="transition-colors hover:text-accent-beige">Branding</Link></li>
              <li><Link href="/services#video-production" className="transition-colors hover:text-accent-beige">Video Production</Link></li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-foreground/60">Built for service-focused brands that need consistent pipeline, stronger retention, and clear reporting.</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>bergsnmark@gmail.com</li>
              <li>+91 93017 03738</li>
              <li>
                <Link href="/contact#send-invite" className="transition-colors hover:text-accent-beige">
                  Send a Project Invite
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-foreground/60">Share your goals, timelines, and current setup. We will reply with practical next steps.</p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/50 pt-6 text-sm text-foreground/60">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Bergs & Mark. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-accent-beige">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-accent-beige">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
