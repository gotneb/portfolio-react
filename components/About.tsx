"use client";

import { Trophy } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

export default function About() {
  const { t, language } = useLanguage();

  const isCJK = language === "zh";

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">{t.about.title}</h2>
          <SectionDivider />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 fade-in-section">
          {/* Bio */}
          <div className="text-center flex flex-col gap-4">
            <p
              className="text-lg leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
              }}
            >
              {t.about.bio}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
              }}
            >
              {t.about.bio2}
            </p>
          </div>

          {/* Experience Badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              border: "1px solid var(--accent-secondary)",
              background: "rgba(201,168,76,0.06)",
              boxShadow: "var(--glow-gold)",
            }}
          >
            <Trophy
              size={20}
              style={{ color: "var(--accent-secondary)" }}
            />
            <span
              className="font-semibold text-sm tracking-wide"
              style={{ color: "var(--accent-secondary)" }}
            >
              {t.about.experience}
            </span>
          </div>

          {/* Languages */}
          <div className="w-full flex flex-col items-center gap-6">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {t.about.languagesTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {t.about.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="card-hover flex items-center gap-2 px-4 py-2 rounded-full cursor-default"
                  style={{
                    background: "var(--bg-overlay)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <Image
                    src={lang.flagImage}
                    alt={lang.name}
                    width={24}
                    height={24}
                    className="rounded-sm object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <span
                      className="text-sm font-medium leading-tight"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: isCJK
                          ? "Noto Sans SC, sans-serif"
                          : undefined,
                      }}
                    >
                      {lang.name}
                    </span>
                    <span
                      className="text-xs leading-tight"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
