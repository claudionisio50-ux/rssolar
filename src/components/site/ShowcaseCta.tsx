import { ArrowUpRight, Check, MessageCircle, Palette } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP =
  "https://wa.me/5521980234909?text=Ol%C3%A1!%20Vi%20o%20modelo%20Solar%20Prime%20e%20quero%20um%20site%20personalizado%20para%20minha%20empresa.";

const benefits = [
  "Identidade visual e logo da sua empresa",
  "Página adaptada aos seus serviços e região",
  "Botões de orçamento pelo WhatsApp",
  "Versão profissional para celular",
];

export function ShowcaseCta() {
  return (
    <section id="criar-site" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(246,201,69,0.12),transparent_34%)]" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-sky/25 bg-[#081c3b]/90 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f6c945]/35 bg-[#f6c945]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#fde9a8]">
                <Palette className="h-4 w-4 text-[#f6c945]" />
                Modelo demonstrativo
              </div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Sua empresa também pode ter um site como este.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Este projeto é um exemplo de como uma apresentação profissional pode transformar
                serviços, diferenciais e atendimento em uma experiência digital clara para seus
                clientes.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                Quero um site como este
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#050d1a]/60 p-6">
              <p className="mb-5 font-display text-xl font-semibold">
                O que pode ser personalizado
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
