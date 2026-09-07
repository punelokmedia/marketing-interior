# Save form submissions in Supabase

The homepage quote form, free quote popup and contact page POST to `/api/leads`.
The server validates the fields and saves them to Supabase before returning success.
Existing Web3Forms email notifications run after the save and are best effort.
The blog newsletter is separate and is not connected by this integration.

1. Create a Supabase project at https://supabase.com/dashboard.
2. Open its SQL Editor and run `supabase/leads.sql` from this repository.
3. Find your project URL and create/copy a **secret** API key (`sb_secret_...`) in the project settings.
4. Create `.env.local` in the project root with:

   ```dotenv
   SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   SUPABASE_SECRET_KEY=sb_secret_YOUR_SECRET
   ```

   Keep the secret on the server. Do not prefix it with `NEXT_PUBLIC_`, commit it, or paste it in chat.
5. Restart `npm run dev`. Add the same variables to your hosting environment and redeploy for the live website.
6. Submit a quote and contact request, then open **Table Editor → leads** to confirm the name, email, phone, message, source, WhatsApp preference, page URL and creation time appear.

Until the variables and table are configured, forms show an unavailable message instead of claiming a submission was saved.
The site needs a Next.js server runtime (not a static export).
The public endpoint validates input and checks browser origin but does not include CAPTCHA or distributed rate limiting.

References: [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys), [REST API](https://supabase.com/docs/guides/api).
