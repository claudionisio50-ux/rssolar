import { motion } from "framer-motion";
import poolHeater from "@/assets/pool-heater.jpg";
import poolFilter from "@/assets/pool-filter.jpg";
import solarPanels from "@/assets/solar-panels.jpg";
import { ShoppingCart } from "lucide-react";

const waSolar = (msg: string) =>
  `https://wa.me/5584998142458?text=${encodeURIComponent(msg)}`;

const products = [
  {
    img: poolHeater,
    title: "Aquecedor Solar de Piscina",
    desc: "Mantenha sua piscina na temperatura ideal o ano todo com tecnologia solar de alta eficiência. Economia de até 90% em relação ao aquecedor elétrico.",
    badges: ["Eficiência 95%", "Vida útil 25 anos", "Garantia 5 anos"],
    cta: "Comprar no Mercado Livre",
    ctaLink: "https://mercadolivre.com.br",
    isMercadoLivre: true,
  },
  {
    img: poolFilter,
    title: "Filtro de Alta Performance para Piscina",
    desc: "Filtragem superior para uma piscina sempre limpa e cristalina. Sistema de filtragem de alta vazão com durabilidade comprovada.",
    badges: ["Alta Vazão", "Fácil Manutenção", "Resistente UV"],
    cta: "Comprar no Mercado Livre",
    ctaLink: "https://mercadolivre.com.br",
    isMercadoLivre: true,
  },
  {
    img: solarPanels,
    title: "Equipamentos de Energia Solar Fotovoltaica",
    desc: "Painéis solares, inversores e componentes de alta eficiência para montar seu próprio sistema. Equipamentos Tier 1 com garantia de fabrica.",
    badges: ["Painéis Tier 1", "Inversores certificados", "Garantia fabricante"],
    cta: "Quero os Equipamentos",
    ctaLink: waSolar("Olá! Tenho interesse nos equipamentos de energia solar. Pode me passar mais informações?"),
    isMercadoLivre: false,
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
              className="frost glow-card product-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#0369a1]">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-3 py-1 rounded-full border border-sky/30 text-sky bg-sky/5 transition-all duration-300 group-hover:bg-sky/15 group-hover:border-sky/60"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                {p.isMercadoLivre ? (
                  <a
                    href={p.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mercadolivre inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm"
                    style={{ backgroundColor: "#FFE600", color: "#333" }}
                  >
                    <ShoppingCart className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                    {p.cta}
                  </a>
                ) : (
                  <a
                    href={p.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
