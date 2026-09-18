"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { socialIcons } from "./icons";
import { getProfile } from "@/content";

const SECTIONS = ["about", "experience", "projects", "contact"] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as "en" | "pt";
  const profile = getProfile(locale);
  const [open, setOpen] = useState(false);

  const GithubIcon = socialIcons.github;
  const github = profile.socials.find((s) => s.key === "github");

  return (
    <header className="header-glass sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          <span className="text-layer-application">_</span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={18} />
            </a>
          )}
          <LocaleSwitcher />
        </div>

        <button
          type="button"
          className="font-mono text-sm md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 font-mono text-sm">
            {SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className="text-muted transition-colors hover:text-foreground"
              >
                {t(section)}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted"
              >
                <GithubIcon size={18} />
              </a>
            )}
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
