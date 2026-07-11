import type { FAQ, LongFormContent } from "@/types";
import { Container } from "@/components/ui/section";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export type { LongFormContent };

type Props = {
  content: LongFormContent;
  className?: string;
};

export function LongFormArticle({ content, className = "" }: Props) {
  return (
    <div className={`space-y-16 ${className}`}>
      {content.intro && content.intro.length > 0 && (
        <div className="mx-auto max-w-3xl space-y-4">
          {content.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {content.sections.map((section) => (
        <article key={section.heading} className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
        </article>
      ))}

      {content.faqs && content.faqs.length > 0 && (
        <Container className="mx-auto max-w-3xl space-y-6 px-0">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Frequently asked questions
          </h2>
          <FaqAccordion faqs={content.faqs} />
        </Container>
      )}
    </div>
  );
}
