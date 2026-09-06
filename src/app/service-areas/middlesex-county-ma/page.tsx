import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationsByCounty } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const PATH = "/service-areas/middlesex-county-ma";
const towns = getLocationsByCounty("Middlesex County");

export const metadata: Metadata = {
  title: "Cleaning Services Middlesex County MA",
  description:
    "Residential cleaning in inner Middlesex County, MA: Cambridge, Somerville, Arlington, Medford, Watertown, and Belmont.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const content: AreaPageContent = {
  name: "Middlesex County",
  path: PATH,
  eyebrow: "Middlesex County",
  h1: "Professional Cleaning Services in Middlesex County, MA",
  subtitle:
    "Cambridge and Somerville are the heart of our Middlesex County work, with teams reaching into Arlington, Medford, Watertown, and Belmont. Triple-deckers, Victorians, and new condos, all on one checklist.",
  highlights: ["Cambridge and Somerville daily", "Inner-ring towns by request", "Academic-calendar friendly", "Same-week first visits"],
  introTitle: "Cleaning north of the Charles",
  intro: [
    "Middlesex County is the most populous county in New England and stretches from the Charles River to the New Hampshire line. Our work concentrates in the dense inner ring north of the river: Cambridge and Somerville above all, with regular visits to Arlington, Medford, Watertown, and Belmont. These communities share a housing stock of triple-deckers, two-families, Victorians, and a growing number of condos near transit.",
    "Cambridge and Somerville each have dedicated pages on this site with neighborhood-level detail, pricing notes, and local FAQs. Together they account for the majority of our Middlesex County visits, and our teams are on their streets every day of the week. The surrounding towns are served on routed days, and a quick note with your zip code lets us confirm availability.",
    "Life in this part of the county runs on academic and research calendars as much as the standard work week. Semesters begin and end, visiting scholars arrive and leave, lab schedules shift. Our recurring plans pause and resume around that, holding your slot and your rate for breaks of up to eight weeks. One-time cleans before a sublet handoff or a visiting family member can usually be placed within the same week.",
    "The housing rewards careful technique. Triple-decker floors have rear kitchens and long hallways. Victorians have ornate trim and radiators under every window. Newer buildings near Kendall, Assembly Row, and the Green Line Extension have glass, stone, and concierge requirements. Our teams move between all three with the right products and a plan for each.",
    "Residents here ask about ingredients more than anywhere else we work, and we welcome it. Our standard products are professional grade and residue-free once dry, and we carry a plant-based, fragrance-free line that we will use exclusively at no extra charge. The preference is saved to your account so every team honors it.",
    "Whether it is a biweekly plan for a Cambridgeport condo, a move-out clean at the end of a Somerville lease, or a deep clean in an Arlington two-family, every Middlesex County visit comes with an upfront quote confirmed before booking, a trained team, arrival and completion texts, and a 24-hour re-clean guarantee.",
  ],
  servicesTitle: "Cleaning services across Middlesex County",
  servicesIntro: "Every service is available in Cambridge and Somerville daily and in surrounding towns on routed days.",
  neighborhoodsTitle: "Middlesex County communities we serve",
  neighborhoodsIntro: "Dedicated pages for Cambridge and Somerville; the rest are covered on routed days.",
  neighborhoods: [
    "Cambridge",
    "Somerville",
    "Arlington",
    "Medford",
    "Watertown",
    "Belmont",
    "Everett",
    "Malden",
    "Waltham",
    "Lexington",
    "Winchester",
    "Melrose",
  ],
  frequenciesTitle: "Recurring plans north of the river",
  frequenciesIntro: "Pause for travel or a semester break and resume without losing your rate. Same team, standing slot, discount from the second visit.",
  whyTitle: "Why Middlesex County households choose Boston Cleaning Services",
  benefits: [
    {
      title: "Cambridge and Somerville every day",
      description: "Teams are in both cities daily, which makes same-week booking, evening slots, and quick re-cleans realistic.",
    },
    {
      title: "Flexible around academic life",
      description: "Pause a plan for research travel, add a visit before a defense celebration, or reset a standing slot at the start of a term with one text.",
    },
    {
      title: "Ingredient transparency",
      description: "Ask about anything in the caddy. A plant-based, fragrance-free line is available at no extra cost and saved as a permanent preference.",
    },
    {
      title: "Turnover experts",
      description: "Graduate leases and sublets create constant turnover. We handle key logistics and September 1 timing routinely.",
    },
  ],
  mapQuery: "Cambridge, MA",
  mapTitle: "Our Middlesex County coverage",
  testimonialFilter: "Cambridge",
  faqTitle: "Middlesex County cleaning questions",
  faqs: [
    {
      question: "Which Middlesex County towns do you serve?",
      answer:
        "Cambridge and Somerville daily. Arlington, Medford, Watertown, Belmont, Everett, and Malden on routed days. Waltham, Lexington, Winchester, and Melrose depend on the week's schedule; send a zip code and we will confirm.",
    },
    {
      question: "Is pricing different outside Cambridge and Somerville?",
      answer:
        "No. Quotes depend on the size, layout, and condition of the home, not the town. A routed-day visit to Arlington is priced the same as a comparable home in Cambridge.",
    },
    {
      question: "Can you accommodate semester schedules?",
      answer:
        "Yes. Recurring plans can pause for up to eight weeks without losing the rate, and standing slots can be reset at the start of a term with a text to your coordinator.",
    },
    {
      question: "Do you offer eco-friendly cleaning?",
      answer:
        "We carry a plant-based, fragrance-free product line and will use it exclusively at no extra charge. Our standard products are residue-free once dry.",
    },
    {
      question: "How far ahead should I book a September move-out clean?",
      answer:
        "Two to three weeks for late-August and September 1 dates, which are the busiest of the year across Cambridge and Somerville.",
    },
  ],
  ctaTitle: "Book a cleaning in Middlesex County",
  ctaDescription: "Tell us the town, home size, and what you need. An upfront quote and available times arrive within the hour.",
  areaServed: ["Middlesex County, MA", "Cambridge, MA", "Somerville, MA", "Arlington, MA", "Medford, MA", "Watertown, MA", "Belmont, MA"],
  relatedAreas: towns.map((t) => ({ name: t.name, href: t.href })),
  relatedTitle: "Middlesex County area pages",
};

export default function MiddlesexCountyPage() {
  return <AreaPage c={content} />;
}
