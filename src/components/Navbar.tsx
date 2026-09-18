import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Treks", href: "#treks" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];



export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border/70 bg-background/95 shadow-nav backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandLogo inverse={!scrolled && !open} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} className={`text-sm font-semibold transition-colors ${scrolled ? "text-foreground/75 hover:text-primary" : "text-hero-foreground/85 hover:text-hero-foreground"}`}>{link.label}</a>)}
          <a href="#treks"><Button className={!scrolled ? "bg-hero-foreground text-foreground hover:bg-hero-foreground/90" : ""}>Book a Trek</Button></a>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} className={`grid h-11 w-11 place-items-center rounded-md md:hidden ${scrolled || open ? "text-foreground" : "text-hero-foreground"}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-secondary">{link.label}</a>)}
          <a href="#treks" onClick={() => setOpen(false)} className="mt-3"><Button className="w-full">Book a Trek</Button></a>
        </div>
      </nav>}
    </header>
  );
}