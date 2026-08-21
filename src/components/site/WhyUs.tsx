import { motion } from "framer-motion";
import { FileCheck2, MapPin, PanelsTopLeft, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Atendimento em Cabo Frio e região",
    desc: "Uma conversa local para entender a realidade do seu imóvel.",
  },
  {
    icon: FileCheck2,
    title: "Projeto sob medida",
    desc: "O caminho certo começa pela análise de consumo e necessidade.",
  },
  {
    icon: PanelsTopLeft,
    title: "Foco em fotovoltaico",
    desc: "Uma página comercial clara, centrada em economia e geração de energia.",
  },
  {
    icon: ShieldCheck,
    title: "Pós-venda como prioridade",
    desc: "Inclua no atendimento as condições de suporte e acompanhamento da sua empresa.",
  },
];

export function WhyUs() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 relative bg-[#071a35]/55">
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
            Uma proposta feita para ser <span className="text-gradient-sky">entendida</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost glow-card rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky/10 border border-sky/30 text-sky mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
