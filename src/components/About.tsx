import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about.jpeg";
import { Button } from "./Button";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-background py-section"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-8">

        {/* About Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Pahadi Keeda trekking community exploring the Sahyadri mountains"
            width={1400}
            height={1050}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-card object-cover shadow-image"
          />

          {/* Image Badge */}
          <div className="absolute -bottom-5 right-5 rounded-card bg-primary p-5 text-primary-foreground shadow-card sm:right-8">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] opacity-70">
              Our Playground
            </span>

            <strong className="mt-1 block font-display text-xl">
              The Sahyadris
            </strong>
          </div>
        </div>

        {/* About Content */}
        <div>
          <p className="eyebrow">
            Born for the Mountains
          </p>

          <h2 className="section-title">
            We Are Pahadi Keeda
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Pahadi Keeda is a trekking community built for people who
              love the mountains, fresh air, hidden trails and the thrill
              of exploring something new.
            </p>

            <p>
              From sunrise hikes and peaceful trails to challenging
              Sahyadri forts, we bring people together for memorable
              weekend adventures, meaningful connections and stories
              worth taking home.
            </p>

            <p>
              Whether you're an experienced trekker or stepping onto
              your first trail, there's always another mountain waiting
              to be explored.
            </p>
          </div>

          {/* CTA */}
          <a href="#treks" className="mt-8 inline-block">
            <Button>
              Explore Our Treks
              <ArrowRight size={17} />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}