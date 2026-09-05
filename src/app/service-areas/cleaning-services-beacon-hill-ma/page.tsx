import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("beacon-hill")!;

export const metadata: Metadata = {
  title: "Cleaning Services Beacon Hill Boston | Historic Home Cleaning",
  description:
    "Apartment and townhouse cleaning on Beacon Hill, Boston. Narrow stairs, 200-year-old floors, and tiny bathrooms handled by trained teams. Flat quotes and same-week visits.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Beacon Hill, Boston",
  h1: "Cleaning Services in Beacon Hill, MA",
  subtitle:
    "Federal-era townhouses, garden-level studios, and Charles Street walk-ups all need a light hand and a good stair game. Our Beacon Hill teams have both.",
  highlights: ["Trained on 200-year-old wood and brick", "Compact-space cleaning techniques", "Resident-permit parking planned for", "Same-week availability"],
  introTitle: "Careful cleaning for Boston's oldest intact neighborhood",
  intro: [
    "Beacon Hill's brick townhouses date to the early 1800s, and almost nothing about them is standard. Doorways are narrow, staircases spiral, ceilings on the upper floors slope, and floors are wide-plank pine that has been walked on for two centuries. Apartments carved from these homes are often small and always full of character. Cleaning them well means working in tight spaces with the right products and a lot of patience, which is exactly how we train our Beacon Hill teams.",
    "The neighborhood's strict historic district rules mean the buildings themselves rarely change, but the people inside them do. State House staff, hospital residents from Mass General a few blocks away, retirees in Louisburg Square, and young professionals in Flat of the Hill studios all rely on us for different reasons. What they share is limited time and a home where dust shows on every dark wood surface within days.",
    "Access is part of the job here. Many units are reached through a shared front door with a second door at the top of a flight of stairs, and street parking is resident-permit only. Our coordinators note entry instructions at booking, and teams plan their route in from the Cambridge Street side or the Common depending on the block. You leave a key or a code and hear from us when we arrive and when we finish.",
    "Routine visits on Beacon Hill focus on the surfaces that show fastest in small, old homes: dark hardwood, black iron fixtures, marble mantels, white bathroom tile, and the dust that gathers in deep window wells. We dry-mop pine floors rather than soaking them, use pH-neutral products on marble and soapstone, and clean radiators fin by fin rather than pushing dust into the air.",
    "Deep cleans here are frequently about reaching what compact layouts hide: the top of a built-in bookcase, the space behind a claw-foot tub, grout in a hex-tile bathroom floor, and cabinet fronts in a galley kitchen that has seen decades of cooking. We take our time and treat the details as the point, not the extra.",
    "Turnover cleaning follows the September 1 and first-of-month rhythm that governs Boston rentals, and we coordinate with landlords and agents who manage multiple Beacon Hill units. Whether it is a weekly plan for a family on Mount Vernon Street or a single deep clean before guests arrive, you get a flat price, a two-person team, and a 24-hour re-clean guarantee.",
  ],
  servicesTitle: "Cleaning services available on Beacon Hill",
  servicesIntro: "Each service is adapted for compact historic homes. Open one for Beacon Hill pricing notes and FAQs.",
  neighborhoodsTitle: "Beacon Hill streets we cover",
  neighborhoodsIntro: "The Hill, the Flat, and the West End edge along Cambridge Street.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Beacon Hill homes",
  frequenciesIntro: "A consistent team that learns the quirks of your building and floors, at a lower rate on every visit after the first.",
  whyTitle: "Why Beacon Hill residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Gentle on irreplaceable surfaces",
      description: "Two-hundred-year-old pine, original plaster, and antique hardware are cleaned with products chosen for them, never with whatever is in the caddy.",
    },
    {
      title: "Built for tight spaces",
      description: "Compact vacuums, short-handled tools, and cleaners who know how to work a galley kitchen without knocking anything over.",
    },
    {
      title: "Hill logistics solved",
      description: "Permit parking, spiral stairs, and shared entryways are planned before the visit. None of it touches your invoice.",
    },
    {
      title: "Discreet and reliable",
      description: "Arrival windows are kept, teams work quietly in shared buildings, and you are texted at the start and finish of every visit.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean on Beacon Hill",
  testimonialFilter: "Beacon Hill",
  faqTitle: "Beacon Hill cleaning questions",
  faqs: [
    {
      question: "Can you clean very small apartments efficiently?",
      answer:
        "Yes, and many Beacon Hill units are under 500 square feet. A two-person team completes a studio routine clean in about an hour, and pricing starts at $110.",
    },
    {
      question: "How do you handle old pine floors?",
      answer:
        "Dry dust mop first, then a barely damp microfiber pass with a wood-safe, no-rinse solution. We never use steam or leave water standing on plank floors.",
    },
    {
      question: "Is parking on Beacon Hill a problem for you?",
      answer:
        "Not for you. Our teams plan around resident-permit rules and loading zones on Charles and Cambridge Streets. It is our problem to solve, not yours to pay for.",
    },
    {
      question: "Do you work with Beacon Hill landlords?",
      answer:
        "Regularly. We handle turnover cleans between tenants, coordinate key pickup, and can invoice a management company directly.",
    },
    {
      question: "How much does a deep clean cost on Beacon Hill?",
      answer:
        "A one-bedroom deep clean typically falls between $200 and $280. Larger townhouse floors and full homes are quoted individually after a few details about size and condition.",
    },
  ],
  ctaTitle: "Book a Beacon Hill cleaning this week",
  ctaDescription: "Send the street, unit size, and how we get in. A flat quote and available times come back within the hour.",
  areaServed: ["Beacon Hill, Boston, MA"],
};

export default function BeaconHillPage() {
  return <AreaPage c={content} />;
}
