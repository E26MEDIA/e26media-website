"use client";

import { type FormEvent, useState } from "react";

export async function submitContactForm(data: Record<string, string>) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  if (!url) {
    throw new Error("Contact form is not configured.");
  }

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
  });
}

export function useContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    try {
      await submitContactForm(data);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return { status, error, handleSubmit };
}
