import { motion } from "framer-motion";
import { FileText, MessageCircleMore, Settings2, SunMedium } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Envie sua conta",
    text: "Informe sua faixa de consumo ou envie a última conta pelo WhatsApp.",
  },
  {
    icon: Settings2,
    title: "Receba a análise",
    text: "Entenda uma estimativa de economia e o direcionamento inicial para o seu caso.",
  },
  {
    icon: MessageCircleMore,
    title: "Converse com especialista",
    text: "Tire dúvidas e alinhe o projeto com a necessidade do seu imóvel.",
  },
  {
    icon: SunMedium,
    title: "Avance com segurança",
    text: "Tenha uma proposta explicada para decidir com clareza.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 relative bg-[#071a35]/55">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Como funciona</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Clareza antes de <span className="text-gradient-sky">decidir</span>
          </h2>
          <p className="text-muted-foreground">
            Uma jornada simples para transformar a sua conta de luz em uma decisão mais bem
            informada.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="frost rounded-2xl p-6 relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-5xl font-display text-sky/10">
                0{index + 1}
              </span>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-sky/10 border border-sky/30 text-sky mb-6">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
