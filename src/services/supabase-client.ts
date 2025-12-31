import { createClient } from "@supabase/supabase-js";
import { type Database } from "../../database.types";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient<Database>(
  import.meta.env.VITE_PROJECT_URL,
  supabaseKey
);
