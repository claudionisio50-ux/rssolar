# Como preencher o portfólio RS Painel Solar

O site foi preparado para exibir apenas instalações **reais** e autorizadas. Quando houver fotos disponíveis, inclua cada instalação em `src/content/portfolio.ts` usando este modelo:

```ts
{
  title: "Residência em Cabo Frio",
  city: "Cabo Frio - RJ",
  propertyType: "Residencial",
  power: "6,6 kWp",
  image: "/caminho-da-foto-real.jpg",
  alt: "Instalação de painéis solares em residência de Cabo Frio",
}
```

Para cada case, registre a cidade, o tipo de imóvel, a potência instalada e uma foto com autorização de uso. Evite expor nome, endereço completo, fatura de energia ou qualquer outro dado pessoal do cliente.

Depois de adicionar pelo menos um item, a seção **Projetos reais** será exibida automaticamente na página inicial. Para fotos recebidas por WhatsApp, mantenha o arquivo em boa resolução e prefira imagens horizontais ou com enquadramento amplo da instalação.
