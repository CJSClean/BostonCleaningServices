import { SITE_CONFIG, SITE_URL } from "./constants";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/logo.svg`;

function postalAddress() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.city,
    addressRegion: SITE_CONFIG.state,
    addressCountry: "US",
  };
  if (SITE_CONFIG.streetAddress) address.streetAddress = SITE_CONFIG.streetAddress;
  if (SITE_CONFIG.postalCode) address.postalCode = SITE_CONFIG.postalCode;
  return address;
}

const defaultAreas = [
  "Boston, MA",
  "Back Bay, Boston, MA",
  "Beacon Hill, Boston, MA",
  "Charlestown, Boston, MA",
  "Jamaica Plain, Boston, MA",
  "South Boston, MA",
  "South End, Boston, MA",
  "Cambridge, MA",
  "Somerville, MA",
  "Brookline, MA",
  "Newton, MA",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    logo: LOGO_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: postalAddress(),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function generateLocalBusinessSchema(areaServed?: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousekeepingService"],
    "@id": BUSINESS_ID,
    name: SITE_CONFIG.name,
    image: LOGO_URL,
    url: SITE_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", latitude: 42.3554, longitude: -71.0605 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    areaServed: (areaServed ?? defaultAreas).map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Cleaning Services",
      itemListElement: [
        "House Cleaning",
        "Apartment Cleaning",
        "Deep Cleaning",
        "Move In Cleaning",
        "Move Out Cleaning",
        "Post Construction Cleaning",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  priceRange,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed
      ? { "@type": "Place", name: areaServed }
      : { "@type": "City", name: "Boston, MA" },
    priceRange: priceRange ?? "$$",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD" },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_CONFIG.name}`,
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": ORG_ID },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_CONFIG.name}`,
    url: `${SITE_URL}/contact`,
    mainEntity: { "@id": BUSINESS_ID },
  };
}

export function generateHowToSchema(
  sections: { name: string; steps: string[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Room-by-Room Home Cleaning Checklist",
    description:
      "The checklist Boston Cleaning Services follows on routine, deep, and move-in or move-out cleanings.",
    step: sections.map((section) => ({
      "@type": "HowToSection",
      name: section.name,
      itemListElement: section.steps.map((text) => ({ "@type": "HowToStep", text })),
    })),
  };
}

export function SchemaScript({ schema }: { schema: object | object[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
