import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationsByCounty } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const PATH = "/service-areas/suffolk-county-ma";
const towns = getLocationsByCounty("Suffolk County");

export const metadata: Metadata = {
  title: "Cleaning Services Suffolk County MA",
  description:
    "Residential cleaning across Suffolk County, MA: Back Bay, Beacon Hill, South End, South Boston, Charlestown, Jamaica Plain, and the rest of Boston.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const content: AreaPageContent = {
  name: "Suffolk County",
  path: PATH,
  eyebrow: "Suffolk County",
  h1: "Cleaning Services in Suffolk County, MA",
  subtitle:
    "Suffolk County is Boston. From the harbor to the Arboretum, our teams clean apartments, condos, and houses across every neighborhood with one checklist and one standard of service.",
  highlights: ["All Boston neighborhoods", "Brownstones, triple-deckers, and towers", "Flat quotes before booking", "Seven-day dispatch"],
  introTitle: "One county, twenty-plus neighborhoods, one standard",
  intro: [
    "Suffolk County is small in area and enormous in variety. It includes all of Boston plus Chelsea, Revere, and Winthrop, and within Boston alone the housing ranges from 1790s brick on Beacon Hill to glass towers finished last year in the Seaport. Boston Cleaning Services is headquartered here, and our teams cover the county's neighborhoods every day of the week.",
    "Our dedicated area pages cover the neighborhoods where most of our Suffolk County work happens: Back Bay, Beacon Hill, the South End, South Boston and the Seaport, Charlestown, and Jamaica Plain. We also serve the rest of the city, including the Fenway, Mission Hill, the North End, the West End, Roslindale, West Roxbury, Brighton, Allston, Dorchester, Roxbury, Hyde Park, and East Boston. If your address is in Boston, send us the zip code and we will confirm a team.",
    "What unites the county's housing is age and density. Most Boston homes were built before 1940, which means hardwood, plaster, radiators, and tile that need specific care. Most are close together, which means permit parking, shared entries, and neighbors on the other side of the wall. Our teams train on the surfaces and plan for the logistics so neither shows up as a problem, or a line item, for you.",
    "The county's rental calendar is the most concentrated in the country. September 1 and the first of each month bring waves of move-in and move-out cleans, and we hold capacity for those dates and coordinate with landlords and managers who run units across multiple neighborhoods. For homeowners, seasonal deep cleans in spring and fall bookend the salt-and-sand winter.",
    "Recurring service is the backbone of our Suffolk County work. Weekly, biweekly, and monthly plans get a consistent lead cleaner, a standing slot, and a discount on every visit after the first. Because our teams are already in the city, first-time visits can usually be placed within the same week, and evening and weekend slots are available.",
    "Every job in the county comes with the same guarantees: a flat price confirmed before booking, a team of background-checked employees, texts at arrival and completion, and a 24-hour window in which we return to fix anything missed. Coordinators are reachable seven days a week by phone or text.",
  ],
  servicesTitle: "Cleaning services across Suffolk County",
  servicesIntro: "Every service is available in every Boston neighborhood. Open one for city-wide details and pricing.",
  neighborhoodsTitle: "Boston neighborhoods we serve",
  neighborhoodsIntro: "Dedicated pages exist for the areas linked below; the rest of the city is covered too.",
  neighborhoods: [
    "Back Bay",
    "Beacon Hill",
    "South End",
    "South Boston",
    "Seaport",
    "Charlestown",
    "Jamaica Plain",
    "Fenway",
    "North End",
    "Mission Hill",
    "Roslindale",
    "West Roxbury",
    "Brighton",
    "Allston",
    "Dorchester",
    "East Boston",
  ],
  frequenciesTitle: "Recurring plans across Boston",
  frequenciesIntro: "Standing appointments with the same team, discounted from the second visit, available in every neighborhood we serve.",
  whyTitle: "Why Suffolk County households choose Boston Cleaning Services",
  benefits: [
    {
      title: "Based in the city, not dispatched from outside it",
      description: "Our teams start their day in Boston, which is why same-week and evening slots are realistic here rather than a stretch.",
    },
    {
      title: "Trained on pre-war housing",
      description: "Plaster, hardwood, radiators, and old tile are the norm in Suffolk County and our product kit and training are built around them.",
    },
    {
      title: "Turnover season capacity",
      description: "We hold move-in and move-out slots for September 1 and first-of-month dates and coordinate keys with landlords across the county.",
    },
    {
      title: "One checklist everywhere",
      description: "The published room-by-room list is the same in Charlestown as in Jamaica Plain. So is the guarantee.",
    },
  ],
  mapQuery: "Boston, MA",
  mapTitle: "Our Suffolk County coverage",
  faqTitle: "Suffolk County cleaning questions",
  faqs: [
    {
      question: "Do you serve Boston neighborhoods without a dedicated page?",
      answer:
        "Yes. The Fenway, North End, Mission Hill, Roslindale, West Roxbury, Brighton, Allston, Dorchester, Roxbury, Hyde Park, and East Boston are all covered. Send your zip code and we confirm a team.",
    },
    {
      question: "Do you serve Chelsea, Revere, or Winthrop?",
      answer:
        "Occasionally, depending on team routing that week. Send us the address and we will tell you honestly whether we can reach it or refer you to someone who can.",
    },
    {
      question: "Is pricing the same across Boston?",
      answer:
        "Yes. Quotes are based on the size, layout, and condition of the home, not the neighborhood. A one-bedroom in Roslindale and one in Back Bay of similar size and condition receive the same price.",
    },
    {
      question: "How quickly can you schedule a first cleaning in Boston?",
      answer:
        "Usually within the same week, often within two or three days. Move cleans around September 1 and the first of the month should be booked two to three weeks ahead.",
    },
    {
      question: "Do you work with Boston property managers?",
      answer:
        "Yes. We handle turnover cleans, key logistics, insurance certificates, and direct invoicing for managers and owners with units across the county.",
    },
  ],
  ctaTitle: "Book a cleaning anywhere in Boston",
  ctaDescription: "Tell us the neighborhood, home size, and what you need. A flat quote and available times arrive within the hour.",
  areaServed: ["Suffolk County, MA", "Boston, MA"],
  relatedAreas: [{ name: "Boston", href: "/" }, ...towns.map((t) => ({ name: t.name, href: t.href }))],
  relatedTitle: "Suffolk County area pages",
};

export default function SuffolkCountyPage() {
  return <AreaPage c={content} />;
}
