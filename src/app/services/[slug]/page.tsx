import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import WhatIncluded from "@/components/sections/WhatIncluded";
import PricingTable from "@/components/sections/PricingTable";
import WhenToBook from "@/components/sections/WhenToBook";
import Frequencies from "@/components/sections/Frequencies";
import WhyChoose from "@/components/sections/WhyChoose";
import Neighborhoods from "@/components/sections/Neighborhoods";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { locations } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { getAllServiceLocationSlugs, getServiceLocationData } from "@/lib/data/service-locations";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceLocationData(slug);
  if (!data) return { title: "Page not found" };
  return {
    title: data.copy.title,
    description: data.copy.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
  };
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getServiceLocationData(slug);
  if (!data) notFound();

  const { service, location, copy, shared } = data;
  const path = `/services/${slug}`;

  const otherLocations = locations
    .filter((l) => l.key !== location.key)
    .map((l) => ({ name: `${service.name} in ${l.name}`, href: `/services/${service.key}-${l.key}-ma` }));

  const otherServices = services
    .filter((s) => s.key !== service.key)
    .map((s) => ({ name: `${s.name} in ${location.name}`, href: `/services/${s.key}-${location.key}-ma` }));

  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: `${service.name} in ${location.name}`,
            description: copy.description,
            url: path,
            priceRange: service.priceRange,
            areaServed: `${location.name}, MA`,
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: service.name, url: service.href },
            { name: location.name, url: path },
          ]),
          generateFAQSchema(copy.faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow={`${service.name} in ${location.name}`}
          title={copy.h1}
          subtitle={copy.subtitle}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: service.name, href: service.href },
            { name: location.name, href: path },
          ]}
          defaultService={service.key}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title={copy.introTitle} paragraphs={copy.intro} />
        <WhatIncluded
          title={`What ${service.name.toLowerCase()} in ${location.name} includes`}
          sections={shared.included}
          notIncluded={shared.notIncluded}
        />
        <PricingTable title={shared.pricingTitle(location.name)} table={shared.pricing} defaultService={service.key} />
        <WhenToBook title={shared.scenariosTitle(location.name)} scenarios={shared.scenarios} />
        {shared.showFrequencies && (
          <Frequencies
            title={`Recurring ${service.name.toLowerCase()} in ${location.name}`}
            intro="Same team, standing slot, and a lower rate on every visit after the first."
          />
        )}
        <WhyChoose title={shared.benefitsTitle(location.name)} benefits={shared.benefits} />
        <Neighborhoods
          title={`${location.name} areas we cover`}
          items={location.neighborhoods}
          zipCodes={location.zipCodes}
          tone="canvas"
        />
        <Testimonials areaFilter={location.name} tone="paper" />
        <FAQ title={`${service.name} in ${location.name}: questions`} items={copy.faqs} tone="canvas" />
        <ServiceAreas title={`Other services in ${location.name}`} areas={otherServices} tone="paper" />
        <ServiceAreas title={`${service.name} in nearby areas`} areas={otherLocations} tone="navy" />
        <CTABand title={copy.ctaTitle} description={copy.ctaDescription} defaultService={service.key} />
      </PageShell>
    </>
  );
}
