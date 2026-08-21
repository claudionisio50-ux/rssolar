import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <BrandMark size="sm" />
          <div>
            <p className="font-display text-base font-bold leading-none text-white">RJ Solar</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f6c945]">
              Energia solar
            </p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} RJ Solar — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
