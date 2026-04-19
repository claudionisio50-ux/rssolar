import { motion } from "framer-motion";
import poolHeater from "@/assets/pool-heater.jpg";
import poolFilter from "@/assets/pool-filter.jpg";
import solarPanels from "@/assets/solar-panels.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";

const wa = (msg: string) =>
  `https://wa.me/5521964913395?text=${encodeURIComponent(msg)}`;

const products = [
  {
    img: poolHeater,
    title: "Aquecedor Solar de Piscina",
    desc: "Mantenha sua piscina na temperatura ideal o ano todo com tecnologia solar de alta eficiência. Economia de até 90% em relação ao aquecedor elétrico.",
    badges: ["Eficiência 95%", "Vida útil 25 anos", "Garantia 5 anos"],
    msg: "Olá! Tenho interesse no Aquecedor Solar de Piscina.",
    cta: "Quero um Orçamento",
  },
  {
    img: poolFilter,
    title: "Filtro de Alta Performance para Piscina",
    desc: "Filtragem superior para uma piscina sempre limpa e cristalina. Sistema de filtragem de alta vazão com durabilidade comprovada.",
    badges: ["Alta Vazão", "Fácil Manutenção", "Resistente UV"],
    msg: "Olá! Tenho interesse no Filtro para Piscina.",
    cta: "Quero um Orçamento",
  },
  {
    img: solarPanels,
    title: "Sistemas de Energia Solar Fotovoltaica",
    desc: "Painéis solares de alta eficiência para reduzir até 95% da sua conta de energia. Projeto personalizado, instalação profissional e monitoramento remoto.",
    badges: ["Até 95% de economia", "Painéis Tier 1", "Monitoramento 24h"],
    msg: "Olá! Gostaria de um projeto de energia solar.",
    cta: "Solicitar Projeto Solar",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Nossos Produtos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Soluções <span className="text-gradient-sky">Premium</span> em Energia
          </h2>
          <p className="text-muted-foreground">
            Tecnologia de ponta com design e durabilidade incomparáveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="frost glow-card rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-3 py-1 rounded-full border border-sky/30 text-sky bg-sky/5"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <a
                  href={wa(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {p.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
