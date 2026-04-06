"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

export default function Experience() {
  const { t, language } = useLanguage();
  const isCJK = language === "zh";

  return (
    <section id="experience" className="relative py-24 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">{t.experience.title}</h2>
          <SectionDivider />
          <p
            className="mt-4 text-base"
            style={{
              color: "var(--text-muted)",
              fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {t.experience.items.map((item, index) => (
            <div
              key={item.company}
              className="relative flex gap-6 pb-12 last:pb-0 fade-in-section"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot mt-1.5" />
                {index < t.experience.items.length - 1 && (
                  <div
                    className="flex-1 w-px mt-3"
                    style={{ background: "var(--border-color)", minHeight: "40px" }}
                  />
                )}
              </div>

              {/* Right: Content */}
              <div
                className="flex-1 rounded-xl p-6"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Company + Date */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-display font-semibold text-xl leading-tight"
                    style={{
                      color: "var(--text-primary)",
                      fontVariant: "small-caps",
                      letterSpacing: "0.04em",
                      fontFamily: isCJK
                        ? "Noto Sans SC, sans-serif"
                        : "Cormorant Garamond, serif",
                    }}
                  >
                    {item.company}
                  </h3>
                  <span
                    className="text-xs font-mono tabular-nums whitespace-nowrap"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.start} — {item.end}
                  </span>
                </div>

                {/* Role */}
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "var(--accent-secondary)" }}
                >
                  {item.role}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2 text-sm leading-relaxed"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: isCJK
                          ? "Noto Sans SC, sans-serif"
                          : undefined,
                      }}
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent-secondary)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
