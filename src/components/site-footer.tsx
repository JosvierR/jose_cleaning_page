import Link from "next/link";
import { brand, legalNote, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient text-porcelain">
      <div className="container-maison section-pad !pb-36 lg:!pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-editorial text-3xl md:text-4xl">{brand.name}</p>
            <p className="mt-5 text-sm leading-relaxed text-porcelain/55">
              Restaurant Cleaning for Bronx / NYC Operators
            </p>
            <div className="mt-10 space-y-2 text-sm text-porcelain/50">
              <a
                href={`tel:${brand.phone.replace(/\D/g, "")}`}
                className="block transition hover:text-porcelain"
              >
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="block transition hover:text-porcelain"
              >
                {brand.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="label-maison !text-porcelain/35">Navigate</p>
            <ul className="mt-8 space-y-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-porcelain/60 transition hover:text-porcelain"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-porcelain/60 transition hover:text-porcelain"
                >
                  Request Walkthrough
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label-maison !text-porcelain/35">Areas served</p>
            <p className="mt-8 text-sm leading-[1.85] text-porcelain/52">
              Bronx, Jerome Avenue, Tremont Avenue, and NYC food-service routes
              including selective Manhattan access.
            </p>
            <Link
              href="#contact"
              className="btn-primary-maison mt-10 inline-flex !border-porcelain !bg-porcelain !text-navy"
            >
              Request Walkthrough
            </Link>
          </div>
        </div>

        <div className="line-champagne my-16 opacity-30" />
        <p className="max-w-3xl text-xs leading-[1.85] text-porcelain/42">{legalNote}</p>
        <div className="mt-10 flex flex-col gap-4 text-xs text-porcelain/38 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <Link href="#" className="transition hover:text-porcelain/70">
            Privacy (placeholder)
          </Link>
        </div>
      </div>
    </footer>
  );
}
