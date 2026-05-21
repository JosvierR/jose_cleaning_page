/**
 * Replace remote URLs with local files in /public/images when ready.
 * Keep filenames: hero-kitchen.jpg, dining-room.jpg, etc.
 */
export const images = {
  hero: {
    local: "/images/hero-kitchen.jpg",
    remote:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=2400&q=85&auto=format&fit=crop",
    alt: "Spotless commercial kitchen with stainless steel surfaces",
  },
  dining: {
    local: "/images/dining-room.jpg",
    remote:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=85&auto=format&fit=crop",
    alt: "Refined dining room prepared for service",
  },
  stainless: {
    local: "/images/stainless-detail.jpg",
    remote:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=2000&q=85&auto=format&fit=crop",
    alt: "Stainless steel prep surface detail",
  },
  restroom: {
    local: "/images/restroom-clean.jpg",
    remote:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=2000&q=85&auto=format&fit=crop",
    alt: "Clean restroom porcelain and fixtures",
  },
  floor: {
    local: "/images/floor-reflection.jpg",
    remote:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=85&auto=format&fit=crop",
    alt: "Polished commercial kitchen floor",
  },
  bakery: {
    local: "/images/bakery-counter.jpg",
    remote:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=2000&q=85&auto=format&fit=crop",
    alt: "Bakery counter and display",
  },
  beforeKitchen: {
    local: "/images/before-kitchen.jpg",
    remote:
      "https://images.unsplash.com/photo-1565538810644-b5bdb7cdfa9f?w=2000&q=85&auto=format&fit=crop",
    alt: "Kitchen before degreasing — placeholder",
  },
  afterKitchen: {
    local: "/images/after-kitchen.jpg",
    remote:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=2000&q=85&auto=format&fit=crop",
    alt: "Kitchen after degreasing — placeholder",
  },
} as const;

/** Use remote until local files exist in /public/images */
export function imageSrc(key: keyof typeof images): string {
  return images[key].remote;
}
