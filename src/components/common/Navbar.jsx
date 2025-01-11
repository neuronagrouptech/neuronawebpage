import React, { useState, useEffect } from "react";
import Logo from "../assets/LOGO.avif";
import LanguageSelector from "../utils/LanguajeSelector";
import { useTranslation } from "react-i18next";
import Dropdown from "../common/utills/Dropdown";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" }); // Cambiado a "start"
    }
  };

  const NavLink = ({ section }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`text-whiteNeurona text-sm md:text-base font-helvetica hover:text-blueGreen transition-colors ${
        isScrolled ? "text-white" : ""
      }`}
    >
      {t(`NavBar.${section.charAt(0).toUpperCase() + section.slice(1)}`)}
    </button>
  );

  const DesktopLinks = () => (
    <ul className="hidden h-10 items-center md:flex space-x-6">
      {["home", "about", "services", "cases", "partners"].map((section) => (
        <li key={section}>
          <NavLink section={section} />
        </li>
      ))}
      <li>
        <Dropdown />
      </li>
      <li>
        <LanguageSelector />
      </li>
    </ul>
  );

  const MobileMenu = () => (
    <div className="absolute top-16 left-0 w-full bg-darkLeft bg-opacity-95 text-whiteNeurona flex flex-col items-center space-y-4 py-6 z-50">
      {["home", "about", "services", "cases", "partners"].map((section) => (
        <button
          key={section}
          className="text-base font-helvetica hover:text-blueGreen transition-colors"
          onClick={() => {
            scrollToSection(section);
            setIsMenuOpen(false);
          }}
        >
          {t(`NavBar.${section.charAt(0).toUpperCase() + section.slice(1)}`)}
        </button>
      ))}
      <Dropdown />
      <LanguageSelector />
      <button
        className="px-6 py-2 bg-whiteNeurona text-darkGrayNeurona text-sm rounded-full hover:bg-blueGreen hover:text-whiteNeurona transition"
        onClick={() => {
          scrollToSection("contact");
          setIsMenuOpen(false);
        }}
      >
        {t("NavBar.Contact")}
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 px-8 py-5 flex items-center justify-between transition-colors duration-300 ${
        isScrolled
          ? "bg-darkLeft bg-opacity-80 backdrop-blur"
          : "bg-transparent"
      }`}
      style={{ height: "64px" }} // Establecemos una altura fija para el navbar
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo Neurona"
        className="w-36 h-10 object-contain mx-auto md:mx-0 md:ml-20"
      />

      {/* Desktop Links */}
      <DesktopLinks />

      {/* Contact Button for Desktop */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`hidden md:block px-6 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
          isScrolled
            ? "bg-darkLeft text-whiteNeurona hover:bg-blueGreen"
            : "bg-whiteNeurona text-darkGrayNeurona hover:bg-blueGreen hover:text-whiteNeurona"
        }`}
      >
        {t("NavBar.Contact")}
      </button>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-whiteNeurona text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
