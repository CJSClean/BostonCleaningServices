import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Section, SectionHeading } from "@/components/sections/Section";
import CTABand from "@/components/sections/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, SchemaScript } from "@/lib/schema";

const PATH = "/preparing-for-your-cleaning";

export const metadata: Metadata = {
  title: "Preparing for Your Cleaning",
  description:
    "How to get your Boston home ready before Boston Cleaning Services arrives: clearing floors and surfaces, pets, access, move-clean requirements, heavy-duty fees, and our cancellation policy.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const beforeWeArrive = [
  {
    title: "Clear the floors",
    text: "Pick up clothing, shoes, toys, cords, and anything else on the floor before we arrive. Our team is there to clean, not to organize or put things away, and clear floors let us vacuum and mop edge to edge, including under furniture we can reach.",
  },
  {
    title: "Clear countertops and surfaces",
    text: "Move dishes, mail, personal items, and small clutter off kitchen counters, bathroom vanities, tables, and desks so every surface can be wiped down properly. Items left on a surface are cleaned around, not under.",
  },
  {
    title: "Secure your pets",
    text: "Please keep dogs and cats in a safe room, crate, or with you during the visit. Vacuums and open doors stress many animals, and a secured pet keeps both your pet and our cleaners safe. Let us know about any animal that should never be let outside.",
  },
  {
    title: "Provide access",
    text: "Make sure we can get in at the scheduled time. Leave a key with your concierge, use a lockbox, share a door or smart-lock code, or be home. Send building instructions, parking notes, and elevator rules to your coordinator ahead of time. A lockout is treated as a same-day cancellation.",
  },
  {
    title: "Point out priority areas",
    text: "If there is a room or a problem spot you want extra attention on, tell your coordinator before the visit so the team can plan its time. Notes are attached to your account and carried forward to future visits.",
  },
  {
    title: "Dishes and laundry",
    text: "We do not wash dishes or do laundry unless it has been arranged as an add-on. Please make sure sinks are reasonably clear so we can clean them. We will load an empty dishwasher and put away dishes from a drying rack.",
  },
  {
    title: "After photos",
    text: "We may photograph finished rooms to document our work and share on our website, Instagram, and Facebook. Photos never include addresses, mail, family photos, or anything identifying. If you would rather we not photograph your home, tell us before your cleaning date.",
  },
];

const moveCleans = [
  {
    title: "The home must be empty",
    text: "Move-in and move-out cleans are quoted for a home that is completely empty of furniture, belongings, and trash. If items are still present when we arrive, we cannot clean around them effectively. A heavy duty fee may apply or the visit may need to be rescheduled.",
  },
  {
    title: "Remove all trash and leftover items",
    text: "Please take out garbage, leftover food, and discarded items before we arrive. We dispose of a few bags of household trash but do not haul away furniture or debris. Homes left with significant debris may be subject to additional charges or cancellation.",
  },
  {
    title: "Utilities must be active",
    text: "Running water and electricity are required to complete a move clean. Confirm with your landlord, agent, or utility that both are on for the scheduled date.",
  },
];

const cancellation = [
  { notice: "48+ hours' notice", fee: "No fee. Free reschedule or cancellation." },
  { notice: "Less than 48 hours' notice", fee: "$75 cancellation or reschedule fee" },
  { notice: "Less than 24 hours' notice", fee: "50% of the booking price" },
  { notice: "Same-day cancellation or lockout", fee: "100% of the booking price" },
];

export default function PreparingPage() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Preparing for Your Cleaning", url: PATH },
        ])}
      />
      <PageShell>
        <Hero
          eyebrow="Cleaning day prep"
          title="Preparing for Your Cleaning"
          subtitle="A little preparation goes a long way. Here is everything to take care of before our team arrives at your Boston home so we can deliver the best clean possible."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Preparing for Your Cleaning", href: PATH },
          ]}
        />
        <TrustStrip />

        <Section tone="paper" narrow>
          <div className="rounded-xl border-l-4 border-brick bg-brick-soft/60 p-6 sm:p-7">
            <h2 className="font-display text-xl font-semibold text-navy">Heavy duty and pet fee notice</h2>
            <p className="mt-3 leading-relaxed text-ink/85">
              If our team arrives and the home has excessive clutter on the floors, items that need to be picked up
              before cleaning can begin, or the home is in a significantly dirtier condition than the quote assumed,
              a <strong>heavy duty fee</strong> may be applied. A <strong>pet fee</strong> may also apply when there is
              significant pet hair, dander, or mess throughout the home. Our team will notify you of any price
              adjustment before proceeding. To avoid either fee, please have your home ready before we arrive.
            </p>
          </div>
        </Section>

        <Section tone="canvas">
          <SectionHeading
            eyebrow="Before we arrive"
            title="Please take care of these before your scheduled time"
            intro="Each item takes a few minutes and lets the team spend the visit cleaning instead of working around things."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {beforeWeArrive.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-line bg-paper p-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-seafoam text-navy">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="sky">
          <SectionHeading
            eyebrow="Move-in and move-out cleans"
            title="Move cleans need a few extra steps"
            intro="Empty-home cleans are quoted and scheduled differently from a routine visit. These three items make the difference between a smooth handoff and a rescheduled one."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {moveCleans.map((item, i) => (
              <div key={item.title} className="rounded-xl border border-line bg-paper p-6">
                <p className="eyebrow">Step {i + 1}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="paper" narrow>
          <SectionHeading
            eyebrow="Cancellation policy"
            title="Rescheduling and cancellation fees"
            intro="We plan cleaners and travel around your appointment, so notice matters. Here is exactly what applies."
          />
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">Notice given</th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-paper">
                {cancellation.map((row) => (
                  <tr key={row.notice}>
                    <td className="px-5 py-4 font-semibold text-navy">{row.notice}</td>
                    <td className="px-5 py-4 text-ink">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted">
            To cancel or reschedule, contact us as early as possible at{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-semibold text-brick hover:underline">
              {SITE_CONFIG.phone}
            </a>{" "}
            or{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-brick hover:underline">
              {SITE_CONFIG.email}
            </a>
            . Full details are in our{" "}
            <Link href="/terms" className="font-semibold text-brick hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </Section>

        <Section tone="canvas" narrow>
          <SectionHeading
            eyebrow="Have questions?"
            title="We are happy to walk you through anything before your first clean"
            align="center"
          />
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="navy">Contact us</ButtonLink>
            <ButtonLink href={SITE_CONFIG.phoneHref} variant="outline">Call or text {SITE_CONFIG.phone}</ButtonLink>
          </div>
        </Section>

        <CTABand
          title="Ready to book your Boston cleaning?"
          description="Send your home's details and we reply with an upfront quote and open times, 24/7."
        />
      </PageShell>
    </>
  );
}
