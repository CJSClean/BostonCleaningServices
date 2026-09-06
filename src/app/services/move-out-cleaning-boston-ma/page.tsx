import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import WhatIncluded from "@/components/sections/WhatIncluded";
import PricingTable from "@/components/sections/PricingTable";
import WhenToBook from "@/components/sections/WhenToBook";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { moveIncluded } from "@/lib/data/checklist";
import { movePricing } from "@/lib/data/pricing";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

const PATH = "/services/move-out-cleaning-boston-ma";
const KEY = "move-out-cleaning";

export const metadata: Metadata = {
  title: "Move Out Cleaning Boston MA",
  description:
    "Move-out cleaning in Boston, MA aimed at the landlord walkthrough: inside cabinets, closets, tile, and floors.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "Massachusetts law lets landlords deduct cleaning costs from a security deposit when a unit is left in worse condition than reasonable wear allows, and Boston landlords apply that rule with enthusiasm. A move-out clean is the cheapest insurance against losing a deposit that often equals a full month's rent. Our service is designed around the inspection itself: the places property managers check first, checked by us first.",
  "The inspection sheet is predictable. Cabinet shelves and drawers. Bathroom grout, tub ring, and the base of the toilet. Closet floors and shelves. Window sills and blinds. Baseboards and the floor along the wall where the bed used to be. Our teams work from a move-out checklist that mirrors those items and photograph the finished rooms so you have a record if a dispute arises.",
  "We recommend booking the clean for after your belongings are out and before the final walkthrough, ideally the day before you hand over keys. An empty unit lets us reach every surface, and finishing a day early leaves room for a touch-up if something is spotted. If the lease ends on August 31 or September 1, book two to three weeks ahead. Those days are the busiest of the year for every cleaner in the city.",
  "Landlords, property managers, and real estate agents are a large part of our move-out clientele. We handle turnover cleans between tenants, coordinate key pickup and return, and can email a completion summary with photos directly to the owner. For tenants, we provide a receipt that many landlords accept as proof of professional cleaning.",
  "Pricing is flat by unit size and already includes cabinets and closets, so the only add-on decision is whether to include the oven and fridge interiors. Most one-bedroom move-out cleans take about three hours. Trash removal beyond a few bags, wall repairs, and carpet shampooing are outside the scope but we can point you to providers.",
];

const scenarios = [
  {
    title: "The day before your final walkthrough",
    description:
      "Furniture out, boxes gone, a full day of buffer. This timing gives the best result and leaves room to address anything the landlord flags.",
  },
  {
    title: "Lease ending August 31 or September 1",
    description:
      "The Boston turnover crush. We hold move-out capacity for these dates but they fill weeks ahead, so reserve as soon as your moving date is set.",
  },
  {
    title: "Landlord or property manager turnover",
    description:
      "A vacated unit that needs to be showing-ready or move-in ready fast. We handle key logistics and send a photo summary when finished.",
  },
  {
    title: "Sublet or roommate handoff",
    description:
      "Handing a room or unit to someone new mid-lease. A move-out clean of your space keeps the relationship clean too.",
  },
];

const benefits = [
  {
    title: "Built around the inspection",
    description:
      "Our move-out checklist follows the items landlords and managers check most. Photos of each finished room are available on request for your records.",
  },
  {
    title: "One flat price, one decision",
    description:
      "Cabinets, drawers, closets, and window sills are included in the flat price. Inside the oven and refrigerator are the only optional add-ons, quoted up front.",
  },
  {
    title: "Key handling and remote coordination",
    description:
      "Already moved to Austin? We collect and return keys through lockboxes and leasing offices and send completion confirmation by text and email.",
  },
  {
    title: "Turnover experience across the city",
    description:
      "From student-heavy Allston-adjacent blocks to Seaport towers with strict move-out rules, our coordinators have handled the building requirements before.",
  },
];

const faqs = [
  {
    question: "Will a move-out clean get my deposit back?",
    answer:
      "It addresses the cleaning portion of any deduction, which is the most common one. Damage, unpaid rent, or missing items are separate matters. We provide a receipt and can supply photos of the finished unit to support your case.",
  },
  {
    question: "What is included in a move-out cleaning?",
    answer:
      "Everything in a deep clean plus inside cabinets, drawers, and closets. Oven and fridge interiors are optional add-ons. Floors are cleaned to the edges, and baseboards, sills, fixtures, and switch plates are detailed. The full list is on our checklist page.",
  },
  {
    question: "Does the unit need to be empty?",
    answer:
      "Yes, or as close to it as possible. We need furniture out to reach floors and walls, and cabinets and closets empty to clean inside them. A few boxes by the door are fine.",
  },
  {
    question: "How much does move-out cleaning cost in Boston?",
    answer:
      "Studios $180 to $240, one-bedrooms $220 to $300, two-bedrooms $280 to $380, and three-bedrooms and larger from $380. Prices include cabinet and closet interiors and are confirmed before booking; oven and fridge interiors are add-ons.",
  },
  {
    question: "Can you remove trash and leftover items?",
    answer:
      "We dispose of a few bags of household trash as part of the visit. Furniture, large item removal, or a significant amount of debris is outside our scope and billed separately or referred to a hauler.",
  },
  {
    question: "Can my landlord book directly?",
    answer:
      "Yes. Property managers and owners use us for turnover cleans regularly. We can invoice the management company and coordinate access without the tenant present.",
  },
  {
    question: "Do you clean carpets or walls?",
    answer:
      "Carpets are vacuumed thoroughly, but steam cleaning or shampooing is a separate service we can refer. We spot clean scuffs on walls; full wall washing and paint touch-ups are not included.",
  },
  {
    question: "What if the landlord finds something after the clean?",
    answer:
      "Contact us within 24 hours of the cleaning and we will return to address the specific item at no cost. This is why we suggest cleaning a day before the walkthrough rather than the same morning.",
  },
];

export default function MoveOutCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "Move Out Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$180 - $500+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Move Out Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Move out cleaning"
          title="Move Out Cleaning Services in Boston, MA"
          subtitle="A lease-end clean built around the landlord walkthrough. Cabinets, closets, tile, and floors, done the day before you hand over keys, with photos for your records."
          highlights={["Inspection-focused checklist", "Cabinet and closet interiors included", "Photo summary on request", "Landlord and agent bookings welcome"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Move Out Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="Leave the unit cleaner than the inspection expects" paragraphs={intro} />
        <WhatIncluded
          title="What a move-out clean covers"
          intro="Everything the walkthrough checks, plus the rest of a deep clean."
          sections={moveIncluded}
        />
        <PricingTable
          title="Move-out cleaning prices in Boston"
          intro="Flat by unit size, cabinet and closet interiors included, confirmed before you book."
          table={movePricing}
          defaultService={KEY}
        />
        <WhenToBook title="When to schedule a move-out clean" scenarios={scenarios} />
        <WhyChoose title="Why departing tenants and landlords use us" benefits={benefits} tone="canvas" />
        <Testimonials areaFilter="Davis Square" />
        <ServiceAreas
          title="Move-out cleaning by neighborhood"
          intro="Area pages cover local lease timing, building rules, and common inspection issues."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
          tone="paper"
        />
        <MapEmbed query="Boston, MA" title="Move-out cleaning across Boston" />
        <FAQ title="Move-out cleaning questions" items={faqs} tone="canvas" />
        <CTABand
          title="Protect the deposit and skip the scrubbing"
          description="Send your move-out date and unit size. We confirm a flat price and reserve a slot before the walkthrough."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
