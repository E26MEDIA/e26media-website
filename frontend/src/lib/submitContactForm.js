const GOOGLE_SHEETS_URL = process.env.REACT_APP_GOOGLE_SHEETS_URL || "";

export async function submitContactForm(formData) {
  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
  };

  if (!GOOGLE_SHEETS_URL) {
    throw new Error(
      "Contact form is not configured. Please set REACT_APP_GOOGLE_SHEETS_URL in your deployment settings."
    );
  }

  await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return { source: "google-sheets" };
}
