import type { Metadata } from "next";

export const siteSeo = {
  title: "Restaurant Cleaning Bronx NYC | Maison Clean NYC",
  description:
    "Premium recurring restaurant cleaning in Bronx and NYC for bakeries, cafés, bars, and commercial kitchens. Food-service appropriate materials, after-hours service, photo-verified checklists, and clear pricing.",
  keywords: [
    "restaurant cleaning Bronx",
    "restaurant cleaning NYC",
    "commercial kitchen cleaning Bronx",
    "bakery cleaning Bronx",
    "food safe cleaning NYC",
    "after hours restaurant cleaning",
    "commercial cleaning Bronx",
  ],
  ogTitle: "Maison Clean NYC | Premium Restaurant Cleaning",
  ogDescription:
    "Guest-ready before the next service. Recurring food-service cleaning for Bronx & NYC operators.",
} as const;

export const metadata: Metadata = {
  title: siteSeo.title,
  description: siteSeo.description,
  keywords: [...siteSeo.keywords],
  openGraph: {
    title: siteSeo.ogTitle,
    description: siteSeo.ogDescription,
    type: "website",
    locale: "en_US",
    siteName: "Maison Clean NYC",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.ogTitle,
    description: siteSeo.ogDescription,
  },
  robots: { index: true, follow: true },
};
