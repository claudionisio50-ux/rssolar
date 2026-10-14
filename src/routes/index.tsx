import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { solarSolutions } from "@/content/portfolio";
import { Calculator } from "@/components/site/Calculator";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SectionDivider } from "@/components/site/SectionDivider";
import { ShowcaseCta } from "@/components/site/ShowcaseCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solar Prime | Modelo de site para empresas de energia solar" },
      {
        name: "description",
        content:
          "Modelo demonstrativo de site profissional para empresas de energia solar, com calculadora, portfólio e atendimento pelo WhatsApp.",
      },
      { property: "og:title", content: "Solar Prime | Modelo de site para energia solar" },
      {
        property: "og:description",
        content:
          "Um exemplo de site personalizado para apresentar serviços de energia solar e gerar contatos pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <Process />
        {solarSolutions.length > 0 && (
          <>
            <SectionDivider />
            <Projects />
            <SectionDivider />
          </>
        )}
        <Calculator />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Contact />
        <SectionDivider />
        <ShowcaseCta />
      </main>
      <Footer />
    </div>
  );
}
