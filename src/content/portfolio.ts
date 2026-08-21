export type SolarSolution = {
  /** Título comercial da solução apresentada no site-modelo. */
  title: string;
  /** Perfil de imóvel atendido pela solução. */
  propertyType: string;
  /** Tipos de público ou de imóvel para os quais a solução é indicada. */
  audience: string;
  /** Principal objetivo que a solução pode atender. */
  focus: string;
  /** Imagem ilustrativa da solução de energia solar. */
  image: string;
  /** Texto acessível que descreve a imagem. */
  alt: string;
};

export const solarSolutions: SolarSolution[] = [
  {
    title: "Soluções para residências",
    propertyType: "Residencial",
    audience: "Casas, apartamentos e condomínios",
    focus: "Economia e geração no telhado",
    image: "/portfolio/residencial.webp",
    alt: "Solução de energia solar para uma residência",
  },
  {
    title: "Soluções para empresas",
    propertyType: "Comercial",
    audience: "Lojas, empresas e galpões",
    focus: "Mais previsibilidade de custos",
    image: "/portfolio/comercial.jpg",
    alt: "Solução de energia solar para uma edificação comercial",
  },
  {
    title: "Soluções para área rural",
    propertyType: "Rural",
    audience: "Sítios, fazendas e propriedades rurais",
    focus: "Autonomia para a operação",
    image: "/portfolio/rural.webp",
    alt: "Solução de energia solar para uma propriedade rural",
  },
];
