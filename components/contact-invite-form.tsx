"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type SubmitState = "idle" | "sending" | "success" | "error"

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgwareo"
const envFormspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim()
const envFormspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim()

const FORMSPREE_ENDPOINT = envFormspreeEndpoint || (envFormspreeFormId ? `https://formspree.io/f/${envFormspreeFormId}` : DEFAULT_FORMSPREE_ENDPOINT)

function getFormspreeErrorMessage(body: unknown) {
  if (!body || typeof body !== "object") {
    return null
  }

  const payload = body as { error?: unknown; errors?: Array<{ message?: unknown }> }
  const errorList = payload.errors

  if (Array.isArray(errorList) && typeof errorList[0]?.message === "string" && errorList[0].message.trim().length > 0) {
    return errorList[0].message
  }

  if (typeof payload.error === "string" && payload.error.trim().length > 0) {
    return payload.error
  }

  return null
}

function getApiErrorMessage(body: unknown) {
  if (!body || typeof body !== "object") {
    return null
  }

  const payload = body as { error?: unknown }
  if (typeof payload.error === "string" && payload.error.trim().length > 0) {
    return payload.error
  }

  return null
}

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
      const submitUrl = FORMSPREE_ENDPOINT || "/api/invite"
      const usingFormspree = Boolean(FORMSPREE_ENDPOINT)

      const response = await fetch(
        submitUrl,
        usingFormspree
          ? {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              body: (() => {
                const body = new FormData()
                body.append("name", payload.name)
                body.append("mobile", payload.mobile)
                body.append("email", payload.email)
                body.append("message", payload.message)
                body.append("_subject", "New invite request")
                return body
              })(),
            }
          : {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(payload),
            },
      )

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        const errorFromService = usingFormspree ? getFormspreeErrorMessage(body) : getApiErrorMessage(body)
        throw new Error(errorFromService ?? "Unable to send invite right now.")
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
      <p className="text-sm leading-relaxed text-foreground/70">
        Provide your current goals, challenges, and desired timeline so we can return a focused recommendation instead of a generic response.
      </p>
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
      <p className="text-xs leading-relaxed text-foreground/60">
        By submitting this form, you agree to be contacted regarding your inquiry and recommended service options.
      </p>
      {submitState === "success" ? <p className="text-sm text-green-400">Invite sent. We will reach out shortly.</p> : null}
      {submitState === "error" ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
    </form>
  )
}
