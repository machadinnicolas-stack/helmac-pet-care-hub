import { ShopeeButton } from "./primitives";

export function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-primary">Pelo &amp; Derme · 150 g</p>
          <p className="truncate text-xs text-muted-foreground">Anúncio oficial da marca</p>
        </div>
        <ShopeeButton className="ml-auto shrink-0 px-5 py-3 text-xs">Comprar</ShopeeButton>
      </div>
    </div>
  );
}
