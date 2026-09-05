import dogPhoto from "@/assets/helmac-dog.webp.asset.json";
import jarPhoto from "@/assets/helmac-jar.webp.asset.json";
import { Leaf, Drumstick, Package } from "lucide-react";
import { Eyebrow, ShopeeButton } from "./primitives";

const facts = [
  { icon: Leaf, text: "Ômega 3, Biotina, Zinco e Curcuminoides" },
  { icon: Drumstick, text: "Sabor frango e batata-doce" },
  { icon: Package, text: "Pote com 150 g" },
];

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 bg-cream px-5 pt-28 pb-20 sm:px-8 md:pt-36 md:pb-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Suplementação em formato de petisco</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-balance text-primary sm:text-5xl md:text-[3.4rem]">
            Cuidado que começa de dentro.{" "}
            <span className="text-accent">Beleza que aparece por fora.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Helmac Pet Pelo &amp; Derme é um petisco suplementar desenvolvido para complementar os
            cuidados diários com a pele e a pelagem do seu cão — com praticidade para você e uma
            experiência saborosa para ele.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              <li key={text} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm leading-snug text-foreground/80">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-cream-deep shadow-[var(--shadow-lift)]">
            <img
              src={dogPhoto.url}
              width={300}
              height={624}
              alt="Cão golden retriever deitado ao lado dos petiscos Helmac Pet Pelo & Derme"
              fetchPriority="high"
              className="h-[380px] w-full object-cover object-top sm:h-[460px] md:h-[540px]"
            />
          </div>
          <figure className="absolute -bottom-8 -left-2 w-36 overflow-hidden rounded-2xl border-4 border-background shadow-[var(--shadow-soft)] sm:w-44 md:-left-8">
            <img
              src={jarPhoto.url}
              width={202}
              height={332}
              alt="Pote preto Helmac Pet aberto com petiscos em formato de ossinho"
              className="h-32 w-full object-cover sm:h-40"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
