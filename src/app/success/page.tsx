import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center bg-canvas py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-seafoam text-navy">
            <CheckIcon className="h-10 w-10" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">We have your request</h1>
          <p className="mt-4 text-lg text-muted">
            A coordinator will call or text you with an upfront quote and available times, usually within the hour during
            operating hours. Need something sooner? Call {SITE_CONFIG.phone}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="navy">Back to home</ButtonLink>
            <ButtonLink href="/checklist" variant="outline">See the checklist</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
