import type { PriceTable } from "@/lib/data/pricing";
import { Section, SectionHeading } from "./Section";
import QuoteButton from "@/components/ui/QuoteButton";

interface PricingProps {
  title: string;
  intro?: string;
  table: PriceTable;
  tone?: "canvas" | "paper" | "sky";
  defaultService?: string;
}

export default function PricingTable({ title, intro, table, tone = "canvas", defaultService }: PricingProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Transparent pricing" title={title} intro={intro} />
      <div className="overflow-x-auto rounded-xl border border-line bg-paper">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              {table.columns.map((c) => (
                <th key={c} className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {table.rows.map((r) => (
              <tr key={r.label} className="hover:bg-canvas">
                <td className="px-5 py-4 font-semibold text-navy">{r.label}</td>
                {r.detail !== undefined && <td className="px-5 py-4 text-muted">{r.detail}</td>}
                {r.values.map((v, i) => (
                  <td key={i} className="px-5 py-4 font-medium text-ink">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm text-muted">{table.footnote}</p>
        <QuoteButton label="Get an exact price" defaultService={defaultService} />
      </div>
    </Section>
  );
}
