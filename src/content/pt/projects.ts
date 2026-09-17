import type { Project } from "@/content/types";

// Lista curada de projetos pessoais (mais recentes primeiro) — apenas
// descrições reais e confirmadas. Decisões de seleção e enquadramento estão
// registradas na memória do projeto.
export const projects: Project[] = [
  {
    slug: "price-tracker",
    title: "Price Tracker",
    role: "Next.js · TypeScript · Firebase",
    summary:
      "Uma ferramenta de monitoramento de preços que acompanha produtos na Amazon, Mercado Livre, Magazine Luiza e KaBuM!, fazendo scraping diário e enviando um alerta no Telegram sempre que o preço cai abaixo de uma meta.",
    layers: ["interface", "application", "data"],
    tech: ["nextjs", "typescript", "firebase", "vercel"],
    repoUrl: "https://github.com/valentimcanejo/price-tracker",
    notes: [
      "Scraping com Cheerio e rotação de user-agent para evitar bloqueios das lojas.",
      "Agendado com Vercel Cron; histórico de preços salvo no Firebase Firestore.",
      "Dashboard compara lojas e mostra gráfico do histórico de preços, com detecção do menor preço histórico.",
      "Proteção anti-spam: não repete o alerta para o mesmo preço em 24 horas.",
    ],
    year: 2026,
  },
  {
    slug: "info-shield",
    title: "Info Shield",
    role: "React Native (Expo) · Kotlin · Swift",
    summary:
      "Um desafio técnico feito para entrar na Fully Ecosystem: um app Expo/React Native com autenticação e validação de formulário, um módulo nativo escrito em Kotlin e Swift, e troca de tema dentro do app.",
    layers: ["interface", "application"],
    tech: ["reactnative", "kotlin", "swift", "nodejs"],
    repoUrl: "https://github.com/valentimcanejo/info-shield",
    notes: [
      "Formulários e validação com React Hook Form.",
      "Backend mockado com json-server, restrito ao escopo do desafio.",
      "Resultou na contratação como Full Stack Developer na Fully Ecosystem.",
    ],
    year: 2025,
  },
  {
    slug: "smart-lab",
    title: "Smart Lab",
    role: "React Native (Expo) · TypeScript · NestJS",
    summary:
      "Um app mobile para o domínio laboratorial, acompanhado de um serviço de backend dedicado em NestJS.",
    layers: ["interface", "application"],
    tech: ["reactnative", "typescript", "nestjs"],
    repoUrl: "https://github.com/valentimcanejo/smart-lab",
    notes: [
      "Serviço de backend (smart-lab-backend) construído com NestJS, em um repositório separado.",
    ],
    year: 2025,
  },
  {
    slug: "uber-app",
    title: "Uber App",
    role: "React Native (Expo) · Kotlin · Firebase",
    summary:
      "Um app no estilo de transporte por aplicativo com integração real de localização do Google — geolocalização em tempo real, mapas interativos e autocomplete de endereço.",
    layers: ["interface", "application"],
    tech: ["reactnative", "kotlin", "firebase"],
    repoUrl: "https://github.com/valentimcanejo/uber-app",
    notes: [
      "Usa expo-location, react-native-maps, react-native-google-places-autocomplete e react-native-geocoding.",
      "Inclui um módulo nativo em Kotlin.",
    ],
    year: 2024,
  },
  {
    slug: "codepix",
    title: "CodePix",
    role: "Go · Domain-Driven Design",
    summary:
      "Um projeto do curso Full Cycle: um sistema de pagamentos estilo Pix construído em Go com arquitetura em camadas (domain-driven design) — um estudo de arquitetura, não um design de produto original.",
    layers: ["application", "data"],
    tech: ["go"],
    repoUrl: "https://github.com/valentimcanejo/codepix",
    year: 2024,
  },
  {
    slug: "barber-shop",
    title: "Barber Shop",
    role: "Next.js · TypeScript",
    summary:
      "Um projeto para um cliente real: um site feito para uma barbearia, hoje no ar como a página do Google Business da loja.",
    layers: ["interface"],
    tech: ["nextjs", "typescript"],
    repoUrl: "https://github.com/valentimcanejo/barber-shop",
    demoUrl: "https://barber-shop-alpha-eight.vercel.app",
    year: 2023,
  },
];
