export const brand = {
  name: "Maison Clean NYC",
  shortName: "Maison Clean NYC",
  tagline: "Food-Safe Cleaning for Serious Restaurant Operators.",
  phone: "(718) 000-0000",
  email: "walkthrough@maisoncleannyc.com",
  location: "Bronx, NY — Serving NYC Food-Service Operators",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "The Standard", href: "#standard" },
  { label: "Materials", href: "#materials" },
  { label: "FAQ", href: "#faq" },
  { label: "Request Walkthrough", href: "#contact" },
] as const;

export const trustChips = [
  "Food-Safe Materials",
  "After-Hours Service",
  "Photo Proof",
  "Checklist-Based",
  "Bronx / NYC",
  "Materials Included",
] as const;

export const heroHighlights = [
  { label: "3-person crew", icon: "users" },
  { label: "2× weekly service", icon: "calendar" },
  { label: "Food-safe materials", icon: "shield" },
  { label: "Photo checklist", icon: "camera" },
  { label: "Bronx / NYC route", icon: "map" },
  { label: "Monthly restock", icon: "package" },
] as const;

export const heroChecklist = [
  "Kitchen degrease routine",
  "Dining reset complete",
  "Restroom sanitized",
  "Bar touchpoints wiped",
  "Floors mopped & signed",
  "Photo proof uploaded",
] as const;

export const problems = [
  {
    title: "Grease & buildup",
    description:
      "Commercial kitchens accumulate grease on equipment exteriors, prep tables, and floors faster than standard janitorial teams expect.",
    icon: "flame",
  },
  {
    title: "Guest-facing areas",
    description:
      "Dining rooms, glass, and touchpoints shape first impressions. Inconsistent cleaning erodes the premium experience guests expect.",
    icon: "sparkles",
  },
  {
    title: "Bathrooms & odor control",
    description:
      "Restroom condition directly affects reviews and repeat visits. Odor and wet floors are reputation risks, not minor details.",
    icon: "droplets",
  },
  {
    title: "Closing shift pressure",
    description:
      "Owners need a reliable after-hours system — not excuses — so the space is guest-ready before the next service.",
    icon: "clock",
  },
] as const;

export const services = [
  {
    id: "kitchen",
    title: "Commercial Kitchen Cleaning",
    description:
      "Recurring food-service kitchen routine built for prep lines, stainless surfaces, and high-soil zones.",
    items: [
      "Exterior equipment wipe-down",
      "Prep tables",
      "Stainless steel surfaces",
      "Sinks and faucets",
      "High-touch surfaces",
      "Degreasing",
      "Floor mopping / deck brushing",
      "Floor drains exterior area",
      "Trash area wipe-down",
    ],
  },
  {
    id: "dining",
    title: "Dining Area Cleaning",
    description:
      "Guest-facing reset for tables, floors, glass, and touchpoints between services.",
    items: [
      "Floors swept and mopped",
      "Tables and chairs moved/cleaned under",
      "Doors and touchpoints",
      "Glass and mirrors",
      "Light dusting",
      "Guest-facing surfaces",
    ],
  },
  {
    id: "restroom",
    title: "Restroom Cleaning",
    description:
      "Sanitized restrooms with odor control and high-touch disinfection.",
    items: [
      "Toilets and urinals",
      "Sinks and faucets",
      "Mirrors",
      "Floors",
      "Odor control",
      "Trash liners",
      "High-touch sanitizing",
    ],
  },
  {
    id: "bar",
    title: "Bar / Counter Area",
    description:
      "Bar tops, coolers, mats, and under-counter touchpoints cleaned to service standards.",
    items: [
      "Bar tops",
      "Sinks",
      "Faucets",
      "Coolers exterior",
      "Mats",
      "Glass/mirror surfaces",
      "Under-counter touchpoints",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning Add-ons",
    description:
      "Heavy resets for grease buildup, events, construction, and reopenings.",
    items: [
      "Heavy degreasing",
      "Floor machine scrub",
      "Post-event cleaning",
      "Post-construction cleaning",
      "Restaurant opening cleaning",
      "Exterior storefront cleaning",
    ],
  },
] as const;

export const serviceExclusion =
  "Hood exhaust systems, fire suppression systems, grease trap pumping, pest control, plumbing, electrical, and equipment repair are not included in standard recurring cleaning. These can be coordinated separately with approved vendors.";

export const beforeAfterItems = [
  {
    id: "kitchen-floor",
    title: "Kitchen floor degreasing",
    beforeLabel: "Before",
    afterLabel: "After",
    note: "Replace with real before/after photos after first service week.",
  },
  {
    id: "prep-area",
    title: "Stainless prep area",
    beforeLabel: "Before",
    afterLabel: "After",
    note: "Replace with real before/after photos after first service week.",
  },
  {
    id: "restroom",
    title: "Restroom reset",
    beforeLabel: "Before",
    afterLabel: "After",
    note: "Replace with real before/after photos after first service week.",
  },
  {
    id: "dining",
    title: "Dining room reset",
    beforeLabel: "Before",
    afterLabel: "After",
    note: "Replace with real before/after photos after first service week.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Walkthrough",
    description:
      "We inspect the space, timing, access, problem areas, and cleaning frequency.",
  },
  {
    step: 2,
    title: "Scope",
    description:
      "We define exactly what is included by area: kitchen, dining, restroom, bar, floors, trash, and touchpoints.",
  },
  {
    step: 3,
    title: "Service Schedule",
    description:
      "We build a recurring schedule around closing hours and low-traffic times.",
  },
  {
    step: 4,
    title: "Checklist Cleaning",
    description:
      "Our crew follows a location-specific checklist every visit.",
  },
  {
    step: 5,
    title: "Photo Proof + Monthly Restock",
    description:
      "We document completed work and keep monthly materials organized.",
  },
] as const;

export const pricingPlans = [
  {
    id: "small",
    name: "Small Restaurant / Café",
    price: "$285",
    priceNote: "per visit",
    description:
      "Best for bakeries, cafés, takeout spots, and small dining rooms.",
    features: [
      "3-person crew",
      "Approx. 3-hour visit",
      "Kitchen / dining / restroom routine",
      "Materials included",
      "Checklist",
      "Photo proof option",
    ],
    highlighted: false,
  },
  {
    id: "large",
    name: "Large Restaurant",
    price: "$395",
    priceNote: "per visit",
    description:
      "Best for larger kitchens, higher traffic, and more floor area.",
    features: [
      "3-person crew",
      "Approx. 4-hour visit",
      "Expanded kitchen/dining/restroom/bar scope",
      "Materials included",
      "Checklist",
      "Photo proof option",
    ],
    highlighted: true,
  },
  {
    id: "deep",
    name: "Deep Cleaning / Opening Cleaning",
    price: "Custom",
    priceNote: "quote",
    description:
      "Best for heavy grease, post-construction, reopening, or first-time reset.",
    features: [
      "Heavy degreasing",
      "Detailed equipment exterior cleaning",
      "Floor scrubbing",
      "High-touch sanitizing",
      "Optional multi-crew support",
    ],
    highlighted: false,
  },
] as const;

export const materials = [
  "Commercial degreaser",
  "Food-contact surface sanitizer when appropriate",
  "Neutral floor cleaner",
  "Glass cleaner",
  "Nitrile gloves",
  "Microfiber towels",
  "Scrub pads",
  "Trash liners",
  "Paper towels",
  "Spray bottles",
  "Wet floor signs",
  "Mop heads",
] as const;

export const materialsNotes = [
  "Food-service appropriate products used according to label directions.",
  "Food-contact sanitizer used only where appropriate and according to product instructions.",
  "Surfaces are cleaned before sanitizing.",
] as const;

export const metrics = [
  { value: 3, suffix: "", label: "Person crew per visit", prefix: "" },
  { value: 2, suffix: "×", label: "Weekly recurring plans", prefix: "" },
  { value: 30, suffix: "+", label: "Monthly service hours available", prefix: "" },
  { value: 100, suffix: "%", label: "Checklist-based visits", prefix: "" },
  { value: 1, suffix: "", label: "Bronx / NYC coverage focus", prefix: "" },
] as const;

export const industries = [
  { name: "Bakeries", icon: "croissant" },
  { name: "Cafés", icon: "coffee" },
  { name: "Bistros", icon: "utensils" },
  { name: "Takeout restaurants", icon: "shopping-bag" },
  { name: "Bars", icon: "wine" },
  { name: "Delis", icon: "sandwich" },
  { name: "Ghost kitchens", icon: "ghost" },
  { name: "Hotel food outlets", icon: "building" },
  { name: "Catering kitchens", icon: "chef-hat" },
] as const;

export const ownerConcerns = [
  {
    question: "Will the kitchen be ready before opening?",
    answer:
      "Our after-hours checklist targets prep lines, stainless, floors, and touchpoints so your team starts on a clean foundation.",
  },
  {
    question: "Will bathrooms smell clean?",
    answer:
      "Restroom routines include odor control, high-touch sanitizing, and floor care — not a quick wipe-down.",
  },
  {
    question: "Will the floors feel safe?",
    answer:
      "Degreasing and mopping protocols focus on slip-prone kitchen and dining floors with wet-floor signage when needed.",
  },
  {
    question: "Will I know the work was done?",
    answer:
      "Photo-verified checklists document completed tasks so owners have visibility without being on-site at midnight.",
  },
] as const;

export const faqItems = [
  {
    question: "Do you clean after closing?",
    answer:
      "Yes. We schedule recurring service around closing hours and low-traffic windows so crews can work without disrupting guests.",
  },
  {
    question: "Are materials included?",
    answer:
      "Standard plans include crew-supplied materials with a monthly restock system for degreasers, sanitizers, liners, and consumables.",
  },
  {
    question: "Do you use food-safe products?",
    answer:
      "We use food-service appropriate products according to label directions. Food-contact sanitizer is applied only where appropriate, after surfaces are cleaned.",
  },
  {
    question: "Do you clean hoods or fire suppression systems?",
    answer:
      "No. Hood exhaust, fire suppression, grease trap pumping, and similar specialized work require properly qualified vendors and are not part of standard recurring cleaning.",
  },
  {
    question: "Do you offer twice-per-week cleaning?",
    answer:
      "Yes. Many operators choose 2× weekly recurring plans based on traffic, kitchen soil level, and restroom usage.",
  },
  {
    question: "Can I get photos after each visit?",
    answer:
      "Yes. Photo documentation can be included so you see exactly what was completed on your location-specific checklist.",
  },
  {
    question: "Is pricing fixed?",
    answer:
      "Starting prices are guides. Final pricing depends on size, soil level, access, frequency, and exact scope confirmed during your walkthrough.",
  },
  {
    question: "Is sales tax included?",
    answer:
      "Sales tax may apply in New York. Your quote will clarify tax treatment based on service classification.",
  },
  {
    question: "Do you service only the Bronx?",
    answer:
      "We are Bronx-based and serve NYC food-service operators including Manhattan, with scheduling based on route efficiency.",
  },
  {
    question: "Can you clean bakeries and cafés?",
    answer:
      "Yes. Our small-restaurant plan is designed for bakeries, cafés, takeout counters, and compact dining rooms.",
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
  "Trash Area",
  "Deep Cleaning",
] as const;

export const legalDisclaimer =
  "Standard recurring cleaning does not include hood exhaust systems, fire suppression systems, grease trap pumping, pest control, plumbing, electrical, or equipment repair. Specialized services must be handled by properly qualified vendors where required.";

export const seo = {
  title: "Restaurant Cleaning Bronx NYC | Maison Clean NYC",
  description:
    "Premium recurring restaurant cleaning in Bronx and NYC for bakeries, cafés, bars, and commercial kitchens. Food-service appropriate materials, after-hours service, photo-verified checklists, and clear pricing.",
  keywords: [
    "restaurant cleaning Bronx",
    "restaurant cleaning NYC",
    "bakery cleaning Bronx",
    "food-safe cleaning NYC",
    "commercial cleaning Bronx",
    "after-hours restaurant cleaning",
  ],
  ogTitle: "Maison Clean NYC | Premium Food-Service Cleaning NYC",
  ogDescription:
    "Recurring restaurant cleaning for Bronx & NYC operators. Food-service appropriate materials, after-hours crews, photo-verified checklists, and clear pricing.",
} as const;
