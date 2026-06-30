import { NextResponse } from "next/server";

function getSheetsUrl() {
  return (
    process.env.GOOGLE_SHEETS_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ||
    ""
  );
}

export async function POST(request: Request) {
  const url = getSheetsUrl();
  if (!url) {
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 503 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...body, submittedAt: new Date().toISOString() }),
  });

  return NextResponse.json({ ok: true });
}
