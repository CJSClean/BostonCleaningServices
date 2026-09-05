import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("jamaica-plain")!;

export const metadata: Metadata = {
  title: "Cleaning Services Jamaica Plain Boston | House & Apartment Cleaning",
  description:
    "House and apartment cleaning in Jamaica Plain, Boston. Triple-deckers, Victorians near the Pond, and Forest Hills condos cleaned by insured local teams. Flat pricing, eco products available.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Jamaica Plain, Boston",
  h1: "Cleaning Services in Jamaica Plain, MA",
  subtitle:
    "Triple-deckers off Centre Street, Victorians around the Pond, and new condos near Forest Hills. Our JP teams clean them all with flat pricing, plant-based products on request, and schedules that fit real life.",
  highlights: ["Triple-decker and Victorian experience", "Plant-based, fragrance-free option", "Pet and kid friendly", "Flat quotes, no hourly meter"],
  introTitle: "Cleaning for a neighborhood that does things its own way",
  intro: [
    "Jamaica Plain has a reputation as Boston's most independent-minded neighborhood, and its housing matches. Rows of triple-deckers climb the hills off Centre and Washington Streets. Grand Victorians and shingle-style homes ring Jamaica Pond and fill Sumner Hill and Moss Hill. Newer condo buildings cluster near Forest Hills and along the Southwest Corridor. Our JP teams work across all of it, adjusting tools and products to each home rather than treating the neighborhood as one thing.",
    "Triple-deckers make up a big share of our JP work. These three-family homes have long, narrow floor plans, back porches that track in grit, kitchens at the rear, and often original hardwood under decades of finish. Cleaning one efficiently means moving front to back with a plan, dry-mopping the wood, and paying attention to the pantry and back hall that most people forget. We know the layout by heart.",
    "The Victorians around the Pond and in Sumner Hill bring high ceilings, ornate trim, stained glass, and staircases with turned balusters. These homes collect dust in places a quick clean never reaches. Our routine visits dust from the top down, and deep cleans get into picture rails, ceiling medallions, and the grooves of wainscoting with brushes rather than sprays.",
    "JP residents are among the most likely in the city to ask what is in our cleaning products, and we are glad to answer. Our standard kit is professional grade and residue-free once dry. We also carry a plant-based, fragrance-free line that we will use exclusively at no extra charge. Many of our JP customers have it as a permanent note on their account, along with instructions about the compost bin and which door the dog does not go through.",
    "Households here range from young families and artists in shared triple-decker floors to long-time homeowners on Pondside and hospital staff commuting to Longwood. Biweekly plans dominate, with weekly service for larger family homes and monthly visits for smaller condos. We hold weekday and Saturday morning slots in JP because that is when the neighborhood wants us.",
    "Move cleans follow the first-of-month and September 1 rental cycle, and we coordinate with the many small landlords who own and live in JP triple-deckers. Whatever the job, you get a flat price before booking, a two-person team, a text at arrival and completion, and our 24-hour re-clean guarantee.",
  ],
  servicesTitle: "Cleaning services available in Jamaica Plain",
  servicesIntro: "Priced for triple-decker floors, Victorians, and condos alike. Open a service for JP pricing notes and FAQs.",
  neighborhoodsTitle: "Jamaica Plain areas we cover",
  neighborhoodsIntro: "Hyde Square to Forest Hills, Pondside to Egleston.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for JP homes",
  frequenciesIntro: "Standing slots with the same team, product preferences saved to your account, and a discount on every visit after the first.",
  whyTitle: "Why Jamaica Plain residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Triple-decker fluency",
      description: "Long floor plans, back porches, rear kitchens, and shared stairwells are second nature. We clean front to back with a plan and finish on time.",
    },
    {
      title: "Products you can ask about",
      description: "Full ingredient transparency, a plant-based fragrance-free line at no extra cost, and no aerosols in the house if you prefer.",
    },
    {
      title: "Weekend availability",
      description: "Saturday morning slots are held for JP because that is when many households want the visit. Recurring customers keep them.",
    },
    {
      title: "Small-landlord partners",
      description: "Owner-occupants renting the other floors of a triple-decker rely on us for turnover cleans, key handling, and simple invoicing.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Jamaica Plain",
  testimonialFilter: "Jamaica Plain",
  faqTitle: "Jamaica Plain cleaning questions",
  faqs: [
    {
      question: "How much does it cost to clean a triple-decker floor in JP?",
      answer:
        "A typical two- or three-bedroom triple-decker unit runs $170 to $220 for a routine clean and $250 to $380 for a deep clean, depending on condition. Quotes are flat and confirmed before booking.",
    },
    {
      question: "Do you use non-toxic products?",
      answer:
        "We carry a plant-based, fragrance-free line and will use it exclusively at no extra charge. Our standard products are residue-free once dry, and we can share ingredient lists on request.",
    },
    {
      question: "Can you clean around a home office or someone working from home?",
      answer:
        "Yes. Tell us which room to do first or last and the team works around calls. We can also skip a room entirely on a given visit with a quick text.",
    },
    {
      question: "Do you offer Saturday cleanings in JP?",
      answer:
        "Yes. Saturday mornings are popular in Jamaica Plain and we schedule them seven days a week, 7am to 9pm. Recurring customers can hold a standing Saturday slot.",
    },
    {
      question: "Do you work with landlords who live in the building?",
      answer:
        "Frequently. We coordinate turnover cleans between tenants, handle keys, and can invoice directly. Many JP owner-occupants also keep a recurring plan for their own floor.",
    },
  ],
  ctaTitle: "Book a Jamaica Plain cleaning this week",
  ctaDescription: "Send the unit size, your schedule, and any product preferences. A flat quote and open times arrive within the hour.",
  areaServed: ["Jamaica Plain, Boston, MA"],
};

export default function JamaicaPlainPage() {
  return <AreaPage c={content} />;
}
