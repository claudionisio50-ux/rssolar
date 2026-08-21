export type PortfolioProject = {
  /** Título sem expor dados pessoais do cliente, por exemplo: "Residência em Cabo Frio". */
  title: string;
  /** Cidade e, se desejado, bairro da instalação. */
  city: string;
  /** Residencial, Comercial ou Rural. */
  propertyType: string;
  /** Potência instalada, por exemplo: "6,6 kWp". */
  power: string;
  /** Caminho ou URL da foto real autorizada pelo cliente. */
  image: string;
  /** Texto acessível descrevendo a foto real. */
  alt: string;
  /** Quando verdadeiro, sinaliza que o card é apenas um modelo visual. */
  isIllustrative?: boolean;
};

/**
 * Esta prévia está ativa somente para visualizar o layout. Antes de publicar o
 * portfólio comercial, substitua os itens por instalações reais e defina este
 * valor como false.
 */
export const portfolioPreviewMode = true;

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Residência — visual de portfólio",
    city: "Cabo Frio - RJ (exemplo)",
    propertyType: "Residencial",
    power: "6,6 kWp (exemplo)",
    image: "/portfolio/residencial.webp",
    alt: "Painéis solares instalados sobre o telhado de uma residência",
    isIllustrative: true,
  },
  {
    title: "Empresa — visual de portfólio",
    city: "Região dos Lagos - RJ (exemplo)",
    propertyType: "Comercial",
    power: "18,2 kWp (exemplo)",
    image: "/portfolio/comercial.jpg",
    alt: "Técnico em instalação de painéis solares na cobertura de uma edificação comercial",
    isIllustrative: true,
  },
  {
    title: "Propriedade rural — visual de portfólio",
    city: "Interior do RJ (exemplo)",
    propertyType: "Rural",
    power: "12,0 kWp (exemplo)",
    image: "/portfolio/rural.webp",
    alt: "Painéis solares instalados em área rural",
    isIllustrative: true,
  },
];
