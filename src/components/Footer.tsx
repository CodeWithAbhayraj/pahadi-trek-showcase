import { BrandLogo } from "./BrandLogo";
import { INSTAGRAM_URL } from "./InstagramCTA";


export function Footer() {
  return <footer className="bg-background pb-8"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-8 py-10 md:flex-row md:items-center"><div><BrandLogo /><p className="mt-4 text-sm text-muted-foreground">Escape the Ordinary. Explore the Mountains.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/70" aria-label="Footer navigation"><a href="#home">Home</a><a href="#treks">Treks</a><a href="#about">About</a><a href="#contact">Contact</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></nav></div><div className="border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Pahadi Keeda. All Rights Reserved.</div></div></footer>;
}