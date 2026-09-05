import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
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

const PATH = "/services/move-in-cleaning-boston-ma";
const KEY = "move-in-cleaning";

export const metadata: Metadata = {
  title: "Move In Cleaning Boston MA",
  description:
    "Move-in cleaning in Boston, MA: inside cabinets, closets, oven, fridge, and every floor sanitized before your boxes arrive.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "The day you get the keys is the only day your new home will ever be completely empty. Every cabinet is open, every closet is bare, and every square foot of floor is reachable. It is also the day the previous tenant's dust, the landlord's quick wipe-down, and whatever lived behind the refrigerator are all still there. Our move-in cleaning service is built to use that window before a single box crosses the threshold.",
  "Boston moves cluster hard around September 1 and the first of each month, and landlords in this market are rarely required to deliver a professionally cleaned unit. Many of our move-in customers arrive to find a place that is technically vacant but far from clean: sticky cabinet shelves, a greasy range hood, hair in the bathroom drain, and radiator fins caked with years of dust. We take all of that on so you do not have to unpack into it.",
  "A move-in clean is a deep clean plus everything that only makes sense in an empty home. We wash the insides of every cabinet and drawer, wipe closet shelves and rods, clean the inside of the oven and refrigerator, scrub the tub and tile, detail baseboards and door frames, and vacuum and mop every floor edge to edge. Light fixtures, switch plates, and window sills are cleaned so the first surface your hand touches is one we cleaned.",
  "Timing matters and we plan around it. The ideal slot is after the previous occupant is out and before your movers arrive, which is often a same-day handoff. We coordinate with property managers and real estate agents regularly and can often collect keys from a lockbox or leasing office. If your move is on the September 1 weekend, reserve early; those dates fill weeks in advance.",
  "Pricing is flat based on the unit size and confirmed before booking, with interior appliance and cabinet cleaning already included rather than added as extras. Most one-bedroom move-in cleans take a two-person team about three hours. Once your boxes are in and unpacked, many customers switch to a recurring plan and keep the same standard going forward.",
];

const scenarios = [
  {
    title: "Between key handoff and the moving truck",
    description:
      "The gold standard. The team cleans an empty unit in the morning and your movers arrive after lunch. We coordinate with agents and property managers to make that window work.",
  },
  {
    title: "New construction or a fresh renovation",
    description:
      "Contractors leave fine dust in every cabinet and on every ledge. A move-in clean after the punch list is done means you are not wiping drywall powder off your dishes for a month.",
  },
  {
    title: "After a landlord turnover clean",
    description:
      "Many turnover cleans are a quick surface wipe. If the oven, fridge interior, and cabinet shelves were skipped, we finish the job before you fill them.",
  },
  {
    title: "Buying a home from a previous owner",
    description:
      "Closing day rarely leaves time to clean. Book the visit for the day after closing and move in the following weekend to a home that feels like yours.",
  },
];

const benefits = [
  {
    title: "Appliance interiors included",
    description:
      "Inside the oven, refrigerator, freezer, dishwasher door and gasket, and microwave are part of every move-in clean at no extra cost. You should never inherit someone else's oven.",
  },
  {
    title: "We work around your movers",
    description:
      "Tight timelines are normal on move day. Give us the key handoff time and the movers' arrival window and we schedule the clean to fit between them.",
  },
  {
    title: "Every shelf, every drawer, every closet",
    description:
      "Empty storage is cleaned inside and out, including the top shelf you will not reach until you own a step stool. Liners can be laid if you provide them.",
  },
  {
    title: "Familiar with Boston move-day logistics",
    description:
      "Permit parking, freight elevators, leasing-office key pickup, and the September 1 crush are all things our coordinators deal with every season.",
  },
];

const faqs = [
  {
    question: "What does a move-in cleaning include?",
    answer:
      "Everything in a deep clean plus the interiors of cabinets, drawers, closets, the oven, the refrigerator, and the freezer. Floors are cleaned edge to edge, and baseboards, door frames, fixtures, and window sills are detailed. Full list on our checklist page.",
  },
  {
    question: "Does the apartment need to be empty?",
    answer:
      "Ideally yes. Empty homes let us reach every surface and finish faster. If some boxes are already in, we work around them but cannot clean beneath or inside them.",
  },
  {
    question: "Can you clean the same day I get the keys?",
    answer:
      "Often, if you book ahead. Tell us your expected key time and mover arrival and we will hold a slot. September 1 and first-of-month dates should be reserved at least two weeks out.",
  },
  {
    question: "Do utilities need to be on?",
    answer:
      "Yes, we need water and electricity to clean. Confirm with the landlord or utility that service is active on your cleaning date.",
  },
  {
    question: "How much does move-in cleaning cost?",
    answer:
      "Studios run $180 to $240, one-bedrooms $220 to $300, two-bedrooms $280 to $380, and three-bedrooms and larger start around $380. Appliance and cabinet interiors are already included in those figures.",
  },
  {
    question: "Can you get the keys from my landlord or agent?",
    answer:
      "Yes, with your written permission. We regularly collect keys from lockboxes, leasing offices, and concierge desks, and we return them the same way.",
  },
  {
    question: "Is a move-in clean different from a move-out clean?",
    answer:
      "The checklist is nearly identical. The difference is purpose: a move-out clean is aimed at the landlord's inspection and deposit return, while a move-in clean is aimed at your own comfort in a space someone else just left.",
  },
];

export default function MoveInCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "Move In Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$180 - $500+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Move In Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Move in cleaning"
          title="Move In Cleaning Services in Boston, MA"
          subtitle="A complete empty-home clean between key handoff and the moving truck. Cabinets, closets, oven, fridge, tile, and every floor edge, so the first thing you unpack into is clean."
          highlights={["Appliance and cabinet interiors included", "Scheduled around your movers", "Key pickup from agents or lockboxes", "September 1 slots held early"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Move In Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="Use the one day your home is truly empty" paragraphs={intro} />
        <WhatIncluded
          title="What a move-in clean covers"
          intro="A deep clean plus everything inside cabinets, closets, and appliances."
          sections={moveIncluded}
        />
        <PricingTable
          title="Move-in cleaning prices in Boston"
          intro="Flat rates by unit size, with interior appliance and cabinet cleaning already included."
          table={movePricing}
          defaultService={KEY}
        />
        <WhenToBook title="When to schedule a move-in clean" scenarios={scenarios} />
        <WhyChoose title="Why movers across Boston book us first" benefits={benefits} tone="canvas" />
        <Testimonials areaFilter="Beacon Hill" />
        <ServiceAreas
          title="Move-in cleaning by neighborhood"
          intro="Area pages include notes on building access, parking, and local move-day timing."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
          tone="paper"
        />
        <FAQ title="Move-in cleaning questions" items={faqs} tone="canvas" />
        <CTABand
          title="Start in a home that is actually clean"
          description="Send your move date, unit size, and key handoff time. We will confirm a flat price and hold the slot."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
