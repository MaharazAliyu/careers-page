import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ApplicationStatus = 'pending' | 'reviewing' | 'interviewed' | 'accepted' | 'rejected';

export interface Application {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  nationality: string;
  position: string;
  experience: string;
  education: string;
  passport_number: string;
  visa_status: string;
  status: ApplicationStatus;
  cover_letter?: string;
}

export interface Document {
  id: string;
  created_at: string;
  application_id: string;
  file_path: string;
  file_name: string;
  file_type: string;
  file_size: number;
  document_type: 'resume' | 'cover_letter';
}

export interface Job {
  id: string;
  created_at: string;
  title: string;
  description: string;
  requirements: string[];
  is_active: boolean;
}
