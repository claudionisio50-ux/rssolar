import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";

type VerifiedProject = {
  title: string;
  location: string;
  category: string;
  systemSize: string;
  image: string;
  alt: string;
};

/**
 * Adicione somente cases autorizados e verificáveis: cidade, tipo de imóvel,
 * potência/escopo e uma foto real com autorização de uso.
 */
const verifiedProjects: VerifiedProject[] = [];

export function Projects() {
  if (verifiedProjects.length === 0) return null;

  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Projetos realizados</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Instalações que mostram <span className="text-gradient-sky">o cuidado no projeto</span>
          </h2>
          <p className="text-muted-foreground">
            Cases com informações verificáveis, apresentados com autorização de cada cliente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {verifiedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost glow-card overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sky text-xs uppercase tracking-[0.18em] mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-sky" /> {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-sky" /> {project.systemSize}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
