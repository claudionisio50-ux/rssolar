import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RS Painel Solar" className="h-10 w-auto rounded-full" />
          <p className="font-display text-base text-gradient-sky">RS Painel Solar</p>
        </div>
        <p>© {new Date().getFullYear()} RS Painel Solar — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
