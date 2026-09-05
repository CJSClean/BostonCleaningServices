export type ServiceIcon =
  | "house"
  | "apartment"
  | "deep"
  | "move-in"
  | "move-out"
  | "construction";

export interface Service {
  slug: string; // full page slug, e.g. house-cleaning-boston-ma
  key: string; // short key used in service+location slugs, e.g. house-cleaning
  name: string;
  shortDescription: string;
  icon: ServiceIcon;
  href: string;
  priceRange: string;
  startingAt: string;
}

export const services: Service[] = [
  {
    slug: "house-cleaning-boston-ma",
    key: "house-cleaning",
    name: "House Cleaning",
    shortDescription:
      "Recurring cleaning for single-family homes, townhouses, and condos on a weekly, biweekly, or monthly rhythm that keeps every room ready for company.",
    icon: "house",
    href: "/services/house-cleaning-boston-ma",
    priceRange: "$150 - $650+",
    startingAt: "$150",
  },
  {
    slug: "apartment-cleaning-boston-ma",
    key: "apartment-cleaning",
    name: "Apartment Cleaning",
    shortDescription:
      "Efficient cleaning built for studios, one-beds, and multi-bedroom units in walk-ups, triple-deckers, and elevator buildings across the city.",
    icon: "apartment",
    href: "/services/apartment-cleaning-boston-ma",
    priceRange: "$110 - $320+",
    startingAt: "$110",
  },
  {
    slug: "deep-cleaning-boston-ma",
    key: "deep-cleaning",
    name: "Deep Cleaning",
    shortDescription:
      "A top-to-bottom reset that reaches baseboards, vent covers, cabinet fronts, and the grime behind and under everything a routine visit skips.",
    icon: "deep",
    href: "/services/deep-cleaning-boston-ma",
    priceRange: "$200 - $650+",
    startingAt: "$200",
  },
  {
    slug: "move-in-cleaning-boston-ma",
    key: "move-in-cleaning",
    name: "Move In Cleaning",
    shortDescription:
      "Empty-home cleaning that sanitizes cabinets, closets, appliances, and floors before your boxes arrive, so day one in your new place starts fresh.",
    icon: "move-in",
    href: "/services/move-in-cleaning-boston-ma",
    priceRange: "$180 - $500+",
    startingAt: "$180",
  },
  {
    slug: "move-out-cleaning-boston-ma",
    key: "move-out-cleaning",
    name: "Move Out Cleaning",
    shortDescription:
      "Lease-end cleaning aimed squarely at the landlord walkthrough, covering inside appliances, cabinets, closets, and every fixture on the inspection sheet.",
    icon: "move-out",
    href: "/services/move-out-cleaning-boston-ma",
    priceRange: "$180 - $500+",
    startingAt: "$180",
  },
  {
    slug: "post-construction-cleaning-boston-ma",
    key: "post-construction-cleaning",
    name: "Post Construction Cleaning",
    shortDescription:
      "Multi-pass cleanup after renovations that removes drywall dust, adhesive, paint specks, and debris so a finished project actually looks finished.",
    icon: "construction",
    href: "/services/post-construction-cleaning-boston-ma",
    priceRange: "$300 - $1,000+",
    startingAt: "$300",
  },
];

export function getServiceByKey(key: string): Service | undefined {
  return services.find((s) => s.key === key);
}
