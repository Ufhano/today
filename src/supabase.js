import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vxaviwkqaugxbrgsagdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YXZpd2txYXVneGJyZ3NhZ2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTEzMjQsImV4cCI6MjA3NDY2NzMyNH0.HeiouZfyihPZa69Qqm7xzlu3NVGwFw3YOZntPjfKb3E";
const supabase = createClient(supabaseUrl, supabaseKey);
// give access to supabase client
export default supabase;
