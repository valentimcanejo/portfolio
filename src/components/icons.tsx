import type { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaVuejs,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGolang,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiThreedotjs,
  SiMaterialdesign,
  SiElectron,
  SiJson,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiKotlin,
  SiSwift,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import type { TechKey, SocialKey } from "@/content/types";

export const techIcons: Record<TechKey, IconType> = {
  react: FaReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  vue: FaVuejs,
  threejs: SiThreedotjs,
  mui: SiMaterialdesign,
  nodejs: FaNodeJs,
  java: FaJava,
  electron: SiElectron,
  ethereum: FaEthereum,
  json: SiJson,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  go: FaGolang,
  reactnative: SiExpo,
  kotlin: SiKotlin,
  swift: SiSwift,
  nestjs: SiNestjs,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  vercel: SiVercel,
};

export const socialIcons: Record<SocialKey, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: HiOutlineMail,
};
