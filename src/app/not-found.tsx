import PageShell from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center bg-canvas py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">That page has been swept away</h1>
          <p className="mt-4 text-lg text-muted">
            The link may be outdated or mistyped. Head back to the home page or jump to our services.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="navy">Home</ButtonLink>
            <ButtonLink href="/services/house-cleaning-boston-ma" variant="outline">House cleaning</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
