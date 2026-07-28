import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logo from "@/assets/logo.png";

const WHATSAPP = "https://wa.me/5521980234309";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "frost py-3 border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Planeta Renováveis — Fontes de Energia" className="h-10 md:h-12 w-auto rounded-full transition-transform duration-300 hover:scale-105" />
          <span className="font-display text-xl md:text-2xl font-semibold text-gradient-sky hidden sm:inline">
            Planeta Renováveis
          </span>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold animate-pulse-glow"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
