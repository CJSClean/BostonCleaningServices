import Link from "next/link";
import { services } from "@/lib/data/services";
import { ArrowIcon, ServiceGlyph } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";

interface ServicesGridProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** When provided, cards link to the service+location page for this location key. */
  locationKey?: string;
  locationName?: string;
  tone?: "canvas" | "paper" | "sky";
}

export default function ServicesGrid({
  eyebrow = "What we clean",
  title,
  intro,
  locationKey,
  locationName,
  tone = "canvas",
}: ServicesGridProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const href = locationKey ? `/services/${s.key}-${locationKey}-ma` : s.href;
          return (
            <Link
              key={s.key}
              href={href}
              className="group flex flex-col rounded-xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-lg"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky text-navy group-hover:bg-navy group-hover:text-white">
                <ServiceGlyph icon={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-navy">
                {s.name}
                {locationName ? ` in ${locationName}` : ""}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
              <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-brick">
                See details <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
