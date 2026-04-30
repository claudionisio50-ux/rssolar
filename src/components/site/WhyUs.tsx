import { motion } from "framer-motion";
import { Users, MapPin, Award, ShieldCheck, Heart } from "lucide-react";

const items = [
  { icon: Users, title: "Mais de 32 clientes satisfeitos", desc: "Histórico comprovado de excelência." },
  { icon: MapPin, title: "Atendimento em Cabo Frio e região", desc: "Equipe local, resposta rápida." },
  { icon: Award, title: "Equipamentos de alta qualidade", desc: "Marcas Tier 1 e tecnologia premium." },
  { icon: ShieldCheck, title: "Suporte pós-venda garantido", desc: "Acompanhamento técnico contínuo." },
  { icon: Heart, title: "Empresa inclusiva e acolhedora", desc: "Atendimento humano e respeitoso." },
];

export function WhyUs() {
  return (
    <section id="por-que-nos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Diferenciais</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Por que <span className="text-gradient-sky">nos escolher?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="frost glow-card rounded-2xl p-7 flex gap-4 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-sky/10 border border-sky/30 text-sky"
                   style={{ boxShadow: "0 0 20px rgba(56,189,248,0.3)" }}>
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1.5">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
