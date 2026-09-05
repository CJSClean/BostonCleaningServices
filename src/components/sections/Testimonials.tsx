import { testimonials } from "@/lib/data/testimonials";
import { StarIcon } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";

interface TestimonialsProps {
  title?: string;
  /** Filter to quotes whose area includes this text (case-insensitive). Falls back to the first N. */
  areaFilter?: string;
  count?: number;
  tone?: "canvas" | "paper" | "sky";
}

export default function Testimonials({
  title = "What neighbors say after the first visit",
  areaFilter,
  count = 3,
  tone = "canvas",
}: TestimonialsProps) {
  let picks = testimonials;
  if (areaFilter) {
    const matched = testimonials.filter((t) => t.area.toLowerCase().includes(areaFilter.toLowerCase()));
    const rest = testimonials.filter((t) => !matched.includes(t));
    picks = [...matched, ...rest];
  }
  picks = picks.slice(0, count);

  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Reviews" title={title} />
      <div className="grid gap-5 md:grid-cols-3">
        {picks.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-xl border border-line bg-paper p-6">
            <span className="flex text-amber-400">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-sm">
              <span className="block font-semibold text-navy">{t.name}</span>
              <span className="block text-muted">
                {t.area} &middot; {t.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
