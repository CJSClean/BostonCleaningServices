import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";

interface ServiceAreasProps {
  title: string;
  intro?: string;
  areas: { name: string; href: string }[];
  tone?: "canvas" | "paper" | "sky" | "navy";
}

export default function ServiceAreas({ title, intro, areas, tone = "canvas" }: ServiceAreasProps) {
  const light = tone === "navy";
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Service areas" title={title} intro={intro} light={light} />
      <ul className="flex flex-wrap gap-2.5">
        {areas.map((a) => (
          <li key={a.href}>
            <Link
              href={a.href}
              className={`group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                light
                  ? "border-white/25 text-white hover:bg-white hover:text-navy"
                  : "border-line bg-paper text-ink hover:border-navy hover:text-navy"
              }`}
            >
              {a.name}
              <ArrowIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
