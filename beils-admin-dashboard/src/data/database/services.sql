create table public.services (
  id uuid not null default gen_random_uuid (),
  name character varying null,
  description character varying null,
  type character varying not null,
  subtype character varying not null,
  session_price numeric null,
  bono_session numeric null,
  image character varying null,
  is_active boolean not null default true,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint services_pkey primary key (id)
) TABLESPACE pg_default;