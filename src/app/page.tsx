import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import Frequencies from "@/components/sections/Frequencies";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import MapEmbed from "@/components/sections/MapEmbed";
import CTABand from "@/components/sections/CTABand";
import { allServiceAreas } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateFAQSchema, generateLocalBusinessSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Boston Cleaning Services | House & Apartment Cleaning in Boston, MA" },
  description:
    "House, apartment, deep, and move cleaning across Boston, Cambridge, Somerville, Brookline & Newton. Insured local teams, upfront quotes, same-week slots.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Boston Cleaning Services | House & Apartment Cleaning in Boston, MA",
    description:
      "Insured, background-checked cleaners for homes and apartments across Greater Boston. Upfront pricing, same-week availability, 100% satisfaction guarantee.",
    url: SITE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "What areas does Boston Cleaning Services cover?",
    answer:
      "We clean homes and apartments in Boston proper, including Back Bay, Beacon Hill, the South End, South Boston, Charlestown, and Jamaica Plain, plus Cambridge, Somerville, Brookline, and Newton. If your address sits just outside those areas, send us the zip code and we will confirm whether a team can reach you.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Quotes are based on bedrooms, bathrooms, square footage, the type of clean, and the current condition of the home, and you receive the number before booking. Homes that need heavy-duty attention, such as heavy buildup or a long gap since the last professional clean, or that have pets that shed heavily, carry an additional fee. We tell you about it up front rather than adding it to the invoice. Recurring plans lower the rate on every visit after the first.",
  },
  {
    question: "Who will be in my home?",
    answer:
      "Employees of Boston Cleaning Services, not gig workers. Every cleaner passes a criminal background check, an in-person interview, and supervised training before entering a customer's home. Recurring customers get the same lead cleaner on each visit whenever schedules allow.",
  },
  {
    question: "Do I need to supply anything?",
    answer:
      "No. Teams arrive with vacuums, mops, microfiber, and professional-grade products, including a fragrance-free and plant-based line if you prefer it. If your building or your floors require a specific product, tell us when you book and we will bring it.",
  },
  {
    question: "Can you clean while I am at work?",
    answer:
      "Most of our customers are not home during the visit. You can leave a key with a doorman, provide a lockbox code, or share a smart-lock code that we delete after the appointment. Our staff are insured and bonded, and you receive a text when the team arrives and when they finish.",
  },
  {
    question: "What if something is missed?",
    answer:
      "Every visit is backed by a 100% satisfaction guarantee. Tell us within 24 hours and we return to fix the specific area at no cost, usually within two business days. We would rather come back than have you settle for a clean you are not happy with.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "We can usually place a first clean within the same week, and often within two or three days. Move-out cleanings around the first of the month and the September 1 turnover fill quickly, so book those as soon as your dates are firm.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Reschedule or cancel at no charge with 48 hours' notice. Inside 48 hours we charge 25 percent, inside 24 hours 50 percent, and same-day cancellations or lockouts are billed in full because the team has already been dispatched.",
  },
  {
    question: "Are there jobs you will not take?",
    answer:
      "We do not handle biohazards, pest infestations, hoarding situations, mold remediation, exterior windows above the first floor, or anything requiring a ladder taller than two steps. For those, we are glad to recommend a specialist.",
  },
  {
    question: "Do you clean offices or Airbnbs?",
    answer:
      "Our focus is residential, but we do service short-term rentals and small home offices inside our coverage area. Turnover cleanings between guests can be set up on a recurring schedule with linen changes and restocking on request.",
  },
];

const benefits = [
  {
    title: "An upfront quote before anyone shows up",
    description:
      "You know the price when you book. No hourly meter running while a cleaner learns your layout, and if the home needs heavy-duty attention or has heavy pet shedding, we say so up front.",
  },
  {
    title: "Teams that know Boston housing",
    description:
      "Brownstone stairs, triple-decker back porches, Seaport glass, and 1920s Newton colonials each need a different approach. Our crews have cleaned all of them, many times.",
  },
  {
    title: "Employees, checked and trained",
    description:
      "Everyone who enters your home is on our payroll, background-checked, and trained on our checklist. We carry liability insurance and a bond so you are protected either way.",
  },
  {
    title: "Real availability, seven days a week",
    description:
      "Evenings, weekends, and the day before your in-laws land. Our dispatch runs 24/7 and we usually have a same-week slot.",
  },
];

const introParagraphs = [
  "Boston is a city of stairs, radiators, old wood, and small closets, and it takes a certain kind of cleaning company to keep up with it. Boston Cleaning Services was built for exactly this housing stock. We send trained, insured teams to apartments and houses across the city and the inner suburbs, working from a written checklist that covers every room and finishing with a text to let you know the job is done.",
  "Our customers are graduate students sharing a Somerville triple-decker, families in Newton colonials, empty nesters in Back Bay condos, and hospital staff near Longwood who simply do not have hours left in the week to scrub a tub. What they have in common is a desire for the same result every time: a home that feels reset, not just tidied, delivered by people they trust with a key.",
  "We keep our promises simple. The price we quote reflects your home's size and condition, and any heavy-duty or pet-shedding fee is disclosed before we start. The cleaners who arrive are our employees, not strangers from an app. Every visit is backed by a 100% satisfaction guarantee. And you can reach a human coordinator by phone or text seven days a week to change a time, add a task, or ask a question.",
  "Whether you need a weekly plan to keep a busy household on track, a one-time deep clean before hosting, or a move-out clean that protects your deposit ahead of a September 1 turnover, we have a service built for the situation. Browse the options below, check the pricing tables on each service page, and request a quote when you are ready. Most first cleanings are booked within the same week.",
];

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={[generateLocalBusinessSchema(), generateFAQSchema(faqs)]} />
      <PageShell>
        <Hero
          eyebrow="Serving Boston and the inner suburbs"
          title="Professional Cleaning Services in Boston, MA"
          subtitle="Cleaning that shows up, finishes, and gets it right. House cleaning, apartment cleaning, deep cleans, and move-in or move-out service from a local, insured team. Upfront pricing, same-week slots, and a 100% satisfaction guarantee."
          highlights={[
            "Background-checked, employee cleaners",
            "Upfront quote before you book",
            "All supplies and equipment included",
            "Weekly, biweekly, monthly, or one-time",
          ]}
        />
        <TrustStrip />

        <Prose
          eyebrow="Cleaning services near you"
          title="A Boston cleaning company built for Boston homes"
          paragraphs={introParagraphs}
        />

        <ServicesGrid
          title="Six services, one standard"
          intro="Every visit follows the same published checklist. Pick the service that fits your situation and see room-by-room detail and pricing on its page."
        />

        <HowItWorks />

        <WhyChoose
          title="Why households across Greater Boston keep us on the calendar"
          intro="There is no shortage of cleaning options in this city. These are the four reasons customers tell us they stayed."
          benefits={benefits}
        />

        <Frequencies />

        <Testimonials />

        <ServiceAreas
          title="Neighborhoods and towns we cover"
          intro="Dedicated pages for each area include local pricing notes, neighborhoods served, and frequently asked questions."
          areas={allServiceAreas}
          tone="navy"
        />

        <MapEmbed
          query="Boston, MA"
          title="Where we work across Greater Boston"
          intro="Teams are dispatched around the clock across the city and the inner suburbs."
        />

        <FAQ
          title="Common questions about our Boston cleaning services"
          intro="Straight answers on pricing, access, staffing, and policies. Anything else, call or text us."
          items={faqs}
        />

        <CTABand
          title="Ready for a home that stays clean without your weekend?"
          description="Request a quote now and a coordinator will reply with an upfront price and open times, usually within the hour."
        />
      </PageShell>
    </>
  );
}
