import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useLanguage } from "~/contexts/LanguageContext";

const NavBar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "text-sm font-medium cursor-pointer hover:underline";

  return (
    <nav className="bg-surface px-4 md:px-12  border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl m-auto py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Gabriel Bento
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={base}>
            {t.nav.about}
          </a>
          <a href="#services" className={base}>
            {t.nav.services}
          </a>
          <a href="#experience" className={base}>
            {t.nav.experience}
          </a>
          <a href="#projects" className={base}>
            {t.nav.projects}
          </a>
          <a href="#contact" className={base}>
            Contact
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

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Gabriel Bento
            </h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
            >
              ×
            </button>
          </div>
          
          {/* Navigation items */}
          <div className="px-6 py-8">
            <nav className="flex flex-col ">
              <a 
                href="#about" 
                className="text-lg font-medium text-text-primary hover:text-indigo-500 transition-colors py-4 border-b border-border hover:border-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#services" 
                className="text-lg font-medium text-text-primary hover:text-indigo-500 transition-colors py-4 border-b border-border hover:border-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.services}
              </a>
              <a 
                href="#experience" 
                className="text-lg font-medium text-text-primary hover:text-indigo-500 transition-colors py-4 border-b border-border hover:border-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.experience}
              </a>
              <a 
                href="#projects" 
                className="text-lg font-medium text-text-primary hover:text-indigo-500 transition-colors py-4 "
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.projects}
              </a>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
