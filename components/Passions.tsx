"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

export default function Passions() {
  const { t, language } = useLanguage();
  const isCJK = language === "zh";
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const items = t.passions.items;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 250);
    },
    [isTransitioning]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + items.length) % items.length);
  }, [current, items.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % items.length);
  }, [current, items.length, goTo]);

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % items.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, items.length]);

  const item = items[current];

  return (
    <section id="passions" className="relative py-24 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(78,205,196,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">{t.passions.title}</h2>
          <SectionDivider />
          <p
            className="mt-4 text-base"
            style={{
              color: "var(--text-muted)",
              fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.passions.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto fade-in-section">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              className="flex flex-col md:flex-row"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.25s ease",
              }}
            >
              {/* Left: Gradient Image */}
              <div
                className={`relative md:w-1/2 min-h-64 md:min-h-96 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 60%)",
                  }}
                />
                <span className="text-8xl relative z-10 select-none drop-shadow-lg">
                  {item.icon}
                </span>
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-center gap-4 p-8 md:p-12">
                <span className="text-4xl">{item.icon}</span>
                <h3
                  className="font-display font-bold text-3xl leading-tight"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: isCJK
                      ? "Noto Sans SC, sans-serif"
                      : "Cormorant Garamond, serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Prev/Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`carousel-dot ${i === current ? "active" : "inactive"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Autoplay */}
            <button
              onClick={() => setAutoPlay((a) => !a)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: autoPlay
                  ? "rgba(201,168,76,0.15)"
                  : "var(--bg-overlay)",
                border: autoPlay
                  ? "1px solid var(--accent-secondary)"
                  : "1px solid var(--border-color)",
                color: autoPlay
                  ? "var(--accent-secondary)"
                  : "var(--text-muted)",
              }}
              aria-label={autoPlay ? "Pause autoplay" : "Start autoplay"}
            >
              {autoPlay ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
