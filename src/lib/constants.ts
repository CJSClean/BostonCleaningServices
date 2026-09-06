export const SITE_URL = "https://bostoncleaningservices.com";

export const SITE_CONFIG = {
  name: "Boston Cleaning Services",
  legalName: "Boston Cleaning Services",
  tagline: "House and apartment cleaning across Greater Boston",
  phone: "(857) 356-4857",
  phoneHref: "tel:+18573564857",
  email: "contact@bostoncleaningservices.com",
  // Leave streetAddress empty to omit the address from schema and the footer.
  streetAddress: "233 Harvard St Suite 237",
  city: "Brookline",
  state: "MA",
  postalCode: "02446",
  addressLine: "233 Harvard St Suite 237, Brookline, MA 02446",
  hours: "Open 24/7, every day of the year",
  hoursShort: "Open 24/7",
  rating: "5.0",
  reviewCount: "300+",
};

// Only entries that are full URLs are rendered in the footer and schema.
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/bostoncleaningservices1/",
  facebook: "https://www.facebook.com/profile.php?id=61593781965617",
  linkedin: "https://www.linkedin.com/company/bostoncleaningservices/",
  google: "",
  yelp: "",
};

export const SOCIAL_PROFILES = Object.entries(SOCIAL_LINKS)
  .filter(([, url]) => url.startsWith("http"))
  .map(([name, url]) => ({ name, url }));

export const NAV_LINKS = {
  services: [
    { name: "House Cleaning", href: "/services/house-cleaning-boston-ma" },
    { name: "Apartment Cleaning", href: "/services/apartment-cleaning-boston-ma" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning-boston-ma" },
    { name: "Move In Cleaning", href: "/services/move-in-cleaning-boston-ma" },
    { name: "Move Out Cleaning", href: "/services/move-out-cleaning-boston-ma" },
    { name: "Post Construction Cleaning", href: "/services/post-construction-cleaning-boston-ma" },
  ],
  locationsByCounty: [
    {
      county: "Suffolk County",
      href: "/service-areas/suffolk-county-ma",
      cities: [
        { name: "Boston", href: "/" },
        { name: "Back Bay", href: "/service-areas/cleaning-services-back-bay-ma" },
        { name: "Beacon Hill", href: "/service-areas/cleaning-services-beacon-hill-ma" },
        { name: "Charlestown", href: "/service-areas/cleaning-services-charlestown-ma" },
        { name: "Jamaica Plain", href: "/service-areas/cleaning-services-jamaica-plain-ma" },
        { name: "South Boston", href: "/service-areas/cleaning-services-south-boston-ma" },
        { name: "South End", href: "/service-areas/cleaning-services-south-end-ma" },
      ],
    },
    {
      county: "Middlesex County",
      href: "/service-areas/middlesex-county-ma",
      cities: [
        { name: "Cambridge", href: "/service-areas/cleaning-services-cambridge-ma" },
        { name: "Somerville", href: "/service-areas/cleaning-services-somerville-ma" },
      ],
    },
    {
      county: "Norfolk County",
      href: "/service-areas/norfolk-county-ma",
      cities: [
        { name: "Brookline", href: "/service-areas/cleaning-services-brookline-ma" },
        { name: "Newton", href: "/service-areas/cleaning-services-newton-ma" },
      ],
    },
  ],
  main: [
    { name: "Checklist", href: "/checklist" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};
