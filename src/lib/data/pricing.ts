export interface PriceRow {
  label: string;
  detail?: string;
  values: string[];
}

export interface PriceTable {
  columns: string[];
  rows: PriceRow[];
  footnote: string;
}

export const housePricing: PriceTable = {
  columns: ["Home size", "Layout", "Routine clean", "Deep clean"],
  rows: [
    { label: "Compact", detail: "1-2 bed / 1 bath", values: ["$150 - $190", "$350 - $450"] },
    { label: "Mid-size", detail: "2-3 bed / 2 bath", values: ["$190 - $250", "$450 - $550"] },
    { label: "Large", detail: "3-4 bed / 2-3 bath", values: ["$250 - $320", "$550 - $650"] },
    { label: "Estate", detail: "4+ bed / 3+ bath", values: ["$320+", "$650+"] },
  ],
  footnote:
    "Recurring clients save 10 to 15 percent on every visit after the first. Quotes reflect the size and condition of the home and any add-ons you select.",
};

export const apartmentPricing: PriceTable = {
  columns: ["Unit", "Layout", "Routine clean", "Deep clean"],
  rows: [
    { label: "Studio", detail: "0 bed / 1 bath", values: ["$110 - $140", "$160 - $200"] },
    { label: "One bedroom", detail: "1 bed / 1 bath", values: ["$130 - $170", "$190 - $250"] },
    { label: "Two bedroom", detail: "2 bed / 1-2 bath", values: ["$170 - $220", "$250 - $320"] },
    { label: "Three bedroom+", detail: "3+ bed / 2+ bath", values: ["$220+", "$320+"] },
  ],
  footnote:
    "Walk-up buildings without elevators and units above the fourth floor may carry a small equipment surcharge. We confirm every price before booking.",
};

export const deepPricing: PriceTable = {
  columns: ["Property", "Layout", "Deep clean"],
  rows: [
    { label: "Studio or 1 bed apartment", detail: "0-1 bed / 1 bath", values: ["$200 - $280"] },
    { label: "2 bed apartment", detail: "2 bed / 1 bath", values: ["$280 - $380"] },
    { label: "Small house", detail: "2-3 bed / 1-2 bath", values: ["$350 - $450"] },
    { label: "Mid-size house", detail: "3-4 bed / 2 bath", values: ["$450 - $550"] },
    { label: "Large house", detail: "4+ bed / 3+ bath", values: ["$550 - $650+"] },
  ],
  footnote:
    "Homes that have not been professionally cleaned in more than a year, or that include pets, are quoted at the upper end of each range.",
};

export const movePricing: PriceTable = {
  columns: ["Unit", "Move-in or move-out clean"],
  rows: [
    { label: "Studio", values: ["$180 - $240"] },
    { label: "One bedroom", values: ["$220 - $300"] },
    { label: "Two bedroom", values: ["$280 - $380"] },
    { label: "Three bedroom+", values: ["$380 - $500+"] },
  ],
  footnote:
    "Pricing assumes an empty unit with working utilities. Cabinet and closet interiors are included; inside the oven and refrigerator are optional add-ons.",
};

export const constructionPricing: PriceTable = {
  columns: ["Project", "Estimate"],
  rows: [
    { label: "Bathroom renovation", values: ["$200 - $350"] },
    { label: "Kitchen remodel", values: ["$300 - $450"] },
    { label: "Whole-unit refresh (1 bed)", values: ["$450 - $650"] },
    { label: "Whole-unit refresh (2 bed)", values: ["$650 - $900"] },
    { label: "Whole-home renovation (3 bed+)", values: ["$900 - $1,200+"] },
  ],
  footnote:
    "Post-construction work is quoted per project after a quick photo review or walkthrough. Multi-phase cleans (rough, final, touch-up) are priced together.",
};
