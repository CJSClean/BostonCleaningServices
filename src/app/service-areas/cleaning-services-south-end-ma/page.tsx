import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("south-end")!;

export const metadata: Metadata = {
  title: "Cleaning Services South End Boston",
  description:
    "Brownstone, condo, and loft cleaning in Boston's South End. Teams trained on Victorian woodwork, garden-level units, and SoWa lofts.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "South End, Boston",
  h1: "Professional Cleaning Services in the South End, MA",
  subtitle:
    "The largest Victorian rowhouse district in the country, plus SoWa lofts and Ink Block towers. Our South End teams clean bowfronts, garden levels, and penthouses with equal care and upfront pricing.",
  highlights: ["Victorian bowfront specialists", "Garden-level and multi-floor units", "SoWa and Ink Block buildings", "Weekly to monthly plans"],
  introTitle: "Cleaning for brick bowfronts and everything built since",
  intro: [
    "The South End holds more Victorian rowhouses than any neighborhood in the United States, most of them brick bowfronts on tree-lined streets and around the small garden squares that give the area its character. Inside, these homes have been divided into garden-level units, floor-throughs, and duplexes with original details: marble mantels, plaster medallions, pocket doors, and hardwood that has been refinished a dozen times. Our South End teams are trained to clean those surfaces without damaging them.",
    "The neighborhood also has a newer edge. SoWa's converted warehouses hold lofts with high ceilings and exposed brick. Ink Block and the buildings along Harrison Avenue and Albany Street bring elevator living with concierges and modern finishes. Our coordinators collect building requirements at booking, deliver insurance certificates to management, and schedule around quiet hours so the visit is seamless.",
    "South End residents are a mix of long-time homeowners, young professionals within walking distance of Back Bay offices and the hospitals, and a large community of restaurant and creative-industry workers with unconventional hours. That last group is why we run 24/7 and why recurring plans here often land on weekday mornings or Sunday afternoons.",
    "Rowhouse cleaning has its own logic. Units span multiple levels connected by steep stairs. Garden-level apartments have their own humidity and dust patterns. Bathrooms are often tucked under stairs or into former closets. We work top to bottom, treat marble and stone with pH-neutral cleaners, dry-mop hardwood before a damp pass, and dust the high mouldings and ceiling medallions that collect a season of particulate.",
    "The South End's product preferences match Cambridge and JP: a lot of our customers ask for plant-based, fragrance-free cleaning, and we provide it at no extra cost as a permanent account note. Pets are common in the neighborhood and our teams are comfortable working around them and lifting fur from upholstery and stair runners.",
    "Turnover cleans follow the first-of-month rental cycle, and we work with agents preparing units for the neighborhood's active sales market, where a deep clean before photographs matters. Whatever the job, you receive an upfront quote before booking, a trained team, arrival and completion texts, and a 100% satisfaction guarantee.",
  ],
  servicesTitle: "Cleaning services available in the South End",
  servicesIntro: "Bowfront, loft, or tower, each service is priced for the home. Open one for South End notes and FAQs.",
  neighborhoodsTitle: "South End squares and blocks we cover",
  neighborhoodsIntro: "From Massachusetts Avenue to the Ink Block, Columbus to Harrison.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for South End homes",
  frequenciesIntro: "The same team on a standing day, including Sundays, at a lower rate after the first visit.",
  whyTitle: "Why South End residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Victorian detail handled correctly",
      description: "Marble mantels, plaster medallions, pocket doors, and refinished hardwood are cleaned with products chosen for them. No abrasives, no acids on stone.",
    },
    {
      title: "Multi-level units done in sequence",
      description: "Top floor to garden level, wet rooms last, so stairs and floors stay clean as the team works down and the entry is the last thing finished.",
    },
    {
      title: "Seven-day scheduling",
      description: "Restaurant and creative-industry schedules do not fit a Monday-to-Friday cleaner. Ours run 24/7.",
    },
    {
      title: "Eco products, no upcharge",
      description: "Plant-based, fragrance-free cleaning is available on request and saved to your account so every team uses it.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in the South End",
  testimonialFilter: "South End",
  faqTitle: "South End cleaning questions",
  faqs: [
    {
      question: "How much does cleaning cost in the South End?",
      answer:
        "A one-bedroom garden-level or floor-through unit typically runs $130 to $170 for a routine clean and $190 to $250 for a deep clean. Multi-floor duplexes and full rowhouses are quoted individually.",
    },
    {
      question: "Are you careful with original marble and woodwork?",
      answer:
        "Yes. Our kit includes pH-neutral stone cleaner and wood-safe floor solution, and teams are trained never to use abrasive pads or acidic products on historic surfaces.",
    },
    {
      question: "Do you clean SoWa lofts and Ink Block condos?",
      answer:
        "Regularly. We provide insurance certificates to building management, follow elevator and quiet-hour rules, and coordinate concierge access so you can leave a key at the desk.",
    },
    {
      question: "Can I schedule a Sunday cleaning?",
      answer:
        "Yes. We operate seven days a week, and Sunday afternoons are a popular standing slot in the South End for residents with restaurant or weekend work schedules.",
    },
    {
      question: "Do you offer plant-based products?",
      answer:
        "We do, at no extra charge. Ask at booking and the preference is saved so every team that visits uses the fragrance-free line.",
    },
    {
      question: "Do you clean South End brownstones?",
      answer:
        "Yes. The Victorian bowfronts and the units carved out of them are the core of our South End work, including garden-level and upper-floor apartments.",
    },
    {
      question: "Do you clean garden-level units?",
      answer:
        "Yes. Garden levels take more moisture and more street grit than upper floors, so entry areas and bathrooms usually want closer attention.",
    },
    {
      question: "Can you manage walk-up buildings?",
      answer:
        "Yes. Most South End buildings have no elevator, so our cleaners bring a compact kit rather than a full cart.",
    },
    {
      question: "What about original mouldings and marble?",
      answer:
        "Mouldings get dusted rather than washed, and marble mantels take a pH-neutral cleaner. Acidic products etch marble permanently.",
    },
    {
      question: "Do you clean roof decks?",
      answer:
        "On request, weather permitting. Deck surfaces and railings collect grit through the year and are worth a seasonal pass.",
    },
    {
      question: "Do you work with building management?",
      answer:
        "Yes. Where a building requires a certificate of insurance we provide it at no charge and follow whatever vendor rules apply.",
    },
    {
      question: "Do I need to be home?",
      answer:
        "No. Door codes and lockboxes are routine here. Our cleaners are background-checked and we confirm arrival and completion by text.",
    },
  ],
  ctaTitle: "Book a South End cleaning this week",
  ctaDescription: "Send the street, unit layout, and preferred day. An upfront quote and open times arrive within the hour.",
  areaServed: ["South End, Boston, MA"],
};

export default function SouthEndPage() {
  return <AreaPage c={content} />;
}
