import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import { Section, SectionHeading } from "@/components/sections/Section";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTABand from "@/components/sections/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import { allServiceAreas } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateAboutPageSchema, generateBreadcrumbSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Boston Cleaning Services",
  description:
    "Meet Boston Cleaning Services: a locally run residential cleaning company with employee cleaners, flat pricing, and a 24-hour guarantee serving Boston and...",
  alternates: { canonical: `${SITE_URL}/about` },
};

const stats = [
  { value: "4,000+", label: "cleanings completed" },
  { value: "5.0", label: "average review rating" },
  { value: "24 hrs", label: "re-clean guarantee window" },
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
    title: "Say the price once",
    text: "Quotes are flat and given in writing before booking. Add-ons are priced up front. There is no upsell at the door.",
  },
  {
    title: "Own the mistake",
    text: "If we miss something, we come back and fix it within 24 hours at no charge. No forms, no arguing.",
  },
];

const promises = [
  "Background-checked, insured teams on every job",
  "Same lead cleaner for recurring customers whenever possible",
  "All equipment and supplies included, with a fragrance-free option",
  "A text when we arrive and a text when we finish",
  "A coordinator you can actually reach, seven days a week",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schema={[
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
          title="A small Boston company with a very specific standard"
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

        <CTABand
          title="Want to see the difference for yourself?"
          description="Book a first clean at the standard rate. If you like it, move to a recurring plan and the discount applies from the next visit."
        />
      </PageShell>
    </>
  );
}
