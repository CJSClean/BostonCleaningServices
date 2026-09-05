import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("south-boston")!;

export const metadata: Metadata = {
  title: "Cleaning Services South Boston | Seaport Condos & Southie Homes",
  description:
    "Condo and home cleaning in South Boston, from Seaport high-rises and Fort Point lofts to Southie triple-deckers and City Point homes. Insured local teams, flat quotes, same-week booking.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "South Boston & the Seaport",
  h1: "Cleaning Services in South Boston, MA",
  subtitle:
    "Glass towers in the Seaport, brick lofts in Fort Point, and three-deckers from Andrew Square to City Point. Our South Boston teams handle building rules, harbor-side windows, and old Southie floors alike.",
  highlights: ["Seaport concierge buildings", "Fort Point lofts and triple-deckers", "Floor-to-ceiling glass done streak-free", "Flat quotes, same-week slots"],
  introTitle: "Cleaning the newest and oldest parts of the city, side by side",
  intro: [
    "South Boston contains two very different neighborhoods under one name. The Seaport and Fort Point are the newest part of Boston: luxury towers with concierges, converted brick warehouses turned into lofts, and floor-to-ceiling glass looking over the harbor. South of Broadway, Southie proper is a century-old grid of triple-deckers, brick rowhouses, and single-families climbing toward Dorchester Heights and out to City Point. Our teams clean both every week.",
    "Seaport work is about glass, stone, and coordination. Windows that frame the harbor show every streak, and we clean them with the right squeegee technique and a streak-free finish. Quartz, marble, and concrete counters each need a specific product. Buildings require certificates of insurance, freight elevator reservations, and concierge check-ins, all of which our coordinators arrange before the visit so you can leave a key at the desk.",
    "Fort Point lofts bring high ceilings, exposed brick and timber, polished concrete or wide-plank floors, and a lot of dust that settles from those ceilings. We dust top down, treat brick and concrete with pH-neutral cleaners, and use dry then damp passes on wood so nothing warps. Open floor plans go quickly; the details take the time, and we give them that time.",
    "In the triple-deckers and rowhouses of the old neighborhood, the work is closer to what we do across Boston: hardwood dry-mopped, radiators hand-dusted, cast-iron tubs scrubbed, and rear kitchens degreased. Parking is resident-permit and the streets are tight, so teams plan a stopping strategy for each block and carry equipment in. None of that shows up on your quote.",
    "South Boston households lean young and busy: finance and biotech professionals in the Seaport, young families and long-time residents in Southie. Biweekly plans are the most common, with weekly visits for larger family homes near Marine Park and monthly cleans for the many one-bedroom condos. Our dispatch runs seven days a week, and evening slots are popular here for people who want the place done before they get home.",
    "Move cleans follow the first-of-month rental cycle, and we coordinate with the property managers who run many of the Seaport's rental buildings. Deep cleans before a sale, after a renovation, or simply as a spring reset are all flat-priced and confirmed before booking. Every visit comes with a two-person team, arrival and completion texts, and a 24-hour re-clean guarantee.",
  ],
  servicesTitle: "Cleaning services available in South Boston",
  servicesIntro: "Seaport condo or Southie three-decker, each service is priced for the home. Open one for local notes and FAQs.",
  neighborhoodsTitle: "South Boston and Seaport areas we cover",
  neighborhoodsIntro: "From the Fort Point Channel to Castle Island and every block in between.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for South Boston homes",
  frequenciesIntro: "Standing appointments, the same team, and a lower rate after the first visit. Evening slots available for the Seaport commute crowd.",
  whyTitle: "Why South Boston residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Glass and stone done properly",
      description: "Harbor-facing windows finished streak-free and stone counters cleaned with pH-neutral products. Seaport finishes are expensive and we treat them that way.",
    },
    {
      title: "Building requirements pre-arranged",
      description: "Insurance certificates, freight elevator times, and concierge check-ins are handled by our coordinators before the team arrives.",
    },
    {
      title: "Old Southie know-how",
      description: "Triple-decker layouts, permit parking, and cast-iron tubs are routine for our teams. There is never a stair or parking surcharge.",
    },
    {
      title: "Evening and weekend slots",
      description: "Dispatch runs 7am to 9pm every day, so the apartment can be finished before you are home from the office or the gym.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in South Boston",
  testimonialFilter: "Seaport",
  faqTitle: "South Boston cleaning questions",
  faqs: [
    {
      question: "Do you clean condos in Seaport high-rises?",
      answer:
        "Yes, in most of the major buildings. We deliver certificates of insurance to management, reserve freight elevators where required, and check in with the concierge. You can leave a key at the desk.",
    },
    {
      question: "How much does apartment cleaning cost in South Boston?",
      answer:
        "A one-bedroom typically runs $130 to $170 for a routine clean and $190 to $250 for a deep clean; two-bedrooms run $170 to $220 routine. Quotes are flat and set before booking.",
    },
    {
      question: "Can you clean floor-to-ceiling windows?",
      answer:
        "Interior glass reachable from the floor or a two-step stool is included in deep cleans and available as an add-on to routine visits. Exterior glass is handled by the building.",
    },
    {
      question: "Do you clean Fort Point lofts with exposed brick and concrete?",
      answer:
        "Regularly. Brick is dusted and spot cleaned with a pH-neutral solution; polished concrete gets a neutral cleaner and never an acidic one. High ceilings are dusted top down.",
    },
    {
      question: "Are evening cleanings available?",
      answer:
        "Yes. We schedule until 9pm every day, and evening slots are popular in South Boston for residents who want the unit finished before they get home.",
    },
  ],
  ctaTitle: "Book a South Boston cleaning this week",
  ctaDescription: "Send the building or street, unit size, and preferred time. A flat quote and open slots come back within the hour.",
  areaServed: ["South Boston, MA", "Seaport District, Boston, MA"],
};

export default function SouthBostonPage() {
  return <AreaPage c={content} />;
}
