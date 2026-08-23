# Exam Aspirant — generated full-app foundation

This project implements the product shell and core end-to-end loop: onboarding, real server-side password hashing/session cookie, persistent JSON server store, goals, study timer/session persistence, XP/levels, dashboard, configurable AI proxy, PWA manifest/service worker, responsive glass UI, tests/leaderboard/community/profile surfaces.

## Run
`npm install`
`cp .env.example .env`
`npm run dev`

## Important production step
The JSON store is intentionally a development persistence layer so the project runs without requiring an external database. For a true production deployment matching the master specification, replace `app/api/store.ts` with PostgreSQL/Prisma (or another managed relational DB), add migrations, rate limiting, CSRF/security headers, real notifications, moderation, complete friends/leaderboard/mock-test analytics, automated tests and observability. AI is never faked: it returns configuration error until `AI_API_KEY` is set server-side.
