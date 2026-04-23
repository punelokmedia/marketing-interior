export const WEB3FORMS_ACCESS_KEY = "766c1e2d-4892-4053-88fe-efcd4f77d38c";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
  whatsappUpdates?: boolean;
};

export async function submitLeadToWeb3Forms(payload: LeadPayload) {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Lead from ${payload.source}`,
      from_name: "InteriorWala Website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      source: payload.source,
      whatsapp_updates: payload.whatsappUpdates ? "Yes" : "No",
      page_url: pageUrl,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit form right now.");
  }

  return result;
}
