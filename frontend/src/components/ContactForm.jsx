import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "../lib/submitContactForm";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (Object.values(formData).some((v) => !v)) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      await submitContactForm(formData);
      setSuccess(true);
      toast.success("Consultation request submitted successfully!");
      setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          err.message ||
          "Could not submit your request. Check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400";
  const labelCls = "text-xs font-mono uppercase text-zinc-500 tracking-wider";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-left"
      data-testid="contact-form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelCls}>Your Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="e.g. Marcus Vance" required className={inputCls}
            data-testid="contact-name-input" />
        </div>
        <div className="space-y-2">
          <label className={labelCls}>Company *</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange}
            placeholder="e.g. Nexus Corp" required className={inputCls}
            data-testid="contact-company-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelCls}>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="e.g. marcus@nexus.com" required className={inputCls}
            data-testid="contact-email-input" />
        </div>
        <div className="space-y-2">
          <label className={labelCls}>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
            placeholder="e.g. +1 (555) 026-1144" required className={inputCls}
            data-testid="contact-phone-input" />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelCls}>Service Required *</label>
        <select name="service" value={formData.service} onChange={handleChange} required
          className={`${inputCls} text-zinc-800`} data-testid="contact-service-select">
          <option value="">Select a service...</option>
          <option value="Web Design & Development">Web Design & Development</option>
          <option value="Software Development">Software Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className={labelCls}>Message Details *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
          placeholder="Describe your project or marketing requirements..." required
          className={inputCls} data-testid="contact-message-input" />
      </div>

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm font-medium"
          data-testid="contact-success-alert">
          Thank you! Your consultation request has been submitted. Our team will follow up within 24 business hours.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm font-medium"
          data-testid="contact-error-alert">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-500/60 text-white rounded-md py-3 text-sm font-body font-semibold transition-all shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
        data-testid="contact-submit-button">
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
        ) : (
          <>Secure Free Consultation <ArrowRight className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}
