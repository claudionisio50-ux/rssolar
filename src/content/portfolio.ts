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
};

/**
 * Insira nesta lista apenas instalações reais e autorizadas pela RS Painel Solar.
 * Enquanto a lista estiver vazia, o portfólio não aparece no site — evitando
 * imagens ilustrativas ou informações que poderiam induzir o visitante ao erro.
 */
export const portfolioProjects: PortfolioProject[] = [];
