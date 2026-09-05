import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  SchemaScript,
} from "@/lib/schema";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boston Cleaning Services | House & Apartment Cleaning in Boston, MA",
    template: "%s | Boston Cleaning Services",
  },
  description:
    "Boston Cleaning Services provides house cleaning, apartment cleaning, deep cleaning, and move-in/move-out cleaning across Boston, Cambridge, Somerville, Brookline, and Newton.",
  keywords: [
    "boston cleaning services",
    "cleaning services boston ma",
    "house cleaning boston",
    "apartment cleaning boston",
    "deep cleaning boston",
    "move out cleaning boston",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <SchemaScript schema={[generateOrganizationSchema(), generateWebsiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
