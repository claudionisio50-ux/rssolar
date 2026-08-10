import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP = "https://wa.me/558296686750";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+Fran%C3%A7a+609+Jardim+Cai%C3%A7ara+Cabo+Frio+RJ";

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Fale conosco</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Pronto para <span className="text-gradient-sky">economizar?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Atendimento personalizado via WhatsApp. Tire suas dúvidas e receba seu orçamento sem compromisso.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg animate-pulse-glow"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Conversar no WhatsApp
          </a>

          <div className="grid md:grid-cols-3 gap-5 mt-16 text-left">
            <InfoCard icon={MapPin} title="Endereço">
              Rua França, 609 - Lj 01<br />Jardim Caiçara, Cabo Frio - RJ
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="block mt-2 text-sky text-sm hover:underline">
                Ver no Google Maps →
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Horário">
              Segunda a Sexta<br />10h às 18h
            </InfoCard>
            <InfoCard icon={Phone} title="Telefone / WhatsApp">
              (21) 96491-3395
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block mt-2 text-sky text-sm hover:underline">
                Abrir conversa →
              </a>
            </InfoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="frost glow-card rounded-2xl p-6">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-sky/10 border border-sky/30 text-sky mb-3">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
