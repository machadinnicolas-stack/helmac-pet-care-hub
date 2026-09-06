import { Sparkles, ShieldCheck, Waves, Clock } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const benefitsBanner = "/images/benefits-banner.jpg";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Suporte para a pele",
    text: "Nutrientes importantes para complementar os cuidados com a saúde e a integridade da pele.",
  },
  {
    icon: Waves,
    title: "Manutenção da pelagem",
    text: "Suporte nutricional para pelos com aparência mais bonita e bem cuidada.",
  },
  {
    icon: Sparkles,
    title: "Brilho e vitalidade",
    text: "Ômega 3, EPA e DHA como parte de uma rotina nutricional equilibrada.",
  },
  {
    icon: Clock,
    title: "Praticidade todos os dias",
    text: "Formato de petisco que torna o momento de suplementação mais simples e agradável.",
  },
];

export function Benefits() {
  return (
    <Section id="beneficios" tone="cream">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Pele e pelagem</Eyebrow>
          <SectionTitle className="text-primary">Cuidado diário para pele e pelagem</SectionTitle>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nutrientes selecionados para complementar a rotina do seu melhor amigo.
          </p>
        </div>
        <div className="reveal overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <img
            src={benefitsBanner}
            width={1600}
            height={1213}
            loading="lazy"
            decoding="async"
            alt="Pele saudável, pelagem incrível: nutrientes que trabalham de dentro para fora, com menos queda de pelos, mais brilho e maciez, e pele nutrida e protegida"
            className="h-auto w-full"
          />
        </div>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="reveal rounded-2xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-accent/12 text-accent">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
