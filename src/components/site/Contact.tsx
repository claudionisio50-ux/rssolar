import { motion } from "framer-motion";
import { FileText, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP =
  "https://wa.me/5521980234909?text=Olá!%20Quero%20enviar%20minha%20conta%20de%20luz%20para%20uma%20análise.";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua+Brasil+710+Sao+Cristovao+Cabo+Frio+RJ";

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
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Próximo passo</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Envie sua conta de luz e <span className="text-gradient-sky">comece a análise</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Pelo WhatsApp, você pode compartilhar a sua última conta, tirar dúvidas e receber o
            direcionamento inicial para o seu imóvel.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg animate-pulse-glow"
          >
            <WhatsAppIcon className="h-6 w-6" /> Enviar minha conta no WhatsApp
          </a>
          <div className="grid md:grid-cols-3 gap-5 mt-16 text-left">
            <InfoCard icon={FileText} title="O que enviar">
              A última conta de luz e a cidade onde fica o imóvel.
            </InfoCard>
            <InfoCard icon={MapPin} title="Atendimento">
              Rua França, 609 - Lj 01
              <br />
              Jardim Caiçara, Cabo Frio - RJ
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-sky text-sm hover:underline"
              >
                Ver no Google Maps →
              </a>
            </InfoCard>
            <InfoCard icon={Phone} title="WhatsApp">
              (21) 98023-4909
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-sky text-sm hover:underline"
              >
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
