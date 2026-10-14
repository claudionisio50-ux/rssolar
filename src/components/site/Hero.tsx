import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, DraftingCompass, LifeBuoy } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP =
  "https://wa.me/5521980234909?text=Olá!%20Quero%20simular%20a%20economia%20do%20meu%20imóvel.";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=85";

function AnimatedCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const target = 95;
    const duration = 2000;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="text-right"
    >
      <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/60">
        economia de até
      </p>
      <p className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#F5C518] to-[#FF8C00] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(245,197,24,0.35)]">
        {value}%
      </p>
    </motion.div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const badges = [
  { icon: Sparkles, label: "Análise personalizada" },
  { icon: DraftingCompass, label: "Projeto sob medida" },
  { icon: LifeBuoy, label: "Suporte pós-instalação" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050D1A]"
    >
      {/* Fundo: painéis solares + overlay escuro */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="hero-kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[#050D1A]/82" />
      </div>

      {/* Grade tecnológica animada sutil */}
      <div className="absolute inset-0 -z-10 hero-grid" />
      {/* Partículas douradas */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[
          { left: "12%", top: "22%", size: 4, delay: "0s" },
          { left: "28%", top: "64%", size: 3, delay: "1.4s" },
          { left: "45%", top: "18%", size: 5, delay: "2.2s" },
          { left: "60%", top: "74%", size: 3, delay: "0.8s" },
          { left: "72%", top: "30%", size: 4, delay: "1.9s" },
          { left: "86%", top: "58%", size: 5, delay: "2.8s" },
          { left: "38%", top: "82%", size: 3, delay: "3.4s" },
          { left: "8%", top: "70%", size: 4, delay: "2.6s" },
        ].map((p, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-[#F5C518]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 pb-32">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 border border-[#F5C518]/40 bg-[#0a1a33]/70 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C518]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fde9a8]">
            Cabo Frio e Região
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-bold leading-[1.08] mb-6 max-w-5xl mx-auto text-4xl md:text-5xl lg:text-[58px] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
        >
          Reduza sua conta de luz com{" "}
          <span className="bg-gradient-to-r from-[#F5C518] to-[#FF8C00] bg-clip-text text-transparent">
            energia solar
          </span>{" "}
          feita para o seu imóvel.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base md:text-xl font-light text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Simule sua economia, entenda o tamanho ideal do sistema e receba uma análise
          personalizada pelo WhatsApp.
        </motion.p>

        {/* Botões */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#calculadora"
            className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          >
            Simular minha economia <ArrowDownRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/60 text-white bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" /> Falar com especialista
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/90 bg-[#0a1a33]/60 border border-[#F5C518]/25 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-[#F5C518]" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Contador */}
        <div className="absolute bottom-8 right-6 md:right-10">
          <AnimatedCounter />
        </div>
      </div>
    </section>
  );
}
