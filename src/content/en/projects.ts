import type { Project } from "@/content/types";

// Curated personal-projects shortlist (newest first) — real, confirmed
// descriptions only. Selection and framing decisions live in project memory.
export const projects: Project[] = [
  {
    slug: "lumen",
    title: "Lumen",
    role: "React Native (Expo)",
    summary:
      "A multilingual (PT/EN/ES) mobile microlearning app: 10–15 minute sessions across 12 knowledge tracks (philosophy, history, psychology, science, and more), designed and built end to end — product, UI design, development, and marketing.",
    layers: ["interface", "application", "data"],
    tech: ["reactnative", "typescript", "gluestack", "firebase"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.valentimcanejo.lumen",
    notes: [
      "Lesson cycle: short cards, a quiz to reinforce it, then a summary.",
      "XP, levels, daily streaks, and achievements.",
      "Premium tier: audio narration, AI-generated weekly/monthly progress reports, a personal glossary, and track-completion certificates.",
      "Closed-source personal product — no public repository.",
    ],
    year: 2026,
  },
  {
    slug: "price-tracker",
    title: "Price Tracker",
    role: "Next.js · TypeScript · Firebase",
    summary:
      "A price-monitoring tool that tracks products across Amazon, Mercado Livre, Magazine Luiza, and KaBuM!, scraping prices daily and sending a Telegram alert whenever one drops below a target.",
    layers: ["interface", "application", "data"],
    tech: ["nextjs", "typescript", "firebase", "vercel"],
    repoUrl: "https://github.com/valentimcanejo/price-tracker",
    notes: [
      "Scrapes with Cheerio and rotates user-agents to avoid store blocks.",
      "Scheduled with Vercel Cron; price history stored in Firebase Firestore.",
      "Dashboard compares stores and charts price history, including historical-low detection.",
      "Anti-spam guard: won't re-alert for the same price within 24 hours.",
    ],
    year: 2026,
  },
  {
    slug: "forge",
    title: "Forge",
    role: "React Native (Expo) · Next.js",
    summary:
      "A diet- and workout-tracking app, available on both web and mobile, letting people log meals and training sessions in one shared product.",
    layers: ["interface", "application"],
    tech: ["reactnative", "nextjs", "typescript"],
    repoUrl: "https://github.com/valentimcanejo/forge",
    year: 2026,
  },
  {
    slug: "info-shield",
    title: "Info Shield",
    role: "React Native (Expo) · Kotlin · Swift",
    summary:
      "A take-home technical challenge built to join Fully Ecosystem: an Expo/React Native app with authentication and form validation, a native module written in Kotlin and Swift, and in-app theme switching.",
    layers: ["interface", "application"],
    tech: ["reactnative", "kotlin", "swift", "nodejs"],
    repoUrl: "https://github.com/valentimcanejo/info-shield",
    notes: [
      "Form handling and validation with React Hook Form.",
      "Backend mocked with json-server, scoped to the challenge.",
      "Led to being hired as a Full Stack Developer at Fully Ecosystem.",
    ],
    year: 2025,
  },
  {
    slug: "smart-lab",
    title: "Smart Lab",
    role: "React Native (Expo) · TypeScript · NestJS",
    summary:
      "A mobile app for the laboratory domain, paired with a dedicated NestJS backend service.",
    layers: ["interface", "application"],
    tech: ["reactnative", "typescript", "nestjs"],
    repoUrl: "https://github.com/valentimcanejo/smart-lab",
    notes: [
      "Companion backend service (smart-lab-backend) built with NestJS, in a separate repository.",
    ],
    year: 2025,
  },
  {
    slug: "uber-app",
    title: "Uber App",
    role: "React Native (Expo) · Kotlin · Firebase",
    summary:
      "A ride-hailing style app with real Google location integration — live geolocation, interactive maps, and address autocomplete.",
    layers: ["interface", "application"],
    tech: ["reactnative", "kotlin", "firebase"],
    repoUrl: "https://github.com/valentimcanejo/uber-app",
    notes: [
      "Uses expo-location, react-native-maps, react-native-google-places-autocomplete, and react-native-geocoding.",
      "Includes a native Kotlin module.",
    ],
    year: 2024,
  },
  {
    slug: "codepix",
    title: "CodePix",
    role: "Go · Domain-Driven Design",
    summary:
      "A Full Cycle course project: a Pix-style payment system built in Go with a layered, domain-driven design architecture — an architecture study, not an original product design.",
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
      "A real client project: a website built for a barbershop, now live as the shop's Google Business listing page.",
    layers: ["interface"],
    tech: ["nextjs", "typescript"],
    repoUrl: "https://github.com/valentimcanejo/barber-shop",
    demoUrl: "https://barber-shop-alpha-eight.vercel.app",
    year: 2023,
  },
  {
    slug: "nest-app",
    title: "Nest App",
    role: "NestJS · TypeScript",
    summary:
      "A basic backend-only API built with NestJS, including a JWT-based authentication system.",
    layers: ["application"],
    tech: ["nestjs", "typescript"],
    repoUrl: "https://github.com/valentimcanejo/nest-app",
    year: 2023,
  },
  {
    slug: "shopping-cart",
    title: "Shopping Cart",
    role: "Flutter",
    summary: "A basic shopping-cart app built with Flutter.",
    layers: ["interface"],
    tech: ["flutter", "dart"],
    repoUrl: "https://github.com/valentimcanejo/shopping_cart",
    year: 2023,
  },
  {
    slug: "binary-search-tree",
    title: "Binary Search Tree",
    role: "Java",
    summary:
      "A binary search tree implemented in Java — a data-structures exercise, not an application.",
    layers: ["data"],
    tech: ["java"],
    repoUrl: "https://github.com/valentimcanejo/binarysearchtree",
    year: 2021,
  },
];
