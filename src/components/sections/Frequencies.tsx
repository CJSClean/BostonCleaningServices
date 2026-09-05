import { Section, SectionHeading } from "./Section";
import QuoteButton from "@/components/ui/QuoteButton";

const plans = [
  { name: "Weekly", saving: "15% off", fit: "Households with kids, pets, or heavy cooking. Nothing ever builds up." },
  { name: "Biweekly", saving: "10% off", fit: "Our most common plan. Enough to stay ahead without a visit every week.", popular: true },
  { name: "Monthly", saving: "5% off", fit: "Smaller homes and tidy households that want a reliable reset." },
  { name: "One-time", saving: "Standard rate", fit: "Before guests, after a party, or to try us before committing." },
];

interface FrequenciesProps {
  title?: string;
  intro?: string;
  tone?: "canvas" | "paper" | "sky" | "seafoam";
}

export default function Frequencies({
  title = "Pick a rhythm, lock in a discount",
  intro = "Recurring plans get the same team on a fixed schedule and a lower rate on every visit after the first. Skip or reschedule with 48 hours' notice at no charge.",
  tone = "seafoam",
}: FrequenciesProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Recurring plans" title={title} intro={intro} />
      <div className="grid gap-4 md:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-xl border p-6 ${
              p.popular ? "border-navy bg-navy text-white" : "border-line bg-paper"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-brick px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <h3 className={`font-display text-2xl font-semibold ${p.popular ? "text-white" : "text-navy"}`}>{p.name}</h3>
            <p className={`mt-1 text-sm font-semibold ${p.popular ? "text-brick-soft" : "text-brick"}`}>{p.saving}</p>
            <p className={`mt-4 text-sm leading-relaxed ${p.popular ? "text-white/80" : "text-muted"}`}>{p.fit}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <QuoteButton label="Start a recurring plan" variant="navy" />
      </div>
    </Section>
  );
}
