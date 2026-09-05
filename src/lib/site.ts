// Configurações centrais do site Helmac Pet.
// Altere SITE_URL quando o domínio oficial estiver disponível.
export const SITE_URL: string = "";

export const SHOPEE_URL =
  "https://shopee.com.br/Queda-de-Pelos-em-Cachorro-Vitamina-e-Suplemento-em-Petisco-Pele-e-Pelagem-%C3%94mega-3-Biotina-Zinco-Helmac-Pet-150g-i.1396465802.58216009450";
export const INSTAGRAM_URL = "https://www.instagram.com/helmacpetoficial/";
export const INSTAGRAM_HANDLE = "@helmacpetoficial";
export const SAC_EMAIL = "helmacpetsuport@gmail.com";
export const MAPA_REGISTRO = "RS 003858-0";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O produto", href: "#produto" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Fórmula", href: "#formula" },
  { label: "Como usar", href: "#como-usar" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const absoluteUrl = (path: string) =>
  SITE_URL ? `${SITE_URL.replace(/\/$/, "")}${path}` : path;
