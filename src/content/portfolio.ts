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
    title: "Residência — exemplo de layout",
    city: "Cabo Frio - RJ (exemplo)",
    propertyType: "Residencial",
    power: "6,6 kWp (exemplo)",
    image: "https://placehold.co/1200x900/062041/f6c945?text=Imagem+placeholder%0AResidencial",
    alt: "Imagem placeholder para um projeto residencial de energia solar",
    isIllustrative: true,
  },
  {
    title: "Empresa — exemplo de layout",
    city: "Região dos Lagos - RJ (exemplo)",
    propertyType: "Comercial",
    power: "18,2 kWp (exemplo)",
    image: "https://placehold.co/1200x900/0a315c/f6c945?text=Imagem+placeholder%0AComercial",
    alt: "Imagem placeholder para um projeto comercial de energia solar",
    isIllustrative: true,
  },
  {
    title: "Propriedade rural — exemplo de layout",
    city: "Interior do RJ (exemplo)",
    propertyType: "Rural",
    power: "12,0 kWp (exemplo)",
    image: "https://placehold.co/1200x900/103b53/f6c945?text=Imagem+placeholder%0ARural",
    alt: "Imagem placeholder para um projeto rural de energia solar",
    isIllustrative: true,
  },
];
