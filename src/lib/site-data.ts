export const brand = {
  name: "Maison Clean NYC",
  tagline: "Food-Safe Cleaning for Serious Restaurant Operators.",
  phone: "(718) 000-0000",
  email: "walkthrough@maisoncleannyc.com",
} as const;

export const navLinks = [
  { label: "The Standard", href: "#standard" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Materials", href: "#materials" },
] as const;

export const heroDetails = [
  "3-person crew",
  "2× weekly plans",
  "Materials included",
  "Photo checklist",
  "Bronx / NYC routes",
] as const;

export const editorialStatements = [
  "Clean before opening.",
  "Documented after every visit.",
  "Designed around your operation.",
] as const;

export const maisonStandard = [
  {
    id: "scope",
    title: "Scope",
    copy: "Every location receives a clear cleaning scope by area: kitchen, dining, restrooms, bar, floors, touchpoints, and trash zones.",
  },
  {
    id: "service",
    title: "Service",
    copy: "A trained 3-person crew follows the visit plan after hours or during the lowest-traffic window.",
  },
  {
    id: "materials",
    title: "Materials",
    copy: "Food-service appropriate products are restocked monthly and used according to label directions.",
  },
  {
    id: "proof",
    title: "Proof",
    copy: "Completed work can be documented with photos and checklist notes after each visit.",
  },
] as const;

export const services = [
  {
    id: "kitchen",
    title: "Commercial Kitchen Routine",
    copy: "Degreasing, stainless surfaces, prep tables, sinks, faucets, exterior equipment wipe-down, floor mopping, deck brushing where needed, and high-touch areas.",
    imageKey: "stainless" as const,
  },
  {
    id: "dining",
    title: "Dining Room Reset",
    copy: "Guest-facing surfaces, floors, under-table areas, doors, glass, mirrors, chairs, and visible touchpoints prepared before the next service.",
    imageKey: "dining" as const,
  },
  {
    id: "restroom",
    title: "Restroom Standard",
    copy: "Toilets, urinals, sinks, faucets, mirrors, floors, trash liners, odor control, and high-touch sanitizing.",
    imageKey: "restroom" as const,
  },
  {
    id: "bar",
    title: "Bar & Counter Areas",
    copy: "Bar tops, under-counter touchpoints, sinks, faucets, mats, exterior coolers, counters, glass, and service surfaces.",
    imageKey: "bakery" as const,
  },
  {
    id: "deep",
    title: "Deep Cleaning Add-ons",
    copy: "Heavy degreasing, first-time reset, post-event cleaning, post-construction cleaning, floor scrubbing, storefront cleaning, and opening preparation.",
    imageKey: "floor" as const,
  },
] as const;

export const serviceExclusion =
  "Standard recurring cleaning does not include hood exhaust systems, fire suppression systems, grease trap pumping, pest control, plumbing, electrical, or equipment repair. Specialized services must be handled by properly qualified vendors where required.";

export const beforeAfterGallery = [
  { title: "Kitchen floor degreasing", imageKey: "floor" as const },
  { title: "Stainless prep area", imageKey: "stainless" as const },
  { title: "Restroom reset", imageKey: "restroom" as const },
  { title: "Dining room finish", imageKey: "dining" as const },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Walkthrough",
    copy: "We review size, soil level, timing, access, problem areas, and priority zones.",
    imageKey: "hero" as const,
  },
  {
    step: "02",
    title: "Scope",
    copy: "We define exactly what is included and what is excluded.",
    imageKey: "stainless" as const,
  },
  {
    step: "03",
    title: "Schedule",
    copy: "We set a recurring rhythm around closing hours or low-traffic windows.",
    imageKey: "dining" as const,
  },
  {
    step: "04",
    title: "Service",
    copy: "The crew follows the checklist, area by area.",
    imageKey: "bakery" as const,
  },
  {
    step: "05",
    title: "Proof + Restock",
    copy: "Photos, checklist notes, and monthly material restock keep the operation consistent.",
    imageKey: "restroom" as const,
  },
] as const;

export const pricingPlans = [
  {
    id: "small",
    name: "Small Restaurant / Café",
    price: "$285",
    unit: "per visit",
    duration: "Approx. 3-hour visit",
    crew: "3-person crew",
    bestFor: "Best for bakeries, cafés, delis, and takeout restaurants.",
    includes: [
      "Kitchen routine",
      "Dining / counter reset",
      "Restroom cleaning",
      "Floors",
      "Trash liners",
      "Materials included",
      "Checklist",
      "Photo proof option",
    ],
  },
  {
    id: "large",
    name: "Large Restaurant",
    price: "$395",
    unit: "per visit",
    duration: "Approx. 4-hour visit",
    crew: "3-person crew",
    bestFor:
      "Best for larger restaurants, higher traffic spaces, and expanded kitchen/dining layouts.",
    includes: [
      "Expanded kitchen routine",
      "Dining / bar reset",
      "Restrooms",
      "Floors",
      "Trash areas",
      "Materials included",
      "Checklist",
      "Photo proof option",
    ],
    featured: true,
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    price: "Custom",
    unit: "quote",
    duration: "Scope-based",
    crew: "Multi-crew option",
    bestFor:
      "Best for heavy buildup, opening preparation, post-event, or first-time reset.",
    includes: [
      "Heavy degreasing",
      "Detailed exterior equipment cleaning",
      "Floor scrubbing",
      "High-touch sanitizing",
      "Multi-crew option",
    ],
  },
] as const;

export const materials = [
  "Commercial degreaser",
  "Food-contact sanitizer where appropriate",
  "Neutral floor cleaner",
  "Glass cleaner",
  "Nitrile gloves",
  "Microfiber towels",
  "Scrub pads",
  "Trash liners",
  "Paper towels",
  "Mop heads",
  "Spray bottles",
  "Wet floor signs",
] as const;

export const materialsCopy =
  "We use food-service appropriate products according to label directions. Surfaces are cleaned before sanitizing. Food-contact sanitizer is used only where appropriate and in accordance with product instructions.";

export const proofReport = {
  location: "Bronx Bistro — Sample",
  date: "Visit documentation",
  crew: "3-person crew",
  areas: ["Kitchen routine", "Dining reset", "Restrooms", "Floors", "Trash zones"],
  notes: "Checklist completed. Photo proof attached.",
  restock: "Monthly materials restocked",
  next: "Next visit scheduled",
} as const;

export const faqItems = [
  {
    q: "Do you clean after closing?",
    a: "Yes. Visits are scheduled around closing hours or the lowest-traffic window for your operation.",
  },
  {
    q: "Are materials included?",
    a: "Recurring plans include crew materials with monthly restock of degreasers, sanitizers, liners, and consumables.",
  },
  {
    q: "Do you use food-safe products?",
    a: "We use food-service appropriate products according to label directions. Surfaces are cleaned before sanitizing.",
  },
  {
    q: "Do you clean hood exhaust systems?",
    a: "Standard recurring service does not include hood exhaust systems, fire suppression systems, or grease trap pumping. These require specialized vendors where applicable.",
  },
  {
    q: "Can I get photos after every visit?",
    a: "Yes. Photo documentation and checklist notes can be provided after each visit.",
  },
  {
    q: "Do you offer twice-per-week cleaning?",
    a: "Yes. Many operators choose 2× weekly plans based on traffic and soil level.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing reflects crew time, location size, frequency, soil level, and exact scope — confirmed after walkthrough.",
  },
  {
    q: "Is sales tax included?",
    a: "Sales tax may apply in New York. Your quote will clarify tax treatment.",
  },
  {
    q: "Do you clean bakeries and cafés?",
    a: "Yes. Our small-restaurant plan is designed for bakeries, cafés, delis, and compact dining rooms.",
  },
  {
    q: "Do you service outside the Bronx?",
    a: "We are Bronx-based with NYC routes including Manhattan access when scheduling allows.",
  },
] as const;

export const businessTypes = [
  "Restaurant",
  "Bakery",
  "Café",
  "Bar",
  "Deli",
  "Ghost kitchen",
  "Catering kitchen",
  "Hotel food outlet",
  "Other",
] as const;

export const cleaningFrequencies = [
  "1× per week",
  "2× per week",
  "3× per week",
  "Custom",
] as const;

export const areaOptions = [
  "Kitchen",
  "Dining",
  "Restrooms",
  "Bar",
  "Floors",
  "Trash area",
  "Deep cleaning",
] as const;

export const legalNote =
  "Food-service appropriate products are used according to label directions. Standard recurring service does not include hood exhaust systems, fire suppression systems, grease trap pumping, pest control, plumbing, electrical, or equipment repair.";
