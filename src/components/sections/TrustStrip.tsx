import { ShieldIcon, StarIcon, CheckIcon, ClockIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";

const items = [
  { icon: StarIcon, label: `${SITE_CONFIG.rating}-star rated`, sub: `${SITE_CONFIG.reviewCount} local reviews` },
  { icon: ShieldIcon, label: "Insured & bonded", sub: "Background-checked staff" },
  { icon: CheckIcon, label: "100% satisfaction", sub: "Guaranteed on every visit" },
  { icon: ClockIcon, label: "Same-week booking", sub: "Open 24/7, every day" },
];

export default function TrustStrip() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 px-3 py-4 first:pl-0 lg:px-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky text-navy">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-navy">{label}</span>
              <span className="block text-xs text-muted">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
