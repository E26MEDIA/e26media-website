"use client";

import { useContactForm } from "@/lib/contact-form";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { status, error, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service *</Label>
        <Input id="service" name="service" required placeholder="e.g. Website Development" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" required />
      </div>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      {status === "success" && (
        <p className="text-sm text-green-600" role="status">
          Thank you! We&apos;ll respond within 24 business hours.
        </p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Submit enquiry"}
      </Button>
    </form>
  );
}
