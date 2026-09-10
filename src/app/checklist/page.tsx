import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import ChecklistTable from "@/components/sections/ChecklistTable";
import { Section, SectionHeading } from "@/components/sections/Section";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { checklist } from "@/lib/data/checklist";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema, SchemaScript } from "@/lib/schema";

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
    text: "The deep clean applied to an empty home, with the insides of cabinets, drawers, and closets added. Oven and fridge interiors are add-ons.",
  },
];

const faqs = [
  {
    question: "Can I customize the checklist?",
    answer:
      "Yes. Tell us about priorities or areas to skip when you book, and we attach the notes to your account so every team sees them. Add-ons such as inside the oven or interior windows can be added to any visit, including deep and move cleans, for a set fee.",
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
  {
    question: "Is the checklist the same every visit?",
    answer:
      "Yes. The room-by-room scope runs identically each time, which is what stops results varying with whoever is scheduled.",
  },
  {
    question: "Can I add or remove items?",
    answer:
      "Yes. Add-ons attach to any single visit, and rooms you would rather skip become a standing note on your account.",
  },
  {
    question: "What is not included as standard?",
    answer:
      "Interior appliance cleaning, interior windows, and inside cabinets sit outside a routine visit and come with a deep clean or as add-ons. Exterior windows above ground floor and duct cleaning are specialist work.",
  },
  {
    question: "Do you make beds or do laundry?",
    answer:
      "Beds on request. Laundry is not standard scope, though we will discuss it as an add-on for recurring clients.",
  },
  {
    question: "Do you clean baseboards and walls?",
    answer:
      "Baseboards come with a deep clean and get spot attention on routine visits. Full wall washing is a separate job and quoted as one.",
  },
  {
    question: "Does the checklist change for older buildings?",
    answer:
      "The list stays the same; the method changes. Original hardwood, plaster, and period tile take less moisture and gentler products than newer surfaces.",
  },
  {
    question: "Do you use different products room to room?",
    answer:
      "Yes. Bathrooms, kitchens, stone, and hardwood each take different chemistry. One all-purpose product everywhere is how finishes get damaged over time.",
  },
  {
    question: "What if something on the list is missed?",
    answer:
      "Tell us within 24 hours and we come back to re-clean it at no additional cost. The checklist is what we hold ourselves to, so a gap in it is ours to fix.",
  },
];

export default function ChecklistPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateFAQSchema(faqs),
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
          title="Our Boston House Cleaning Checklist"
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

        <MapEmbed query="Boston, MA" title="The same checklist across Greater Boston" tone="paper" />

        <FAQ title="Checklist questions" items={faqs} />

        <CTABand
          title="Know what you want? Get it priced."
          description="Tell us the size of the home and which level you need, and we will send an upfront quote with the first open time slots."
        />
      </PageShell>
    </>
  );
}
