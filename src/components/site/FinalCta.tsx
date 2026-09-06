import ctaPhoto from "@/assets/helmac-cta.webp.asset.json";
import { ShopeeButton } from "./primitives";

export function FinalCta() {
  return (
    <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow text-accent-soft">Comece hoje</p>
          <h2 className="mt-3 text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl">
            Dê ao seu cão o cuidado que ele merece
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Pote com 150 g de petiscos Helmac Pet Pelo &amp; Derme, disponível no anúncio oficial da
            marca.
          </p>
          <div className="mt-8">
            <ShopeeButton variant="cream">Comprar na Shopee</ShopeeButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-primary-soft shadow-[var(--shadow-lift)]">
          <img
            src={ctaPhoto.url}
            width={232}
            height={195}
            loading="lazy"
            decoding="async"
            alt="Petiscos Helmac Pet Pelo & Derme ao lado do pote do produto"
            className="h-56 w-full object-cover sm:h-64"
          />
        </div>
      </div>
    </section>
  );
}
