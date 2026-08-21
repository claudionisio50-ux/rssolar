import { motion } from "framer-motion";
import { Building2, CircleGauge } from "lucide-react";
import { solarSolutions } from "@/content/portfolio";

export function Projects() {
  if (solarSolutions.length === 0) return null;

  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Soluções por perfil</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Energia solar para o seu <span className="text-gradient-sky">cenário</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre uma solução pensada para a realidade do seu imóvel, do seu consumo e dos seus
            objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {solarSolutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost glow-card overflow-hidden rounded-2xl"
            >
              <img
                src={solution.image}
                alt={solution.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sky text-xs uppercase tracking-[0.18em] mb-2">
                  {solution.propertyType}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-5">{solution.title}</h3>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <dt className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                      <Building2 className="h-3.5 w-3.5 text-sky" /> Indicado para
                    </dt>
                    <dd className="font-medium text-foreground">{solution.audience}</dd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <dt className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                      <CircleGauge className="h-3.5 w-3.5 text-sky" /> Objetivo
                    </dt>
                    <dd className="font-medium text-foreground">{solution.focus}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
