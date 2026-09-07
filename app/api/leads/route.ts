import { after } from "next/server";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ message: "Request not allowed." }, { status: 403 });
  }
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 16000) return Response.json({ message: "Message is too long." }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return Response.json({ message: "Invalid form data." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ message: "Invalid form data." }, { status: 400 });
  }
  const field = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
  const name = field("name");
  const email = field("email");
  const phone = field("phone");
  const message = field("message");
  const source = field("source");
  const pageUrl = field("pageUrl");
  if (!name || name.length > 150 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^[+\d\s()-]{10,25}$/.test(phone) || phone.replace(/\D/g, "").length < 10 ||
      message.length > 8000 || pageUrl.length > 2000 ||
      !["Homepage Quote Form", "Get Free Quote Popup", "Contact Page"].includes(source) ||
      (body.whatsappUpdates !== undefined && typeof body.whatsappUpdates !== "boolean")) {
    return Response.json({ message: "Please enter a valid name, email and phone number. Keep your message under 8,000 characters." }, { status: 400 });
  }
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    return Response.json({ message: "Form submissions are temporarily unavailable. Please contact us by phone." }, { status: 503 });
  }
  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/leads?select=id`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify({ name, email, phone, message, source, page_url: pageUrl, whatsapp_updates: body.whatsappUpdates === true }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Lead storage failed with status", response.status);
      return Response.json({ message: "Unable to save your details. Please try again." }, { status: 502 });
    }
    const saved = await response.json();
    if (!Array.isArray(saved) || saved.length !== 1 || typeof saved[0]?.id !== "string") {
      console.error("Supabase did not return a saved lead ID");
      return Response.json({ message: "We could not confirm your submission. Please contact us by phone." }, { status: 502 });
    }
    console.info("Lead saved to Supabase:", saved[0].id, "project:", new URL(url).hostname);
  } catch {
    return Response.json({ message: "Unable to save your details. Please try again." }, { status: 502 });
  }
  // Email is best effort after storage; an email failure must not ask the visitor to resubmit a saved lead.
  after(async () => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "766c1e2d-4892-4053-88fe-efcd4f77d38c", subject: `New Lead from ${source}`, from_name: "Benz Architecture Website", name, email, phone, message, source, page_url: pageUrl, whatsapp_updates: body.whatsappUpdates ? "Yes" : "No" }),
        signal: AbortSignal.timeout(10000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) console.error("Lead email notification failed");
    } catch {
      console.error("Lead email notification failed");
    }
  });
  return Response.json({ success: true });
}
