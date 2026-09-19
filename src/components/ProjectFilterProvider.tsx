"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Layer } from "@/content/types";

interface ProjectFilterContextValue {
  activeLayer: Layer | null;
  setActiveLayer: (layer: Layer | null) => void;
}

const ProjectFilterContext = createContext<ProjectFilterContextValue | null>(null);

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);

  return (
    <ProjectFilterContext.Provider value={{ activeLayer, setActiveLayer }}>
      {children}
    </ProjectFilterContext.Provider>
  );
}

export function useProjectFilter() {
  const ctx = useContext(ProjectFilterContext);
  if (!ctx) {
    throw new Error("useProjectFilter must be used within a ProjectFilterProvider");
  }
  return ctx;
}
