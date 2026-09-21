import type { ExperienceEntry } from "@/content/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Developer",
    organization: "Fully Ecosystem",
    period: "Jun 2025 – Jul 2026",
    description:
      "Built the Fully app — a health and wellness platform for a Prudential-backed startup used by tens of thousands of people — with React Native, native Kotlin/Swift modules, and a NestJS + PostgreSQL/MongoDB back end. Redesigned authentication with ForgeRock (40% faster), integrated Samsung Health, Apple Health, and Health Connect, and built the Next.js admin tooling.",
    highlights: [
      "Personalized weekly goals system for each user, covering physical activity, nutrition, and mental health.",
      "Automatic data sync across Samsung Health, Apple Health, and Health Connect.",
      "Next.js admin modules for user management, focused on scalability.",
      "A handful of English-language meetings with Prudential teams to align on product priorities, architecture, and bug fixes — day-to-day work was with the local, Portuguese-speaking team.",
    ],
  },
  {
    role: "Full Stack Developer",
    organization: "DNA Center",
    period: "Apr 2022 – Jun 2025",
    description:
      "Led the development team technically — architecture, coding standards, code reviews — on systems used daily by 300+ employees across 40 laboratory units. Built the company's design system from scratch, a real-time lab queuing system (50% faster patient service), cloud storage for millions of medical documents, and CI/CD with Jest and GitHub Actions.",
    highlights: [
      "Blood sample microbiological tracking system, focused on traceability and quality control.",
      "Automations with Puppeteer and Selenium, eliminating repetitive manual tasks for hundreds of employees.",
      "Internal task-management tool (Scrum/Kanban), inspired by Jira/Trello, built from scratch to streamline the teams' workflow.",
      "Employee productivity dashboard with automated calculations and dynamic visualizations tied to operational data.",
      "Billing reconciliation platform for insurance partners, centralizing data and automating previously manual processes.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    organization: "AvaliarMe",
    period: "Feb 2023 – Jun 2025 · alongside DNA Center",
    description:
      "Freelance work done in parallel with my full-time role at DNA Center. Built and maintained web apps for 50+ businesses (1,000+ people impacted) with Next.js, Tailwind CSS, and Firebase — interactive clinical dashboards, WhatsApp Business API integration, and automated deploys on Vercel.",
    highlights: [
      "Interactive clinical dashboards with automatic report generation and personalized PDFs per profile.",
      "Cron jobs for recurring tasks, like scheduled emails and messages.",
    ],
  },
];
