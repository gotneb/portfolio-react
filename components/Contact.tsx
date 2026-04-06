"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionDivider from "./SectionDivider";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/gotneb", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-bento-da-silva", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Gabriel36509504", label: "Twitter" },
];

export default function Contact() {
  const { t, language } = useLanguage();
  const isCJK = language === "zh";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(232,54,74,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">{t.contact.title}</h2>
          <SectionDivider variant="star" />
          <p
            className="mt-4 text-base"
            style={{
              color: "var(--text-muted)",
              fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
            }}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto fade-in-section">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              required
              className="form-input"
              style={{
                fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
              }}
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              required
              className="form-input"
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              required
              rows={6}
              className="form-input resize-none"
              style={{
                fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
              }}
            />

            {/* Status messages */}
            {status === "success" && (
              <p
                className="text-sm text-center py-2 rounded-lg"
                style={{
                  color: "var(--accent-jade)",
                  background: "rgba(78,205,196,0.08)",
                  border: "1px solid rgba(78,205,196,0.2)",
                }}
              >
                {t.contact.successMessage}
              </p>
            )}
            {status === "error" && (
              <p
                className="text-sm text-center py-2 rounded-lg"
                style={{
                  color: "var(--accent-primary)",
                  background: "rgba(232,54,74,0.08)",
                  border: "1px solid rgba(232,54,74,0.2)",
                }}
              >
                {t.contact.errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full mt-2"
              disabled={status === "sending"}
              style={{
                fontFamily: isCJK ? "Noto Sans SC, sans-serif" : undefined,
                opacity: status === "sending" ? 0.7 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              <Send size={16} />
              {status === "sending" ? t.contact.sending : t.contact.sendButton}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-color)" }}
            />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-color)" }}
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => e.preventDefault()}
                aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent-secondary)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent-secondary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-color)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-24 pt-8 text-center"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <p
          className="text-xs tracking-wide"
          style={{ color: "var(--text-muted)" }}
        >
          Built with Next.js · TailwindCSS · Cormorant Garamond ·{" "}
          <span style={{ color: "var(--accent-secondary)" }}>♦</span>
        </p>
      </div>
    </section>
  );
}
