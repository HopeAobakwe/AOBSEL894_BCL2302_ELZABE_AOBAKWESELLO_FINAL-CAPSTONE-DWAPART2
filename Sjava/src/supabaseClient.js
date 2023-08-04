import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ggvtfogehnhfhlalrczl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndnRmb2dlaG5oZmhsYWxyY3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNjcxNTEsImV4cCI6MjAwNjY0MzE1MX0.ukFQXvKM652wKDHn0roWZ_i_vbeg3wO79Srdwlmtt80')


export {supabase}