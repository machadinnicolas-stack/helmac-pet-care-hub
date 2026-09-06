import { Factory, FlaskConical, PawPrint, Truck } from "lucide-react";
import { MAPA_REGISTRO } from "@/lib/site";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const items = [
  {
    icon: Factory,
    title: "Fabricado no Brasil",
    text: `Estabelecimento registrado no MAPA — ${MAPA_REGISTRO}.`,
  },
  {
    icon: FlaskConical,
    title: "Fórmula definida",
    text: "Ômega 3, Biotina, Zinco e Curcuminoides em cada petisco.",
  },
  {
    icon: PawPrint,
    title: "Feito para cães",
    text: "Desenvolvido especificamente para a rotina canina.",
  },
  {
    icon: Truck,
    title: "Compra oficial",
    text: "Vendido pelo anúncio oficial da marca na Shopee.",
  },
];

export function Trust() {
  return (
    <Section tone="cream">
      <div className="max-w-2xl">
        <Eyebrow>Confiança</Eyebrow>
        <SectionTitle className="text-primary">Transparência em cada detalhe</SectionTitle>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="reveal rounded-2xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]"
          >
            <Icon className="size-5 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
        Produto suplementar para cães. Não substitui alimentação equilibrada nem acompanhamento
        veterinário.
      </p>
    </Section>
  );
}
