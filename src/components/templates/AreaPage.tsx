import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Neighborhoods from "@/components/sections/Neighborhoods";
import Frequencies from "@/components/sections/Frequencies";
import WhyChoose, { type Benefit } from "@/components/sections/WhyChoose";
import MapEmbed from "@/components/sections/MapEmbed";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ, { type FAQItem } from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { allServiceAreas } from "@/lib/data/locations";
import { generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema, SchemaScript } from "@/lib/schema";

export interface AreaPageContent {
  /** Display name, e.g. "Cambridge" or "Middlesex County" */
  name: string;
  path: string;
  /** Short key for service+location links; omit for county pages. */
  locationKey?: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  highlights: string[];
  introTitle: string;
  intro: string[];
  servicesTitle: string;
  servicesIntro: string;
  neighborhoodsTitle: string;
  neighborhoodsIntro: string;
  neighborhoods: string[];
  zipCodes?: string[];
  frequenciesTitle: string;
  frequenciesIntro: string;
  whyTitle: string;
  whyIntro?: string;
  benefits: Benefit[];
  mapQuery: string;
  mapTitle: string;
  testimonialFilter?: string;
  faqTitle: string;
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
  /** Areas served in schema */
  areaServed: string[];
  /** Optional override of the "other areas" list (county pages pass their towns). */
  relatedAreas?: { name: string; href: string }[];
  relatedTitle?: string;
}

export default function AreaPage({ c }: { c: AreaPageContent }) {
  return (
    <>
      <SchemaScript
        schema={[
          generateLocalBusinessSchema(c.areaServed),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/#areas" },
            { name: c.name, url: c.path },
          ]),
          generateFAQSchema(c.faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow={c.eyebrow}
          title={c.h1}
          subtitle={c.subtitle}
          highlights={c.highlights}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/#areas" },
            { name: c.name, href: c.path },
          ]}
        />
        <TrustStrip />
        <Prose eyebrow={`Cleaning in ${c.name}`} title={c.introTitle} paragraphs={c.intro} />
        {/*
          Area pages link to the canonical Boston service pages rather than
          per-city service pages. A city x service matrix reads as doorway
          content to search engines, so the city pages funnel into one set of
          service pages instead.
        */}
        <ServicesGrid title={c.servicesTitle} intro={c.servicesIntro} />
        <Neighborhoods title={c.neighborhoodsTitle} intro={c.neighborhoodsIntro} items={c.neighborhoods} zipCodes={c.zipCodes} />
        <Frequencies title={c.frequenciesTitle} intro={c.frequenciesIntro} />
        <WhyChoose title={c.whyTitle} intro={c.whyIntro} benefits={c.benefits} />
        <MapEmbed query={c.mapQuery} title={c.mapTitle} />
        <Testimonials areaFilter={c.testimonialFilter} tone="paper" />
        <FAQ title={c.faqTitle} items={c.faqs} tone="canvas" />
        <ServiceAreas
          title={c.relatedTitle ?? "Other areas we serve"}
          areas={c.relatedAreas ?? allServiceAreas.filter((a) => a.href !== c.path)}
          tone="navy"
        />
        <CTABand title={c.ctaTitle} description={c.ctaDescription} />
      </PageShell>
    </>
  );
}
