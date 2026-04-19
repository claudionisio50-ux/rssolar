import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcelo Almeida",
    role: "Cliente residencial — Cabo Frio",
    text: "Instalaram o sistema solar na minha casa em menos de uma semana. Conta de luz despencou! Atendimento impecável do início ao fim, equipe muito profissional.",
  },
  {
    name: "Juliana Souza",
    role: "Pousada em Búzios",
    text: "Aquecedor solar para a piscina da pousada foi um divisor de águas. Hóspedes elogiam a temperatura o ano todo e a economia foi enorme. Recomendo de olhos fechados.",
  },
  {
    name: "Roberto Lima",
    role: "Comércio local — Arraial do Cabo",
    text: "Projeto fotovoltaico para minha loja foi entregue exatamente como prometido. Time da RS Painel Solar é atencioso, transparente e domina muito o assunto.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            O que nossos <span className="text-gradient-sky">clientes dizem</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full frost text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-foreground/90">5.0 — 32 avaliações no Google Maps</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="frost glow-card rounded-2xl p-7 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + idx * 0.08, type: "spring" }}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <blockquote className="text-foreground/85 text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </blockquote>
              <figcaption>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
