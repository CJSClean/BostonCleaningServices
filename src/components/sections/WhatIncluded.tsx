import type { IncludedSection } from "@/lib/data/checklist";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";
import Link from "next/link";

interface WhatIncludedProps {
  title: string;
  intro?: string;
  sections: IncludedSection[];
  notIncluded?: string[];
  tone?: "canvas" | "paper" | "sky";
}

export default function WhatIncluded({ title, intro, sections, notIncluded, tone = "paper" }: WhatIncludedProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="The checklist" title={title} intro={intro} />
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-canvas p-6">
            <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {notIncluded && notIncluded.length > 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-line p-6">
          <h3 className="text-base font-semibold text-navy">Not part of a routine visit</h3>
          <p className="mt-1 text-sm text-muted">
            These are covered by a deep clean or move clean, or can be added to any booking.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {notIncluded.map((n) => (
              <li key={n} className="rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-muted">
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-6 text-sm text-muted">
        See the full comparison of routine, deep, and move cleans on our{" "}
        <Link href="/checklist" className="font-semibold text-brick hover:underline">
          cleaning checklist
        </Link>
        .
      </p>
    </Section>
  );
}
