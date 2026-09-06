import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("somerville")!;

export const metadata: Metadata = {
  title: "Cleaning Services Somerville MA",
  description:
    "Apartment and house cleaning in Somerville, MA: Davis Square triple-deckers, Union Square condos, Assembly Row towers.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Somerville, Middlesex County",
  h1: "Cleaning Services in Somerville, MA",
  subtitle:
    "The densest city in New England is mostly triple-deckers, and we know them floor by floor. From Davis to Assembly Row, flat pricing, flexible scheduling, and teams who carry the vacuum up three flights.",
  highlights: ["Triple-decker specialists", "Roommate and sublet friendly", "Green Line Extension neighborhoods covered", "Same-week first visits"],
  introTitle: "Cleaning for the city of squares and three-family homes",
  intro: [
    "Somerville packs more people per square mile than any city in New England, and most of them live in triple-deckers. Three-family wood-frame homes line the streets between Davis, Porter, Union, Magoun, and Ball Squares, each floor a long apartment with a front room, a rear kitchen, and a back porch. Our Somerville teams clean these units every day and know the layout well enough to work front to back without wasted steps.",
    "The city is changing fast. Assembly Row and Union Square have added elevator buildings with concierges and modern finishes. The Green Line Extension has brought new condos to Gilman and Magoun Squares. Long-time homeowners in Ten Hills and Spring Hill are renovating. We adjust to each: streak-free glass and stone in new buildings, hand-dusted radiators and dry-mopped hardwood in the old ones.",
    "Somerville households are often shared. Graduate students from Tufts and Harvard, young professionals commuting to Kendall, artists, and families sharing a floor all rely on us to keep common spaces peaceful. Roommates split the cost, rotate the card on file, and text the coordinator when someone new moves in. Weekly and biweekly plans are the most common because a shared kitchen and bathroom see a lot of use.",
    "Access and parking follow the Somerville pattern: shared front doors with a second door at the unit, resident-permit street parking, and steep exterior stairs on the back. Our teams plan a stopping strategy for each block and carry everything up. You leave a key or a code, receive a text when we arrive, and another when we finish. There is no stair or parking charge on any quote.",
    "Deep cleans in Somerville frequently tackle the specific grime of old three-families: kitchen grease in the rear of the unit, dust behind radiators, soap scum in a cast-iron tub, and pollen and city dust on wide window sills. We also see a lot of turnover. Move-in and move-out cleans peak on September 1, when much of the city changes hands at once, and we hold capacity for those dates well in advance.",
    "Whether it is a monthly visit to a Davis Square studio, a biweekly plan for a shared three-bedroom in Spring Hill, or a move-out clean at the end of a lease near Union Square, you get a flat price before booking, a trained team, and a 24-hour guarantee. Coordinators are reachable seven days a week.",
  ],
  servicesTitle: "Cleaning services available in Somerville",
  servicesIntro: "Priced for triple-decker floors, condos, and shared apartments. Open a service for Somerville notes and FAQs.",
  neighborhoodsTitle: "Somerville squares and neighborhoods we cover",
  neighborhoodsIntro: "Every square and hill from Teele to Assembly Row, across all three zip codes.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Somerville apartments",
  frequenciesIntro: "Shared apartments stay peaceful on a schedule. Same team, standing slot, and a discount on every visit after the first.",
  whyTitle: "Why Somerville residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "We know triple-deckers",
      description: "Rear kitchens, long hallways, back porches, and shared stairwells. Our teams clean these floor plans daily and finish them efficiently.",
    },
    {
      title: "Built for shared households",
      description: "Rotate the card on file, add a roommate's phone for texts, and split the bill however you like. We make the logistics easy.",
    },
    {
      title: "September 1 capacity",
      description: "We hold move-in and move-out slots for the turnover crush and coordinate keys with landlords who manage several Somerville units.",
    },
    {
      title: "Old and new handled right",
      description: "Hand-dusted radiators in Spring Hill Victorians and streak-free glass in Assembly Row towers, from the same trained team.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Somerville",
  testimonialFilter: "Somerville",
  faqTitle: "Somerville cleaning questions",
  faqs: [
    {
      question: "How much does it cost to clean a Somerville apartment?",
      answer:
        "A two-bedroom triple-decker floor typically runs $170 to $220 for a routine clean and $280 to $380 for a deep clean. Studios start at $110. Quotes are flat and confirmed before booking.",
    },
    {
      question: "Can roommates split the bill?",
      answer:
        "Yes. We charge one card per visit but many Somerville customers rotate the card on file or settle up among themselves. Tell the coordinator when the payment method changes.",
    },
    {
      question: "Do you clean buildings at Assembly Row and Union Square?",
      answer:
        "Regularly. We provide insurance certificates to management, follow elevator and quiet-hour rules, and coordinate with concierges so you do not need to be home.",
    },
    {
      question: "How early should I book a September 1 move-out clean?",
      answer:
        "Two to three weeks ahead at minimum. Late August and September 1 are the busiest cleaning days of the year in Somerville and slots fill quickly.",
    },
    {
      question: "Do you serve all three Somerville zip codes?",
      answer:
        "Yes: 02143, 02144, and 02145, from Teele Square and Davis in the west to East Somerville and Assembly Row along the Mystic.",
    },
  ],
  ctaTitle: "Book a Somerville cleaning this week",
  ctaDescription: "Send the square, unit size, and roommate count. A flat quote and available times come back within the hour.",
  areaServed: ["Somerville, MA"],
};

export default function SomervillePage() {
  return <AreaPage c={content} />;
}
