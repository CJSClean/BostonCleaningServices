import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("cambridge")!;

export const metadata: Metadata = {
  title: "Cleaning Services Cambridge MA | Apartment & House Cleaning",
  description:
    "House and apartment cleaning across Cambridge, MA: Harvard Square Victorians, Kendall condos, Cambridgeport triple-deckers. Insured local teams, flat pricing, same-week booking.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Cambridge, Middlesex County",
  h1: "Cleaning Services in Cambridge, MA",
  subtitle:
    "From Porter Square Victorians to glass condos over Kendall, our Cambridge teams clean the full range of the city's housing with flat pricing and schedules that flex around academic and lab life.",
  highlights: ["All five Cambridge zip codes", "Flexible around semesters and travel", "Triple-decker and condo experience", "Plant-based products on request"],
  introTitle: "Cleaning across the Squares, from Harvard to Kendall",
  intro: [
    "Cambridge packs a remarkable range of housing into seven square miles. Grand Victorians on Brattle Street and around Agassiz, worker-built triple-deckers in Cambridgeport and East Cambridge, brick apartment blocks near Central Square, and a wave of new glass-and-steel condos around Kendall and North Point. Each type has its own cleaning demands, and our Cambridge teams move between them every week with the products and techniques each requires.",
    "Life here runs on calendars that have little to do with the normal work week. Semesters begin and end, grants come due, lab schedules shift, and visiting scholars arrive and depart on short notice. We built our Cambridge service to accommodate that. Recurring plans can be paused for a conference trip or a summer away and resumed without losing the rate, and one-time cleans before a visiting parent or a sublet handoff can usually be placed inside the same week.",
    "Older Cambridge homes reward careful cleaning. Wide-plank and narrow-strip hardwood, built-in bookshelves, original woodwork, and radiators under every window are common in Mid-Cambridge, Riverside, and Huron Village. Our cleaners dry-mop wood floors before a barely damp pass, dust radiator fins by hand rather than blowing dust around, and skip harsh chemicals on painted trim. Nothing gets soaked, scratched, or stripped.",
    "Newer buildings bring different logistics. Kendall Square and East Cambridge towers have concierges, freight elevator reservations, and insurance requirements for vendors. We provide certificates of insurance to management, follow quiet-hour rules, and coordinate access so you do not need to be home. Floor-to-ceiling glass and stone countertops are cleaned streak-free with the right products.",
    "Cambridge residents care about what goes into their homes and down their drains. Our standard products are professional grade and residue-free once dry, and we carry a plant-based, fragrance-free line that we will use exclusively at no extra charge. Tell us at booking and it becomes a permanent note on your account.",
    "Whether you need a biweekly plan for a Cambridgeport condo, a deep clean before a thesis defense celebration, or a move-out clean at the end of a graduate lease, the process is the same: a flat quote before booking, a two-person team, arrival and completion texts, and a 24-hour guarantee. We cover all of Cambridge from Alewife to the Charles.",
  ],
  servicesTitle: "Cleaning services available in Cambridge",
  servicesIntro: "Each service is tailored to Cambridge housing and schedules. Open one for local pricing notes and FAQs.",
  neighborhoodsTitle: "Cambridge neighborhoods we serve",
  neighborhoodsIntro: "Every square and the streets between them, across all five zip codes.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Cambridge homes",
  frequenciesIntro: "Standing appointments with the same team and a discount on every visit after the first. Pause for travel and resume without losing the rate.",
  whyTitle: "Why Cambridge residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Schedules built for academic life",
      description: "Pause a plan for a conference, add a visit before a dinner, or shift your standing slot at the start of a semester with a text to your coordinator.",
    },
    {
      title: "Equally comfortable in Victorians and towers",
      description: "Hand-dusted radiators and dry-mopped hardwood on Brattle Street, streak-free glass and concierge coordination in Kendall. Same team, right approach.",
    },
    {
      title: "Cleaner products on request",
      description: "A plant-based, fragrance-free product line is available at no extra charge and becomes a permanent preference on your account.",
    },
    {
      title: "Sublet and turnover experience",
      description: "Graduate leases, visiting-scholar housing, and short sublets create a lot of turnover in Cambridge. We handle key logistics and tight timelines routinely.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Cambridge",
  testimonialFilter: "Cambridge",
  faqTitle: "Cambridge cleaning questions",
  faqs: [
    {
      question: "Do you serve all of Cambridge?",
      answer:
        "Yes, every neighborhood and all five zip codes: 02138, 02139, 02140, 02141, and 02142. From North Cambridge near Alewife to East Cambridge by the Charles.",
    },
    {
      question: "How much does apartment cleaning cost in Cambridge?",
      answer:
        "A one-bedroom typically runs $130 to $170 for a routine clean and $190 to $250 for a deep clean. Two-bedrooms in triple-deckers run $170 to $220 routine. Quotes are flat and confirmed before booking.",
    },
    {
      question: "Can I pause my plan over the summer?",
      answer:
        "Yes. Many Cambridge customers pause for research travel or a summer away. Your slot and rate are held for pauses up to eight weeks; longer pauses simply restart at the standard rate for one visit.",
    },
    {
      question: "Do you use eco-friendly products?",
      answer:
        "We carry a plant-based, fragrance-free line and will use it exclusively on request at no extra cost. Our standard products are professional grade and leave no residue once dry.",
    },
    {
      question: "Can you clean my unit at the end of a graduate lease?",
      answer:
        "Yes. Move-out cleans include the inside of the oven, fridge, cabinets, and closets and are aimed at the landlord walkthrough. Book two to three weeks ahead for late-August and September 1 dates.",
    },
  ],
  ctaTitle: "Book a Cambridge cleaning this week",
  ctaDescription: "Tell us the square, the unit size, and your schedule. A flat quote and available times come back within the hour.",
  areaServed: ["Cambridge, MA"],
};

export default function CambridgePage() {
  return <AreaPage c={content} />;
}
