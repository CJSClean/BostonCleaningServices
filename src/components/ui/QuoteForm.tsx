"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

const CITIES = [
  "Boston",
  "Back Bay",
  "Beacon Hill",
  "Charlestown",
  "Jamaica Plain",
  "South Boston",
  "South End",
  "Brookline",
  "Cambridge",
  "Somerville",
  "Newton",
  "Other",
];

const SERVICES = [
  "Standard House Cleaning",
  "Apartment Cleaning",
  "Deep Cleaning",
  "Move-In Cleaning",
  "Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Recurring Service",
];

const SOURCES = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Nextdoor",
  "Thumbtack",
  "Yelp",
  "Reddit",
  "Friend / Family Referral",
  "Other",
];

/** Digits in, "(404) 555-1234" out. */
function formatPhone(digits: string) {
  const d = digits.slice(0, 10);
  if (d.length === 0) return "";
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const fieldClass =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-2 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-navy";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-muted";

export default function QuoteForm({
  compact = false,
  defaultService = "",
  onSuccess,
}: {
  compact?: boolean;
  defaultService?: string;
  /** Called instead of navigating to /success — used by the modal to swap in its own confirmation. */
  onSuccess?: () => void;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneDigits, setPhoneDigits] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const phoneValid = phoneDigits.length === 10;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhoneTouched(true);
    if (!phoneValid) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("form-name", "quote");
    // Keep a combined name so older submissions and the CRM stay consistent.
    data.append(
      "name",
      `${String(data.get("first_name") || "").trim()} ${String(data.get("last_name") || "").trim()}`.trim()
    );
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setPhoneDigits("");
      if (onSuccess) {
        onSuccess();
        setSubmitting(false);
      } else {
        router.push("/success");
      }
    } catch {
      setError("Something went wrong sending that. Please try again, or email us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={compact ? "space-y-3.5" : "space-y-4"}
    >
      <p className="hidden">
        <label>
          Skip this field if you are human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="q-first">
            First Name
          </label>
          <input
            id="q-first"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
            className={fieldClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="q-last">
            Last Name
          </label>
          <input
            id="q-last"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
            className={fieldClass}
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="q-phone">
          Phone Number
        </label>
        <input
          id="q-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required
          value={formatPhone(phoneDigits)}
          onChange={(e) => setPhoneDigits(e.target.value.replace(/\D/g, "").slice(0, 10))}
          onBlur={() => setPhoneTouched(true)}
          aria-invalid={phoneTouched && !phoneValid}
          className={fieldClass}
          placeholder="(617) 555-1234"
        />
        {phoneTouched && !phoneValid && (
          <p className="mt-1 text-xs text-brick">Enter a 10-digit phone number.</p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="q-email">
          Email Address
        </label>
        <input
          id="q-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="q-city">
            City
          </label>
          <select id="q-city" name="city" required className={fieldClass} defaultValue="">
            <option value="">Select your city</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="q-service">
            Service Type
          </label>
          <select
            id="q-service"
            name="service"
            required
            className={fieldClass}
            defaultValue={defaultService}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="q-source">
          How did you find us? <span className="font-normal normal-case tracking-normal text-muted/70">(optional)</span>
        </label>
        <select id="q-source" name="source" className={fieldClass} defaultValue="">
          <option value="">Select…</option>
          {SOURCES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-brick">{error}</p>}

      <p className="text-xs leading-relaxed text-muted">
        By submitting this form, you agree to our{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-ink">
          Terms and Conditions
        </Link>{" "}
        and consent to receive calls and texts from Boston Cleaning Services.
      </p>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Get a Quote"}
      </Button>
    </form>
  );
}
