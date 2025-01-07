import React, { useState, useEffect } from "react";
import Logo from "../assets/LOGO.avif";
import LanguageSelector from "../utils/LanguajeSelector";
import { useTranslation } from "react-i18next";

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
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 px-8 py-7 flex items-center justify-between ${
        isScrolled ? "bg-darkLeft bg-opacity-50" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo Neurona"
        className="w-40 h-12 object-contain mx-auto md:mx-0 md:ml-28"
      />

      {/* Desktop Links */}
      <ul className="hidden h-12 items-center md:flex space-x-8">
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className={`text-whiteNeurona text-base md:text-lg lg:text-xl font-helvetica hover:text-blueGreen transition-colors ${
              isScrolled ? "text-white" : ""
            }`}
          >
            {t("NavBar.Home")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-whiteNeurona text-base md:text-lg lg:text-xl font-helvetica hover:text-blueGreen transition-colors ${
              isScrolled ? "text-white" : ""
            }`}
          >
            {t("NavBar.About")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-whiteNeurona text-base md:text-lg lg:text-xl font-helvetica hover:text-blueGreen transition-colors ${
              isScrolled ? "text-white" : ""
            }`}
          >
            {t("NavBar.Services")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("cases")}
            className={`text-whiteNeurona text-base md:text-lg lg:text-xl font-helvetica hover:text-blueGreen transition-colors ${
              isScrolled ? "text-white" : ""
            }`}
          >
            {t("NavBar.Cases")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("partners")}
            className={`text-whiteNeurona text-base md:text-lg lg:text-xl font-helvetica hover:text-blueGreen transition-colors ${
              isScrolled ? "text-white" : ""
            }`}
          >
            {t("NavBar.Partners")}
          </button>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="hidden md:block">
        <LanguageSelector />
      </div>

      {/* Contact Button for Desktop */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`hidden md:block w-40 h-12 mr-28 ${
          isScrolled
            ? "bg-darkLeft text-whiteNeurona"
            : "bg-whiteNeurona text-darkGrayNeurona"
        } text-sm md:text-base rounded-full hover:bg-blueGreen hover:text-whiteNeurona transition`}
      >
        {t("NavBar.Contact")}
      </button>

      {/* Hamburger Menu Button */}
      <button
        className={`md:hidden text-whiteNeurona text-2xl ${
          isScrolled ? "text-white" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-darkLeft bg-opacity-95 text-whiteNeurona flex flex-col items-center space-y-6 py-6 z-50">
          <button
            className="text-sm font-helvetica hover:text-blueGreen transition-colors"
            onClick={() => {
              scrollToSection("home");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.Home")}
          </button>
          <button
            className="text-sm font-helvetica hover:text-blueGreen transition-colors"
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.About")}
          </button>
          <button
            className="text-sm font-helvetica hover:text-blueGreen transition-colors"
            onClick={() => {
              scrollToSection("services");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.Services")}
          </button>
          <button
            className="text-sm font-helvetica hover:text-blueGreen transition-colors"
            onClick={() => {
              scrollToSection("cases");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.Cases")}
          </button>
          <button
            className="text-sm font-helvetica hover:text-blueGreen transition-colors"
            onClick={() => {
              scrollToSection("partners");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.Partners")}
          </button>

          {/* Language Selector in Mobile Menu */}
          <div>
            <LanguageSelector />
          </div>

          <button
            className="px-5 py-2 bg-whiteNeurona text-darkGrayNeurona text-sm rounded-full hover:bg-darkLeft hover:text-whiteNeurona transition"
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
          >
            {t("NavBar.Contact")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
