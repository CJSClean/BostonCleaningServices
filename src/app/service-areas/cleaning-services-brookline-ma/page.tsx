import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("brookline")!;

export const metadata: Metadata = {
  title: "Cleaning Services Brookline MA",
  description:
    "House and apartment cleaning in Brookline, MA, from Coolidge Corner condos to Fisher Hill colonials. Insured local teams, flat pricing, weekly to monthly plans.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Brookline, Norfolk County",
  h1: "Cleaning Services in Brookline, MA",
  subtitle:
    "Brick apartment blocks in Coolidge Corner, Victorians in Brookline Village, and large family homes on Fisher Hill. One local team, one published checklist, pricing set before we arrive.",
  highlights: ["Family-home and condo experience", "Pet-friendly teams", "Weekly to monthly plans", "Same-week first visits"],
  introTitle: "Reliable cleaning for a town that runs on schedules",
  intro: [
    "Brookline is a town of routines. School drop-offs at Runkle and Driscoll, Green Line commutes from Coolidge Corner and Washington Square, hospital shifts at Longwood a few blocks over the line. Households here plan their weeks carefully, and a cleaning service that shows up late or inconsistently does not last long. We built our Brookline operation around two-hour arrival windows we actually keep and a lead cleaner who stays with your home visit after visit.",
    "The housing is more varied than most people expect. North Brookline is dense with brick apartment buildings and condo conversions along Beacon Street and Harvard Street. Brookline Village and Pill Hill hold Victorians divided into two or three units. Fisher Hill, Chestnut Hill, and the streets south of Route 9 are single-family territory with four and five bedrooms, finished basements, and mudrooms that take a beating in winter. Our quoting accounts for all of it.",
    "Families are the core of our Brookline clientele, and family homes have a specific cleaning profile: kitchens that produce three meals a day, bathrooms shared by kids, playrooms, and floors that see cleats, boots, and paws. Weekly and biweekly plans are the norm here, and our checklist puts extra attention on high-touch surfaces like switch plates, cabinet handles, and the fridge door.",
    "Pets are nearly universal. Our teams are comfortable working around dogs and cats, know how to get fur out of upholstery and off stair runners, and carry an enzyme cleaner for the occasional accident. Tell us about the animals when booking and we will note anything that helps the visit go smoothly, including which room the cat hides in.",
    "Seasonal deep cleans are popular in Brookline as well, particularly in spring when the salt and sand of a Norfolk County winter finally leave the entryway, and in late summer before the school year restarts. We also serve landlords managing multi-family Victorians and condo owners preparing units for sale, where a deep clean before photographs makes a measurable difference.",
    "Whatever the property, the process is the same: a flat quote based on size, layout, and condition, a trained team, a text when we arrive and finish, and a 24-hour guarantee that we return to fix anything missed. Brookline residents can reach a coordinator seven days a week to adjust a plan around school vacations, travel, or a new baby.",
  ],
  servicesTitle: "Cleaning services available in Brookline",
  servicesIntro: "From a Coolidge Corner studio to a Fisher Hill colonial, each service is priced for the home. Open one for Brookline-specific notes.",
  neighborhoodsTitle: "Brookline neighborhoods we serve",
  neighborhoodsIntro: "North Brookline apartment districts through the single-family streets south of Route 9.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Brookline households",
  frequenciesIntro: "Weekly and biweekly plans keep busy family homes in order, with the same team and a discount on every visit after the first.",
  whyTitle: "Why Brookline families choose Boston Cleaning Services",
  benefits: [
    {
      title: "Arrival windows we keep",
      description: "Brookline households run on tight schedules. Our two-hour windows are honored, and any delay is communicated before the window closes, not after.",
    },
    {
      title: "Comfortable with kids and pets",
      description: "Toys get organized, not shoved aside. Dogs get a hello. Our standard products are residue-free once dry and a plant-based line is available on request.",
    },
    {
      title: "Large-home capacity",
      description: "Four- and five-bedroom homes with finished basements are quoted with enough time to do every floor properly, not squeezed into an apartment slot.",
    },
    {
      title: "Local knowledge",
      description: "We know which blocks need a parking plan, which buildings have elevator rules, and when Brookline schools break for vacation so plans can flex.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Brookline",
  testimonialFilter: "Brookline",
  faqTitle: "Brookline cleaning questions",
  faqs: [
    {
      question: "How much does house cleaning cost in Brookline?",
      answer:
        "A mid-size three-bedroom, two-bath home typically runs $190 to $250 for a routine visit and $450 to $550 for a deep clean. Larger Fisher Hill and Chestnut Hill homes are quoted individually. Recurring plans reduce the rate on every visit after the first.",
    },
    {
      question: "Can you come during school hours?",
      answer:
        "Yes, and most Brookline families prefer it. Weekday mornings between 9am and 2pm are our busiest slots in town, so recurring customers lock in a standing time.",
    },
    {
      question: "Do you clean Coolidge Corner apartments and condos?",
      answer:
        "Regularly. Brick buildings along Beacon and Harvard Streets, condo conversions, and elevator buildings near the Green Line are all in our rotation. Studios start at $110.",
    },
    {
      question: "Are you insured for condo associations?",
      answer:
        "Yes. We provide certificates of insurance to building management on request, which several Brookline associations require before a vendor enters.",
    },
    {
      question: "Can I pause service during summer travel?",
      answer:
        "Of course. Text your coordinator with the dates and your standing slot is held. The recurring discount stays in place for pauses of up to eight weeks.",
    },
  ],
  ctaTitle: "Book a Brookline cleaning this week",
  ctaDescription: "Send bedrooms, bathrooms, and your preferred schedule. A flat quote and open times arrive within the hour.",
  areaServed: ["Brookline, MA"],
};

export default function BrooklinePage() {
  return <AreaPage c={content} />;
}
