import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dxbnayqyrrtdgtdiprjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Ym5heXF5cnJ0ZGd0ZGlwcmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxODA2OTIsImV4cCI6MjA2MDc1NjY5Mn0.npj1uRTEczJGdjFH3e7RS41U8CpF1L1rzYDVZjiJDNw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
