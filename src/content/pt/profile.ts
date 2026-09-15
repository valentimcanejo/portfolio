import type { Profile } from "@/content/types";

export const profile: Profile = {
  name: "Rômulo Valentim",
  role: "Desenvolvedor Fullstack",
  tagline: "Construo em toda a stack — do pixel ao banco de dados.",
  bio: [
    "Sou desenvolvedor fullstack baseado no Brasil, trabalhando com front-ends em React/TypeScript e serviços em Node, com foco crescente na infraestrutura que sustenta tudo isso.",
    "Gosto de projetos que me obrigam a passar por todas as camadas de uma vez — uma UI, a API por trás dela e os dados dos quais ela depende — porque é aí que eu aprendo mais.",
  ],
  location: "Brasil",
  email: "valentim.canejo@hotmail.com",
  socials: [
    { key: "github", url: "https://github.com/valentimcanejo" },
    {
      key: "linkedin",
      url: "https://www.linkedin.com/in/r%C3%B4mulo-valentim-a48b75218/",
    },
    { key: "instagram", url: "https://www.instagram.com/_rvalentim/" },
  ],
};
