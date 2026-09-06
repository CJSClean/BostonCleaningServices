import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("charlestown")!;

export const metadata: Metadata = {
  title: "Cleaning Services Charlestown Boston",
  description:
    "Home cleaning in Charlestown, Boston: Monument Square townhouses, Navy Yard waterfront condos, and Bunker Hill triple-deckers.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Charlestown, Boston",
  h1: "Professional Cleaning Services in Charlestown, MA",
  subtitle:
    "A one-square-mile neighborhood with brick townhouses on the hill and glass condos on the water. Our Charlestown teams clean both, with the parking and access plans this peninsula requires.",
  highlights: ["Navy Yard and hill-side homes", "Historic brick and modern glass", "Two-hour arrival windows kept", "Weekly, biweekly, or monthly"],
  introTitle: "Cleaning on the hill and along the harbor",
  intro: [
    "Charlestown sits on a peninsula between the Mystic and the Charles, and its housing falls into two distinct worlds. Around Monument Square and up Bunker Hill, brick and clapboard townhouses from the 1800s line steep, narrow streets. Along the water, the converted Navy Yard and its neighbors offer elevator buildings with harbor views, concierges, and open-plan condos. We clean both, and our teams know that the approach to each is different.",
    "The townhouses reward attention to old surfaces. Wide pine floors, original mantels, exposed brick, and steep stairs with worn treads are typical, and many homes have been renovated to combine period detail with modern kitchens. We dry-mop wood, treat brick and stone with pH-neutral cleaners, and dust the high mouldings and ceiling medallions that collect a season's worth of particulate.",
    "In the Navy Yard, the work is about glass, stone, and coordination. Floor-to-ceiling windows facing the harbor show every streak. Quartz and granite counters need the right product. Buildings require insurance certificates and freight elevator bookings, and concierges expect vendors to check in. We handle every piece of that before the visit so you can leave a key at the desk and go about your day.",
    "Charlestown households skew toward young families and professionals commuting to the Financial District or across the bridge to Kendall. Biweekly plans are the most common choice, keeping a three-bedroom townhouse or two-bedroom condo in shape between busy weeks. Weekly service suits families with toddlers, and monthly visits work for the many single-occupant condos near the water.",
    "Parking on the hill is resident-permit only and the streets are narrow enough that our vans plan a specific stopping strategy for each block. Teams arrive with everything they need and carry it up as many flights as necessary. None of this appears in the quote, which is based purely on the size and condition of your home.",
    "Deep cleans and move cleans follow the neighborhood's rhythm: spring resets after a harbor winter, pre-holiday cleans before family arrives, and turnover cleans around the first of the month for the rental units that fill Charlestown's triple-deckers. Every visit comes with a flat price, a trained team, arrival and finish texts, and our 24-hour re-clean guarantee.",
  ],
  servicesTitle: "Cleaning services available in Charlestown",
  servicesIntro: "Townhouse or waterfront condo, each service is priced for the home. Open one for Charlestown-specific notes.",
  neighborhoodsTitle: "Charlestown areas we cover",
  neighborhoodsIntro: "From the Navy Yard piers to Sullivan Square and every street on the hill between.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Charlestown homes",
  frequenciesIntro: "The same team on a standing day, at a lower rate after the first visit. Reschedule around travel with 48 hours' notice.",
  whyTitle: "Why Charlestown residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Two neighborhoods, one team",
      description: "Period detail on the hill and glass on the water require different products and techniques. Our Charlestown cleaners are trained on both.",
    },
    {
      title: "Navy Yard building requirements handled",
      description: "Insurance certificates, elevator reservations, and concierge check-ins are arranged before the visit so nothing lands on you.",
    },
    {
      title: "Family-friendly scheduling",
      description: "Weekday mid-morning slots during daycare hours are the most popular in Charlestown, and recurring customers lock them in.",
    },
    {
      title: "Steep streets, no surcharge",
      description: "Permit parking and third-floor walk-ups are part of the job here. We plan for them and never bill for them.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Charlestown",
  testimonialFilter: "Charlestown",
  faqTitle: "Charlestown cleaning questions",
  faqs: [
    {
      question: "Do you clean condos in the Navy Yard?",
      answer:
        "Yes, regularly. We provide insurance certificates to management, book the freight elevator where required, and check in with the concierge. Most Navy Yard customers leave a key at the desk.",
    },
    {
      question: "How much does townhouse cleaning cost in Charlestown?",
      answer:
        "A three-bedroom, two-bath townhouse typically runs $190 to $250 for a routine visit and $450 to $550 for a deep clean. Larger homes on Monument Square are quoted individually.",
    },
    {
      question: "Can you handle exposed brick and old wood?",
      answer:
        "Yes. Brick is dusted and spot cleaned with a pH-neutral solution; pine and oak floors are dry-mopped before a barely damp pass. Nothing abrasive touches historic surfaces.",
    },
    {
      question: "Is parking a problem for your team?",
      answer:
        "It is our problem, not yours. Teams have a stopping plan for each block and carry equipment in. There is no parking or stair fee on any quote.",
    },
    {
      question: "Do you offer move-out cleaning for Charlestown rentals?",
      answer:
        "Yes. Move-out cleans cover inside cabinets and closets and are aimed at the landlord walkthrough. First-of-month dates book up quickly, so reserve early.",
    },
  ],
  ctaTitle: "Book a Charlestown cleaning this week",
  ctaDescription: "Tell us the street, home size, and how we get in. A flat quote and open times arrive within the hour.",
  areaServed: ["Charlestown, Boston, MA"],
};

export default function CharlestownPage() {
  return <AreaPage c={content} />;
}
