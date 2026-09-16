import aadrai from "@/assets/Aadrais.avif";
import harishchandragad from "@/assets/harichandragads.jpeg";
import kalsubai from "@/assets/Kalsubais.avif";
import raigad from "@/assets/raigads.jpg";
import rajgad from "@/assets/Rajgads.jpg";
import ratangad from "@/assets/ratangads.jpg";

const images = [
  {
    src: rajgad,
    alt: "Rajgad fort trek in Maharashtra",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: kalsubai,
    alt: "Kalsubai mountain trek",
    className: "",
  },
  {
    src: aadrai,
    alt: "Aadrai jungle trek",
    className: "",
  },
  {
    src: ratangad,
    alt: "Ratangad fort trek",
    className: "",
  },
  {
    src: harishchandragad,
    alt: "Harishchandragad trek",
    className: "md:col-span-2",
  },
  {
    src: raigad,
    alt: "Raigad fort trek",
    className: "",
  },
];

export function TrekGallery() {
  return (
    <section className="bg-foreground py-section text-hero-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-accent-strong">
          On the trail
        </p>

        <h2 className="section-title text-hero-foreground">
          Moments From The Trail
        </h2>

        <p className="mt-3 text-hero-foreground/60">
          Every trek has a story.
        </p>

        <div className="mt-12 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[250px]">
          {images.map((image, index) => (
            <figure
              key={`${image.alt}-${index}`}
              className={`group overflow-hidden rounded-card bg-muted ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1400}
                height={1050}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}