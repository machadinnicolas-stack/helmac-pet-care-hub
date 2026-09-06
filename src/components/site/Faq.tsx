import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionTitle, Eyebrow } from "./primitives";

export const FAQ_ITEMS = [
  {
    q: "Para quais cães o Helmac Pet é indicado?",
    a: "É um petisco suplementar para cães adultos de diferentes portes. A quantidade diária varia conforme o peso: siga a tabela impressa na embalagem.",
  },
  {
    q: "Quantos petiscos devo dar por dia?",
    a: "A recomendação depende do peso do cão e está indicada na embalagem do produto. Em caso de dúvida, consulte um médico-veterinário.",
  },
  {
    q: "Em quanto tempo vejo diferença na pelagem?",
    a: "Cada cão responde de um jeito, e a pelagem depende de vários fatores, como alimentação, rotina e cuidados. O uso regular faz parte de uma rotina de cuidados contínua.",
  },
  {
    q: "Qual é o sabor?",
    a: "Frango e batata-doce, um sabor pensado para agradar o paladar canino e facilitar o momento de dar o petisco.",
  },
  {
    q: "Onde comprar com segurança?",
    a: "Pelo anúncio oficial da Helmac Pet na Shopee, acessível pelos botões de compra deste site.",
  },
  {
    q: "O produto substitui a ração ou o veterinário?",
    a: "Não. Trata-se de um produto suplementar que complementa a alimentação. Ele não substitui uma dieta equilibrada nem o acompanhamento de um médico-veterinário.",
  },
] as const;

export function Faq() {
  return (
    <Section id="duvidas" tone="cream">
      <div className="max-w-2xl">
        <Eyebrow>Dúvidas frequentes</Eyebrow>
        <SectionTitle className="text-primary">Perguntas que recebemos dos tutores</SectionTitle>
      </div>

      <Accordion type="single" collapsible className="mt-10 grid gap-3">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={item.q}
            value={`item-${index}`}
            className="rounded-2xl border border-border/70 bg-background px-5"
          >
            <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
