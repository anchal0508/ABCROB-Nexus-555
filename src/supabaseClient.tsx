import { createClient } from '@supabase/supabase-js';

// Sirf Vite ka syntax use karein
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are missing in your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
