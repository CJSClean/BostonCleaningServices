"use client";

import { useState } from "react";
import { checklist } from "@/lib/data/checklist";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";

type Col = "routine" | "deep" | "move";
const cols: { key: Col; label: string }[] = [
  { key: "routine", label: "Routine" },
  { key: "deep", label: "Deep" },
  { key: "move", label: "Move in / out" },
];

export default function ChecklistTable() {
  const [room, setRoom] = useState(checklist[0].room);
  const active = checklist.find((c) => c.room === room)!;

  return (
    <Section tone="canvas">
      <SectionHeading
        eyebrow="Room by room"
        title="Exactly what gets done on each type of visit"
        intro="Every cleaner works from this list. Pick a room to compare a routine visit, a deep clean, and a move-in or move-out clean."
      />
      <div className="mb-5 flex flex-wrap gap-2">
        {checklist.map((c) => (
          <button
            key={c.room}
            onClick={() => setRoom(c.room)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              c.room === room ? "border-navy bg-navy text-white" : "border-line bg-paper text-ink hover:border-navy"
            }`}
          >
            {c.room}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-line bg-paper">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-canvas">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-navy">{active.room} task</th>
              {cols.map((c) => (
                <th key={c.key} className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-navy">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {active.items.map((item) => (
              <tr key={item.task}>
                <td className="px-5 py-3 text-ink/85">{item.task}</td>
                {cols.map((c) => {
                  const v = item[c.key];
                  return (
                    <td key={c.key} className="px-4 py-3 text-center">
                      {v === true ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-brick" />
                      ) : v === "n/a" ? (
                        <span className="text-xs text-muted">n/a</span>
                      ) : (
                        <span className="text-muted/50">&mdash;</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-sm text-muted">
        <span className="font-semibold text-ink">Add-ons for any visit:</span> inside the oven, inside the refrigerator, interior windows on routine visits, and wall washing. Each is quoted as a set fee when you book.
      </p>
    </Section>
  );
}
