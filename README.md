# Agency website build

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/atulvjds-projects/v0-agency-website-build)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/vizJouydZas)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/atulvjds-projects/v0-agency-website-build](https://vercel.com/atulvjds-projects/v0-agency-website-build)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/vizJouydZas](https://v0.app/chat/vizJouydZas)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Contact invite backend setup

The `Send an Invite` form now submits to `POST /api/invite`, which sends:

- Email using Resend
- WhatsApp message using Twilio WhatsApp API

Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
INVITE_EMAIL_FROM=Agency <no-reply@yourdomain.com>
INVITE_EMAIL_TO=your-inbox@company.com

TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+1xxxxxxxxxx
```

Notes:

- `TWILIO_WHATSAPP_FROM` must be your approved Twilio WhatsApp sender.
- Use E.164 phone format (for example, `+14155551234`).
- You only need one delivery channel configured (`Resend` or `Twilio WhatsApp`) for invites to be sent.
- If neither channel is configured, the API returns a configuration error response.
