import { Instagram, Mail } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, MAPA_REGISTRO, NAV_LINKS, SAC_EMAIL, SHOPEE_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brown px-5 pt-16 pb-28 text-cream sm:px-8 md:pb-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">HELMAC PET</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Suplementação em formato de petisco para o cuidado diário com a pele e a pelagem do seu
            cão.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-semibold">Navegue</h2>
          <ul className="mt-4 grid gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Fale com a gente</h2>
          <ul className="mt-4 grid gap-3">
            <li>
              <a
                href={`mailto:${SAC_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm break-all text-cream/70 transition-colors hover:text-cream"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {SAC_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <Instagram className="size-4 shrink-0" aria-hidden="true" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
              >
                Anúncio oficial na Shopee
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-cream/15 pt-6">
        <p className="text-xs leading-relaxed text-cream/60">
          Fabricado no Brasil em estabelecimento registrado no MAPA — {MAPA_REGISTRO}.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-cream/60">
          Produto suplementar para cães. Não substitui alimentação equilibrada nem acompanhamento
          veterinário. As informações deste site têm caráter informativo e não constituem
          orientação médica.
        </p>
        <p className="mt-4 text-xs text-cream/50">
          © {new Date().getFullYear()} Helmac Pet. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
