import { FAQS } from "../data/faq";
import { SITE } from "../data/site";

const EXTRA_REPLIES = [
  {
    test: (t) => /phone|call|whatsapp|number/i.test(t),
    a: `Call us at ${SITE.contact.phone}, or chat on WhatsApp. You can also email ${SITE.contact.email}.`,
  },
  {
    test: (t) => /email|mail|hr@/i.test(t),
    a: `Our email is ${SITE.contact.email}. Share your project details and we'll reply within 24 business hours.`,
  },
  {
    test: (t) => /hour|open|timing|sunday|saturday/i.test(t),
    a: `We're open ${SITE.contact.hours.join(" · ")}.`,
  },
  {
    test: (t) => /ai\b|artificial|machine learning|chatbot/i.test(t),
    a: "Yes — we build AI solutions including chatbots, automation, and intelligent features tailored to your business. Book a free consultation on our Contact page to discuss your use case.",
  },
  {
    test: (t) => /hello|hi\b|hey|good (morning|afternoon|evening)/i.test(t),
    a: "Hello! I'm the E26 Media assistant. Ask about our services, pricing, timelines, or how to get started — or tap a question below.",
  },
  {
    test: (t) => /thank|thanks/i.test(t),
    a: "You're welcome! If you'd like to speak with our team, request a free consultation on the Contact page.",
  },
];

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreFaq(input, faq) {
  const n = normalize(input);
  const q = normalize(faq.q);

  if (n === q) return 100;
  if (q.includes(n) && n.length > 8) return 90;

  let score = 0;
  const words = n.split(" ").filter((w) => w.length > 2);

  for (const word of words) {
    if (q.includes(word)) score += 3;
    if (normalize(faq.a).includes(word)) score += 1;
  }

  return score;
}

export function getChatbotReply(message) {
  const trimmed = message?.trim();
  if (!trimmed) {
    return "Please type a question and I'll do my best to help.";
  }

  let best = { score: 0, answer: null };
  for (const faq of FAQS) {
    const score = scoreFaq(trimmed, faq);
    if (score > best.score) best = { score, answer: faq.a };
  }

  if (best.score >= 3) return best.answer;

  for (const extra of EXTRA_REPLIES) {
    if (extra.test(trimmed)) return extra.a;
  }

  if (best.score > 0) return best.answer;

  return (
    "I can help with questions about E26 Media's services, pricing, timelines, technology stack, and how to get started. " +
    "For a detailed answer, try one of the suggested questions below or visit our Contact page for a free consultation."
  );
}
