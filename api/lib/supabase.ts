import { createClient } from "@supabase/supabase-js";

const ssoSupabase = createClient(
  process.env.SSO_SUPABASE_URL,
  process.env.SSO_SUPABASE_ANON_KEY
);

const portalSupabase = createClient(
  process.env.PORTAL_SUPABASE_URL,
  process.env.PORTAL_SUPABASE_ANON_KEY
);

export { ssoSupabase, portalSupabase };
