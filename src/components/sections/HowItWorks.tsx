import { Section, SectionHeading } from "./Section";
import QuoteButton from "@/components/ui/QuoteButton";

const steps = [
  {
    title: "Send a few details",
    text: "Bedrooms, bathrooms, zip code, and the kind of clean you want. Photos help if the place needs extra attention.",
  },
  {
    title: "Get a firm price",
    text: "A coordinator replies with an upfront quote and open time slots, usually within the hour. Any heavy-duty or pet-shedding fee is flagged in the quote, not on the day.",
  },
  {
    title: "We clean, you check",
    text: "Your team arrives inside the window, works the checklist, and texts you a completion note. Not happy? We make it right, guaranteed.",
  },
];

export default function HowItWorks({ tone = "sky" }: { tone?: "canvas" | "paper" | "sky" }) {
  return (
    <Section tone={tone}>
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to a booked cleaning"
            intro="Most first-time customers go from quote to confirmed appointment in under ten minutes."
          />
          <QuoteButton />
        </div>
        <ol className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-line bg-paper p-6 pt-8">
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brick text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
