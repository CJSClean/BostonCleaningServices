import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/sections/Section";
import MapEmbed from "@/components/sections/MapEmbed";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/ui/QuoteForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateContactPageSchema, SchemaScript, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Boston Cleaning Services",
  description:
    "Call, text, or send a quick form to Boston Cleaning Services for an upfront quote. Coordinators reply within an hour, 7 days a week.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "A coordinator typically responds within one hour by text or phone, day or night. We operate 24/7, so overnight and holiday requests are answered just as quickly.",
  },
  {
    question: "Can I get a quote without a walkthrough?",
    answer:
      "Yes. Almost all quotes are given from the details in the form: bedrooms, bathrooms, approximate square footage, and the type of clean. For post-construction projects or unusually large homes we may ask for a few photos.",
  },
  {
    question: "Do you take card payments?",
    answer:
      "We accept all major credit and debit cards, and a card on file is required to hold a booking. You are charged after the cleaning is complete, never before.",
  },
  {
    question: "What if I need to change my appointment?",
    answer:
      "Text or call us at least 48 hours ahead and we will move it at no charge. Inside 48 hours a $75 fee applies, inside 24 hours half the booking, and same-day changes are billed in full. We do our best to find a swap.",
  },
  {
    question: "What do you need to give me a price?",
    answer:
      "The size of the place, the number of bathrooms, its rough condition, and how often you want service. Anything unusual — pets, a recent renovation, a room to skip — helps us get it right first time.",
  },
  {
    question: "Is the quote binding?",
    answer:
      "The price is confirmed before you book and does not change afterwards. If the property turns out to be substantially different from the description, we talk to you before proceeding rather than adjusting the bill later.",
  },
  {
    question: "Do you have same-week availability?",
    answer:
      "Routine cleans often, yes. Deep cleans and move-related work need more notice, especially anywhere near September 1.",
  },
  {
    question: "How do I reschedule?",
    answer:
      "Get in touch with as much notice as you can and we move it. Recurring clients keep their slot and rate through a reschedule or a pause for travel.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Boston and Greater Boston, including Cambridge, Somerville, Brookline, and Newton. If your address falls outside that we will say so rather than stretch.",
  },
  {
    question: "What if I am unhappy with a visit?",
    answer:
      "Tell us within 24 hours and we return to re-clean the area at no charge. We would far rather fix it than have you quietly stop booking.",
  },
];

const details = [
  { icon: PhoneIcon, label: "Call or text", value: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref, sub: "Fastest way to reach a coordinator" },
  { icon: MailIcon, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, sub: "Replies within one business day" },
  { icon: ClockIcon, label: "Hours", value: SITE_CONFIG.hours, sub: "Cleanings and phone support" },
  { icon: PinIcon, label: "Office", value: SITE_CONFIG.addressLine, sub: "Serving Boston, Cambridge, Somerville, Brookline, and Newton" },
];

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateFAQSchema(contactFaqs),
          generateContactPageSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Contact"
          withForm={false}
          title="Contact Boston Cleaning Services"
          subtitle="Send the form, text, or call. Tell us the size of your place and what you need, and you will have an upfront price and open time slots shortly after."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />

        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Reach us" title="Every way to get in touch" />
              <ul className="space-y-5">
                {details.map(({ icon: Icon, label, value, href, sub }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky text-navy">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-lg font-semibold text-navy hover:text-brick">
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-navy">{value}</p>
                      )}
                      <p className="text-sm text-muted">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-line bg-canvas p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-navy">Request a quote</h2>
                <p className="mb-6 mt-1 text-sm text-muted">
                  The more you tell us about the home, the more accurate the first number will be.
                </p>
                <QuoteForm submitLabel="Send my request" />
              </div>
            </div>
          </div>
        </Section>

        <MapEmbed
          query={SITE_CONFIG.addressLine}
          title="Our office and service area"
          intro="Teams are dispatched across the city and the inner ring of suburbs every day of the week."
        />

        <FAQ title="Before you reach out" items={contactFaqs} />
      </PageShell>
    </>
  );
}
