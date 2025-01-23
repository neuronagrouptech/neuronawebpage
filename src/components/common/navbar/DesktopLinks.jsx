import React from "react";
import Solutions from "./Solutions";
import LanguageSelector from "../../utils/LanguajeSelector";
import { Link } from "react-router-dom";

const DesktopLinks = ({ handleModalOpen, t, isScrolled, handleScrollToSection  }) => (
  <ul className="hidden h-10 items-center md:flex space-x-6">
    {["home", "about", "services", "cases", "partners"].map((section) => (
      <li key={section}>
        <button
          onClick={() => handleScrollToSection(section)}
          className={`text-whiteNeurona text-sm md:text-base font-helvetica hover:text-blueGreen transition-colors ${
            isScrolled ? "text-white" : ""
          }`}
        >
          {t(`NavBar.${section.charAt(0).toUpperCase() + section.slice(1)}`)}
        </button>
      </li>
    ))}
    <li>
      <Solutions handleModalOpen={handleModalOpen} />
    </li>
    <li>
      <Link
        to="/courses"
        className="text-whiteNeurona text-sm md:text-base font-helvetica hover:text-blueGreen transition-colors"
      >
       {/*  {t("NavBar.Academia")} */}
       Academia
      </Link>
    </li>
    <li>
      <LanguageSelector />
    </li>
    <li>
      <button
          onClick={() => handleScrollToSection("contact")}
        className={`hidden md:block px-6 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
          isScrolled
            ? "bg-darkLeft text-whiteNeurona hover:bg-blueGreen"
            : "bg-whiteNeurona text-darkGrayNeurona hover:bg-blueGreen hover:text-whiteNeurona"
        }`}
      >
        {t("NavBar.Contact")}
      </button>
    </li>
  </ul>
);

export default DesktopLinks;
