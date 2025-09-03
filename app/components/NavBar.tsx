import { useState, useEffect } from "react";
import { PiCoffee } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
  const [language, setLanguage] = useState<"pt" | "en">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "text-sm font-medium cursor-pointer hover:underline";

  return (
    <nav className="bg-surface px-4 md:px-12  border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl m-auto py-4 flex items-center justify-between">
        <PiCoffee className="text-2xl" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={base}>
            About
          </a>
          <a href="#services" className={base}>
            Services
          </a>
          <a href="#experience" className={base}>
            Experience
          </a>
          <a href="#projects" className={base}>
            Projects
          </a>
        </div>

        {/* Language toggle and mobile menu */}
        <div className="flex items-center gap-4">
          {/* Language button */}
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="w-8 h-8 rounded-full overflow-hidden shadow hover:scale-105 transition cursor-pointer"
          >
            <img
              src={language === "pt" ? "/images/brazil.png" : "/images/usa.png"}
              alt={language === "pt" ? "Português" : "English"}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 border border-gray-300 rounded-sm text-3xl cursor-pointer md:hidden transition-transform duration-300 ease-in-out"
          >
            <span
              className={`flex items-center justify-center transform transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? <CgClose /> : <IoIosMenu />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start px-4 py-2 gap-2">
          <a href="#about" className={base} onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href="#services"
            className={base}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#experience"
            className={base}
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={base}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
