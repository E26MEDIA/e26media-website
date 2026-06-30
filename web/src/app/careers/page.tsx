import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers at E26 Media — Join Our Team",
  description:
    "Build your career at E26 Media in Mangalore. Explore our culture, benefits, and open positions in design, development, and digital marketing.",
  path: "/careers",
});

const BENEFITS = [
  "Collaborative studio environment in Mangalore",
  "Real client projects — not bench time",
  "Learning budget for courses and conferences",
  "Flexible hybrid work options",
  "Performance bonuses and growth paths",
];

const OPEN_POSITIONS = [
  { title: "Frontend Developer (React/Next.js)", type: "Full-time · Mangalore" },
  { title: "UI/UX Designer", type: "Full-time · Mangalore / Remote" },
  { title: "Digital Marketing Specialist", type: "Full-time · Mangalore" },
];

export default function CareersPage() {
  return (
    <Container className="py-16 md:py-24 space-y-16">
      <SectionHeading
        eyebrow="Careers"
        title="Build remarkable digital products with us"
        description="E26 Media is a Mangalore-based technology company helping businesses across Karnataka transform through websites, software, apps, and marketing."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Our culture</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            We value craftsmanship, honesty, and outcomes. Small teams own projects end-to-end — from discovery
            to launch. You will work directly with clients, ship real products, and grow skills that matter in
            the market.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Benefits</h2>
          <ul className="mt-4 space-y-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" /> {b}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <SectionHeading eyebrow="Open positions" title="Current openings" />
        <div className="space-y-4">
          {OPEN_POSITIONS.map((job) => (
            <Card key={job.title} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-zinc-500">{job.type}</p>
              </div>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "sm" })}>
                Apply now
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Hiring process</h2>
        <ol className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li>1. Submit your application via our contact form with portfolio/GitHub links</li>
          <li>2. Short phone or video screening (30 minutes)</li>
          <li>3. Skills assessment or take-home task relevant to the role</li>
          <li>4. Final interview with the team lead</li>
          <li>5. Offer and onboarding</li>
        </ol>
        <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-8 inline-flex`}>
          Send your application
        </Link>
      </Card>
    </Container>
  );
}
