import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, DraftingCompass, LifeBuoy, Sparkles } from "lucide-react";
import heroBg from "@/assets/solar-golden-hour.jpg";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

const WHATSAPP = whatsappLink(
  "Olá! Vi o modelo Solar Prime e quero um site personalizado para minha empresa.",
);

const badges = [
  { icon: Sparkles, label: "Análise personalizada" },
  { icon: DraftingCompass, label: "Projeto sob medida" },
  { icon: LifeBuoy, label: "Suporte pós-instalação" },
];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? false as const : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reducedMotion ? 0 : delay },
  });

  return (
    <section id="hero" className="solar-hero">
      <img src={heroBg} alt="Painéis solares sobre um telhado refletindo a luz dourada do pôr do sol" width={1920} height={1088} fetchPriority="high" className="solar-hero-photo" />
      <div className="solar-hero-overlay" aria-hidden="true" />
      <div className="solar-hero-grid" aria-hidden="true" />
      <div className="container solar-hero-inner mx-auto px-6">
        <div className="solar-hero-copy">
          <motion.div {...fadeUp(0)} className="solar-hero-eyebrow">
            <span className="solar-hero-dot" aria-hidden="true" />
            <span>Modelo demonstrativo Solar Prime</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="solar-hero-title font-display">
            Energia solar com uma presença digital{" "}
            <span className="text-gradient-sky">à altura.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="solar-hero-description">
            Um site premium para apresentar sua empresa, explicar seus diferenciais e transformar
            interesse em conversas pelo WhatsApp.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="solar-hero-actions">
            <Button asChild className="solar-hero-primary">
              <a href="#criar-site">Quero um site como este <ArrowDownRight /></a>
            </Button>
            <Button asChild variant="outline" className="solar-hero-secondary">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Falar pelo WhatsApp
              </a>
            </Button>
          </motion.div>
          <motion.div {...fadeUp(0.4)} className="solar-hero-badges">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label}><Icon aria-hidden="true" />{label}</span>
            ))}
          </motion.div>
        </div>
        <div className="solar-hero-footer">
          <motion.a {...fadeUp(0.5)} href="#solucoes" className="solar-hero-scroll">
            Conheça a experiência <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <motion.div {...fadeUp(0.5)} className="solar-hero-savings">
            <p><span aria-hidden="true">☀️</span> Economia de até <strong>95%</strong></p>
            <p>na conta de luz</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
