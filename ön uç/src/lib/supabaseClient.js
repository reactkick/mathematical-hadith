// frontend/src/lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Değişkenleri doğrudan yazmak yerine process.env'den okuyoruz.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;

// Değişkenlerin .env dosyasında tanımlı olduğundan emin olmak için bir kontrol ekleyelim.
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Key must be defined in your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
