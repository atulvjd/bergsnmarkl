import { NextResponse } from "next/server"
import { z } from "zod"

export const runtime = "nodejs"

const inviteSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120, "Name is too long"),
  mobile: z.string().trim().min(7, "Mobile number is required").max(30, "Mobile number is too long"),
  email: z.string().trim().email("A valid email is required"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(4000, "Message is too long"),
})

type InvitePayload = z.infer<typeof inviteSchema>

type DeliveryResult = {
  ok: boolean
  error?: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function buildEmailHtml(payload: InvitePayload) {
  return `
    <h2>New Invite Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Mobile:</strong> ${escapeHtml(payload.mobile)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
  `
}

async function sendEmailInvite(payload: InvitePayload): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.INVITE_EMAIL_FROM
  const to = process.env.INVITE_EMAIL_TO

  if (!apiKey || !from || !to) {
    return { ok: false, error: "Email service is not configured" }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `New Invite: ${payload.name}`,
        html: buildEmailHtml(payload),
      }),
    })

    if (!response.ok) {
      const details = await response.text()
      return { ok: false, error: `Email failed: ${details}` }
    }

    return { ok: true }
  } catch (error) {
    return { ok: false, error: `Email failed: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = inviteSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid form data" }, { status: 400 })
    }

    const emailResult = await sendEmailInvite(parsed.data)

    if (!emailResult.ok) {
      console.error("Invite delivery error", { email: emailResult })
      return NextResponse.json(
        {
          error: "Invite delivery failed.",
          details: { email: emailResult },
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Invite API unexpected error", error)
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
