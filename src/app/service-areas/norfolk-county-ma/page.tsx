import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationsByCounty } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const PATH = "/service-areas/norfolk-county-ma";
const towns = getLocationsByCounty("Norfolk County");

export const metadata: Metadata = {
  title: "Cleaning Services Norfolk County MA",
  description:
    "House cleaning in inner Norfolk County, MA: Brookline, Newton, Needham, Wellesley, Dedham, and Milton. Insured teams sized for family homes, flat quotes.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const content: AreaPageContent = {
  name: "Norfolk County",
  path: PATH,
  eyebrow: "Norfolk County",
  h1: "Professional Cleaning Services in Norfolk County, MA",
  subtitle:
    "Brookline and Newton are our Norfolk County base, with teams reaching Needham, Wellesley, Dedham, and Milton. Larger family homes, longer appointments, and the same flat pricing and guarantee.",
  highlights: ["Brookline and Newton daily", "Sized for larger family homes", "Weekly and biweekly plans", "Kid and pet friendly teams"],
  introTitle: "Cleaning for the family-home suburbs west and south of Boston",
  intro: [
    "Norfolk County wraps around Boston to the west and south, and its inner towns are where many of our customers raise families. Brookline and Newton, both with dedicated pages on this site, are the core of our Norfolk work and see our teams every day. Needham, Wellesley, Dedham, and Milton are served on routed days, and a quick zip code check confirms availability for anything further out.",
    "The housing here is bigger than in the city. Three- to five-bedroom colonials, capes, Tudors, and new builds with finished basements, mudrooms, home offices, and two or three full bathrooms are the norm. Our Norfolk County appointments are scheduled accordingly, with the team working upstairs to down in a logical sequence and a quote that includes every finished space from the start.",
    "Family life shapes the work. Kitchens produce three meals a day, bathrooms are shared, and the entryway takes the full brunt of a New England winter. Weekly and biweekly plans are the most common choice, timed for school hours so the house is finished before pickup. Our teams organize toys rather than shove them aside, lift pet hair from runners and upholstery, and carry a plant-based product line for households that prefer it.",
    "Older Norfolk homes have hardwood, plaster, and radiators; newer ones have wide-plank engineered floors, quartz counters, and open plans full of glass. Our teams are trained on both. Wood is dry-mopped before a barely damp pass. Stone gets a pH-neutral cleaner. Stainless is left streak-free. Nothing is soaked, scratched, or dulled.",
    "Seasonal deep cleans bookend the year: spring to clear the salt and sand, fall before hosting season. Move-in cleans serve buyers in a fast market who close on Friday and move in Saturday. Post-construction cleans follow the many kitchen and whole-home renovations underway in Brookline and Newton. Each is flat-priced and confirmed before booking.",
    "Every Norfolk County visit comes with a consistent lead cleaner, texts at arrival and completion, and a 24-hour guarantee that we return to fix anything missed. Coordinators are reachable seven days a week to adjust plans around school vacations, travel, and the arrival of a new baby.",
  ],
  servicesTitle: "Cleaning services across Norfolk County",
  servicesIntro: "Every service is available in Brookline and Newton daily and in surrounding towns on routed days.",
  neighborhoodsTitle: "Norfolk County communities we serve",
  neighborhoodsIntro: "Dedicated pages for Brookline and Newton; the rest are covered on routed days.",
  neighborhoods: [
    "Brookline",
    "Newton",
    "Needham",
    "Wellesley",
    "Dedham",
    "Milton",
    "Quincy",
    "Westwood",
    "Dover",
    "Canton",
    "Norwood",
    "Weymouth",
  ],
  frequenciesTitle: "Recurring plans for Norfolk County families",
  frequenciesIntro: "Weekly and biweekly plans with a consistent team, timed for school hours, at a lower rate after the first visit.",
  whyTitle: "Why Norfolk County families choose Boston Cleaning Services",
  benefits: [
    {
      title: "Appointments sized for the home",
      description: "Large homes are quoted with enough time to do every floor, including the basement and third floor, rather than squeezed into a city apartment slot.",
    },
    {
      title: "School-hours scheduling",
      description: "Weekday mid-morning slots are held for recurring customers who want the house finished before pickup.",
    },
    {
      title: "Family and pet fluent",
      description: "Toys organized, fur lifted, high-touch surfaces sanitized, and a plant-based product line available on request.",
    },
    {
      title: "Same lead cleaner every visit",
      description: "Your lead cleaner learns the house and carries preferences forward, so instructions are never repeated.",
    },
  ],
  mapQuery: "Brookline, MA",
  mapTitle: "Our Norfolk County coverage",
  testimonialFilter: "Brookline",
  faqTitle: "Norfolk County cleaning questions",
  faqs: [
    {
      question: "Which Norfolk County towns do you serve?",
      answer:
        "Brookline and Newton daily. Needham, Wellesley, Dedham, and Milton on routed days. Quincy, Westwood, Dover, Canton, Norwood, and Weymouth depend on the week's routing; send a zip code and we will confirm.",
    },
    {
      question: "How much does house cleaning cost for a larger Norfolk County home?",
      answer:
        "A four-bedroom, two-and-a-half-bath home typically runs $250 to $320 for a routine visit and $550 to $650 for a deep clean. Homes over 4,000 square feet are quoted individually.",
    },
    {
      question: "Can you come during school hours?",
      answer:
        "Yes, and that is the most requested window in Brookline and Newton. Recurring customers hold a standing weekday morning slot.",
    },
    {
      question: "Do you clean finished basements and home offices?",
      answer:
        "Yes. Tell us about them when booking and they are included in the quote and the routine visit.",
    },
    {
      question: "Can I pause service over summer vacation?",
      answer:
        "Of course. Text your coordinator with the dates and your slot and rate are held for pauses up to eight weeks.",
    },
  ],
  ctaTitle: "Book a cleaning in Norfolk County",
  ctaDescription: "Tell us the town, bedrooms, bathrooms, and finished spaces. A flat quote and available times arrive within the hour.",
  areaServed: ["Norfolk County, MA", "Brookline, MA", "Newton, MA", "Needham, MA", "Wellesley, MA", "Dedham, MA", "Milton, MA"],
  relatedAreas: towns.map((t) => ({ name: t.name, href: t.href })),
  relatedTitle: "Norfolk County area pages",
};

export default function NorfolkCountyPage() {
  return <AreaPage c={content} />;
}
