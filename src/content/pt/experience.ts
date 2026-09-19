import type { ExperienceEntry } from "@/content/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Desenvolvedor Full Stack",
    organization: "Fully Ecosystem",
    period: "Jun 2025 – Jul 2026",
    description:
      "Desenvolvi o app Fully — plataforma de saúde e bem-estar de uma startup do grupo Prudential, usada por dezenas de milhares de usuários — com React Native, módulos nativos em Kotlin/Swift e back-end em NestJS com PostgreSQL/MongoDB. Reformulei a autenticação com ForgeRock (40% mais rápida), integrei Samsung Health, Apple Health e Health Connect, e construí os módulos administrativos em Next.js.",
    highlights: [
      "Sistema de metas semanais personalizadas por usuário, cobrindo atividade física, nutrição e saúde mental.",
      "Sincronização automática de dados entre Samsung Health, Apple Health e Health Connect.",
      "Módulos administrativos em Next.js para gestão de usuários, com foco em escalabilidade.",
      "Comunicação técnica em inglês em reuniões recorrentes com diferentes times da Prudential, alinhando prioridades de produto, arquitetura e correção de bugs.",
    ],
  },
  {
    role: "Desenvolvedor Full Stack",
    organization: "DNA Center",
    period: "Abr 2022 – Jun 2025",
    description:
      "Liderei tecnicamente a equipe de desenvolvimento — arquitetura, padrões de codificação, code reviews — em sistemas usados diariamente por mais de 300 colaboradores em 40 unidades laboratoriais. Criei o Design System da empresa do zero, um sistema de chamada de fichas em tempo real (50% mais rápido), armazenamento em nuvem de milhões de documentos médicos, e CI/CD com Jest e GitHub Actions.",
    highlights: [
      "Sistema de rastreamento microbiológico de amostras de sangue, com foco em rastreabilidade e controle de qualidade.",
      "Automatizações com Puppeteer e Selenium, eliminando tarefas manuais repetitivas de centenas de funcionários.",
      "Ferramenta interna de gestão de tarefas (Scrum/Kanban), inspirada em Jira/Trello, desenvolvida do zero para otimizar o fluxo de trabalho das equipes.",
      "Dashboard de produtividade de colaboradores, com cálculos automatizados e visualizações dinâmicas integradas a dados operacionais.",
      "Plataforma de conciliação de faturamento por convênio, centralizando dados e automatizando processos antes manuais.",
    ],
  },
  {
    role: "Desenvolvedor Full Stack (Freelancer)",
    organization: "AvaliarMe",
    period: "Fev 2023 – Jun 2025 · paralelo ao DNA Center",
    description:
      "Trabalho freelance realizado em paralelo à minha posição full-time no DNA Center. Desenvolvi e mantive aplicações web para mais de 50 estabelecimentos (1.000+ pessoas impactadas) com Next.js, Tailwind CSS e Firebase — dashboards clínicos interativos, integração com a API do WhatsApp Business, e deploy automatizado na Vercel.",
    highlights: [
      "Dashboards clínicos interativos com geração automática de relatórios e PDFs personalizados por perfil.",
      "Cron jobs para tarefas recorrentes, como envio de e-mails e mensagens programadas.",
    ],
  },
];
