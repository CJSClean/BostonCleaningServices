import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import { Section, SectionHeading } from "@/components/sections/Section";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import { CheckIcon } from "@/components/ui/Icons";
import { allServiceAreas } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateAboutPageSchema, generateBreadcrumbSchema, generateFAQSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Boston Cleaning Services",
  description:
    "Meet Boston Cleaning Services, a locally run cleaning company with employee cleaners, upfront pricing, and a 100% satisfaction guarantee in Greater Boston...",
  alternates: { canonical: `${SITE_URL}/about` },
};

const stats = [
  { value: "4,000+", label: "cleanings completed" },
  { value: "5.0", label: "average review rating" },
  { value: "100%", label: "satisfaction guarantee" },
  { value: "24/7", label: "open every day, around the clock" },
];

const values = [
  {
    title: "Show up",
    text: "Arrival windows are two hours wide and we hit them. If a team is running late, you hear from us before the window closes, not after.",
  },
  {
    title: "Finish the list",
    text: "Every cleaner carries the same room-by-room checklist. The job is done when the list is done, not when the clock says so.",
  },
  {
    title: "Say the price early",
    text: "Quotes are given in writing before booking, based on the size and condition of the home. If a heavy-duty or pet-shedding fee applies, you hear about it then, not on the invoice.",
  },
  {
    title: "Own the mistake",
    text: "If we miss something, tell us and we come back to fix it at no charge. That is what our 100% satisfaction guarantee means. No forms, no arguing.",
  },
];

const promises = [
  "Background-checked, insured teams on every job",
  "Same lead cleaner for recurring customers whenever possible",
  "All equipment and supplies included, with a fragrance-free option",
  "A text when we arrive and a text when we finish",
  "A coordinator you can actually reach, seven days a week",
];

const faqs = [
  {
    question: "How long have you been cleaning in Boston?",
    answer:
      "Boston Cleaning Services is the Boston arm of a group running residential cleaning across several US cities. The local operation is kept at a size where consistency stays manageable.",
  },
  {
    question: "How do you vet your cleaners?",
    answer:
      "A background check before the first day, an in-person interview, verified references, and hands-on training. You are handing over keys, so that step is not compressed.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. If something is damaged, tell us as soon as you notice and it gets resolved rather than argued about. That is largely why the insurance exists.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer:
      "We choose products for the surface rather than for marketing. If you want fragrance-free or plant-based products used throughout, it becomes a standing note on your account.",
  },
  {
    question: "Do you clean commercial spaces?",
    answer:
      "Our scope is residential — houses, apartments, condos, and triple-deckers. Small offices are occasionally possible but it is not what the checklist is written for.",
  },
  {
    question: "What makes you different from a booking app?",
    answer:
      "Apps match you with whoever is free. We run one team against one documented scope, which is why the same cleaner tends to come back and why results do not swing week to week.",
  },
  {
    question: "How do you handle keys and building access?",
    answer:
      "However you prefer: door code, lockbox, fob with the front desk, or a key held securely. Access details are recorded once and not shared beyond the people who need them.",
  },
  {
    question: "What is your guarantee?",
    answer:
      "If an included area was missed, tell us within 24 hours and we return to re-clean it at no additional charge. It applies to every visit, not just the first.",
  },
  {
    question: "Which parts of Greater Boston do you cover?",
    answer:
      "Boston proper plus Cambridge, Somerville, Brookline, Newton, and the surrounding Suffolk, Middlesex, and Norfolk County communities.",
  },
  {
    question: "Do you work year-round?",
    answer:
      "Yes. Winter storms occasionally force a reschedule, but the schedule runs through the year and recurring clients keep their slot through it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateFAQSchema(faqs),
          generateAboutPageSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="About us"
          title="About Boston Cleaning Services"
          subtitle="We started Boston Cleaning Services because too many cleaning options in this city were either unreliable, anonymous, or priced by the hour with no ceiling. We wanted to run the company we would hire ourselves."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />
        <TrustStrip />

        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our story" title="Started with one van and a lot of Beacon Hill stairs" />
            </div>
            <div className="prose-body text-[1.05rem] leading-[1.75] text-ink/85 lg:col-span-7">
              <p>
                Our first year was spent almost entirely inside walk-ups: Beacon Hill brick, Back Bay brownstones, and
                the triple-deckers of Somerville and Jamaica Plain. Those buildings taught us how to work fast without
                cutting corners, how to protect old hardwood and original tile, and how to manage the logistics of a city
                where parking is a sport.
              </p>
              <p>
                As word spread, so did our map. Today our teams work from the Seaport to Newton Centre, in everything from
                400-square-foot studios to five-bedroom colonials. What has not changed is the way we staff the company.
                Every cleaner is an employee, trained by us, checked by us, and paid a living wage. We think that is why
                so many of our customers have kept the same cleaner for years.
              </p>
              <p>
                We are not a franchise and we are not a marketplace app. When you call, you reach a coordinator who knows
                the teams, the schedule, and probably your building. That is the version of a cleaning company we wanted to
                exist in Boston, so we built it.
              </p>
            </div>
          </div>
        </Section>

        <section className="bg-navy py-14 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-brick pl-5">
                <p className="font-display text-4xl font-semibold sm:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section tone="canvas">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four rules every team works by"
            intro="They are printed on the inside of every supply caddy. Customers notice when a company actually follows its own rules, so we keep them short."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-line bg-paper p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="seafoam">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our promise"
                title="What you can count on every single visit"
                intro="These are not aspirations. They are the operating standard, and if we fall short on any of them, we want to hear about it."
              />
            </div>
            <ul className="space-y-3 lg:col-span-7">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-lg bg-paper px-5 py-4 text-[0.95rem] text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brick" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="paper" narrow>
          <SectionHeading
            eyebrow="Transparency"
            title="See the checklist before you book"
            intro="We publish exactly what a routine, deep, and move clean includes, room by room. Most cleaning companies do not, and we think that tells you something."
            align="center"
          />
          <div className="text-center">
            <Link href="/checklist" className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-soft">
              View the cleaning checklist
            </Link>
          </div>
        </Section>

        <MapEmbed query="Boston, MA" title="Based in Boston, working across the metro" />

        <ServiceAreas title="Where our teams work" areas={allServiceAreas} />

        <FAQ title="About us questions" items={faqs} />

        <CTABand
          title="Want to see the difference for yourself?"
          description="Book a first clean at the standard rate. If you like it, move to a recurring plan and the discount applies from the next visit."
        />
      </PageShell>
    </>
  );
}
