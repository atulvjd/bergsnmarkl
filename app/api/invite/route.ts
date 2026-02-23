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
  skipped?: boolean
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

function buildWhatsAppBody(payload: InvitePayload) {
  return [
    "New Invite Request",
    `Name: ${payload.name}`,
    `Mobile: ${payload.mobile}`,
    `Email: ${payload.email}`,
    "Message:",
    payload.message,
  ].join("\n")
}

async function sendEmailInvite(payload: InvitePayload): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.INVITE_EMAIL_FROM
  const to = process.env.INVITE_EMAIL_TO

  if (!apiKey || !from || !to) {
    return { ok: false, skipped: true, error: "Email service is not configured" }
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

async function sendWhatsAppInvite(payload: InvitePayload): Promise<DeliveryResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const from = process.env.TWILIO_WHATSAPP_FROM
  const to = process.env.TWILIO_WHATSAPP_TO

  if (!accountSid || !authToken || !from || !to) {
    return { ok: false, skipped: true, error: "WhatsApp service is not configured" }
  }

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`
  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64")

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: from,
        To: to,
        Body: buildWhatsAppBody(payload),
      }).toString(),
    })

    if (!response.ok) {
      const details = await response.text()
      return { ok: false, error: `WhatsApp failed: ${details}` }
    }

    return { ok: true }
  } catch (error) {
    return { ok: false, error: `WhatsApp failed: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = inviteSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid form data" }, { status: 400 })
    }

    const [emailResult, whatsappResult] = await Promise.all([sendEmailInvite(parsed.data), sendWhatsAppInvite(parsed.data)])
    const results = { email: emailResult, whatsapp: whatsappResult }
    const configuredDeliveries = [emailResult, whatsappResult].filter((result) => !result.skipped)
    const hasSuccessfulDelivery = configuredDeliveries.some((result) => result.ok)

    if (configuredDeliveries.length === 0) {
      console.error("Invite delivery error: no providers configured", results)
      return NextResponse.json(
        {
          error: "Invite delivery is not configured.",
          details: results,
        },
        { status: 503 },
      )
    }

    if (!hasSuccessfulDelivery) {
      console.error("Invite delivery error", results)
      return NextResponse.json(
        {
          error: "Invite delivery failed.",
          details: results,
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, details: results })
  } catch (error) {
    console.error("Invite API unexpected error", error)
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
