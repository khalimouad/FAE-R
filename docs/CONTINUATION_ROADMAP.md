# FAE-R — continuation from the original bilingual preview

**Protected baseline:** `codex/bilingual-public-site` at commit `b627ee8ad9ca32a082ca66ac04d38e144545dfc6`.
**Development branch:** `feat/continue-original-preview`.
**Do not replace:** the original bilingual design, illustrations, accessibility, animations, or brand assets.

## Confirmed in existing preview source
- French and English copy with `?lang=fr` / `?lang=en` selection.
- FAE-R Medical Supplies and Initials Flux divisions.
- Eight operational spaces.
- Custom medical SVG, section navigation, reduced-motion support.
- Contact and quote links use `NEXT_PUBLIC_CONTACT_EMAIL` when configured.

## Next work, in order
1. **Audit and harden the original experience:** verify all navigation and language switching, responsive layout, accessible contrast and keyboard navigation; ensure contact buttons do not open an empty email address when the environment variable is unset.
2. **Functional B2B inquiries:** implement an accessible bilingual quote form with server-side validation, spam protection, privacy consent and a configured delivery destination. Do not store or email sensitive medical data.
3. **Medical Supplies catalog:** categories for first-aid kits, replenishment and AED/DEA; product data and availability must be provided/approved by FAE-R.
4. **Initials Flux catalog:** training and audit inquiry flows; do not assert unverified CNESST accreditation.
5. **Commercial operations:** CRM and supplier/customer records only after choosing a database, access control and retention policy.
6. **QA and preview deployment:** build/typecheck, smoke-test FR/EN, test the inquiry end-to-end, deploy this branch as a preview, then request approval before production merge.

## Business-source alignment
The uploaded governance charter defines two divisions and eight spaces but does not provide SKUs, price lists, trainer qualifications, approved contact addresses, customer-account requirements or payment flows. Those are open product decisions, not established facts.

## Release safeguards
- Never force-push or overwrite `main` or `codex/bilingual-public-site`.
- Prefer small reviewable commits on this development branch.
- No live contact form without an approved inbox, delivery test and privacy disclosure.
- Production deployment only after validation of the preview.
