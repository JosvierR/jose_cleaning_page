import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { SpotlightProvider } from "@/components/providers/spotlight-provider";
import { seo } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#050505] font-sans text-ivory antialiased`}
      >
        <LenisProvider>
          <SpotlightProvider />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
