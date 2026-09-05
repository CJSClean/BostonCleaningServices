// The room-by-room cleaning checklist. Task lists are operational and shared
// across all service pages; the surrounding copy on each page is unique.

export interface ChecklistItem {
  task: string;
  routine: boolean;
  deep: boolean;
  move: boolean | "n/a";
}

export interface ChecklistRoom {
  room: string;
  items: ChecklistItem[];
}

export const checklist: ChecklistRoom[] = [
  {
    room: "Kitchen",
    items: [
      { task: "Remove cobwebs", routine: true, deep: true, move: true },
      { task: "Dust light fixtures", routine: true, deep: true, move: true },
      { task: "Dust windowsills, window frames, and ledges", routine: true, deep: true, move: true },
      { task: "Dust blinds", routine: true, deep: true, move: true },
      { task: "Dust ceiling fans", routine: true, deep: true, move: true },
      { task: "Dry dust decor and picture frames", routine: true, deep: true, move: true },
      { task: "Clean and dry sink and soap dish", routine: true, deep: true, move: true },
      { task: "Clean countertops and backsplash", routine: true, deep: true, move: true },
      { task: "Clean microwave inside and out", routine: true, deep: true, move: true },
      { task: "Clean stovetop, burners, and control panels", routine: true, deep: true, move: true },
      { task: "Clean exteriors of fridge, oven, and dishwasher", routine: true, deep: true, move: true },
      { task: "Clean stationary small appliances", routine: true, deep: true, move: true },
      { task: "Wipe down table and chairs", routine: true, deep: true, move: "n/a" },
      { task: "Clean light switches and doorknobs", routine: true, deep: true, move: true },
      { task: "Spot clean cabinet fronts and handles", routine: true, deep: true, move: true },
      { task: "Empty trash and wipe down can", routine: true, deep: true, move: true },
      { task: "Sweep, vacuum, and mop floors", routine: true, deep: true, move: true },
      { task: "Clean range hood and vent", routine: false, deep: true, move: true },
      { task: "Wipe down exteriors of all cabinets and drawers", routine: false, deep: true, move: true },
      { task: "Wipe down doors and door frames", routine: false, deep: true, move: true },
      { task: "Dust and wipe baseboards", routine: false, deep: true, move: true },
      { task: "Clean pantry floor and shelves", routine: false, deep: false, move: true },
      { task: "Wipe insides of cabinets and drawers", routine: false, deep: false, move: true },
      { task: "Clean inside oven", routine: false, deep: false, move: true },
      { task: "Clean inside refrigerator", routine: false, deep: false, move: true },
    ],
  },
  {
    room: "Bathrooms",
    items: [
      { task: "Remove cobwebs", routine: true, deep: true, move: true },
      { task: "Dust light fixtures and shelves", routine: true, deep: true, move: true },
      { task: "Dust doors, windowsills, and window frames", routine: true, deep: true, move: true },
      { task: "Dust blinds", routine: true, deep: true, move: true },
      { task: "Tidy personal items and hand towels", routine: true, deep: true, move: "n/a" },
      { task: "Clean and dry shower and tub", routine: true, deep: true, move: true },
      { task: "Clean and dry sink, counter, and soap dish", routine: true, deep: true, move: true },
      { task: "Clean mirrors and glass", routine: true, deep: true, move: true },
      { task: "Polish towel bars and paper holder", routine: true, deep: true, move: true },
      { task: "Clean toilet inside, outside, and behind", routine: true, deep: true, move: true },
      { task: "Clean light switches and doorknobs", routine: true, deep: true, move: true },
      { task: "Wipe and disinfect cabinet fronts", routine: true, deep: true, move: true },
      { task: "Sweep, vacuum, and mop floors", routine: true, deep: true, move: true },
      { task: "Empty trash and replace liner", routine: true, deep: true, move: true },
      { task: "Scrub grout lines and shower door tracks", routine: false, deep: true, move: true },
      { task: "Wipe down doors and door frames", routine: false, deep: true, move: true },
      { task: "Dust and wipe baseboards", routine: false, deep: true, move: true },
      { task: "Clean exhaust fan cover", routine: false, deep: true, move: true },
      { task: "Wipe insides of cabinets and drawers", routine: false, deep: false, move: true },
    ],
  },
  {
    room: "Bedrooms",
    items: [
      { task: "Remove cobwebs", routine: true, deep: true, move: true },
      { task: "Dust light fixtures and ceiling fans", routine: true, deep: true, move: true },
      { task: "Dust windowsills, frames, and blinds", routine: true, deep: true, move: true },
      { task: "Dust furniture, shelves, and decor", routine: true, deep: true, move: "n/a" },
      { task: "Make beds and straighten linens", routine: true, deep: true, move: "n/a" },
      { task: "Clean mirrors", routine: true, deep: true, move: true },
      { task: "Clean light switches and doorknobs", routine: true, deep: true, move: true },
      { task: "Empty trash", routine: true, deep: true, move: true },
      { task: "Vacuum carpets and rugs", routine: true, deep: true, move: true },
      { task: "Sweep and mop hard floors", routine: true, deep: true, move: true },
      { task: "Vacuum under beds and behind furniture", routine: false, deep: true, move: true },
      { task: "Wipe down doors and door frames", routine: false, deep: true, move: true },
      { task: "Dust and wipe baseboards", routine: false, deep: true, move: true },
      { task: "Wipe closet shelves and rods", routine: false, deep: false, move: true },
    ],
  },
  {
    room: "Living Areas & Hallways",
    items: [
      { task: "Remove cobwebs", routine: true, deep: true, move: true },
      { task: "Dust light fixtures and ceiling fans", routine: true, deep: true, move: true },
      { task: "Dust windowsills, frames, and blinds", routine: true, deep: true, move: true },
      { task: "Dust furniture, electronics, and decor", routine: true, deep: true, move: "n/a" },
      { task: "Fluff cushions and fold throws", routine: true, deep: true, move: "n/a" },
      { task: "Clean glass tabletops and mirrors", routine: true, deep: true, move: true },
      { task: "Clean light switches and doorknobs", routine: true, deep: true, move: true },
      { task: "Vacuum upholstery surfaces", routine: true, deep: true, move: "n/a" },
      { task: "Vacuum carpets and rugs", routine: true, deep: true, move: true },
      { task: "Sweep and mop hard floors", routine: true, deep: true, move: true },
      { task: "Wipe stair railings and banisters", routine: true, deep: true, move: true },
      { task: "Vacuum under and behind furniture", routine: false, deep: true, move: true },
      { task: "Wipe down doors and door frames", routine: false, deep: true, move: true },
      { task: "Dust and wipe baseboards", routine: false, deep: true, move: true },
      { task: "Wipe vent covers and radiators", routine: false, deep: true, move: true },
      { task: "Clean interior window glass", routine: false, deep: true, move: true },
      { task: "Wipe entry closet shelves", routine: false, deep: false, move: true },
    ],
  },
];

export interface IncludedSection {
  title: string;
  items: string[];
}

function pick(room: string, filter: (i: ChecklistItem) => boolean): IncludedSection {
  const r = checklist.find((c) => c.room === room)!;
  return { title: room, items: r.items.filter(filter).map((i) => i.task) };
}

export const routineIncluded: IncludedSection[] = checklist.map((c) =>
  pick(c.room, (i) => i.routine)
);

export const deepIncluded: IncludedSection[] = checklist.map((c) =>
  pick(c.room, (i) => i.deep)
);

export const moveIncluded: IncludedSection[] = checklist.map((c) =>
  pick(c.room, (i) => i.move === true)
);

export const constructionIncluded: IncludedSection[] = [
  {
    title: "Dust Removal",
    items: [
      "HEPA vacuum all floors, including edges and corners",
      "Wipe walls, ceilings, and trim to remove drywall dust",
      "Clean inside and on top of cabinets and closets",
      "Dust and wipe all light fixtures and fans",
      "Clean vent covers and HVAC registers",
      "Wipe window frames, sills, and tracks",
    ],
  },
  {
    title: "Surfaces & Fixtures",
    items: [
      "Remove paint specks, adhesive, and grout haze",
      "Peel protective film from appliances and fixtures",
      "Polish faucets, handles, and hardware",
      "Clean and sanitize countertops and backsplashes",
      "Clean tubs, showers, toilets, and sinks",
      "Wipe down doors, frames, and switch plates",
    ],
  },
  {
    title: "Glass & Floors",
    items: [
      "Clean interior window glass and mirrors",
      "Remove stickers and labels from glass",
      "Damp mop hard floors after vacuuming",
      "Spot treat scuffs and residue on flooring",
      "Vacuum and detail stairs and landings",
    ],
  },
  {
    title: "Final Pass",
    items: [
      "Second-pass dusting after settled particles",
      "Bag and stage light debris for disposal",
      "Final walkthrough with the homeowner or contractor",
      "Touch-up visit available after punch-list work",
    ],
  },
];

export const notIncludedInRoutine = [
  "Inside oven",
  "Inside refrigerator",
  "Inside cabinets and drawers",
  "Interior windows",
  "Baseboards (detail wipe)",
  "Walls and ceilings",
  "Laundry and dishes",
  "Exterior areas and garages",
  "Biohazards and pest cleanup",
];
