import { ShopeeButton } from "./primitives";

const finalCtaBanner = "/images/final-cta-banner.png";

export function FinalCta() {
  return (
    <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-2xl">
        {/* Visible content lives in the banner image below; kept here (visually hidden)
            for SEO and screen readers, since the image's own "button" isn't clickable. */}
        <div className="sr-only">
          <p className="eyebrow">Comece hoje</p>
          <h2>Dê ao seu cão o cuidado que ele merece</h2>
          <p>
            Pote com 150 g de petiscos Helmac Pet Pelo &amp; Derme, disponível no anúncio oficial da
            marca.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
          <img
            src={finalCtaBanner}
            width={370}
            height={309}
            loading="lazy"
            decoding="async"
            alt="Transforme a rotina do seu cão hoje mesmo: Helmac Pet Pelo & Derme é o cuidado que ele sente e que você vê"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ShopeeButton variant="cream">Comprar na Shopee</ShopeeButton>
        </div>
      </div>
    </section>
  );
}
