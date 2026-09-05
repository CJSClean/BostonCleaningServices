import QuoteButton from "@/components/ui/QuoteButton";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";

interface CTABandProps {
  title: string;
  description: string;
  defaultService?: string;
}

export default function CTABand({ title, description, defaultService }: CTABandProps) {
  return (
    <section className="chart-pattern bg-navy-deep py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
          <QuoteButton defaultService={defaultService} />
          <ButtonLink href={SITE_CONFIG.phoneHref} variant="ghost-light">
            <PhoneIcon className="h-4 w-4" /> {SITE_CONFIG.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
