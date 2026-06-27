import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";
import { CONTACT } from "../constants/testIds";
import { toast } from "sonner";
import { SITE } from "../data/site";
import { submitContactForm } from "../lib/submitContactForm";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, service: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Basic validation
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      await submitContactForm(formData);
      setSuccess(true);
      toast.success("Consultation Request Submitted Successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.message || "Could not submit your request. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
                Initiate Contact
              </p>
              <h2 
                className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
                data-testid="contact-heading"
              >
                {"Let's Partner To Build Something Incredible"}
              </h2>
              <p className="text-base text-zinc-600 font-body">
                Ready to transform your business? Get in touch with our solutions architects to secure a free, comprehensive digital strategy consultation.
              </p>
            </div>

            {/* Structured details list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Direct Architecture Line</h4>
                  <p className="font-heading font-medium text-zinc-900 text-base mt-0.5">{SITE.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Consultation Mailbox</h4>
                  <p className="font-heading font-medium text-zinc-900 text-base mt-0.5">{SITE.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Headquarters</h4>
                  <p className="font-heading font-medium text-zinc-900 text-base mt-0.5">{SITE.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Working Hours</h4>
                  <p className="font-heading font-medium text-zinc-900 text-base mt-0.5">{SITE.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 text-left"
                data-testid={CONTACT.form}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Vance"
                      required
                      className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                      data-testid={CONTACT.nameInput}
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Nexus Corp"
                      required
                      className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                      data-testid={CONTACT.companyInput}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. marcus@nexus.com"
                      required
                      className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                      data-testid={CONTACT.emailInput}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 026-1144"
                      required
                      className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                      data-testid={CONTACT.phoneInput}
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleSelectChange}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all text-zinc-800"
                    data-testid={CONTACT.serviceSelect}
                  >
                    <option value="">Select a Capability...</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Message Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your system parameters or marketing requirements..."
                    required
                    className="w-full bg-white border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                    data-testid={CONTACT.messageInput}
                  />
                </div>

                {/* Action feedback */}
                {success && (
                  <div 
                    className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm font-medium"
                    data-testid={CONTACT.successAlert}
                  >
                    Thank you! Your consultation request has been submitted. Our solutions architects will review your parameters and follow up within 24 business hours.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-500/60 text-white rounded-md py-3 text-sm font-body font-semibold transition-all shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  data-testid={CONTACT.submitButton}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing Submission...
                    </>
                  ) : (
                    <>
                      Secure Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
