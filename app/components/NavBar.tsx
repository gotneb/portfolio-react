import { useState } from "react";
import { PiCoffee } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
  const [language, setLanguage] = useState<"pt" | "en">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "text-sm font-medium cursor-pointer hover:underline";

  return (
    <nav className="bg-surface px-4 border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl m-auto py-4 flex items-center justify-between">
        <PiCoffee className="text-2xl" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex center-items gap-6">
          <a href="#about" className={`${base}`}>
            About
          </a>
          <a href="#services" className={`${base}`}>
            Services
          </a>
          <a href="#experience" className={`${base}`}>
            Experience
          </a>
          <a href="#projects" className={`${base}`}>
            Projects
          </a>
        </div>

        {/* Language toggle button */}
        <div className="flex flex-row items-center gap-4">
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

          {/* Hamburg menu*/}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-text-secondary p-1 bg-surface border border-border rounded-sm text-3xl cursor-pointer md:hidden">
            {menuOpen ? <CgClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
