import { Section, SectionHeading } from "./Section";

export interface Scenario {
  title: string;
  description: string;
}

interface WhenToBookProps {
  title: string;
  intro?: string;
  scenarios: Scenario[];
  tone?: "canvas" | "paper" | "sky" | "seafoam";
}

export default function WhenToBook({ title, intro, scenarios, tone = "sky" }: WhenToBookProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="When to book" title={title} intro={intro} />
      <div className="grid gap-4 sm:grid-cols-2">
        {scenarios.map((s) => (
          <div key={s.title} className="rounded-xl border-l-4 border-brick bg-paper p-6 shadow-sm">
            <h3 className="text-base font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
