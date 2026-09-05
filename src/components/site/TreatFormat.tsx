import handPhoto from "@/assets/helmac-hand.webp.asset.json";
import { Heart, Cookie, Smile } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "./primitives";

const points = [
  { icon: Cookie, text: "Sabor frango e batata-doce, pensado para agradar o paladar canino." },
  { icon: Smile, text: "Sem brigas na hora de dar: seu cão recebe como um petisco." },
  { icon: Heart, text: "Transforma a suplementação em um momento de carinho na rotina." },
];

export function TreatFormat() {
  return (
    <Section tone="cream">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Formato petisco</Eyebrow>
          <SectionTitle className="text-primary">
            Seu cão acha que é petisco. Você sabe que é cuidado.
          </SectionTitle>
          <ul className="mt-8 grid gap-4">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-base leading-relaxed text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal overflow-hidden rounded-3xl bg-background shadow-[var(--shadow-soft)]">
          <img
            src={handPhoto.url}
            width={207}
            height={278}
            loading="lazy"
            decoding="async"
            alt="Mão de tutor oferecendo um petisco Helmac Pet ao cão"
            className="h-[300px] w-full object-cover sm:h-[380px]"
          />
        </div>
      </div>
    </Section>
  );
}
