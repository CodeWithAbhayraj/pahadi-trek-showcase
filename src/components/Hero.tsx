import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/sahyadri-hero.jpg.asset.json";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-foreground pt-28 md:min-h-[820px] md:items-center">
      <img src={heroImage.url} alt="Trekkers walking along a sunlit Sahyadri mountain ridge" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
        <div className="max-w-3xl animate-rise">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-hero-foreground/80"><span className="h-px w-10 bg-hero-foreground/60" /> Weekend Treks · Maharashtra · Adventure Community</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.04] text-hero-foreground sm:text-6xl lg:text-8xl">Adventure starts where the road ends.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/80 sm:text-lg">Discover breathtaking trails, hidden landscapes and unforgettable weekend adventures with Pahadi Keeda.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#treks"><Button variant="light" className="w-full sm:w-auto">Explore Treks <ArrowDown size={17} /></Button></a>
            <a href="#treks"><Button className="w-full border border-hero-foreground/30 bg-transparent text-hero-foreground shadow-none hover:bg-hero-foreground/10 sm:w-auto">Book Your Adventure <ArrowUpRight size={17} /></Button></a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-5 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-hero-foreground/60 md:flex lg:right-8"><span>Scroll to explore</span><ArrowDown size={15} /></div>
    </section>
  );
}