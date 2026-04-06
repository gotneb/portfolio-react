"use client";

import { useEffect } from "react";
import StarField from "@/components/StarField";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";

export default function Home() {
  // Scroll-triggered fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Fixed starfield background */}
      <StarField />

      {/* Navigation */}
      <NavBar />

      {/* Sections */}
      <Hero />

      {/* Section separator */}
      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <About />

      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <Services />

      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <Experience />

      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <Projects />

      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <Passions />

      <div
        className="relative z-10 w-full h-px"
        style={{ background: "var(--border-color)" }}
      />

      <Contact />
    </main>
  );
}
