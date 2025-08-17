-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create jobs table
create table public.jobs (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  requirements text[] default '{}'::text[],
  is_active boolean default true
);

-- Create applications table
create table public.applications (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  phone text not null,
  nationality text not null,
  position text not null,
  experience text not null,
  education text not null,
  passport_number text not null,
  visa_status text not null,
  status text default 'pending' check (status in ('pending', 'reviewing', 'interviewed', 'accepted', 'rejected')),
  cover_letter text,
  job_id uuid references public.jobs(id)
);

-- Create documents table
create table public.documents (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  application_id uuid references public.applications(id) on delete cascade not null,
  file_path text not null,
  file_name text not null,
  file_type text not null,
  file_size integer not null,
  document_type text not null check (document_type in ('resume', 'cover_letter'))
);

-- Create indexes
create index applications_email_idx on public.applications(email);
create index applications_status_idx on public.applications(status);
create index documents_application_id_idx on public.documents(application_id);

-- Set up Row Level Security (RLS)
alter table public.applications enable row level security;
alter table public.documents enable row level security;
alter table public.jobs enable row level security;

-- Create policies
create policy "Anyone can view active jobs"
  on public.jobs for select
  using (is_active = true);

create policy "Anyone can submit applications"
  on public.applications for insert
  with check (true);

create policy "Only admins can view applications"
  on public.applications for select
  using (auth.role() = 'authenticated');

create policy "Anyone can upload documents"
  on public.documents for insert
  with check (true);

create policy "Only admins can view documents"
  on public.documents for select
  using (auth.role() = 'authenticated');
