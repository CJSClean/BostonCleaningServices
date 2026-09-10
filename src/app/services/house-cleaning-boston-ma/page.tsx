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
import { housePricing } from "@/lib/data/pricing";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

const PATH = "/services/house-cleaning-boston-ma";
const KEY = "house-cleaning";

export const metadata: Metadata = {
  title: "House Cleaning Boston MA",
  description:
    "House cleaning in Boston, MA with upfront quotes from insured, background-checked employees. Weekly, biweekly, monthly, or one-time visits with a 100% satisfaction guarantee.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "Keeping a Boston house clean is a different job than keeping an apartment clean. There are more floors, more bathrooms, a basement door that tracks in grit, a mudroom full of winter boots, and usually a kitchen that works harder than any other room in the home. Our house cleaning service is built around that reality. An experienced crew, a fixed checklist, and enough time on the schedule to do every room properly instead of racing the clock.",
  "Most of our house cleaning customers live in the neighborhoods where single-family and two-family homes dominate: Newton, Brookline, Jamaica Plain, West Roxbury, Cambridge west of Harvard Square, and the quieter streets of Somerville and Charlestown. These are homes with hardwood that needs the right mop solution, radiators that collect dust, and original woodwork that should never see an abrasive pad. Our teams are experienced with those surfaces specifically.",
  "A routine visit covers every room top to bottom: dusting from light fixtures down, kitchen counters and appliance exteriors, full bathroom sanitizing, beds made, floors vacuumed and mopped. Deep clean tasks such as baseboards, inside the oven, and interior windows are available as add-ons or as a scheduled deep clean, and we recommend one before starting a recurring plan if the house has not had professional attention in a while.",
  "You choose the rhythm. Weekly service suits large families and homes with pets. Biweekly is the most common choice and keeps a typical three- or four-bedroom house in steady shape. Monthly works for smaller households that maintain between visits. Whatever you pick, we assign a consistent lead cleaner so the team learns your home, your preferences, and where the dog likes to hide.",
  "Pricing is confirmed before the first visit. It is based on bedrooms, bathrooms, approximate square footage, and the current condition of the home, and it drops on every recurring visit after the first. Homes with heavy buildup or pets that shed heavily carry an additional fee that we disclose when we quote. There are no hourly surprises and no charge for supplies or equipment. Every visit is backed by our 100% satisfaction guarantee.",
];

const scenarios = [
  {
    title: "Every week",
    description:
      "Households with young kids, multiple pets, or frequent cooking. Weekly service means floors, bathrooms, and the kitchen never reach the point where cleaning feels like a project.",
  },
  {
    title: "Every two weeks",
    description:
      "The default for most Boston houses. Two visits a month keeps dust, soap scum, and kitchen grease from building up while leaving room in the budget.",
  },
  {
    title: "Once a month",
    description:
      "Smaller homes, couples, and tidy households that wipe counters daily but want the bathrooms and floors done properly on a schedule.",
  },
  {
    title: "One-time reset",
    description:
      "Before hosting Thanksgiving, after a renovation, when a nanny or parent is arriving, or simply to try us out before committing to a plan.",
  },
];

const benefits = [
  {
    title: "Right-sized crew, one consistent lead",
    description:
      "We size the crew to the home, and cleaners check each other's work. Your lead cleaner stays the same on recurring plans so instructions do not have to be repeated.",
  },
  {
    title: "Trained on old-house surfaces",
    description:
      "Unfinished hardwood, marble vanities, brass hardware, and painted wainscoting are common in Boston homes and easy to damage. Our product kit and training account for all of them.",
  },
  {
    title: "Checklist you can read before booking",
    description:
      "The full room-by-room list is published on this site. You will never wonder whether the baseboards or the inside of the microwave were supposed to be done.",
  },
  {
    title: "Honest scope, honest pricing",
    description:
      "Quotes reflect the size and condition of the house. Heavy buildup or heavy pet shedding adds a fee we disclose before booking, and if the home differs from what was described we agree on a number before starting.",
  },
];

const faqs = [
  {
    question: "How long does a house cleaning take?",
    answer:
      "The team spends roughly two to three hours on a three-bedroom, two-bath home for a routine visit. Larger homes or first visits run longer. We schedule generously so the team is never rushing to the next job.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No. Most customers leave a key in a lockbox or share a smart-lock code. You receive a text when the team arrives and another when they leave. If you prefer to be present for the first visit, we are glad to schedule around that.",
  },
  {
    question: "Will the same people come each time?",
    answer:
      "On recurring plans, yes, as much as scheduling allows. Your lead cleaner is assigned to your home and brings the same partner in most weeks. If a substitution is unavoidable, we notify you the day before.",
  },
  {
    question: "What is not included in a routine visit?",
    answer:
      "Inside the oven and refrigerator, inside cabinets, interior windows, detailed baseboards, walls, laundry, and dishes. Each of these can be added for a set fee, or bundled into a deep clean.",
  },
  {
    question: "Do you clean homes with pets?",
    answer:
      "Yes, and most of our house cleaning customers have at least one. Tell us about the animals when booking so the team knows what to expect. We ask that aggressive dogs be secured during the visit for everyone's safety.",
  },
  {
    question: "Can I set priorities for each visit?",
    answer:
      "Absolutely. Notes such as focus on the kids' bathroom or skip the guest room this week can be texted to your coordinator and are attached to the job before the team arrives.",
  },
  {
    question: "How does the recurring discount work?",
    answer:
      "The first visit is at the standard rate. Every visit after that on a weekly plan is 15 percent off, biweekly 10 percent off, and monthly 5 percent off. Skipping two visits in a row may reset the plan to standard pricing.",
  },
  {
    question: "Which parts of Boston do you cover for house cleaning?",
    answer:
      "All of Boston proper plus Cambridge, Somerville, Brookline, and Newton. Each area has its own page on this site with local notes, and if you are just outside those boundaries, send us your zip code and we will check.",
  },
  {
    question: "How do you handle old hardwood and painted trim?",
    answer:
      "Barely damp, never wet. Much of Boston's housing stock predates the war, and old finishes let water through at the seams. Painted trim gets wiped rather than scrubbed.",
  },
  {
    question: "What about radiators in heating season?",
    answer:
      "Radiators and the wall behind them get attention from October onward. Dust that settles there bakes on and circulates through the place once the heat comes up.",
  },
  {
    question: "Do you clean walk-up apartments?",
    answer:
      "Yes, and most of our city work is walk-ups. Cleaners carry a compact kit sized for narrow Victorian stairwells rather than a full cart.",
  },
  {
    question: "How does winter affect scheduling?",
    answer:
      "Storm days get rescheduled rather than attempted. Entryways take salt and sand from December through March and get extra attention through those months.",
  },
];

export default function HouseCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "House Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$150 - $650+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "House Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="House cleaning"
          title="House Cleaning Services in Boston, MA"
          subtitle="Recurring or one-time cleaning for single-family homes, two-families, and townhouses. Two experienced cleaners, a published checklist, and an upfront price confirmed before we arrive."
          highlights={["Weekly, biweekly, or monthly plans", "Same lead cleaner on every visit", "Old-house surfaces handled correctly", "100% satisfaction guarantee"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "House Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="House cleaning that keeps pace with a busy home" paragraphs={intro} />
        <WhatIncluded
          title="What a routine house cleaning covers"
          intro="Every visit works through this list, room by room. Deep-clean items can be added to any visit."
          sections={routineIncluded}
          notIncluded={notIncludedInRoutine}
        />
        <PricingTable
          title="House cleaning prices in Boston"
          intro="Ranges reflect typical homes in our service area. Your quote is fixed before booking."
          table={housePricing}
          defaultService={KEY}
        />
        <WhenToBook title="Which schedule fits your household" scenarios={scenarios} />
        <Frequencies />
        <WhyChoose title="Why Boston homeowners choose us for house cleaning" benefits={benefits} />
        <Testimonials areaFilter="Newton" />
        <ServiceAreas
          title="House cleaning by neighborhood"
          intro="Local pages with pricing notes and FAQs for each area we serve."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
        />
        <MapEmbed query="Boston, MA" title="House cleaning across Boston" />
        <FAQ title="House cleaning questions" items={faqs} />
        <CTABand
          title="Take house cleaning off the list for good"
          description="Send the size of your home and preferred schedule. An upfront quote and open dates come back within the hour."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
