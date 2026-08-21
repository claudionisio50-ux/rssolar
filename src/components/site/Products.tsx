import { motion } from "framer-motion";
import { Building2, Home, Sprout } from "lucide-react";
import solarPanels from "@/assets/solar-panels.jpg";

const waSolar = (msg: string) => `https://wa.me/5521980234909?text=${encodeURIComponent(msg)}`;

const solutions = [
  {
    icon: Home,
    title: "Energia solar para residências",
    desc: "Um sistema pensado a partir da sua conta de luz, do seu telhado e da sua rotina de consumo.",
    bullets: ["Análise da conta", "Dimensionamento do sistema", "Acompanhamento técnico"],
    cta: "Quero analisar minha casa",
  },
  {
    icon: Building2,
    title: "Energia solar para empresas",
    desc: "Uma alternativa para negócios que querem controlar custos e planejar o consumo de energia com mais previsibilidade.",
    bullets: [
      "Leitura do perfil de consumo",
      "Projeto para sua operação",
      "Proposta clara para decisão",
    ],
    cta: "Quero analisar minha empresa",
  },
  {
    icon: Sprout,
    title: "Energia solar para área rural",
    desc: "Soluções para propriedades que precisam de autonomia, eficiência e projeto compatível com a realidade do campo.",
    bullets: ["Avaliação do local", "Estudo de demanda", "Orientação especializada"],
    cta: "Quero analisar minha propriedade",
  },
];

export function Products() {
  return (
    <section id="solucoes" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Soluções fotovoltaicas</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Energia solar para o <span className="text-gradient-sky">seu cenário</span>
          </h2>
          <p className="text-muted-foreground">
            Em vez de uma solução pronta, a decisão começa entendendo o seu consumo e o objetivo do
            imóvel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="frost glow-card product-card rounded-2xl overflow-hidden flex flex-col p-7"
            >
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky/10 border border-sky/30 text-sky">
                  <solution.icon className="h-6 w-6" />
                </div>
                <img
                  src={solarPanels}
                  alt="Painéis solares fotovoltaicos"
                  className="w-20 h-14 rounded-lg object-cover border border-border/50"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {solution.desc}
              </p>
              <ul className="space-y-2.5 mb-7 text-sm text-foreground/85">
                {solution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={waSolar(`Olá! Quero uma análise de energia solar para: ${solution.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-sm"
              >
                {solution.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
