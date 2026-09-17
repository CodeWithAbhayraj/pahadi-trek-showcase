import { cn } from "@/lib/utils";
import logo from "@/assets/pahadi-keeda-logo.png";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#home"
      className={cn(
        "group inline-flex items-center",
        inverse ? "text-hero-foreground" : "text-foreground"
      )}
      aria-label="Pahadi Keeda home"
    >
      
      <img
        src={logo}
        alt="Pahadi Keeda"
        className="h-16 w-auto shrink-0 object-contain sm:h-[4.5rem]"
      />
    </a>
  );
}