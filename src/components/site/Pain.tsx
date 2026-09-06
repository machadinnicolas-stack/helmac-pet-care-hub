import { Info } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const profilePhoto = "/images/helmac-profile.webp";

export function Pain() {
  return (
    <Section id="produto" tone="white">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal overflow-hidden rounded-3xl bg-cream shadow-[var(--shadow-soft)]">
          <img
            src={profilePhoto}
            width={147}
            height={278}
            loading="lazy"
            decoding="async"
            alt="Perfil de um cão de pelagem dourada e bem cuidada"
            className="h-[300px] w-full object-cover sm:h-[380px]"
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
