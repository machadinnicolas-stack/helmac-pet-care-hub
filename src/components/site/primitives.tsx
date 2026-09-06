import type { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { SHOPEE_URL } from "@/lib/site";

export function Section({
  id,
  children,
  className,
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "cream" | "green";
}) {
  const tones = {
    white: "bg-background text-foreground",
    cream: "bg-cream text-foreground",
    green: "bg-primary text-primary-foreground",
  } as const;

  return (
    <section
      {...(id ? { id } : {})}
      className={cn("scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return <p className={cn("eyebrow", muted ? "text-accent-soft" : "text-accent")}>{children}</p>;
}

export function ShopeeButton({
  children = "Comprar na Shopee",
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "outline" | "cream";
  className?: string;
}) {
  const variants = {
    solid: "bg-accent text-brown hover:bg-accent/90 shadow-[var(--shadow-soft)]",
    outline: "border border-primary/25 bg-transparent text-primary hover:bg-primary/5",
    cream: "bg-cream text-primary hover:bg-cream-deep shadow-[var(--shadow-soft)]",
  } as const;

  return (
    <a
      href={SHOPEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variants[variant],
        className,
      )}
    >
      <ShoppingBag className="size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "mt-3 text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl md:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
