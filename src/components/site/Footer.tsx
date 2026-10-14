import solarPrimeLogo from "@/assets/solar-prime-logo.webp";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={solarPrimeLogo}
            alt="Solar Prime — Energia Solar"
            className="h-12 w-auto max-w-[190px] object-contain"
          />
        </div>
        <p>© {new Date().getFullYear()} Solar Prime — Modelo demonstrativo</p>
      </div>
    </footer>
  );
}
