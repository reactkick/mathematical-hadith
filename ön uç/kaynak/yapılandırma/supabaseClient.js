// frontend/src/lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Bu bilgileri .env dosyasında saklamak en güvenlisidir.
const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL'; // https://fyaklqvocgfhjdmlqwbg.supabase.co
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5YWtscXZvY2dmaGpkbWxxd2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMDQ1MDcsImV4cCI6MjA3MDg4MDUwN30.I9ztdtKSjGceWBe8us9ii6MUZzfJnpKcV6w_8S2zSOg

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
