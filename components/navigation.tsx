"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tight text-accent-beige transition-opacity hover:opacity-80">
          <Image src="/nav-logo.png" alt="Bergs & Mark Logo" width={32} height={32} className="h-8 w-auto object-contain" />
          Bergs & Mark
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors hover:text-accent-beige"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild className="rounded-lg bg-accent-beige px-6 py-2 font-bold text-background hover:bg-accent-beige/90">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-border/50 bg-transparent hover:border-accent-beige/50 hover:bg-accent-beige/10">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l border-border/50 bg-background">
              <SheetTitle className="flex items-center gap-2 text-xl font-black tracking-tight text-accent-beige">
                <Image src="/nav-logo.png" alt="Bergs & Mark Logo" width={24} height={24} className="h-6 w-auto object-contain" />
                Bergs & Mark
              </SheetTitle>
              <div className="mt-6 space-y-4">
                {topLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg border border-border/50 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:border-accent-beige/50 hover:text-accent-beige"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
