
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js/dist/module'
export const supabase = createClient(
    'https://ggvtfogehnhfhlalrczl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndnRmb2dlaG5oZmhsYWxyY3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNjcxNTEsImV4cCI6MjAwNjY0MzE1MX0.ukFQXvKM652wKDHn0roWZ_i_vbeg3wO79Srdwlmtt80'
)
export default function Base() {
  return (
    <div>
      <Auth
       supabaseClient={supabase}
       appearance={{ theme: ThemeSupa }}
       theme="dark"
     />
    </div>
  )
}