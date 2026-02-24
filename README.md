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

## Contact invite form setup (Formspree)

The `Send an Invite` form uses Formspree when configured and falls back to `POST /api/invite` if Formspree env vars are missing.

Create a `.env.local` file with either:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

or

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

Notes:

- If both are set, `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is used.
- Because these vars are `NEXT_PUBLIC_*`, restart `pnpm dev` after updating `.env.local`.
