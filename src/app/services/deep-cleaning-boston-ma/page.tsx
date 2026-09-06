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
import { deepIncluded } from "@/lib/data/checklist";
import { deepPricing } from "@/lib/data/pricing";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

const PATH = "/services/deep-cleaning-boston-ma";
const KEY = "deep-cleaning";

export const metadata: Metadata = {
  title: "Deep Cleaning Boston MA",
  description:
    "Deep cleaning services in Boston, MA that reach baseboards, vents, grout, cabinet fronts, and behind appliances.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "A deep clean is what happens when you stop cleaning around things and start cleaning them. It is the visit where the stove gets pulled forward, the vent covers come off, the grout gets scrubbed instead of wiped, and the dust on top of the kitchen cabinets that nobody has seen in three years finally leaves the building. Our Boston deep cleaning service is a scheduled, methodical version of that, done by a trained team in a single visit.",
  "Boston homes accumulate a particular kind of grime. Winter brings road salt and sand tracked onto every floor. Forced hot water radiators bake dust onto the fins. Older windows let in a steady film of city particulate that settles on sills and blinds. Add a summer of open windows and pollen, and by fall most homes have a layer that routine cleaning simply does not lift. A deep clean resets that baseline.",
  "The checklist includes everything in a routine visit plus the detail work: baseboards wiped by hand, doors and frames cleaned, light fixtures and ceiling fans dusted, range hood degreased, cabinet exteriors washed, tile grout scrubbed, shower tracks detailed, interior window glass cleaned, and furniture moved so floors can be vacuumed and mopped underneath. Inside the oven and refrigerator can be added if you want the kitchen fully reset.",
  "Most customers book a deep clean in one of four situations: before starting a recurring plan, ahead of hosting or a major holiday, after a period of illness or renovation, or once or twice a year as a seasonal reset. Landlords and property managers also use it between tenants when a full move-out clean is not needed. Whatever the reason, the pricing is flat and set before the team arrives.",
  "Expect a deep clean of a two-bedroom apartment to take roughly four hours, and a three- or four-bedroom house closer to five or six. We do not rush it. If the home is in rougher shape than described, we tell you before starting and agree on any adjustment. When the team leaves, you should notice the difference in every room, not just the ones you were worried about.",
];

const scenarios = [
  {
    title: "Before a recurring plan starts",
    description:
      "A deep clean brings the home up to the baseline a routine visit is designed to maintain. Starting here means the weekly or biweekly plan actually holds the standard.",
  },
  {
    title: "Seasonal reset in spring and fall",
    description:
      "Once the windows close for winter and again when they open in spring. Salt, sand, pollen, and radiator dust all get cleared in one pass.",
  },
  {
    title: "Before hosting or a special event",
    description:
      "Family arriving for the holidays, a birthday, a home sale showing, or an open house. The rooms guests actually notice are the ones a deep clean fixes.",
  },
  {
    title: "After illness, renovation, or a long gap",
    description:
      "When cleaning has fallen behind for a while, or after a contractor has been in the house, a deep clean is faster and cheaper than trying to catch up over several routine visits.",
  },
];

const benefits = [
  {
    title: "We move things",
    description:
      "Couches, beds, small appliances, and the stove come away from the wall so the floor and surfaces behind them are actually cleaned, then everything goes back exactly where it was.",
  },
  {
    title: "Grout, tracks, and fixtures done by hand",
    description:
      "Boston bathrooms are heavy on tile. Grout lines, shower door tracks, and faucet bases are scrubbed with brushes and the correct product, not sprayed and wiped.",
  },
  {
    title: "Kitchen degreasing that lasts",
    description:
      "Range hood filters, backsplash, cabinet fronts near the stove, and the top of the fridge are degreased, which is the part of a kitchen that routine cleaning tends to skip.",
  },
  {
    title: "Fixed price, generous time",
    description:
      "Deep cleans are scheduled with room to breathe. You get a single flat number before booking, and the team stays until the list is finished.",
  },
];

const faqs = [
  {
    question: "How is a deep clean different from a regular clean?",
    answer:
      "A regular clean maintains surfaces you see and touch every day. A deep clean adds the detail layer underneath and behind: baseboards, door frames, vent covers, light fixtures, cabinet exteriors, grout, interior windows, and under furniture. It takes about twice as long and is priced accordingly.",
  },
  {
    question: "How much does deep cleaning cost in Boston?",
    answer:
      "A studio or one-bedroom typically runs $200 to $280, a two-bedroom apartment $280 to $380, and houses $350 to $650 depending on size and condition. Add inside the oven and fridge for a set fee. Every quote is flat and confirmed in writing.",
  },
  {
    question: "How long does a deep clean take?",
    answer:
      "Roughly four hours for a two-bedroom apartment and five to six for a mid-size house with our team. We give you an estimated window when booking and text when the team finishes.",
  },
  {
    question: "Does a deep clean include inside the oven and refrigerator?",
    answer:
      "They are optional add-ons on a deep clean so you only pay for them if you want them. The same is true for move-in and move-out cleans.",
  },
  {
    question: "Should I do a deep clean before starting weekly service?",
    answer:
      "We recommend it if the home has not been professionally cleaned in the last two or three months. It lets the recurring plan maintain a high standard rather than slowly catching up.",
  },
  {
    question: "Do you clean walls and ceilings?",
    answer:
      "We spot clean walls around switches, door handles, and obvious marks, and we dust ceiling corners and fixtures. Full wall washing is quoted separately because it depends on paint type and square footage.",
  },
  {
    question: "Can you deep clean just one room?",
    answer:
      "Yes. Kitchen-only and bathroom-only deep cleans are common requests and are priced per room. Tell us the scope and we will quote it.",
  },
  {
    question: "Are your products safe for kids and pets?",
    answer:
      "Our standard kit is professional grade and residue-free once dry. We also carry a plant-based, fragrance-free line and will use it exclusively on request at no extra charge.",
  },
];

export default function DeepCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "Deep Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$200 - $650+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Deep Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Deep cleaning"
          title="Deep Cleaning Services in Boston, MA"
          subtitle="The visit that gets behind the stove, into the grout, and along every baseboard. A full reset for homes that need more than maintenance, priced flat and done in one appointment."
          highlights={["Furniture and appliances moved", "Grout, vents, and fixtures detailed", "Interior windows included", "Oven and fridge add-ons available"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Deep Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="A reset for everything routine cleaning works around" paragraphs={intro} />
        <WhatIncluded
          title="What a deep clean covers"
          intro="Everything in a routine visit plus the detail layer, room by room."
          sections={deepIncluded}
        />
        <PricingTable
          title="Deep cleaning prices in Boston"
          intro="Condition and time since the last professional clean move a quote within these ranges."
          table={deepPricing}
          defaultService={KEY}
        />
        <WhenToBook title="When a deep clean is the right call" scenarios={scenarios} />
        <WhyChoose title="Why Boston homes book their deep cleans with us" benefits={benefits} tone="canvas" />
        <Testimonials areaFilter="Newton Centre" />
        <ServiceAreas
          title="Deep cleaning by neighborhood"
          intro="Local pages with notes on the housing types and grime patterns we see in each area."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
          tone="paper"
        />
        <MapEmbed query="Boston, MA" title="Deep cleaning across Boston" />
        <FAQ title="Deep cleaning questions" items={faqs} tone="canvas" />
        <CTABand
          title="Ready for the whole home to feel new again?"
          description="Tell us the size and how long it has been since the last professional clean. A flat deep-clean quote comes back within the hour."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
