const trustStrip = "/images/trust-strip.png";

export function TrustStrip() {
  return (
    <section className="bg-cream px-5 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <img
          src={trustStrip}
          width={1600}
          height={79}
          loading="lazy"
          decoding="async"
          alt="Ingredientes naturais · Feito para quem ama cuidar · Desenvolvido com qualidade · Produzido no Brasil · Estabelecimento registrado no MAPA · Muito amor envolvido"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
