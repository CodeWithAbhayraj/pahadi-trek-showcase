import { cn } from "@/lib/utils";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className={cn("group inline-flex items-center gap-3", inverse ? "text-hero-foreground" : "text-foreground")} aria-label="Pahadi Keeda home">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10 shrink-0">
        <path d="M5 37 19 13l7.3 12.2L31 19l12 18H5Z" fill="currentColor" opacity=".18" />
        <path d="m5 37 14-24 7.3 12.2L31 19l12 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
        <path d="m14 28 5-8 3.2 5.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
        <circle cx="35" cy="11" r="3" fill="var(--logo-sun)" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] font-extrabold uppercase tracking-[0.12em]">Pahadi Keeda</span>
        <span className="mt-1 hidden text-[0.58rem] font-semibold uppercase tracking-[0.2em] opacity-70 sm:block">Born for the mountains</span>
      </span>
    </a>
  );
}