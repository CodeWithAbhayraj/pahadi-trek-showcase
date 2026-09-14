import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-button",
    outline: "border border-border bg-background text-foreground hover:bg-secondary",
    light: "bg-hero-foreground text-foreground hover:bg-hero-foreground/90",
    ghost: "text-foreground hover:bg-secondary",
  };

  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}