"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center"
      style={{ paddingTop: "4rem" }}
    >
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col gap-6 lg:gap-8">
          {/* Greeting */}
          <p
            className="text-sm font-medium"
            style={{ color: "var(--accent-secondary)" }}
          >
            {t.hero.greeting}
          </p>

          {/* Name */}
          <div>
            <h1
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 12vw, 9rem)",
                color: "var(--text-primary)",
              }}
            >
              {t.hero.firstName}
            </h1>
            <h1
              className="font-display font-bold leading-none tracking-tight text-gradient-gold-red"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
            >
              {t.hero.lastName}
            </h1>
          </div>

          {/* Title */}
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {t.hero.title}
          </p>

          {/* Bio */}
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontFamily:
                language === "zh" ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.hero.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-ghost"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="order-first lg:order-last flex-shrink-0 flex flex-col items-center gap-4">
          <div
            className="portrait-glow relative rounded-full overflow-hidden flex items-center justify-center"
            style={{
              width: "clamp(220px, 30vw, 360px)",
              height: "clamp(220px, 30vw, 360px)",
              background:
                "radial-gradient(circle at 40% 35%, #1a2035 0%, #0a0e18 100%)",
              border: "3px solid var(--accent-secondary)",
            }}
          >
            {/* Decorative rings */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)",
              }}
            />
            {!imgError && (
              <Image
                src="/images/profile.jpg"
                alt={t.hero.portraitAlt}
                fill
                sizes="(max-width: 768px) 220px, 360px"
                className="object-cover object-center"
                priority
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {/* Decorative outer ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "clamp(260px, 34vw, 420px)",
              height: "clamp(260px, 34vw, 420px)",
              border: "1px dashed rgba(201,168,76,0.2)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 group"
          aria-label="Scroll to about"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            {t.hero.scrollText}
          </span>
          <ChevronDown
            size={18}
            className="animate-bounce"
            style={{ color: "var(--accent-secondary)" }}
          />
        </button>
      </div>

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />
    </section>
  );
}
