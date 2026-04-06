"use client";

import { Globe, Smartphone, Server, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

const SERVICE_ICONS = [Globe, Smartphone, Server, Palette];

export default function Services() {
  const { t, language } = useLanguage();
  const isCJK = language === "zh";

  return (
    <section id="services" className="relative py-24 z-10">
      {/* Section background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(78,205,196,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">{t.services.title}</h2>
          <SectionDivider />
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{
              color: "var(--text-muted)",
              fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.services.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-section">
          {t.services.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <div
                key={item.title}
                className="card-hover card-bg rounded-xl p-8 flex flex-col gap-4"
                style={{
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--accent-secondary)" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display font-semibold text-xl"
                  style={{
                    color: "var(--text-primary)",
                    fontVariant: "small-caps",
                    letterSpacing: "0.05em",
                    fontFamily: isCJK
                      ? "Noto Sans SC, sans-serif"
                      : "Cormorant Garamond, serif",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
                  }}
                >
                  {item.description}
                </p>

                {/* Accent line */}
                <div
                  className="w-8 h-0.5 rounded-full mt-auto"
                  style={{ background: "var(--accent-secondary)", opacity: 0.5 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
