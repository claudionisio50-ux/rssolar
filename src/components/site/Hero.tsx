import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP =
  "https://wa.me/5521980234309?text=Olá!%20Quero%20simular%20a%20economia%20do%20meu%20imóvel.";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=85";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="hero-kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(3,14,33,0.92)_0%,rgba(7,36,74,0.76)_52%,rgba(5,19,42,0.93)_100%)]" />

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-[#f6c945]/45 bg-[#071b38]/70 text-[#fff3c4]"
        >
          <span className="h-2 w-2 rounded-full bg-[#f6c945] shadow-[0_0_12px_rgba(246,201,69,.95)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">
            Cabo Frio e Região
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold leading-[1.05] mb-6 max-w-5xl mx-auto text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] text-4xl md:text-5xl lg:text-[62px]"
        >
          Reduza sua conta de luz com <span className="text-gradient-sky">energia solar</span> feita
          para o seu imóvel.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Simule sua economia, entenda o tamanho ideal do sistema e receba uma análise personalizada
          pelo WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            className="btn-outline-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          >
            <WhatsAppIcon className="h-5 w-5" /> Falar com especialista
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#04142d]/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-5">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "Análise", label: "personalizada" },
              { value: "Projeto", label: "sob medida" },
              { value: "Suporte", label: "pós-instalação" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center px-2 ${i > 0 ? "border-l border-white/15" : ""}`}
              >
                <span className="font-bold text-base md:text-xl text-[#f6c945]">{s.value}</span>
                <span className="text-white/70 mt-1 text-[10px] md:text-xs tracking-[0.15em] uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
