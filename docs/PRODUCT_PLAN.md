# FAE-R INC. — Product requirements and delivery plan

Source: *Plan de Projet & Charte de Gouvernance 2* (uploaded PDF, November 2026). This is a **working interpretation**, not an approved specification.

## Company context
First Aid Express Response Inc. is described as a Quebec-based B2B brokerage serving SMEs and institutions. Founder and legal representative: Ayoub Khali. Two divisions:
- **FAE-R Medical Supplies**: first-aid kits, replenishment, AED/DEA equipment.
- **Initials Flux**: first-aid training, workplace health and safety (SST) workshops and audits; AKFLUX method.

The source lists eight operational spaces. Preserve their labels and functions:
| Space | Business role | Proposed digital module |
| --- | --- | --- |
| Blue | Direction, governance, finance | Executive dashboard, approvals, finance overview |
| Black | SST, Initials Flux, CNESST | Training catalog, requests, sessions, audits |
| White | Medical supplies | Product catalog, quote requests, replenishment |
| Red | Sales development and prospecting | CRM, pipeline, follow-ups |
| Silver | Direct B2B | Company portal, orders and service requests |
| Gold | B2B2C / B2C2B | Partner offers, employee programs |
| Transparent | C2B feedback | Feedback forms and custom requests |
| Brown | C2C mutual-aid network | Independent first-aider directory, opt-in network |

## MVP priority (proposal)
1. Public bilingual FR/EN institutional site explaining both divisions and providing contact / quote forms.
2. Secure internal admin with company/contact CRM, opportunities and quote management.
3. Medical supply catalog and replenishment request workflow (no payment gateway in MVP).
4. Initials Flux training catalog, booking/request intake and session administration.
5. Basic partner and customer accounts, status tracking and documents.
6. Later: approval workflows, partner offers, network, analytics and integrations.

## Data model draft
Organization, User, Role, Company, Contact, Lead, Opportunity, Product, Quote, QuoteItem, Training, Session, Enrollment, ServiceRequest, Supplier, Document, AuditEvent.

## Guardrails
- The uploaded plan does **not** specify full role permissions, prices, product SKUs, payment methods, certification capabilities or legal compliance implementation. Obtain approval before shipping these.
- Do not advertise CNESST certification or compliance guarantees unless verified. Regulatory content requires review by qualified Quebec personnel.
- Store no sensitive client or employee data before access controls, privacy notices, secure storage, audit logging and retention policies are implemented.
- The document says NEQ is pending finalization while its deployment phase labels registration finalized. Confirm the actual registry status.
- CTI/RTI recovery statements in the plan are company aspirations, not a technical or tax guarantee.
- Do not use the uploaded logo image until the authorized brand asset is supplied.

## Implementation milestones
- M0: approve requirements, visual assets, bilingual content, user roles and privacy requirements.
- M1: Next.js public site and division landing pages.
- M2: database schema, authentication, RBAC, organization and CRM.
- M3: catalogs, quote workflow and training intake.
- M4: customer portal, admin dashboards, QA, accessibility and staging deployment.

## Acceptance criteria for M1
- French and English navigation and content.
- Responsive homepage and dedicated Medical Supplies / Initials Flux pages.
- Clear contact and quote CTAs, no false claims about operational features.
- Build, typecheck and accessibility smoke tests pass.

## Open questions
1. Is the platform primarily public B2B acquisition, internal ERP, or both?
2. Which exact services and products can be sold now?
3. Should customers pay online or only request quotes?
4. Who will manage operations besides Ayoub?
5. Is there an approved logo, brand palette and domain?
