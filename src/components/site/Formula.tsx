import jarPhoto from "@/assets/helmac-jar.webp.asset.json";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const actives = [
  { name: "Zinco", text: "Mineral importante para a manutenção da pele e da pelagem." },
  { name: "Biotina", text: "Nutriente associado à manutenção da pele e dos pelos." },
  {
    name: "Ômega 3 — EPA e DHA",
    text: "Suporte nutricional para a pele, a pelagem, o brilho e a vitalidade.",
  },
  {
    name: "Curcuminoides",
    text: "Compostos utilizados como parte do suporte antioxidante da fórmula.",
  },
];

export function Formula() {
  return (
    <Section id="formula" tone="white">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <div className="md:sticky md:top-28">
          <Eyebrow>Fórmula</Eyebrow>
          <SectionTitle className="text-primary">O que existe por trás desse cuidado</SectionTitle>
          <div className="reveal mt-8 overflow-hidden rounded-3xl bg-cream shadow-[var(--shadow-soft)]">
            <img
              src={jarPhoto.url}
              width={202}
              height={332}
              loading="lazy"
              decoding="async"
              alt="Pote Helmac Pet Pelo & Derme aberto, mostrando a textura real dos petiscos"
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />
          </div>
        </div>

        <ul className="grid gap-4">
          {actives.map((item) => (
            <li
              key={item.name}
              className="reveal rounded-2xl border border-border/70 bg-cream/60 p-6"
            >
              <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
          <li className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <p className="text-base leading-relaxed">
              Uma combinação desenvolvida para integrar a rotina de cuidado do seu cão.
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
}
