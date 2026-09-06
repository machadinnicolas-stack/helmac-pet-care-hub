import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pain } from "@/components/site/Pain";
import { Benefits } from "@/components/site/Benefits";
import { Formula } from "@/components/site/Formula";
import { TreatFormat } from "@/components/site/TreatFormat";
import { HowToUse } from "@/components/site/HowToUse";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { FinalCta } from "@/components/site/FinalCta";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { MobileBuyBar } from "@/components/site/MobileBuyBar";
import { INSTAGRAM_URL, SAC_EMAIL, SHOPEE_URL } from "@/lib/site";

const TITLE = "Helmac Pet | Petisco Suplementar para Pele e Pelagem de Cães";
const DESCRIPTION =
  "Helmac Pet Pelo & Derme: petisco suplementar com Ômega 3, Biotina, Zinco e Curcuminoides para o cuidado diário com a pele e a pelagem do seu cão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Helmac Pet",
              email: SAC_EMAIL,
              sameAs: [INSTAGRAM_URL, SHOPEE_URL],
              areaServed: "BR",
            },
            {
              "@type": "Product",
              name: "Helmac Pet Pelo & Derme 150 g",
              description: DESCRIPTION,
              brand: { "@type": "Brand", name: "Helmac Pet" },
              category: "Suplemento para cães",
              offers: { "@type": "Offer", url: SHOPEE_URL, availability: "https://schema.org/InStock" },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Pain />
        <Benefits />
        <Formula />
        <TreatFormat />
        <HowToUse />
        <Trust />
        <About />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <MobileBuyBar />
    </div>
  );
}
