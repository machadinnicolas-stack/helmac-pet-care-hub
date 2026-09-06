import { Section, SectionTitle, Eyebrow } from "./primitives";

const howToUseBanner = "/images/how-to-use-banner.jpg";

const steps = [
  {
    step: "1",
    title: "Confira o peso do seu cão",
    text: "A quantidade recomendada varia conforme o porte. Consulte a tabela impressa na embalagem.",
  },
  {
    step: "2",
    title: "Ofereça o petisco diariamente",
    text: "Dê na mão ou junto da rotina alimentar, no momento que for mais prático para vocês.",
  },
  {
    step: "3",
    title: "Mantenha a constância",
    text: "O uso regular faz parte de uma rotina de cuidados com pele e pelagem.",
  },
];

export function HowToUse() {
  return (
    <Section id="como-usar" tone="white">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Como usar</Eyebrow>
          <SectionTitle className="text-primary">Simples de incluir no dia a dia</SectionTitle>
        </div>
        <div className="reveal overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <img
            src={howToUseBanner}
            width={1600}
            height={1178}
            loading="lazy"
            decoding="async"
            alt="Prático para você, saudável para ele: até 2 petiscos por dia já fazem a diferença. Fácil de oferecer, pode ser usado todos os dias, indicado para cães de todas as idades"
            className="h-auto w-full"
          />
        </div>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((item) => (
          <li
            key={item.step}
            className="reveal rounded-2xl border border-border/70 bg-cream/60 p-6"
          >
            <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-base font-semibold text-primary-foreground">
              {item.step}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 rounded-2xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
        Siga sempre a recomendação de uso da embalagem. Em caso de dúvidas sobre a saúde do seu cão,
        consulte um médico-veterinário.
      </p>
    </Section>
  );
}
