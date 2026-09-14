import { treks } from "@/data/treks";
import { TrekCard } from "./TrekCard";

export function TrekSection() {
  return <section id="treks" className="scroll-mt-20 bg-background py-section"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="eyebrow">Find your trail</p><h2 className="section-title">Explore Our Treks</h2><p className="section-copy">Choose your next adventure and join us on the trail.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{treks.map((trek) => <TrekCard key={trek.id} trek={trek} />)}</div></div></section>;
}