import { Info } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const painBanner = "/images/pain-banner.jpg";

export function Pain() {
  return (
    <Section id="produto" tone="white">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <img
            src={painBanner}
            width={1600}
            height={1320}
            loading="lazy"
            decoding="async"
            alt="Um cuidado completo para o seu melhor amigo: auxilia na saúde da pele e pelagem, com ingredientes naturais e desenvolvido com qualidade e carinho."
            className="h-auto w-full"
          />
        </div>

        <div>
          <Eyebrow>Queda de pelos em cães</Eyebrow>
          <SectionTitle className="text-primary">
            Pelos no sofá, nas roupas e pela casa?
          </SectionTitle>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A pele e a pelagem também refletem a rotina de cuidados e a nutrição do seu cão. Helmac
            Pet foi desenvolvido para oferecer suporte nutricional diário de maneira prática e
            saborosa.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-cream/70 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              A queda excessiva de pelos pode ter diferentes causas. Caso perceba alterações
              intensas ou persistentes, procure um médico-veterinário.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
