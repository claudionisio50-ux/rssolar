import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { portfolioProjects } from "@/content/portfolio";
import { Calculator } from "@/components/site/Calculator";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SectionDivider } from "@/components/site/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Painel Solar | Energia Solar em Cabo Frio e Região" },
      {
        name: "description",
        content:
          "Simule sua economia com energia solar e receba uma análise personalizada para sua casa, empresa ou propriedade rural em Cabo Frio e região.",
      },
      { property: "og:title", content: "RS Painel Solar | Simule sua economia" },
      {
        property: "og:description",
        content:
          "Energia solar sob medida para o seu imóvel. Envie sua conta de luz e receba uma análise personalizada.",
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
        {portfolioProjects.length > 0 && (
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
      </main>
      <Footer />
    </div>
  );
}
