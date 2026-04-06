"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

// Map filter labels to category values for matching
const CATEGORY_MAP: Record<string, string[]> = {
  All: [],
  Todos: [],
  全部: [],
  Web: ["Web", "网页"],
  网页: ["Web", "网页"],
  Mobile: ["Mobile", "移动"],
  移动: ["Mobile", "移动"],
  Backend: ["Backend", "后端"],
  后端: ["Backend", "后端"],
  "Game Dev": ["Game Dev", "游戏开发"],
  游戏开发: ["Game Dev", "游戏开发"],
  Systems: ["Systems", "系统", "Sistemas"],
  系统: ["Systems", "系统", "Sistemas"],
  Sistemas: ["Systems", "系统", "Sistemas"],
};

function matchesFilter(category: string, filter: string): boolean {
  if (!filter || filter === "All" || filter === "Todos" || filter === "全部")
    return true;
  const allowedCategories = CATEGORY_MAP[filter] ?? [filter];
  return allowedCategories.some(
    (c) => c.toLowerCase() === category.toLowerCase()
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const isCJK = language === "zh";
  const [activeFilter, setActiveFilter] = useState(t.projects.filters[0]);

  // Sync filter when language changes — use index 0 (All/全部/Todos)
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filtered = t.projects.items.filter((p) =>
    matchesFilter(p.category, activeFilter)
  );

  return (
    <section id="projects" className="relative py-24 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(232,54,74,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="section-title">{t.projects.title}</h2>
          <SectionDivider />
          <p
            className="mt-4 text-base"
            style={{
              color: "var(--text-muted)",
              fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-section">
          {t.projects.filters.map((filter) => {
            const isActive =
              activeFilter === filter ||
              (filter === t.projects.filters[0] &&
                activeFilter === t.projects.filters[0]);
            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: "var(--accent-secondary)",
                        color: "#0a0c10",
                        fontWeight: 600,
                      }
                    : {
                        background: "var(--bg-overlay)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-color)",
                      }
                }
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-section">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-hover card-bg rounded-xl overflow-hidden flex flex-col"
              style={{
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Thumbnail */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient}`}
                style={{ minHeight: "12rem" }}
              >
                {/* Overlay pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.08) 10px, rgba(0,0,0,0.08) 11px)",
                  }}
                />
                {/* Project name on image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display text-3xl font-bold text-white opacity-20 select-none"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {project.name}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      color: "#fff",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3 p-5">
                <h3
                  className="font-display font-semibold text-xl leading-tight"
                  style={{ color: "var(--text-primary)", letterSpacing: "0.02em" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className="flex items-center gap-4 pt-2 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <a
                    href={project.code}
                    className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:opacity-100"
                    style={{ color: "var(--text-muted)", opacity: 0.8 }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={14} />
                    {t.projects.codeLabel}
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--accent-secondary)" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={14} />
                    {t.projects.demoLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: "var(--text-muted)" }}>No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
