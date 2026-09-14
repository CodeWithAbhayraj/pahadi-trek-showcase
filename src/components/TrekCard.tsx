import { CalendarDays, Clock3, Gauge, MapPin, Ticket } from "lucide-react";
import type { Trek } from "@/data/treks";
import { Button } from "./Button";

export function TrekCard({ trek }: { trek: Trek }) {
  const handleBooking = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={trek.image} alt={`${trek.name} trekking landscape`} width={1400} height={1050} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm">{trek.difficulty}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-2xl font-bold text-foreground">{trek.name}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={15} className="text-primary" /> {trek.location}</p>
        <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{trek.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-4 text-sm">
          <span className="flex items-center gap-2 text-foreground/80"><CalendarDays size={16} className="text-primary" /> {trek.date}</span>
          <span className="flex items-center gap-2 text-foreground/80"><Clock3 size={16} className="text-primary" /> {trek.duration}</span>
          <span className="flex items-center gap-2 text-foreground/80"><Gauge size={16} className="text-primary" /> {trek.difficulty}</span>
          <span className="flex items-center gap-2 text-foreground/80"><Ticket size={16} className="text-primary" /> {trek.seats} seats</span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4"><div><span className="block text-xs text-muted-foreground">Price</span><strong className="text-base text-foreground">{trek.price}</strong></div><Button onClick={() => handleBooking(trek.googleFormUrl)} aria-label={`Book a seat for ${trek.name}`}>Book Seat</Button></div>
      </div>
    </article>
  );
}