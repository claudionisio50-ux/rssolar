import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BrandMark } from "./BrandMark";

const WHATSAPP = "https://wa.me/5521980234909?text=Olá!%20Quero%20falar%20sobre%20energia%20solar.";

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
        <a href="#hero" className="group flex items-center gap-3" aria-label="RJ Solar - início">
          <span className="transition-transform duration-300 group-hover:scale-105">
            <BrandMark />
          </span>
          <span className="hidden sm:inline">
            <span className="block font-display text-xl font-bold leading-none text-white md:text-2xl">
              RJ Solar
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f6c945]">
              Energia solar
            </span>
          </span>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold animate-pulse-glow"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar com especialista</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
