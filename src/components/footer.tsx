import Link from "next/link";
import { brand, navLinks, legalDisclaimer } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pb-28 lg:pb-12">
      <div className="container-luxury section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl text-ivory">{brand.name}</p>
            <p className="mt-2 text-sm text-muted-text">{brand.location}</p>
            <div className="mt-6 space-y-1 text-sm text-muted-text">
              <p>
                <a
                  href={`tel:${brand.phone.replace(/\D/g, "")}`}
                  className="transition hover:text-champagne"
                >
                  {brand.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition hover:text-champagne"
                >
                  {brand.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-champagne">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-text transition hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-champagne">
              Areas served
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-text">
              <li>Bronx</li>
              <li>Manhattan (route-based)</li>
              <li>NYC food-service operators</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <p className="text-xs leading-relaxed text-muted-text">{legalDisclaimer}</p>

        <div className="mt-8 flex flex-col gap-4 text-xs text-muted-text sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.shortName}. All rights reserved.
          </p>
          <Link href="#" className="transition hover:text-ivory">
            Privacy Policy (placeholder)
          </Link>
        </div>
      </div>
    </footer>
  );
}
