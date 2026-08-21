import { motion } from "framer-motion";
import { Info, MapPin, PanelsTopLeft, Zap } from "lucide-react";
import { portfolioPreviewMode, portfolioProjects } from "@/content/portfolio";

export function Projects() {
  if (portfolioProjects.length === 0) return null;

  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">
            {portfolioPreviewMode ? "Prévia de portfólio" : "Portfólio"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            {portfolioPreviewMode ? "Visualize seus futuros " : "Projetos reais, "}
            <span className="text-gradient-sky">
              {portfolioPreviewMode ? "projetos" : "resultados visíveis"}
            </span>
          </h2>
          <p className="text-muted-foreground">
            {portfolioPreviewMode
              ? "Os cards abaixo são modelos de visualização. Troque as imagens e dados pelos projetos reais antes de publicar."
              : "Instalações concluídas pela RJ Solar, apresentadas com informações objetivas de cada projeto."}
          </p>
        </div>

        {portfolioPreviewMode && (
          <div className="max-w-3xl mx-auto mb-8 rounded-xl border border-[#f6c945]/45 bg-[#f6c945]/10 px-5 py-4 text-sm text-[#fff4c3] flex items-start gap-3">
            <Info className="h-5 w-5 shrink-0 text-sky mt-0.5" />
            <p>
              <strong>Modo de prévia ativo.</strong> Cidade, potência e imagens desta seção são
              exemplos de layout e não representam instalações realizadas.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={`${project.city}-${project.power}-${project.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost glow-card overflow-hidden rounded-2xl"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                {project.isIllustrative && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#061936]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fff4c3] border border-[#f6c945]/50">
                    Exemplo de layout
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-sky text-xs uppercase tracking-[0.18em] mb-2">
                  {project.propertyType}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-5">{project.title}</h3>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <dt className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                      <MapPin className="h-3.5 w-3.5 text-sky" /> Cidade
                    </dt>
                    <dd className="font-medium text-foreground">{project.city}</dd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <dt className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                      <Zap className="h-3.5 w-3.5 text-sky" /> Potência
                    </dt>
                    <dd className="font-medium text-foreground">{project.power}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <PanelsTopLeft className="h-4 w-4 text-sky" />
          <span>
            {portfolioPreviewMode
              ? "Substitua cada exemplo por uma instalação real autorizada."
              : "Instalações registradas com autorização de imagem."}
          </span>
        </div>
      </div>
    </section>
  );
}
