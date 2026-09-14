import hero from "@/assets/sahyadri-hero.jpg.asset.json";
import fortTrail from "@/assets/fort-trail.jpg.asset.json";
import sunrise from "@/assets/sunrise-hike.jpg.asset.json";
import lagoon from "@/assets/blue-lagoon.jpg.asset.json";
import community from "@/assets/community-trek.jpg.asset.json";
import aerial from "@/assets/fort-aerial.jpg.asset.json";

const images = [
  { src: fortTrail.url, alt: "Trekkers climbing ancient fort steps", className: "md:col-span-2 md:row-span-2" },
  { src: sunrise.url, alt: "Hiking group watching sunrise over mountain ridges", className: "" },
  { src: lagoon.url, alt: "Blue lagoon surrounded by green mountain cliffs", className: "" },
  { src: community.url, alt: "Friends hiking together in the Sahyadris", className: "" },
  { src: aerial.url, alt: "Aerial view of a hill fort in Maharashtra", className: "md:col-span-2" },
  { src: hero.url, alt: "Hikers crossing a sunlit mountain ridge", className: "" },
];

export function TrekGallery() {
  return <section className="bg-foreground py-section text-hero-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow text-accent-strong">On the trail</p><h2 className="section-title text-hero-foreground">Moments From The Trail</h2><p className="mt-3 text-hero-foreground/60">Every trek has a story.</p><div className="mt-12 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[250px]">{images.map((image, index) => <figure key={`${image.alt}-${index}`} className={`group overflow-hidden rounded-card bg-muted ${image.className}`}><img src={image.src} alt={image.alt} width={1400} height={1050} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100" /></figure>)}</div></div></section>;
}