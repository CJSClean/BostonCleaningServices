import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Booking, cancellation, payment, and guarantee terms for Boston Cleaning Services.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Booking and payment",
    body: [
      "A valid credit or debit card is required to reserve any appointment. A temporary authorization may be placed before the visit. The card is charged after the cleaning is completed for the quoted amount plus any add-ons approved by you on the day.",
    ],
  },
  {
    heading: "Cancellations and rescheduling",
    body: [
      "Changes made with at least 48 hours' notice are free. Changes inside 48 hours incur 25 percent of the booking value, inside 24 hours 50 percent, and same-day cancellations, no-shows, or lockouts are charged in full. Recurring customers may skip a visit with 48 hours' notice; skipping two consecutive visits may reset the recurring discount.",
    ],
  },
  {
    heading: "Access and preparation",
    body: [
      "Please ensure our team can enter at the scheduled time via a key, lockbox, doorman, or code. Light tidying of clothing, toys, and dishes before the visit lets the team spend its time cleaning rather than organizing. Utilities, including water and electricity, must be on for move-in and move-out cleans.",
    ],
  },
  {
    heading: "Scope of work",
    body: [
      "Services are performed according to the checklist published on this website for the level booked. We do not move furniture or appliances heavier than roughly 35 pounds, climb higher than a two-step stool, clean exterior windows, or handle biohazards, pest infestations, mold, or hoarding conditions. Items outside the checklist can be quoted separately.",
    ],
  },
  {
    heading: "Satisfaction guarantee",
    body: [
      "If any area on the checklist was not cleaned to standard, notify us within 24 hours of the visit and we will return to re-clean that area at no charge, typically within two business days. Refunds are not issued in place of a re-clean.",
    ],
  },
  {
    heading: "Damage and liability",
    body: [
      "We carry general liability insurance and a bond. Report any suspected damage within 48 hours so we can investigate. We are not responsible for pre-existing damage, wear on fragile or improperly installed items, or items of extraordinary value not disclosed before the visit.",
    ],
  },
  {
    heading: "Staff and non-solicitation",
    body: [
      "Our cleaners are employees of Boston Cleaning Services. Customers agree not to hire our staff directly for a period of 12 months after their last service with us. A placement fee of $2,500 applies to any breach.",
    ],
  },
  {
    heading: "Pricing changes and termination",
    body: [
      "Quotes are based on the information you provide about the size and condition of the home. Homes requiring heavy-duty cleaning, including heavy buildup or an extended gap since the last professional clean, and homes with pets that shed heavily, carry an additional fee that is disclosed before booking. If a home is materially larger or in a different condition than described, we will confirm any adjustment with you before proceeding. Either party may end a recurring plan at any time with 48 hours' notice before the next visit.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${SITE_CONFIG.email} or by calling ${SITE_CONFIG.phone}.`],
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
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-semibold text-navy">{s.heading}</h2>
                <div className="prose-body mt-3 leading-relaxed text-ink/85">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
