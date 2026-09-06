import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Booking, payment, cancellation, guarantee, and service terms for Boston Cleaning Services, covering house and apartment cleaning across Greater Boston.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

interface Section {
  heading: string;
  body?: string[];
  bullets?: string[];
}

const sections: Section[] = [
  {
    heading: "Required Card on File",
    body: [
      "A valid credit or debit card is required to reserve any cleaning with Boston Cleaning Services. Payments are processed securely through Stripe. Your card is charged automatically after each service is completed, and a receipt is emailed to the address on your account. We never store full card numbers on our own systems.",
    ],
  },
  {
    heading: "Cancellation and Rescheduling Fees (48-Hour Notice Required)",
    body: [
      "We schedule cleaners and travel around your appointment, so we ask for at least 48 hours' notice to cancel or reschedule at no charge. Shorter notice is billed as follows:",
    ],
    bullets: [
      "Less than 48 hours' notice: $75 fee.",
      "Less than 24 hours' notice: 50% of the booking price.",
      "Same-day cancellation, no-show, or lockout: 100% of the booking price.",
    ],
  },
  {
    heading: "Card Hold",
    body: [
      "Approximately 24 hours before your appointment we may place a temporary authorization hold on your card to confirm funds are available. This is a hold, not a charge. It is released automatically and replaced by the actual charge once the cleaning is complete.",
    ],
  },
  {
    heading: "Cleaner Reassignment Policy",
    body: [
      "We do our best to send the same lead cleaner to recurring customers. Illness, scheduling conflicts, and staffing changes sometimes make that impossible, and Boston Cleaning Services reserves the right to reassign cleaners at its discretion. When a change is known in advance we will notify you before the visit.",
    ],
  },
  {
    heading: "Complaints",
    body: [
      `If any part of your cleaning falls short, contact us within 24 hours of the visit at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. Photos of the area in question help us resolve the issue quickly. Complaints received after 24 hours may not be eligible for a return visit.`,
    ],
  },
  {
    heading: "Right to Terminate Service",
    body: [
      "Boston Cleaning Services may end service to any customer at any time, for any reason, with notice by text message or email. Any completed work is billed at the agreed rate and no further visits are scheduled.",
    ],
  },
  {
    heading: "Right to Refuse Service",
    body: [
      "Our cleaners may decline to begin or continue a job when conditions are unsafe or outside the scope of residential cleaning. This includes, but is not limited to, the presence of unsecured weapons, severe clutter, disconnected water or electricity, hoarding conditions, biohazards such as bodily fluids or animal waste beyond normal pet mess, pest or rodent infestations, and work that would require a ladder taller than three steps. If a cleaner arrives and cannot safely proceed, the visit is treated as a same-day cancellation.",
    ],
  },
  {
    heading: "Cleaning Day Preparation",
    body: [
      "Please clear floors, countertops, tables, and other surfaces of clothing, dishes, toys, paperwork, and personal items before we arrive. Our cleaners are there to clean, not to organize, and time spent moving belongings is time not spent cleaning. Homes that need significant tidying before cleaning can begin may be subject to the heavy duty fee below. Our full preparation guide is on the Preparing for Your Cleaning page.",
    ],
  },
  {
    heading: "Heavy Duty and Excessive Clutter Fee",
    body: [
      "Quotes assume a home in reasonable, lived-in condition. Homes with heavy buildup, a long gap since the last professional cleaning, excessive clutter, or pets that shed heavily require significantly more time and product. In these cases an additional heavy duty fee or pet fee applies. Whenever possible we identify it from the details you provide and disclose it before booking. If the condition of the home is only apparent on arrival, we will contact you for approval before proceeding.",
    ],
  },
  {
    heading: "Use of Homeowner's Vacuum",
    body: [
      "Our teams bring their own equipment. If you ask us to use your vacuum instead, for allergy, flooring, or building reasons, Boston Cleaning Services assumes no liability for damage to the vacuum or for repairs, and cannot guarantee results if the equipment is not working properly.",
    ],
  },
  {
    heading: "Unreachable Areas and Heavy Items",
    body: [
      "For the safety of our cleaners, we do not use ladders taller than a three-step stool, and we do not move furniture or appliances heavier than roughly 35 pounds. If you would like us to clean behind or beneath a heavy item, please move it before the visit. Areas that cannot be safely reached are cleaned as far as a standard extension tool allows.",
    ],
  },
  {
    heading: "Non-Solicitation Agreement",
    body: [
      "Our cleaners are employees whom we recruit, screen, and train at considerable expense. By booking with Boston Cleaning Services you agree not to hire, contract, or solicit any current or former employee for cleaning services outside of the company for a period of two years after your last service with us. A placement fee of $3,000 USD applies to any breach of this agreement.",
    ],
  },
  {
    heading: "Changes to Requested Services",
    body: [
      "Any change to the scope of a booked cleaning, including adding rooms, add-on tasks, or switching service type, must be approved by our office. Please communicate changes by text, phone, or email before 5 PM on the day prior to your appointment. Cleaners on site are not authorized to approve changes or adjust pricing.",
    ],
  },
  {
    heading: "100% Satisfaction Guarantee",
    body: [
      "We stand behind every visit. If any area on the checklist was not cleaned to standard, notify us within 24 hours of the visit, with photos of the area, and we will return to correct it at no charge, typically within two business days. The guarantee covers the scope of work booked and does not cover pre-existing wear, damage, staining, or conditions that cleaning cannot correct. Refunds are not issued in place of a return visit. Hourly services are excluded from the guarantee.",
    ],
  },
  {
    heading: "Hourly Cleans",
    body: [
      "Some services, including certain post-construction and organizing jobs, are booked by the hour. Time estimates for hourly work are guidelines, not commitments, and the job may require more time than estimated. Work stops when the booked time is used unless additional time is approved. The 100% Satisfaction Guarantee does not apply to hourly cleans.",
    ],
  },
  {
    heading: "Pricing",
    body: [
      "Quotes are based on the number of bedrooms and bathrooms, approximate square footage, the type of clean, and the assumption that the home is in reasonable condition. Heavy duty and pet fees are disclosed before booking whenever the information you provide allows. If a home is materially larger or in a different condition than described, we will confirm any adjustment with you before proceeding. Recurring discounts apply from the second visit and may be reset if two consecutive visits are skipped.",
    ],
  },
  {
    heading: "Approval for Additional Time",
    body: [
      "If a cleaning requires more time than quoted, we will call or text you to request approval before continuing. If we cannot reach you, we will send an update by email. Without approval, our team will stop when the quoted time is complete and note any areas that were not finished.",
    ],
  },
  {
    heading: "Breakage and Damage Policy",
    body: [
      "We carry general liability insurance and a bond. Please report any suspected damage within 24 hours of the visit so we can investigate. Boston Cleaning Services is not responsible for pre-existing wear or damage, items that were unstable or improperly installed, fragile or high-value items that were not disclosed before the visit, or normal wear from routine cleaning.",
    ],
  },
  {
    heading: "Entry to Your Home",
    body: [
      "You are responsible for providing safe and legal access to your home at the scheduled time, whether by being present, leaving a key or lockbox, arranging access with a doorman, or sharing a code. If our team cannot get in, the visit is treated as a lockout and the same-day cancellation fee applies.",
    ],
  },
  {
    heading: "Pets",
    body: [
      "We love pets and clean around them every day. For everyone's safety, please secure dogs that are anxious or protective, and let us know about any animal that should not be let outside. Boston Cleaning Services is not responsible for pets that escape while a door is open for equipment or cleaning.",
    ],
  },
  {
    heading: "Use of After Photos",
    body: [
      "Our teams may photograph completed work to document quality and for use on our website and social media. Photos never include identifying information such as addresses, mail, family photos, or personal documents. If you prefer that no photos of your home be used, tell us in writing and we will honor that request.",
    ],
  },
  {
    heading: "Privacy",
    body: [
      "Your personal information is used only to schedule and perform service, process payment, and communicate about your account. We do not sell or share customer information with third parties for marketing. See our Privacy Policy for full details.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Changes are posted on this page and, for material changes, communicated by email. Continued use of our services after an update indicates acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${SITE_CONFIG.email} or by calling or texting ${SITE_CONFIG.phone}.`],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted">Last updated September 2026</p>
          <p className="mt-6 leading-relaxed text-ink/85">
            These terms apply to every cleaning booked with Boston Cleaning Services, whether a one-time visit or a
            recurring plan, anywhere in our Greater Boston service area. By booking, you agree to the terms below. For
            a practical checklist of what to do before we arrive, see{" "}
            <Link href="/preparing-for-your-cleaning" className="font-semibold text-brick hover:underline">
              Preparing for Your Cleaning
            </Link>
            .
          </p>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-semibold text-navy">{s.heading}</h2>
                <div className="prose-body mt-3 leading-relaxed text-ink/85">
                  {s.body?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-6">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
