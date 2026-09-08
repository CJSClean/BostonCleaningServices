import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ClockIcon, FacebookIcon, GoogleIcon, InstagramIcon, LinkedInIcon, MailIcon, NextdoorIcon, PhoneIcon, PinIcon, XIcon } from "@/components/ui/Icons";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_PROFILES } from "@/lib/constants";
import { services } from "@/lib/data/services";

export default function Footer() {
  return (
    <footer className="border-t-4 border-navy bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-12" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Locally run residential cleaning for Boston and the inner suburbs. Background-checked
              cleaners, transparent pricing, and a 100% satisfaction guarantee on every visit.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-ink hover:text-brick">
                  <PhoneIcon className="h-4 w-4 text-brick" /> {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-ink hover:text-brick">
                  <MailIcon className="h-4 w-4 text-brick" /> {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <ClockIcon className="h-4 w-4 text-brick" /> {SITE_CONFIG.hours}
              </li>
              {SITE_CONFIG.streetAddress && (
                <li className="flex items-start gap-2.5 text-muted">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brick" /> {SITE_CONFIG.addressLine}
                </li>
              )}
            </ul>
            {SITE_CONFIG.streetAddress && (
              <div className="mt-6 max-w-sm overflow-hidden rounded-xl border border-line">
                <iframe
                  src={`https://www.google.com/maps?cid=${SITE_CONFIG.googleMapsCid}&output=embed`}
                  title="Boston Cleaning Services on Google Maps"
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            )}
            {SOCIAL_PROFILES.length > 0 && (
              <ul className="mt-6 flex items-center gap-3">
                {SOCIAL_PROFILES.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Boston Cleaning Services on ${p.name === "x" ? "X" : p.name.charAt(0).toUpperCase() + p.name.slice(1)}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                    >
                      {p.name === "instagram" ? <InstagramIcon className="h-4 w-4" /> : p.name === "linkedin" ? <LinkedInIcon className="h-4 w-4" /> : p.name === "x" ? <XIcon className="h-4 w-4" /> : p.name === "nextdoor" ? <NextdoorIcon className="h-4 w-4" /> : p.name === "google" ? <GoogleIcon className="h-4 w-4" /> : <FacebookIcon className="h-4 w-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className="text-sm text-muted hover:text-brick">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/checklist" className="text-sm text-muted hover:text-brick">
                  Cleaning Checklist
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Service Areas</h3>
            <div className="mt-4 space-y-4">
              {NAV_LINKS.locationsByCounty.map((county) => (
                <div key={county.county}>
                  <Link href={county.href} className="text-sm font-semibold text-ink hover:text-brick">
                    {county.county}
                  </Link>
                  <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                    {county.cities.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="text-sm text-muted hover:text-brick">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.main.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-brick">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/preparing-for-your-cleaning" className="text-sm text-muted hover:text-brick">
                  Preparing for Your Cleaning
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted hover:text-brick">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted hover:text-brick">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <p>Licensed, insured, and bonded in the Commonwealth of Massachusetts.</p>
        </div>
      </div>
    </footer>
  );
}
