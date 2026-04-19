import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP = "https://wa.me/5521964913395";

const particles = Array.from({ length: 24 });

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-sky animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              backgroundColor: '#38bdf8',
              opacity: 0.4,
              boxShadow: '0 0 8px rgba(56,189,248,0.8)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full frost mb-8 text-xs md:text-sm"
        >
          <span className="text-yellow-400">★</span>
          <span className="text-foreground/90">5.0 — 32 avaliações no Google</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 max-w-5xl mx-auto"
        >
          Energia Solar de <span className="text-gradient-sky">Alta Performance</span> para Sua Casa e Empresa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Equipamentos premium com instalação e suporte especializado em Cabo Frio e região.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar Orçamento
          </a>
          <a
            href="#calculadora"
            className="btn-outline-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          >
            Calcular Economia
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs animate-bounce">
        ↓ role para descobrir
      </div>
    </section>
  );
}
