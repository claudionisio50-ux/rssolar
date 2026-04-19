import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Calculator } from "@/components/site/Calculator";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SectionDivider } from "@/components/site/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Painel Solar — Energia Solar Premium em Cabo Frio, RJ" },
      {
        name: "description",
        content:
          "Equipamentos solares de alta performance, aquecedores e filtros para piscina em Cabo Frio e região. Projeto, instalação e suporte especializado.",
      },
      { property: "og:title", content: "RS Painel Solar — Energia Solar Premium em Cabo Frio" },
      {
        property: "og:description",
        content:
          "Sistemas fotovoltaicos, aquecedores e filtros para piscina. Economize até 95% na conta de luz com tecnologia solar premium.",
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
