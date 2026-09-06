import { Section, SectionTitle, Eyebrow } from "./primitives";

const familyPhoto = "/images/about-banner.jpg";

export function About() {
  return (
    <Section id="sobre" tone="white">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Sobre a Helmac Pet</Eyebrow>
          <SectionTitle className="text-primary">
            Nascemos do cuidado com quem faz parte da família
          </SectionTitle>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A Helmac Pet é uma marca brasileira criada para levar suplementação de forma simples,
            saborosa e confiável para a rotina dos cães. Acreditamos que cuidar bem é um gesto
            diário — e que ele deve caber no dia a dia de qualquer tutor.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Por isso desenvolvemos produtos com fórmulas claras, informação honesta e um formato que
            o seu cão recebe com alegria.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-3xl bg-cream shadow-[var(--shadow-soft)]">
          <img
            src={familyPhoto}
            width={1448}
            height={1086}
            loading="lazy"
            decoding="async"
            alt="Tutora sorrindo enquanto oferece um petisco Helmac Pet ao seu cão, em um momento de carinho no sofá de casa"
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />
        </div>
      </div>
    </Section>
  );
}
