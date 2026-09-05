import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ChecklistTable from "@/components/sections/ChecklistTable";
import { Section, SectionHeading } from "@/components/sections/Section";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { checklist } from "@/lib/data/checklist";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateHowToSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Boston House Cleaning Checklist",
  description:
    "The exact room-by-room checklist Boston Cleaning Services follows. Compare what a routine clean, deep clean, and move-in/move-out clean include before you book.",
  alternates: { canonical: `${SITE_URL}/checklist` },
};

const levels = [
  {
    name: "Routine clean",
    text: "The maintenance visit. Every surface you touch or see gets dusted, wiped, or vacuumed. Best on a weekly, biweekly, or monthly plan.",
  },
  {
    name: "Deep clean",
    text: "Everything in the routine visit plus baseboards, door frames, vent covers, cabinet exteriors, range hood, grout, and the spaces under and behind furniture.",
  },
  {
    name: "Move in / move out",
    text: "The deep clean applied to an empty home, with the insides of cabinets, drawers, closets, the oven, and the refrigerator added.",
  },
];

const faqs = [
  {
    question: "Can I customize the checklist?",
    answer:
      "Yes. Tell us about priorities or areas to skip when you book, and we attach the notes to your account so every team sees them. Add-ons such as inside the oven or interior windows can be added to any routine visit for a set fee.",
  },
  {
    question: "Why is a deep clean recommended for a first visit?",
    answer:
      "A routine clean is designed to maintain a home that is already at a baseline. If it has been more than a couple of months since a professional clean, the first visit takes longer and reaches into places routine visits do not. Starting with a deep clean means the routine plan can hold that standard afterward.",
  },
  {
    question: "Do you do laundry or dishes?",
    answer:
      "Not as part of the standard list. We will load a dishwasher that is already empty and put away dishes from a drying rack. Full laundry and hand-washing are outside the scope of the checklist.",
  },
  {
    question: "What about windows?",
    answer:
      "Interior glass that can be reached from the floor or a two-step stool is included in deep and move cleans. Exterior windows and anything requiring a ladder are not something we offer.",
  },
];

export default function ChecklistPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateHowToSchema(
            checklist.map((c) => ({ name: c.room, steps: c.items.filter((i) => i.routine).map((i) => i.task) }))
          ),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Cleaning Checklist", url: "/checklist" },
          ]),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Our checklist"
          title="Exactly what a cleaning from us includes"
          subtitle="No guessing about what the team will and will not do. This is the list every cleaner carries, broken down by room and by type of visit."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Checklist", href: "/checklist" },
          ]}
        />
        <TrustStrip />

        <Section tone="paper">
          <SectionHeading
            eyebrow="Three levels"
            title="Routine, deep, or move clean: how they differ"
            intro="Each level builds on the one before it. Pick the one that matches the current state of the home rather than the one you hope it is in."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {levels.map((l, i) => (
              <div key={l.name} className="rounded-xl border border-line bg-canvas p-6">
                <p className="eyebrow">Level {i + 1}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-navy">{l.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{l.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <ChecklistTable />

        <FAQ title="Checklist questions" items={faqs} />

        <CTABand
          title="Know what you want? Get it priced."
          description="Tell us the size of the home and which level you need, and we will send a flat quote with the first open time slots."
        />
      </PageShell>
    </>
  );
}
