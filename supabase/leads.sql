create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  message text not null default '',
  source text not null,
  page_url text not null default '',
  whatsapp_updates boolean not null default false
);

alter table public.leads enable row level security;
revoke all on table public.leads from anon, authenticated;
grant insert on table public.leads to service_role;
grant select (id) on table public.leads to service_role;
