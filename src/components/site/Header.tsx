import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP = "https://wa.me/5521964913395";

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
        <a href="#hero" className="font-display text-xl md:text-2xl font-semibold text-gradient-sky">
          RS Painel Solar
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
