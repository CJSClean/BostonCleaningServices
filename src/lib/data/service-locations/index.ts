import { services, type Service } from "../services";
import { locations, type Location } from "../locations";
import {
  routineIncluded,
  deepIncluded,
  moveIncluded,
  constructionIncluded,
  notIncludedInRoutine,
  type IncludedSection,
} from "../checklist";
import {
  housePricing,
  apartmentPricing,
  deepPricing,
  movePricing,
  constructionPricing,
  type PriceTable,
} from "../pricing";
import { houseCleaningCopy } from "./house-cleaning";
import { apartmentCleaningCopy } from "./apartment-cleaning";
import { deepCleaningCopy } from "./deep-cleaning";
import { moveInCleaningCopy } from "./move-in-cleaning";
import { moveOutCleaningCopy } from "./move-out-cleaning";
import { postConstructionCleaningCopy } from "./post-construction-cleaning";

/** Copy written individually for each service + location page. */
export interface ServiceLocationCopy {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  introTitle: string;
  intro: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
}

/** Operational content that is the same for a service regardless of location. */
interface ServiceShared {
  included: IncludedSection[];
  notIncluded?: string[];
  pricing: PriceTable;
  pricingTitle: (loc: string) => string;
  scenariosTitle: (loc: string) => string;
  scenarios: { title: string; description: string }[];
  benefitsTitle: (loc: string) => string;
  benefits: { title: string; description: string }[];
  showFrequencies: boolean;
}

const shared: Record<string, ServiceShared> = {
  "house-cleaning": {
    included: routineIncluded,
    notIncluded: notIncludedInRoutine,
    pricing: housePricing,
    pricingTitle: (l) => `House cleaning prices in ${l}`,
    scenariosTitle: (l) => `How often ${l} homes get cleaned`,
    scenarios: [
      { title: "Weekly", description: "Households with kids, pets, or a kitchen in constant use. Floors and bathrooms never reach the point where cleaning feels like a project." },
      { title: "Biweekly", description: "The default for most homes. Two visits a month keeps dust, soap scum, and grease from building up at a lower total cost than weekly." },
      { title: "Monthly", description: "Smaller or tidier households that keep up between visits but want bathrooms, floors, and the kitchen done properly on a schedule." },
      { title: "One-time", description: "Before hosting, after a busy stretch, or as a trial before committing to a plan. Upgrade to a deep clean if it has been a while." },
    ],
    benefitsTitle: (l) => `Why ${l} homeowners keep us on the calendar`,
    benefits: [
      { title: "Right-sized crew, one consistent lead", description: "We size the crew to the home, and cleaners check each other's work. Your lead cleaner stays the same on recurring plans." },
      { title: "Published checklist", description: "Every room's tasks are listed on this site. There is no guessing about whether the baseboards or the microwave were supposed to be done." },
      { title: "Upfront pricing, no meter", description: "The quote reflects your home's size and condition. Heavy-duty or pet-shedding fees are confirmed with you before work begins, never added silently." },
      { title: "100% satisfaction guarantee", description: "If any area is not right, let us know and we make it right at no charge." },
    ],
    showFrequencies: true,
  },
  "apartment-cleaning": {
    included: routineIncluded,
    notIncluded: notIncludedInRoutine,
    pricing: apartmentPricing,
    pricingTitle: (l) => `Apartment cleaning prices in ${l}`,
    scenariosTitle: (l) => `Cleaning schedules for ${l} apartments`,
    scenarios: [
      { title: "Weekly for shared units", description: "Roommates sharing one kitchen and one bathroom put heavy wear on both. Weekly visits end the chore-chart negotiations." },
      { title: "Biweekly for one- and two-bedrooms", description: "For singles and couples, every two weeks keeps the unit consistently clean without paying for visits you do not need." },
      { title: "Monthly for studios", description: "Small spaces stay tidy with light upkeep. A monthly visit handles the tub, stovetop, and high dust properly." },
      { title: "One-time before inspections or guests", description: "Landlord walkthroughs, a visiting parent, or a sublet handoff. Book a single visit and upgrade to a deep clean if needed." },
    ],
    benefitsTitle: (l) => `Why ${l} renters and owners choose us`,
    benefits: [
      { title: "Building logistics handled", description: "Concierge check-ins, elevator rules, and quiet hours are noted at booking so the visit is invisible to you." },
      { title: "Priced for small spaces", description: "Studios start at $110 and a one-bedroom takes about 90 minutes. You never pay for unused time." },
      { title: "Walk-ups welcome", description: "Equipment comes up the stairs with us. There is no stair fee on any quote." },
      { title: "Access without hassle", description: "Key at the desk, lockbox, or a code. Cleaners are background-checked and bonded, and you get arrival and finish texts." },
    ],
    showFrequencies: true,
  },
  "deep-cleaning": {
    included: deepIncluded,
    pricing: deepPricing,
    pricingTitle: (l) => `Deep cleaning prices in ${l}`,
    scenariosTitle: (l) => `When ${l} homes book a deep clean`,
    scenarios: [
      { title: "Before starting a recurring plan", description: "Brings the home to the baseline a routine visit is designed to maintain, so the plan holds the standard rather than catching up." },
      { title: "Seasonal reset", description: "Spring to clear the salt and sand, fall before the windows close and hosting season begins." },
      { title: "Before hosting or a sale", description: "Family arriving, a party, or listing photographs. The rooms guests and buyers notice are the ones a deep clean fixes." },
      { title: "After a long gap or renovation", description: "When cleaning has fallen behind, one deep clean is faster and cheaper than catching up over several routine visits." },
    ],
    benefitsTitle: (l) => `Why ${l} residents trust us with the deep clean`,
    benefits: [
      { title: "We move things", description: "Couches, beds, and the stove come away from the wall so the surfaces behind them are actually cleaned, then go back exactly where they were." },
      { title: "Grout and fixtures by hand", description: "Tile lines, shower tracks, and faucet bases are scrubbed with brushes and the right product, not sprayed and wiped." },
      { title: "Kitchen degreasing that lasts", description: "Range hood, backsplash, and cabinet fronts near the stove are degreased, which routine cleaning skips." },
      { title: "Generous time, fixed price", description: "Deep cleans are scheduled with room to breathe, and any condition-based fee is agreed before the team starts." },
    ],
    showFrequencies: false,
  },
  "move-in-cleaning": {
    included: moveIncluded,
    pricing: movePricing,
    pricingTitle: (l) => `Move-in cleaning prices in ${l}`,
    scenariosTitle: (l) => `Timing a move-in clean in ${l}`,
    scenarios: [
      { title: "Between keys and the moving truck", description: "The ideal slot. We clean the empty unit in the morning and your movers arrive after. We coordinate with agents and managers to make it work." },
      { title: "After a landlord turnover clean", description: "Many turnover cleans are a quick wipe. If the cabinet shelves and closets were skipped, we finish before you fill them, and the oven and fridge can be added." },
      { title: "New construction or renovation", description: "Contractors leave fine dust in every cabinet. A move-in clean after the punch list keeps it off your dishes." },
      { title: "After closing on a purchase", description: "Book for the day after closing and move in the following weekend to a home that feels like yours." },
    ],
    benefitsTitle: (l) => `Why ${l} movers book us first`,
    benefits: [
      { title: "Cabinets and closets, inside and out", description: "Every cabinet, drawer, and closet is cleaned inside and out. Inside the oven and refrigerator can be added to any move-in clean for a set fee." },
      { title: "Scheduled around your movers", description: "Give us the key time and the movers' window and we fit the clean between them." },
      { title: "Every shelf and drawer", description: "Empty storage is cleaned inside and out, including the top shelf you cannot reach yet." },
      { title: "Boston move-day fluent", description: "Permit parking, freight elevators, leasing-office key pickup, and the September 1 crush are routine for our coordinators." },
    ],
    showFrequencies: false,
  },
  "move-out-cleaning": {
    included: moveIncluded,
    pricing: movePricing,
    pricingTitle: (l) => `Move-out cleaning prices in ${l}`,
    scenariosTitle: (l) => `Timing a move-out clean in ${l}`,
    scenarios: [
      { title: "The day before the walkthrough", description: "Belongings out, a full day of buffer. Best result, and room to address anything the landlord flags." },
      { title: "Lease ending August 31 or September 1", description: "Boston's turnover crush. We hold capacity but slots fill weeks ahead, so reserve as soon as the date is set." },
      { title: "Landlord or manager turnover", description: "A vacated unit that needs to be showing-ready fast. We handle keys and send a photo summary when finished." },
      { title: "Sublet or roommate handoff", description: "Handing a room or unit to someone new mid-lease. A clean handoff keeps the relationship clean too." },
    ],
    benefitsTitle: (l) => `Why departing ${l} tenants use us`,
    benefits: [
      { title: "Built around the inspection", description: "Our checklist follows the items landlords check most, and photos of each finished room are available on request." },
      { title: "One upfront price", description: "Cabinets, drawers, and closets are all included in the upfront price. Oven and fridge interiors are the only optional add-ons." },
      { title: "Remote coordination", description: "Already moved? We collect and return keys via lockbox or leasing office and confirm completion by text and email." },
      { title: "Turnover experience everywhere", description: "From student blocks to concierge towers, our coordinators have handled the building's move-out rules before." },
    ],
    showFrequencies: false,
  },
  "post-construction-cleaning": {
    included: constructionIncluded,
    pricing: constructionPricing,
    pricingTitle: (l) => `Post-construction cleaning estimates in ${l}`,
    scenariosTitle: (l) => `Projects we clean up after in ${l}`,
    scenarios: [
      { title: "Kitchen or bathroom remodel", description: "Grout haze on new tile, dust inside new cabinets, and adhesive on fixtures all need removal before the room is usable." },
      { title: "Whole-unit or whole-home renovation", description: "Multiple trades and weeks of dust. A rough clean mid-project and a final clean after the punch list keep the timeline on track." },
      { title: "New construction handover", description: "Film removal, glass detailing, and spotless floors before a client walkthrough or closing." },
      { title: "Floors, paint, or windows only", description: "Even a single-trade project leaves residue that ordinary cleaning spreads around. One visit tuned to the work done." },
    ],
    benefitsTitle: (l) => `Why ${l} homeowners and contractors book our final clean`,
    benefits: [
      { title: "HEPA equipment, dust-first sequence", description: "We vacuum before we wipe, top to bottom, so fine particles are captured rather than pushed around." },
      { title: "Rough, final, and touch-up passes", description: "Dust settles for days. Quotes account for more than one visit when the project needs it." },
      { title: "Careful with new finishes", description: "Fresh grout, unsealed stone, and newly finished wood get products matched to them." },
      { title: "Contractor paperwork ready", description: "Certificates of insurance, W-9s, and invoices to the GC or management company are routine." },
    ],
    showFrequencies: false,
  },
};

const copyByService: Record<string, Record<string, ServiceLocationCopy>> = {
  "house-cleaning": houseCleaningCopy,
  "apartment-cleaning": apartmentCleaningCopy,
  "deep-cleaning": deepCleaningCopy,
  "move-in-cleaning": moveInCleaningCopy,
  "move-out-cleaning": moveOutCleaningCopy,
  "post-construction-cleaning": postConstructionCleaningCopy,
};

export function getAllServiceLocationSlugs(): string[] {
  const slugs: string[] = [];
  for (const s of services) {
    for (const l of locations) {
      slugs.push(`${s.key}-${l.key}-ma`);
    }
  }
  return slugs;
}

export function parseServiceLocationSlug(slug: string): { service: Service; location: Location } | null {
  if (!slug.endsWith("-ma")) return null;
  const body = slug.slice(0, -3);
  for (const service of services) {
    if (body.startsWith(`${service.key}-`)) {
      const locKey = body.slice(service.key.length + 1);
      const location = locations.find((l) => l.key === locKey);
      if (location) return { service, location };
    }
  }
  return null;
}

export function getServiceLocationData(slug: string) {
  const parsed = parseServiceLocationSlug(slug);
  if (!parsed) return null;
  const { service, location } = parsed;
  const copy = copyByService[service.key]?.[location.key];
  const s = shared[service.key];
  if (!copy || !s) return null;
  return { service, location, copy, shared: s };
}
