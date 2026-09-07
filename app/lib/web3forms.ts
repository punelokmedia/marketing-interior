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

  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      source: payload.source,
      whatsappUpdates: payload.whatsappUpdates,
      pageUrl,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit form right now.");
  }

  return result;
}
