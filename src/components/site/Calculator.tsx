import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LockKeyhole, Send } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

const STATES = [
  { uf: "RJ", name: "Rio de Janeiro", irr: 5.0 },
  { uf: "SP", name: "São Paulo", irr: 4.9 },
  { uf: "MG", name: "Minas Gerais", irr: 5.4 },
  { uf: "ES", name: "Espírito Santo", irr: 5.1 },
  { uf: "BA", name: "Bahia", irr: 5.8 },
  { uf: "CE", name: "Ceará", irr: 5.9 },
  { uf: "PE", name: "Pernambuco", irr: 5.7 },
  { uf: "DF", name: "Distrito Federal", irr: 5.6 },
  { uf: "GO", name: "Goiás", irr: 5.5 },
  { uf: "PR", name: "Paraná", irr: 4.7 },
  { uf: "SC", name: "Santa Catarina", irr: 4.6 },
  { uf: "RS", name: "Rio Grande do Sul", irr: 4.8 },
];

const TARIFF = 0.75;
const COST_PER_KWP = 4500;
const SAVINGS_RATE = 0.9;
const fmt = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Calculator() {
  const [bill, setBill] = useState(450);
  const [propertyType, setPropertyType] = useState("Residencial");
  const [stateUf, setStateUf] = useState("RJ");
  const [lead, setLead] = useState({ name: "", phone: "", city: "" });

  const result = useMemo(() => {
    const state = STATES.find((item) => item.uf === stateUf) ?? STATES[0];
    const systemKwp = bill / TARIFF / 30 / state.irr;
    const systemCost = systemKwp * COST_PER_KWP;
    const monthlySavings = bill * SAVINGS_RATE;
    const annualSavings = monthlySavings * 12;
    const paybackMonths = systemCost / monthlySavings;
    return {
      monthlySavings,
      annualSavings,
      totalSavings25: annualSavings * 25,
      paybackYears: Math.floor(paybackMonths / 12),
      paybackRemMonths: Math.round(paybackMonths % 12),
      systemKwp,
    };
  }, [bill, stateUf]);

  const waLink = whatsappLink(
    [
      "Olá! Fiz uma simulação de energia solar pelo site.",
      `Nome: ${lead.name || "não informado"}`,
      `WhatsApp: ${lead.phone || "não informado"}`,
      `Cidade: ${lead.city || "não informada"}`,
      `Tipo de imóvel: ${propertyType}`,
      `Conta de luz aproximada: ${fmt(bill)}`,
      `Economia estimada: ${fmt(result.monthlySavings)} por mês.`,
      "Quero receber uma análise personalizada.",
    ].join("\n"),
  );
  const normalizedPhone = lead.phone.replace(/\D/g, "");
  const hasRequiredLeadData = lead.name.trim().length >= 2 && normalizedPhone.length >= 10;

  return (
    <section id="calculadora" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Simulador inteligente</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Veja o potencial de <span className="text-gradient-sky">economia</span> do seu imóvel
          </h2>
          <p className="text-muted-foreground">
            Use os valores como estimativa inicial e receba uma análise personalizada no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        >
          <div className="lg:col-span-3 frost rounded-2xl p-8 md:p-10 glow-card">
            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <label className="text-sm font-medium text-foreground/90">
                    Conta de luz mensal
                  </label>
                  <span className="font-display text-2xl text-gradient-sky">{fmt(bill)}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={10}
                  value={bill}
                  onChange={(event) => setBill(Number(event.target.value))}
                  className="w-full accent-sky h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>R$ 100</span>
                  <span>R$ 2.000</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground/90 mb-3 block">
                  Tipo de imóvel
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Residencial", "Comercial", "Rural"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${propertyType === type ? "btn-hero" : "btn-outline-glow"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground/90 mb-3 block">Estado</label>
                <select
                  value={stateUf}
                  onChange={(event) => setStateUf(event.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#061936] border border-sky/40 text-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30 transition"
                >
                  {STATES.map((state) => (
                    <option key={state.uf} value={state.uf} className="bg-[#061936]">
                      {state.name} ({state.uf})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl p-8 frost glow-intense relative overflow-hidden border border-sky/35">
            <p className="text-sky text-xs uppercase tracking-[0.25em] mb-6">
              Sua estimativa inicial
            </p>
            <div className="space-y-5">
              <Stat label="Economia mensal" value={fmt(result.monthlySavings)} highlight />
              <Stat label="Economia anual" value={fmt(result.annualSavings)} />
              <Stat
                label="Payback estimado"
                value={`${result.paybackYears} anos e ${result.paybackRemMonths} meses`}
              />
              <Stat label="Economia em 25 anos" value={fmt(result.totalSavings25)} />
            </div>
            <div className="mt-8 pt-6 border-t border-border/70 space-y-3">
              <p className="font-display text-lg font-semibold">Receba sua análise pelo WhatsApp</p>
              <input
                value={lead.name}
                onChange={(event) => setLead({ ...lead, name: event.target.value })}
                placeholder="Seu nome *"
                aria-label="Seu nome"
                className="lead-input"
              />
              <input
                value={lead.phone}
                onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                placeholder="Seu WhatsApp *"
                aria-label="Seu WhatsApp"
                inputMode="tel"
                className="lead-input"
              />
              <input
                value={lead.city}
                onChange={(event) => setLead({ ...lead, city: event.target.value })}
                placeholder="Sua cidade"
                className="lead-input"
              />
              {hasRequiredLeadData ? (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full font-semibold"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Receber análise no WhatsApp{" "}
                  <Send className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full font-semibold bg-white/10 text-white/45 cursor-not-allowed border border-white/10"
                >
                  Informe nome e WhatsApp para continuar
                </button>
              )}
              <p className="flex gap-2 text-[10px] text-muted-foreground leading-relaxed">
                <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-sky" /> Seus dados serão usados
                apenas para iniciar o atendimento pelo WhatsApp.
              </p>
            </div>
            <p className="text-[10px] text-muted-foreground mt-5 leading-relaxed">
              Estimativa baseada em irradiação solar média, tarifa de R$ 0,75/kWh e 90% de
              compensação. Valores finais dependem de análise técnica e equipamentos selecionados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p
        className={`font-display font-semibold ${highlight ? "text-3xl md:text-4xl text-gradient-sky" : "text-xl md:text-2xl text-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
}
