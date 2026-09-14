import { Instagram } from "lucide-react";
import { Button } from "./Button";

export const INSTAGRAM_URL = "https://www.instagram.com/pahadikeeda";

export function InstagramCTA() {
  return <section className="border-t border-hero-foreground/10 bg-primary py-16 text-primary-foreground sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Stay connected</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Follow The Adventure</h2><p className="mt-4 max-w-xl text-primary-foreground/70">See our latest treks, mountain moments and weekend adventures on Instagram.</p></div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Button variant="light" className="shrink-0"><Instagram size={18} /> Follow @pahadikeeda</Button></a></div></section>;
}