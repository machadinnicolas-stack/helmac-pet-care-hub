import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { ShopeeButton } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex shrink-0 flex-col leading-none"
          aria-label="Helmac Pet — início"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
            HELMAC PET
          </span>
          <span className="mt-1 h-px w-full bg-accent/70" aria-hidden="true" />
        </a>

        <nav aria-label="Navegação principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden lg:ml-6 lg:block">
          <ShopeeButton className="px-5 py-3" />
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ShopeeButton className="px-4 py-2.5 text-xs">Comprar</ShopeeButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-primary"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-foreground last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
