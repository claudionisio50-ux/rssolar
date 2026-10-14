import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, DraftingCompass, LifeBuoy, Sparkles } from "lucide-react";
import solarPrimeLogo from "@/assets/solar-prime-logo.webp";
import heroBg from "@/assets/hero-bg.jpg";
import heroPanel from "@/assets/hero-slide-2.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

const WHATSAPP = whatsappLink(
  "Olá! Vi o modelo Solar Prime e quero um site personalizado para minha empresa.",
);

function AnimatedCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const target = 95;
    const duration = 1800;
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
    <div className="flex items-end gap-2">
      <p className="pb-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
        potencial de economia
      </p>
      <p className="bg-gradient-to-r from-[#f5c518] to-[#ff8c00] bg-clip-text font-display text-4xl font-bold leading-none text-transparent drop-shadow-[0_0_24px_rgba(245,197,24,0.35)]">
        {value}%
      </p>
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay },
});

const badges = [
  { icon: Sparkles, label: "Experiência premium" },
  { icon: DraftingCompass, label: "Projeto sob medida" },
  { icon: LifeBuoy, label: "Atendimento próximo" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[760px] items-center overflow-hidden bg-[#050d1a] pb-16 pt-28 lg:min-h-screen lg:pt-24"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="hero-kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050d1a_4%,rgba(5,13,26,0.93)_40%,rgba(5,13,26,0.72)_72%,#050d1a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(0,145,255,0.2),transparent_34%)]" />
      </div>
      <div className="absolute inset-0 -z-10 hero-grid" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="max-w-2xl text-left">
            <motion.div
              {...fadeUp(0)}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#f5c518]/35 bg-[#0a1a33]/65 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f5c518] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f5c518]" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fde9a8]">
                Modelo demonstrativo Solar Prime
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-display text-4xl font-bold leading-[1.04] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-[62px]"
            >
              Energia solar com uma presença digital{" "}
              <span className="text-gradient-sky">à altura.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-xl"
            >
              Um site premium para apresentar sua empresa, explicar seus diferenciais e transformar
              interesse em conversas pelo WhatsApp.
            </motion.p>

            <motion.div {...fadeUp(0.36)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#criar-site"
                className="btn-hero inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
              >
                Quero um site como este <ArrowDownRight className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" /> Falar pelo WhatsApp
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.48)} className="mt-9 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1a33]/55 px-3.5 py-2 text-xs text-white/75 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-[#f5c518]" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-8 rounded-full bg-[#008cff]/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.45rem] border border-[#f5c518]/25 bg-[#071a35]">
                <img
                  src={heroPanel}
                  alt="Painéis solares instalados em um imóvel"
                  className="h-[330px] w-full object-cover opacity-80 md:h-[390px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,26,0.05),rgba(5,13,26,0.92))]" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                  <img
                    src={solarPrimeLogo}
                    alt="Solar Prime"
                    className="h-12 w-auto max-w-[180px] object-contain"
                  />
                  <span className="rounded-full border border-[#f5c518]/35 bg-[#071a35]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fde9a8] backdrop-blur-md">
                    Alta performance
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                    Energia inteligente
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                    Tecnologia que valoriza o seu imóvel.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-2 pt-4">
                <div className="rounded-2xl border border-white/10 bg-[#071a35]/75 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">Projeto</p>
                  <p className="mt-1 text-sm font-semibold text-white">Sob medida</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#071a35]/75 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Atendimento
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">Especializado</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 rounded-2xl border border-[#f5c518]/25 bg-[#081c3b]/90 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl md:-left-10">
              <AnimatedCounter />
            </div>
            <div className="absolute -right-3 -top-5 hidden items-center gap-2 rounded-full border border-[#32d583]/25 bg-[#081c3b]/90 px-4 py-2 text-xs font-semibold text-[#b9f5d3] shadow-xl backdrop-blur-xl sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#32d583] shadow-[0_0_10px_#32d583]" />
              Solução personalizada
            </div>
          </motion.div>
        </div>
        <motion.a
          {...fadeUp(0.7)}
          href="#solucoes"
          className="mx-auto mt-16 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-[#fde9a8]"
        >
          Conheça a experiência <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
