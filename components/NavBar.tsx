"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "passions", href: "#passions" },
  { key: "contact", href: "#contact" },
] as const;

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
  { code: "pt", label: "PT" },
];

export default function NavBar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.href.slice(1))
      );
      let current = "";
      for (const section of sections) {
        if (!section) continue;
        if (section.getBoundingClientRect().top <= 100) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl font-bold tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            DEV
            <span style={{ color: "var(--accent-secondary)" }}>.</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const label = t.nav[item.key as keyof typeof t.nav];
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.key}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-link text-sm font-medium tracking-wide pb-1 ${
                      isActive ? "active" : ""
                    }`}
                    style={{
                      color: isActive
                        ? "var(--accent-secondary)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs font-semibold px-2 py-1 rounded transition-all duration-200 ${
                    language === lang.code
                      ? "font-bold"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  style={{
                    color:
                      language === lang.code
                        ? "var(--accent-secondary)"
                        : "var(--text-secondary)",
                    background:
                      language === lang.code
                        ? "rgba(201,168,76,0.1)"
                        : "transparent",
                    border:
                      language === lang.code
                        ? "1px solid rgba(201,168,76,0.3)"
                        : "1px solid transparent",
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: "var(--text-secondary)",
                background: "transparent",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: "var(--text-secondary)" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--nav-border)",
          }}
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const label = t.nav[item.key as keyof typeof t.nav];
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm font-medium py-1"
                  style={{
                    color: isActive
                      ? "var(--accent-secondary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {label}
                </button>
              );
            })}
            {/* Mobile Language Switcher */}
            <div className="flex gap-2 pt-2 border-t" style={{ borderColor: "var(--border-color)" }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMenuOpen(false);
                  }}
                  className="text-xs font-semibold px-3 py-1 rounded"
                  style={{
                    color:
                      language === lang.code
                        ? "var(--accent-secondary)"
                        : "var(--text-muted)",
                    background:
                      language === lang.code
                        ? "rgba(201,168,76,0.1)"
                        : "transparent",
                    border:
                      language === lang.code
                        ? "1px solid rgba(201,168,76,0.3)"
                        : "1px solid var(--border-color)",
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
