import { Leaf, Drumstick, Package } from "lucide-react";
import { ShopeeButton } from "./primitives";

const heroBanner = "/images/hero-banner.jpg";

const facts = [
  { icon: Leaf, text: "Ômega 3, Biotina, Zinco e Curcuminoides" },
  { icon: Drumstick, text: "Sabor frango e batata-doce" },
  { icon: Package, text: "Pote com 150 g · aprox. 33 petiscos" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 bg-cream px-5 pt-28 pb-16 sm:px-8 md:pt-36 md:pb-20"
    >
      <div className="mx-auto w-full max-w-3xl">
        {/* Visible content lives in the banner image below; kept here (visually hidden)
            so the page still has a real h1 and readable copy for SEO and screen readers. */}
        <div className="sr-only">
          <p className="eyebrow">Suplementação em formato de petisco</p>
          <h1>Cuidado que começa de dentro. Beleza que aparece por fora.</h1>
          <p>
            Helmac Pet Pelo &amp; Derme é um petisco suplementar desenvolvido para complementar os
            cuidados diários com a pele e a pelagem do seu cão — com praticidade para você e uma
            experiência saborosa para ele.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
          <img
            src={heroBanner}
            width={1600}
            height={1320}
            alt="Helmac Pet Pelo & Derme: cuidado que começa de dentro, beleza que aparece por fora. Petisco suplementar para a pele e a pelagem do seu cão, com selo de estabelecimento registrado no MAPA."
            fetchPriority="high"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <ShopeeButton />
          <a
            href="#formula"
            className="inline-flex items-center justify-center rounded-full border border-primary/25 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Conhecer a fórmula
          </a>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {facts.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start justify-center gap-2.5 sm:justify-start">
              <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-sm leading-snug text-foreground/80">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
