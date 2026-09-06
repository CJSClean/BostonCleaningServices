import type { Metadata } from "next";
import AreaPage, { type AreaPageContent } from "@/components/templates/AreaPage";
import { getLocationByKey } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";

const loc = getLocationByKey("back-bay")!;

export const metadata: Metadata = {
  title: "Cleaning Services Back Bay Boston",
  description:
    "House and condo cleaning in Back Bay, Boston. Teams experienced with brownstone walk-ups, doorman buildings on Boylston, and historic finishes.",
  alternates: { canonical: `${SITE_URL}${loc.href}` },
};

const content: AreaPageContent = {
  name: loc.name,
  path: loc.href,
  locationKey: loc.key,
  eyebrow: "Back Bay, Boston",
  h1: "Professional Cleaning Services in Back Bay, MA",
  subtitle:
    "From fourth-floor brownstone walk-ups on Marlborough Street to full-service towers on Boylston, our teams clean Back Bay homes with the care original plaster, parquet, and marble demand.",
  highlights: ["Brownstone and walk-up specialists", "Concierge and doorman coordination", "Fragrance-free products on request", "Flat quotes, no hourly meter"],
  introTitle: "Cleaning the most architecturally particular square mile in Boston",
  intro: [
    "Back Bay was built on filled tidal marsh in the second half of the nineteenth century, and its brownstones were designed as single-family mansions before being carved into the condos and apartments most residents occupy today. That history shows up in the cleaning: original parquet floors, marble fireplace surrounds, plaster crown moulding, tall single-pane windows, and radiators under every sill. Our teams are trained on those surfaces before they ever set foot on Commonwealth Avenue.",
    "The neighborhood also has the newer side. Full-service buildings near Copley Square and the Prudential Center come with concierges, freight elevator rules, and unit layouts with floor-to-ceiling glass. We collect building requirements at booking, deliver certificates of insurance to management when asked, and schedule around quiet hours. Whether the doorman signs us in or a lockbox on a wrought-iron railing lets us up, the process is handled without you present.",
    "Back Bay residents tend to be busy in a particular way: professionals working long hours in the Financial District or Longwood, empty nesters who split time between the city and the Cape, and students and postdocs on Newbury Street's side streets. Recurring plans are the most common choice here, with biweekly visits keeping a two-bedroom condo in showing condition and weekly service handling larger family units on the water side of Beacon Street.",
    "Walk-ups are a fact of life in this neighborhood, and our cleaners carry equipment up four flights without a second thought. Parking is not, so we plan for it: teams arrive by van with a permit strategy for each block, or by T when the job is small enough. None of that appears on your invoice. The quote you receive is based on the size and condition of the home, not the difficulty of reaching it.",
    "Deep cleans in Back Bay often focus on the details that make these homes special and hard to maintain: dust in the ridges of decorative plaster, film on tall windows facing the Mall, grout in original hex tile bathrooms, and the fireplace surround that has not been touched since the last tenant. We treat those surfaces with the correct products and never use abrasive pads on historic finishes.",
    "Move-in and move-out cleans follow the neighborhood's rental calendar, which peaks on September 1 and the first of each month. For sales, we work with agents to have a unit cleaned before photography or between showings. Whatever brings you to us, expect a trained team, a published checklist, a text when we arrive and finish, and a 24-hour guarantee if anything is missed.",
  ],
  servicesTitle: "Cleaning services available in Back Bay",
  servicesIntro: "Every service adapts to brownstone or tower living. Pick one to see Back Bay pricing notes and neighborhood FAQs.",
  neighborhoodsTitle: "Back Bay streets and blocks we cover",
  neighborhoodsIntro: "From the Public Garden to Massachusetts Avenue, river side to Huntington.",
  neighborhoods: loc.neighborhoods,
  zipCodes: loc.zipCodes,
  frequenciesTitle: "Recurring plans for Back Bay homes",
  frequenciesIntro: "Same lead cleaner, same day of the week, and a lower rate on every visit after the first. Skip or move a visit with 48 hours' notice.",
  whyTitle: "Why Back Bay residents choose Boston Cleaning Services",
  benefits: [
    {
      title: "Historic finishes handled correctly",
      description: "Parquet, marble, plaster, and brass each get the right product. No abrasive pads, no acidic cleaners on stone, no soaking wood floors.",
    },
    {
      title: "Comfortable in doorman buildings",
      description: "We provide insurance certificates, follow freight elevator schedules, and check in with concierges so the visit is invisible to you.",
    },
    {
      title: "Walk-ups are not a problem",
      description: "Four flights on Marlborough Street is a normal Tuesday for our teams. Equipment comes up with us and there is no stair surcharge.",
    },
    {
      title: "Flexible around travel",
      description: "Many Back Bay clients split time between homes. Pause, resume, or shift a recurring plan with a text to your coordinator.",
    },
  ],
  mapQuery: loc.mapQuery,
  mapTitle: "Where we clean in Back Bay",
  testimonialFilter: "Back Bay",
  faqTitle: "Back Bay cleaning questions",
  faqs: [
    {
      question: "How much does cleaning cost in Back Bay?",
      answer:
        "A one-bedroom condo typically runs $130 to $170 for a routine visit and $190 to $250 for a deep clean. Larger brownstone units and full-floor homes are quoted individually. Recurring plans lower the rate from the second visit.",
    },
    {
      question: "Can you clean while I am at work?",
      answer:
        "Yes. Most Back Bay customers leave a key with the concierge or use a lockbox. Every cleaner is background-checked and bonded, and you receive arrival and completion texts.",
    },
    {
      question: "Do you handle building insurance requirements?",
      answer:
        "We do. Managed buildings on Boylston, Huntington, and around Copley often require a certificate of insurance before a vendor enters. We email it to management within a business day.",
    },
    {
      question: "Are you careful with original hardwood and marble?",
      answer:
        "Very. Our product kit includes pH-neutral stone cleaner and a wood-safe floor solution. Teams are trained to dry-mop parquet and never leave standing water on any historic surface.",
    },
    {
      question: "Do you clean short-term rentals in Back Bay?",
      answer:
        "Yes, on a recurring turnover schedule with linen changes and restocking available. Tell us the booking calendar and we align visits to checkouts.",
    },
  ],
  ctaTitle: "Book a Back Bay cleaning this week",
  ctaDescription: "Send your address, unit size, and building details. A flat quote and open times arrive within the hour, seven days a week.",
  areaServed: ["Back Bay, Boston, MA"],
};

export default function BackBayPage() {
  return <AreaPage c={content} />;
}
