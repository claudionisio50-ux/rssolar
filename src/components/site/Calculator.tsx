import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

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

const TARIFF = 0.75; // R$/kWh
const COST_PER_KWP = 4500;
const SAVINGS_RATE = 0.9; // 90%

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Calculator() {
  const [bill, setBill] = useState(450);
  const [propertyType, setPropertyType] = useState("Residencial");
  const [stateUf, setStateUf] = useState("RJ");

  const result = useMemo(() => {
    const state = STATES.find((s) => s.uf === stateUf) ?? STATES[0];
    const monthlyConsumptionKwh = bill / TARIFF; // kWh/month
    const dailyKwh = monthlyConsumptionKwh / 30;
    const systemKwp = dailyKwh / state.irr; // approximate kWp needed
    const systemCost = systemKwp * COST_PER_KWP;

    const monthlySavings = bill * SAVINGS_RATE;
    const annualSavings = monthlySavings * 12;
    const paybackMonths = systemCost / monthlySavings;
    const paybackYears = Math.floor(paybackMonths / 12);
    const paybackRemMonths = Math.round(paybackMonths - paybackYears * 12);
    const totalSavings25 = annualSavings * 25;

    return {
      monthlySavings,
      annualSavings,
      paybackYears,
      paybackRemMonths,
      totalSavings25,
      systemKwp,
      systemCost,
    };
  }, [bill, stateUf]);

  const waLink = `https://wa.me/5584998142458?text=${encodeURIComponent(
    `Olá! Calculei uma economia de ${fmt(result.monthlySavings)}/mês. Quero saber mais sobre os equipamentos!`,
  )}`;

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
          <p className="text-sky text-sm uppercase tracking-[0.3em] mb-3">Simulador</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Calcule Sua <span className="text-gradient-sky">Economia Solar</span>
          </h2>
          <p className="text-muted-foreground">
            Descubra quanto você pode economizar com equipamentos fotovoltaicos próprios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        >
          {/* Inputs */}
          <div className="lg:col-span-3 frost rounded-2xl p-8 md:p-10 glow-card">
            <div className="space-y-8">
              {/* Bill slider */}
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
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full accent-sky h-2 cursor-pointer"
                  style={{ accentColor: "#38bdf8" }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>R$ 100</span>
                  <span>R$ 2.000</span>
                </div>
              </div>

              {/* Property type */}
              <div>
                <label className="text-sm font-medium text-foreground/90 mb-3 block">
                  Tipo de imóvel
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Residencial", "Comercial", "Rural"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setPropertyType(t)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        propertyType === t
                          ? "btn-hero"
                          : "btn-outline-glow"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* State */}
              <div>
                <label className="text-sm font-medium text-foreground/90 mb-3 block">
                  Estado
                </label>
                <select
                  value={stateUf}
                  onChange={(e) => setStateUf(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sky/40 text-foreground focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30 transition"
                >
                  {STATES.map((s) => (
                    <option key={s.uf} value={s.uf} className="bg-white">
                      {s.name} ({s.uf})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-2 rounded-2xl p-8 frost glow-intense relative overflow-hidden"
               style={{ borderColor: "rgba(56,189,248,0.5)" }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-sky/30 blur-3xl pointer-events-none" />
            <p className="text-sky text-xs uppercase tracking-[0.25em] mb-6">Sua economia estimada</p>

            <div className="space-y-5">
              <Stat label="Economia mensal" value={fmt(result.monthlySavings)} highlight />
              <Stat label="Economia anual" value={fmt(result.annualSavings)} />
              <Stat
                label="Payback do sistema"
                value={`${result.paybackYears} anos ${result.paybackRemMonths} meses`}
              />
              <Stat label="Economia em 25 anos" value={fmt(result.totalSavings25)} />
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold"
            >
              Quero os equipamentos para esse sistema!
            </a>
            <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed">
              * Estimativa baseada em irradiação solar média do estado, tarifa de R$ 0,75/kWh e 90% de compensação. Valores finais variam conforme equipamentos selecionados.
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
        className={`font-display font-semibold ${
          highlight ? "text-3xl md:text-4xl text-gradient-sky" : "text-xl md:text-2xl text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
