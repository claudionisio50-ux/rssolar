# Luminous Coast

Build a premium dark luxury single-page website in Brazilian Portuguese for RS Painel Solar — a solar energy equipment supplier and pool equipment seller located in Cabo Frio, RJ, Brazil. Phone/WhatsApp: (21) 96491-3395. Address: Rua França, 609 - Lj 01 - Jardim Caiçara, Cabo Frio - RJ. Business hours: Monday–Friday 10:00–18:00.

DESIGN IDENTITY — LUXURY DARK:

This site must feel like a premium brand. Think Tesla meets high-end solar tech.

Background: deep dark navy #050d1a and midnight blue #071428

Accent colors: sky blue #38bdf8, electric blue #0ea5e9, ice white #e0f2fe

Fonts: Playfair Display for headings (Google Fonts), Inter for body text

Effects: subtle glowing borders on cards (box-shadow: 0 0 18px rgba(56,189,248,0.18)), smooth entrance animations with Framer Motion, frosted glass cards (backdrop-filter: blur(12px); background: rgba(7,20,40,0.7))

Thin gold/sky-blue separator lines between sections

Every section should feel cinematic and intentional

PAGES / SECTIONS:

1. Hero — full screen

Animated background: slow-moving subtle solar rays or particle field in dark blue tones

Logo: "RS Painel Solar" in Playfair Display, sky blue

Headline: "Energia Solar de Alta Performance para Sua Casa e Empresa"

Subheadline: "Equipamentos premium com instalação e suporte especializado em Cabo Frio e região."

Two CTA buttons: "Solicitar Orçamento" → WhatsApp https://wa.me/5521964913395 and "Calcular Economia" → smooth scroll to calculator

Subtle badge: ⭐ 5.0 — 32 avaliações no Google

2. Products — three separate luxury cards

Card 1 — Aquecedor Solar de Piscina

Fictitious hero image: a sleek modern dark-tiled pool with a solar thermal panel system visible on a rooftop behind it, blue sky, luxury feel

Title: "Aquecedor Solar de Piscina"

Description: "Mantenha sua piscina na temperatura ideal o ano todo com tecnologia solar de alta eficiência. Economia de até 90% em relação ao aquecedor elétrico."

Specs badges: Eficiência 95%, Vida útil 25 anos, Garantia 5 anos

CTA: "Quero um Orçamento" → WhatsApp pre-filled: "Olá! Tenho interesse no Aquecedor Solar de Piscina."

Card 2 — Filtro para Piscina

Fictitious hero image: crystal-clear turquoise pool water, modern pool equipment visible, high-end residential setting

Title: "Filtro de Alta Performance para Piscina"

Description: "Filtragem superior para uma piscina sempre limpa e cristalina. Sistema de filtragem de alta vazão com durabilidade comprovada."

Specs badges: Alta Vazão, Fácil Manutenção, Resistente UV

CTA: "Quero um Orçamento" → WhatsApp pre-filled: "Olá! Tenho interesse no Filtro para Piscina."

Card 3 — Equipamentos de Energia Solar

Fictitious hero image: modern solar panels installed on a contemporary home rooftop, golden hour lighting, premium aesthetic

Title: "Sistemas de Energia Solar Fotovoltaica"

Description: "Painéis solares de alta eficiência para reduzir até 95% da sua conta de energia. Projeto personalizado, instalação profissional e monitoramento remoto."

Specs badges: Até 95% de economia, Painéis Tier 1, Monitoramento 24h

CTA: "Solicitar Projeto Solar" → WhatsApp pre-filled: "Olá! Gostaria de um projeto de energia solar."

3. Solar Savings Calculator — "Calcule Sua Economia Solar"

Build a fully functional interactive calculator with luxury dark styling:

Inputs:

Monthly electricity bill (R$ slider: R$100 to R$2.000)

Property type: Residential / Commercial / Rural

State (dropdown — use average solar irradiation per region)

Calculation logic:

Average solar system generates savings of 85–95% of electricity bill

System payback period: bill × 12 months × 0.9 / (system cost estimate)

Estimate system cost: R$4.500 per kWp, average consumption derived from bill ÷ 0.85 ÷ local tariff (use R$0.75/kWh as default)

25-year total savings projection

Output card (glowing sky-blue border):

Monthly savings: R$ X

Annual savings: R$ X

System payback: X years X months

25-year total savings: R$ X

CTA button: "Quero esse projeto!" → WhatsApp pre-filled with: "Olá! Calculei uma economia de R$[valor]/mês com energia solar. Pode me enviar um orçamento?"

4. Testimonials — "O que nossos clientes dizem"

Display Google reviews as luxury frosted-glass cards with animated star ratings. Rating badge: ⭐ 5.0 — 32 avaliações no Google Maps. Use 3 generic but realistic testimonials for Cabo Frio region since real reviews aren't available — make them feel authentic for solar energy clients.

5. Why RS Painel Solar — "Por que nos escolher?"

Icon grid with sky-blue glowing icons:

Mais de 32 clientes satisfeitos

Atendimento em Cabo Frio e região

Equipamentos de alta qualidade

Projeto e instalação profissional

Suporte pós-venda garantido

Empresa inclusiva e acolhedora

6. Contact + Footer

Large glowing WhatsApp button

Address: Rua França, 609 - Lj 01 - Jardim Caiçara, Cabo Frio - RJ

Hours: Segunda a Sexta, 10h às 18h

Google Maps link

Copyright: © 2025 RS Painel Solar — Todos os direitos reservados

TECHNICAL:

Fully mobile responsive

Sticky header: logo left + WhatsApp CTA button right (glowing blue)

Smooth scroll between all sections

Entrance animations: fade-up on scroll for each section

All WhatsApp links → https://wa.me/5521964913395

Google Fonts: Playfair Display + Inter

Cola esse prompt no Lovable e vai sair algo que vai deixar o cliente com o queixo no chão! 🚀 A calculadora de economia já vem como isca — ele vai querer finalizar na hora.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rssolar.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/263952b9-b215-44e4-b1d0-31086a4220ad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
