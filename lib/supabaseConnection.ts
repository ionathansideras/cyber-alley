import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
    process.env.NEXT_SUPABASE_URL!,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
);

export { supabase };
