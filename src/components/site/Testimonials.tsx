import { motion } from "framer-motion";
import { BadgeCheck, FileSearch, Handshake, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: FileSearch,
    title: "Consumo bem compreendido",
    text: "A decisão começa com a leitura da sua conta, do seu perfil de uso e das características do imóvel.",
  },
  {
    icon: BadgeCheck,
    title: "Proposta explicada",
    text: "Você consegue comparar o investimento, a estimativa e os próximos passos com mais clareza.",
  },
  {
    icon: Handshake,
    title: "Atendimento próximo",
    text: "Use o WhatsApp para centralizar dúvidas e avançar na conversa de forma simples.",
  },
  {
    icon: ShieldCheck,
    title: "Decisão mais segura",
    text: "Uma avaliação técnica é o caminho para confirmar viabilidade e dimensionamento.",
  },
];

export function Testimonials() {
  return (
    <section id="seguranca" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">
            Para decidir com segurança
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Mais clareza em cada <span className="text-gradient-sky">etapa do projeto</span>
          </h2>
          <p className="text-muted-foreground">
            Sem promessas genéricas: a melhor proposta começa quando os dados do seu imóvel são
            analisados.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost glow-card rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-sky/10 border border-sky/30 text-sky mb-5">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
