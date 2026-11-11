-- FAE-R operational data model (proposal; NOT deployed)
-- Apply only to a dedicated FAE-R Supabase project after review.
create extension if not exists pgcrypto;

create table if not exists public.fae_organizations (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 name text not null check (length(trim(name)) between 1 and 180),
 category text not null check (category in ('supplier','customer','partner')),
 division text not null check (division in ('medical','training','both')),
 created_at timestamptz not null default now()
);
create table if not exists public.fae_opportunities (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 organization_id uuid not null references public.fae_organizations(id) on delete cascade,
 title text not null check (length(trim(title)) between 1 and 200),
 stage text not null default 'new' check (stage in ('new','review','proposal','approved','closed','lost')),
 next_action text not null default '',
 due_date date,
 created_at timestamptz not null default now(),
 unique (id, owner_id)
);
create table if not exists public.fae_quotations (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 opportunity_id uuid not null,
 status text not null default 'draft' check (status in ('draft','review','approved','sent','accepted','declined','cancelled')),
 currency char(3) not null default 'CAD' check (currency = 'CAD'),
 subtotal_cents bigint not null default 0 check (subtotal_cents >= 0),
 taxes_cents bigint not null default 0 check (taxes_cents >= 0),
 created_at timestamptz not null default now(),
 foreign key (opportunity_id,owner_id) references public.fae_opportunities(id,owner_id)
);
create table if not exists public.fae_quotation_lines (
 id uuid primary key default gen_random_uuid(),
 quotation_id uuid not null,
 owner_id uuid not null references auth.users(id) on delete cascade,
 description text not null check (length(trim(description)) between 1 and 500),
 quantity numeric(12,2) not null check (quantity > 0),
 unit_price_cents bigint not null check (unit_price_cents >= 0),
 created_at timestamptz not null default now(),
 foreign key (quotation_id, owner_id) references public.fae_quotations(id, owner_id) on delete cascade
);
create index if not exists fae_org_owner_idx on public.fae_organizations(owner_id);
create index if not exists fae_opp_owner_idx on public.fae_opportunities(owner_id);
create index if not exists fae_quotes_owner_idx on public.fae_quotations(owner_id);
create index if not exists fae_lines_quote_idx on public.fae_quotation_lines(quotation_id);

alter table public.fae_organizations enable row level security;
alter table public.fae_opportunities enable row level security;
alter table public.fae_quotations enable row level security;
alter table public.fae_quotation_lines enable row level security;

create policy "Owner access organizations" on public.fae_organizations for all to authenticated
 using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
create policy "Owner access opportunities" on public.fae_opportunities for all to authenticated
 using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
create policy "Owner access quotations" on public.fae_quotations for all to authenticated
 using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
create policy "Owner access quotation lines" on public.fae_quotation_lines for all to authenticated
 using (owner_id = (select auth.uid()) and exists (
  select 1 from public.fae_quotations q where q.id = quotation_id and q.owner_id = (select auth.uid())
 )) with check (owner_id = (select auth.uid()) and exists (
  select 1 from public.fae_quotations q where q.id = quotation_id and q.owner_id = (select auth.uid())
 ));
-- Further production review: audit logging, retention policy, organization-level RBAC,
-- quotation status transitions and transactional recalculation of quote totals.
