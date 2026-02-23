"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type SubmitState = "idle" | "sending" | "success" | "error"

export function ContactInviteForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState("sending")
    setErrorMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    }

    try {
      const response = await fetch("/api/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(body?.error ?? "Unable to send invite right now.")
      }

      form.reset()
      setSubmitState("success")
    } catch (error) {
      setSubmitState("error")
      setErrorMessage(error instanceof Error ? error.message : "Unable to send invite right now.")
    }
  }

  return (
    <form className="space-y-5" aria-label="Send an invite form" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground/80">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your full name" className="h-11 border-border/50 focus-visible:ring-accent-beige/30" />
        </div>
        <div>
          <label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-foreground/80">
            Mobile Number
          </label>
          <Input id="mobile" name="mobile" required placeholder="+1 (555) 123-4567" className="h-11 border-border/50 focus-visible:ring-accent-beige/30" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground/80">
          Email
        </label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" className="h-11 border-border/50 focus-visible:ring-accent-beige/30" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground/80">
          Message
        </label>
        <Textarea id="message" name="message" required placeholder="Tell us about your goals, current setup, and timeline." className="min-h-36 border-border/50 focus-visible:ring-accent-beige/30" />
      </div>
      <Button
        type="submit"
        disabled={submitState === "sending"}
        className="h-auto rounded-lg bg-white px-8 py-4 font-bold text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "sending" ? "Sending..." : "Send Invite"}
      </Button>
      {submitState === "success" ? <p className="text-sm text-green-400">Invite sent. We will reach out shortly.</p> : null}
      {submitState === "error" ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
    </form>
  )
}
