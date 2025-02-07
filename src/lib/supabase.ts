
import { createClient } from '@supabase/supabase-js';

// Since we're using the Lovable Supabase integration, we can access 
// the URL and key directly without environment variables
export const supabase = createClient(
  'https://gqswezecnzldrhkqxnxo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxc3dlemVjbnpsZHJoa3F4bnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTc5MzUsImV4cCI6MjAyNDM3MzkzNX0.E6cQdJ8KW6KErMKUTSMBTRu1_ZtBdwMkCcqBgpQHpjM'
);
