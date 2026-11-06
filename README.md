# FAE-R INC.

Bilingual French/English Next.js public site describing FAE-R Medical Supplies, Initials Flux, and the eight operating spaces in the governance charter.

## Development

Use Node.js 22+, then `npm install` and `npm run dev`. Run `npm run build` for a production build and `npm run lint` for TypeScript checks.

## Deployment

Import `khalimouad/FAE-R` into Vercel with the Next.js preset and repository root as the root directory. Production branch: `main`. Subsequent pushes build automatically; feature branches receive preview deployments.

Set `NEXT_PUBLIC_CONTACT_EMAIL` to the verified business email in Vercel before enabling inquiry links. Without it, contact availability is shown clearly and no message is sent. Redeploy after changing this build-time setting.

## Current scope

Public information website. No user accounts, payment processing, database, or inquiry storage. Service availability and legal registration details still require confirmation. See `docs/PRODUCT_PLAN.md` for future milestones.
