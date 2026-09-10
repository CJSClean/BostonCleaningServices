import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("newton")!;

export const metadata: Metadata = {
  title: "Cleaning Services Newton MA",
  description:
    "House cleaning in Newton, MA across all thirteen villages. Colonials, capes, and new builds cleaned by insured teams with upfront pricing.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Newton, Norfolk County",
  h1: "Professional Cleaning Services in Newton, MA",
  subtitle:
    "Four-bedroom colonials in Waban, capes in Newtonville, new construction in Newton Centre. Our Newton teams are sized and scheduled for larger homes, with upfront pricing and a lead cleaner who stays with you.",
  highlights: ["All thirteen villages covered", "Sized for 3,000+ square foot homes", "Finished basements and mudrooms included", "Weekly and biweekly plans"],
  introTitle: "House cleaning scaled for Newton's homes",
  intro: [
    "Newton is a city of thirteen villages and a great deal of square footage. Center-entrance colonials in Waban and West Newton, brick Tudors in Chestnut Hill, capes and ranches in Newton Highlands and Oak Hill, and a steady stream of new construction replacing older homes across the city. Most of our Newton clients live in three- to five-bedroom homes with two or three bathrooms, a finished basement, and a mudroom that absorbs the full force of a Massachusetts winter. Our service here is built for that scale.",
    "Larger homes need more than a longer appointment. They need a team that works in a logical sequence, upstairs to down, so nothing gets tracked back over a finished floor. They need a checklist that includes the spaces routine services skip, such as the basement playroom, the mudroom bench, and the third-floor guest room that only gets used at Thanksgiving. And they need a quote that reflects the home honestly, so the team is never racing to finish.",
    "Newton families are our core customers, and family homes have a rhythm. Kitchens produce three meals a day and a stream of school lunches. Bathrooms are shared. Sports gear, backpacks, and boots pile up by the door. Weekly and biweekly plans are the norm here, and our teams learn the house: where the dog food is, which room the toddler naps in, and how the homeowner likes the pillows arranged.",
    "The housing stock spans a century and a half. Older homes bring original hardwood, plaster walls, and radiators; newer homes bring wide-plank engineered floors, quartz counters, and open plans with a lot of glass. Our product kit and training cover both. We dry-mop wood before a barely damp pass, use stone-safe cleaners on marble and granite, and leave stainless appliances streak-free.",
    "Deep cleans in Newton are often seasonal: a spring reset after months of salt and sand in the entry, or a fall clean before the holiday hosting season begins. We also handle move-in cleans for buyers in a competitive market who get the keys on Friday and want to move in Saturday, and post-construction cleans for the many kitchen and whole-home renovations underway across the city.",
    "Every Newton visit comes with the same commitments: an upfront quote confirmed before booking, our team with a consistent lead cleaner, a text when we arrive and when we finish, and a 100% satisfaction guarantee. Coordinators are reachable seven days a week to adjust plans around school vacations and travel.",
  ],
  servicesTitle: "Cleaning services available in Newton",
  servicesIntro: "Each service is quoted for the actual size and condition of Newton homes. Open one for local notes and pricing.",
  neighborhoodsTitle: "Newton villages we serve",
  neighborhoodsIntro: "All thirteen villages, from Nonantum on the Charles to Oak Hill by the Brookline line.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Newton households",
  frequenciesIntro: "Weekly and biweekly plans keep larger family homes in order with the same team, at a lower rate on every visit after the first.",
  whyTitle: "Why Newton homeowners choose Boston Cleaning Services",
  benefits: [
    {
      title: "Quoted for the whole house",
      description: "Basements, mudrooms, third floors, and bonus rooms are in the quote from the start. No mid-visit surprises about what was and was not included.",
    },
    {
      title: "Systematic on big floor plans",
      description: "Teams work upstairs to down, wet rooms last, so finished floors stay finished and the visit ends with the entryway spotless.",
    },
    {
      title: "Family and pet fluent",
      description: "Toys organized, pet hair lifted from runners and upholstery, and a plant-based product line available for households that prefer it.",
    },
    {
      title: "Consistent lead cleaner",
      description: "The same person leads your visit each time, learns the house, and carries your preferences forward without being reminded.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Newton",
  testimonialFilter: "Newton",
  faqTitle: "Newton cleaning questions",
  faqs: [
    {
      question: "How much does house cleaning cost in Newton?",
      answer:
        "A four-bedroom, two-and-a-half-bath colonial typically runs $250 to $320 for a routine visit and $550 to $650 for a deep clean. Homes over 4,000 square feet are quoted individually. Recurring plans lower the rate after the first visit.",
    },
    {
      question: "Do you clean finished basements and third floors?",
      answer:
        "Yes, and they are included in the quote when you tell us about them. Playrooms, home gyms, guest suites, and offices are all part of a routine visit.",
    },
    {
      question: "How long does a visit take for a larger Newton home?",
      answer:
        "The team spends roughly three to four hours on a routine clean of a four-bedroom home and five to seven hours on a deep clean. We schedule generously so nothing is rushed.",
    },
    {
      question: "Can you clean while the kids are at school?",
      answer:
        "That is our most requested window in Newton. Weekday visits between 9am and 2pm are held for recurring customers who want the house done before pickup.",
    },
    {
      question: "Do you handle post-renovation cleaning in Newton?",
      answer:
        "Yes. Kitchen remodels and whole-home renovations are common across the city, and our post-construction service removes drywall dust, adhesive, and haze in rough and final passes. Quotes are per project.",
    },
    {
      question: "Do you clean across Newton's villages?",
      answer:
        "Yes, throughout the city and its villages, covering single-family homes, condos, and townhouses.",
    },
    {
      question: "Do larger homes take longer?",
      answer:
        "They take a larger crew rather than a longer day. A bigger house finished in one stretch is better for everyone than one cleaner working into the evening.",
    },
    {
      question: "Do you work around a family schedule?",
      answer:
        "Yes. School-hours visits are the most requested arrangement here and hold as a standing slot once set.",
    },
    {
      question: "What about hardwood throughout the house?",
      answer:
        "Damp microfibre rather than a wet mop. Newton houses tend to have hardwood in most rooms, and moisture at the seams is what damages it over time.",
    },
    {
      question: "Do you clean inside the oven and refrigerator?",
      answer:
        "On a deep clean, yes. On routine visits they are add-ons, since appliance interiors add real time to the visit.",
    },
    {
      question: "How often do Newton clients book?",
      answer:
        "Weekly is more common here than in the city, largely because of house size. Biweekly suits smaller households.",
    },
    {
      question: "Are your cleaners background-checked?",
      answer:
        "Every cleaner passes a background check before their first visit, with verified references and an in-person interview. That matters in a house you leave open during the day.",
    },
  ],
  ctaTitle: "Book a Newton cleaning this week",
  ctaDescription: "Tell us the village, bedrooms, bathrooms, and any finished spaces. An upfront quote and open times come back within the hour.",
  areaServed: ["Newton, MA"],
};

export default function NewtonPage() {
  return <AreaPage c={content} />;
}
