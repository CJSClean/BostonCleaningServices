import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import WhatIncluded from "@/components/sections/WhatIncluded";
import PricingTable from "@/components/sections/PricingTable";
import WhenToBook from "@/components/sections/WhenToBook";
import Frequencies from "@/components/sections/Frequencies";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { routineIncluded, notIncludedInRoutine } from "@/lib/data/checklist";
import { apartmentPricing } from "@/lib/data/pricing";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

const PATH = "/services/apartment-cleaning-boston-ma";
const KEY = "apartment-cleaning";

export const metadata: Metadata = {
  title: "Apartment Cleaning Boston MA",
  description:
    "Apartment cleaning in Boston, MA for walk-ups, triple-deckers, and high-rises. Insured employee cleaners, building access handled, flat quotes from $110.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "Roughly two thirds of Boston households rent, and most of those live in apartments that were never designed for easy cleaning. Galley kitchens with no counter space, bathrooms with original 1920s tile, radiators under every window, and hallways where a vacuum cord becomes a tripping hazard. Our apartment cleaning service exists for those units, from a 380-square-foot studio in the Fenway to a three-bedroom floor-through in a Somerville triple-decker.",
  "Apartment logistics are half the job. Our coordinators collect building details when you book: whether there is an elevator, where the team can park or unload, how to reach the concierge, and any rules about service hours. Cleaners carry their equipment up walk-ups without complaint and know how to work quietly in buildings with thin walls and shared hallways.",
  "The clean itself follows the same checklist we use everywhere. Kitchen counters, stovetop, and appliance exteriors. Bathroom scrubbed and sanitized, including the tile grout lines in older units. Dusting from the top of the fridge to the baseboards, beds made, floors vacuumed and mopped with the right solution for the surface. A typical one-bedroom takes our team around 90 minutes.",
  "Because apartment turnover in Boston revolves around September 1 and the first of each month, we hold capacity for lease-related cleanings and can usually fit a first-time routine visit inside the same week. Roommates splitting the cost, remote workers who need the place quiet by a certain hour, and landlords maintaining a unit between tenants all get the same flat, upfront pricing.",
  "Recurring plans make the most sense for apartments because the space is small enough that regular maintenance keeps it nearly spotless. A biweekly visit to a one-bedroom often costs less than a night out and frees up the weekend entirely. Try a single visit first if you like. The discount kicks in the moment you switch to a schedule.",
];

const scenarios = [
  {
    title: "Weekly for shared apartments",
    description:
      "Three or four roommates put a lot of wear on one kitchen and one bathroom. Weekly service ends the chore-chart arguments and keeps common areas guest-ready.",
  },
  {
    title: "Biweekly for one- and two-bedrooms",
    description:
      "For a single professional or a couple, every two weeks keeps floors, bath, and kitchen consistently clean without paying for visits you do not need.",
  },
  {
    title: "Monthly for studios",
    description:
      "Small spaces stay reasonably tidy with light upkeep. A monthly professional visit handles the tub, the oven top, and the dust that accumulates on high shelves.",
  },
  {
    title: "One-time before an inspection or guest",
    description:
      "Landlord walkthroughs, a parent visiting, or a sublet handoff. Book a single clean and upgrade to a deep clean if the unit has been neglected.",
  },
];

const benefits = [
  {
    title: "We handle the building, not just the unit",
    description:
      "Concierge check-ins, freight elevator bookings, loading zone timing, and quiet-hours rules are noted at booking so the visit goes smoothly without you coordinating anything.",
  },
  {
    title: "Fast, thorough, and priced for small spaces",
    description:
      "Apartment quotes start at $110 for a studio. A one-bedroom is finished in about 90 minutes, and you never pay for time that is not used.",
  },
  {
    title: "Older-unit expertise",
    description:
      "Cast-iron tubs, hex-tile floors, radiator fins, and painted wood trim need specific products and a light touch. Our teams see these features daily.",
  },
  {
    title: "Access without hassle",
    description:
      "Leave a key with the front desk, use a lockbox, or share a code. Every cleaner is background-checked and bonded, and you get arrival and completion texts.",
  },
];

const faqs = [
  {
    question: "How much does apartment cleaning cost in Boston?",
    answer:
      "Studios start around $110, one-bedrooms $130 to $170, and two-bedrooms $170 to $220 for a routine visit. Deep cleans run higher. Every quote is flat and confirmed before booking, and recurring plans lower the rate on later visits.",
  },
  {
    question: "Do you clean apartments in buildings without elevators?",
    answer:
      "Yes. A large share of Boston apartments are in walk-ups and our teams carry equipment up every day. Units above the fourth floor without an elevator may carry a small surcharge, which we tell you about in the quote.",
  },
  {
    question: "Can I split the cost with roommates?",
    answer:
      "Certainly. We charge one card per visit, but many customers rotate the card on file or settle up between themselves. Just let the coordinator know if the payment method changes.",
  },
  {
    question: "What if my landlord requires proof of insurance?",
    answer:
      "We can email a certificate of insurance to you or to building management before the first visit. Many managed buildings in the Seaport and Back Bay require this and it takes us a day or less to provide.",
  },
  {
    question: "Do you bring your own vacuum?",
    answer:
      "Yes, along with mops, microfiber, and all cleaning products. If your building restricts certain chemicals or you prefer fragrance-free products, tell us at booking.",
  },
  {
    question: "How do I prepare the apartment?",
    answer:
      "Put away clothing, dishes, and clutter so the team can reach surfaces. You do not need to pre-clean anything. If a room should be skipped, leave a note or text the coordinator.",
  },
  {
    question: "Can you do a clean on move-out day?",
    answer:
      "Yes, though a move-out clean is a separate, more thorough service that covers inside cabinets, appliances, and closets. See our move-out cleaning page for pricing and what it includes.",
  },
];

export default function ApartmentCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "Apartment Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$110 - $320+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Apartment Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Apartment cleaning"
          title="Apartment Cleaning Services in Boston, MA"
          subtitle="Studios, one-beds, and shared units in walk-ups, triple-deckers, and high-rises. We handle the building logistics, bring everything, and finish a one-bedroom in about 90 minutes."
          highlights={["Flat quotes from $110", "Walk-ups and concierge buildings", "Fragrance-free products available", "Same-week availability"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Apartment Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="Cleaning built for the way Boston apartments actually are" paragraphs={intro} />
        <WhatIncluded
          title="What a routine apartment cleaning covers"
          intro="The same list for a studio or a three-bedroom, scaled to the space."
          sections={routineIncluded}
          notIncluded={notIncludedInRoutine}
        />
        <PricingTable
          title="Apartment cleaning prices in Boston"
          intro="Ranges cover most units in the city. Condition, pets, and add-ons move a quote within the range."
          table={apartmentPricing}
          defaultService={KEY}
        />
        <WhenToBook title="How often should an apartment be cleaned" scenarios={scenarios} />
        <Frequencies title="Recurring plans for apartments" intro="Small spaces stay spotless on a schedule. Discounts apply from the second visit and the same team returns each time." />
        <WhyChoose title="Why Boston renters and owners pick us" benefits={benefits} />
        <Testimonials areaFilter="Seaport" />
        <ServiceAreas
          title="Apartment cleaning by neighborhood"
          intro="Each area page covers local building types, pricing notes, and questions we hear most."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
        />
        <MapEmbed query="Boston, MA" title="Apartment cleaning across Boston" />
        <FAQ title="Apartment cleaning questions" items={faqs} />
        <CTABand
          title="Get your apartment cleaned this week"
          description="Send your unit size and building details. We reply with a flat price and the first available slots."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
