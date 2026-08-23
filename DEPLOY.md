# Exam Aspirant — Deploy Guide

## Fastest GitHub/Codespaces path

1. Upload/extract this project so `package.json` is at the repository root.
2. Open the Codespaces terminal.
3. Run:
   ```bash
   npm install
   npm run build
   npm run start
   ```
4. Open the forwarded port shown by Codespaces.

## AI configuration

Copy `.env.example` to `.env.local` and set:

- `AI_API_KEY` — your provider API key
- `AI_BASE_URL` — optional OpenAI-compatible endpoint
- `AI_MODEL` — optional model name (default: `gpt-5-mini`)

Never commit `.env.local`.

## Important persistence note

The current app stores users/progress in `data.json` on the server filesystem. This is convenient for local/Codespaces testing, but serverless deployments with ephemeral filesystems may not retain data between instances/redeploys. For production, replace `app/api/store.ts` with a persistent database adapter.

## Production build

The source already contains the frontend pages and API routes. No separate frontend/backend repository is required.
