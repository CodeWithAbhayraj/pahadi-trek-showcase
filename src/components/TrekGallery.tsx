import P1 from "@/assets/P1.jpeg";
import P2 from "@/assets/P2.jpeg";
import P3 from "@/assets/P3.jpeg";
import P4 from "@/assets/P4.jpeg";
import P5 from "@/assets/P5.jpeg";
import P6 from "@/assets/P6.jpeg";

const images = [
  {
    src: P1,
    alt: "Pahadi Keeda trek moment",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: P2,
    alt: "Pahadi Keeda trekking adventure",
    className: "",
  },
  {
    src: P3,
    alt: "Pahadi Keeda trek experience",
    className: "",
  },
  {
    src: P4,
    alt: "Pahadi Keeda mountain adventure",
    className: "",
  },
  {
    src: P5,
    alt: "Pahadi Keeda trekking journey",
    className: "md:col-span-2",
  },
  {
    src: P6,
    alt: "Pahadi Keeda trail adventure",
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