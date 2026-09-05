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
import { constructionIncluded } from "@/lib/data/checklist";
import { constructionPricing } from "@/lib/data/pricing";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

const PATH = "/services/post-construction-cleaning-boston-ma";
const KEY = "post-construction-cleaning";

export const metadata: Metadata = {
  title: "Post Construction Cleaning Boston MA | Renovation Dust Removal",
  description:
    "Post-construction and post-renovation cleaning in Boston, MA. HEPA dust removal, adhesive and paint speck cleanup, multi-pass final cleans for homeowners and contractors. Project quotes.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "Renovation dust does not behave like ordinary dust. Drywall compound, sawdust, tile grout haze, and plaster from an old Boston wall are fine enough to pass through closed doors, settle into HVAC ducts, and reappear on surfaces days after the contractor's broom has done its final sweep. Post-construction cleaning is a separate discipline from house cleaning, with different equipment, a different sequence, and usually more than one visit.",
  "Boston's housing stock makes it harder. A kitchen remodel in a 1900 South End row house releases a century of plaster dust from opened walls. A bathroom gut in a Somerville triple-decker sends debris through floorboard gaps into the unit below. New construction in the Seaport arrives with protective film on every fixture and a layer of silica across every horizontal surface. Our teams have cleaned all three scenarios and plan the job accordingly.",
  "A typical project has two phases. The rough clean happens after major trades finish but before final fixtures and floors are fully installed: debris bagged, surfaces vacuumed with HEPA-filtered equipment, and windows cleared of stickers and paint. The final clean happens after the punch list: every surface wiped, cabinets cleaned inside and out, fixtures polished, floors detailed, vents and light fixtures cleaned, and a second dusting pass a day later to catch what settles.",
  "We work with homeowners directly and with general contractors who want the handover to look finished. Quotes are per project rather than per hour, based on square footage, the scope of the work that was done, and how many passes the job needs. Photos or a short walkthrough are usually enough to price it. Our teams carry certificates of insurance that satisfy most GC and building management requirements.",
  "The result should be a home you can move furniture back into without a second cleaning. If dust reappears in the days after our final pass, which can happen as HVAC systems cycle, we return for a touch-up. Once the space is back in use, many customers move to a routine or deep cleaning plan to keep the newly finished surfaces looking that way.",
];

const scenarios = [
  {
    title: "After a kitchen or bathroom remodel",
    description:
      "The most common project. Grout haze on new tile, dust inside new cabinets, and adhesive on fixtures all need removal before the room can be used.",
  },
  {
    title: "Whole-unit or whole-home renovation",
    description:
      "Multiple rooms, multiple trades, weeks of dust. A rough clean mid-project and a final clean after the punch list keep the timeline on track.",
  },
  {
    title: "New construction handover",
    description:
      "Builders and GCs booking the final clean before a client walkthrough or closing. Film removal, glass detailing, and a spotless floor are the priorities.",
  },
  {
    title: "Smaller projects: floors, paint, windows",
    description:
      "A refinished floor or a repainted unit still leaves a residue that ordinary cleaning spreads around. A single-visit clean tuned to the work that was done.",
  },
];

const benefits = [
  {
    title: "HEPA equipment and a dust-first sequence",
    description:
      "We vacuum before we wipe, top to bottom, so fine particles are captured rather than pushed around. Standard vacuums exhaust drywall dust straight back into the room.",
  },
  {
    title: "Rough, final, and touch-up passes",
    description:
      "Construction dust settles for days. Our quotes account for more than one visit when the project needs it, including a return pass after HVAC has cycled.",
  },
  {
    title: "Careful with new finishes",
    description:
      "Fresh grout, unsealed stone, newly finished hardwood, and painted trim can all be damaged by the wrong product or pad. Teams are briefed on the finishes in your project before arriving.",
  },
  {
    title: "Contractor-ready paperwork",
    description:
      "Certificates of insurance, W-9s, and invoices to the GC or management company are routine for us. We show up when the schedule says and stay off the trades' toes.",
  },
];

const faqs = [
  {
    question: "How is post-construction cleaning priced?",
    answer:
      "Per project, based on square footage, the scope of work completed, and how many passes are needed. Bathroom remodels typically run $200 to $350, kitchens $300 to $450, and whole-home renovations from $900. Photos or a quick walkthrough let us quote accurately.",
  },
  {
    question: "When should the clean be scheduled?",
    answer:
      "The final clean should follow the punch list, after all trades are out. A rough clean can happen earlier to keep dust from spreading. Tell us the project timeline and we will suggest the right sequence.",
  },
  {
    question: "Do you remove construction debris?",
    answer:
      "We bag and stage light debris such as packaging, offcuts, and dust sweepings. Lumber, drywall sheets, fixtures, and dumpster-level material are the contractor's responsibility.",
  },
  {
    question: "Can you clean inside HVAC ducts?",
    answer:
      "We clean vent covers and registers and vacuum accessible duct openings. Full duct cleaning requires specialized equipment and we can refer a provider.",
  },
  {
    question: "Will dust come back after the clean?",
    answer:
      "Some settling in the first few days is normal, especially once the heating or cooling system runs. Our project quotes usually include a touch-up pass for exactly this reason.",
  },
  {
    question: "Do you work directly with contractors?",
    answer:
      "Yes. Many of our post-construction jobs are booked by general contractors and property managers. We provide insurance certificates and can invoice the company directly.",
  },
  {
    question: "Is post-construction cleaning safe for new floors and countertops?",
    answer:
      "We ask about every new finish before the visit and match products to them. Unsealed stone, fresh grout, and oiled hardwood get specific treatment so nothing is etched or dulled.",
  },
];

export default function PostConstructionCleaningPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: "Post Construction Cleaning",
            description: metadata.description as string,
            url: PATH,
            priceRange: "$300 - $1,000+",
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Post Construction Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Post construction cleaning"
          title="Post Construction Cleaning Services in Boston, MA"
          subtitle="HEPA-filtered dust removal, adhesive and paint cleanup, and multi-pass final cleans after remodels and new builds. For homeowners who want to move back in and contractors who want a clean handover."
          highlights={["HEPA vacuums, dust-first sequence", "Rough, final, and touch-up passes", "Safe on new grout, stone, and wood", "Insurance certificates for GCs"]}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "Post Construction Cleaning", href: PATH },
          ]}
          defaultService={KEY}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title="Finishing the project the contractor's broom cannot" paragraphs={intro} />
        <WhatIncluded
          title="What a post-construction clean covers"
          intro="Sequenced from dust capture to final polish, with a return pass built in."
          sections={constructionIncluded}
        />
        <PricingTable
          title="Post-construction cleaning estimates"
          intro="Project-based pricing. Send photos or schedule a walkthrough for an exact number."
          table={constructionPricing}
          defaultService={KEY}
        />
        <WhenToBook title="Projects we clean up after" scenarios={scenarios} />
        <WhyChoose title="Why homeowners and contractors book us for the final clean" benefits={benefits} tone="canvas" />
        <Testimonials areaFilter="Charlestown" />
        <ServiceAreas
          title="Post-construction cleaning by neighborhood"
          intro="Notes on the housing stock, permit parking, and common renovation types in each area."
          areas={locations.map((l) => ({ name: l.name, href: `/services/${KEY}-${l.key}-ma` }))}
          tone="paper"
        />
        <FAQ title="Post-construction cleaning questions" items={faqs} tone="canvas" />
        <CTABand
          title="Get the project truly finished"
          description="Send a few photos and the square footage. We return a project quote with the recommended number of passes."
          defaultService={KEY}
        />
      </PageShell>
    </>
  );
}
