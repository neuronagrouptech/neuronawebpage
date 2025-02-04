import React from "react";
import Dropdown from "./Dropdown";
import LanguageSelector from "../../utils/LanguajeSelector";

const DesktopLinks = ({ handleModalOpen, t, isScrolled }) => (
  <ul className="hidden h-10 items-center md:flex space-x-6">
    {["home", "about", "services", "cases", "partners"].map((section) => (
      <li key={section}>
        <button
          onClick={() =>
            document.getElementById(section)?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={`text-whiteNeurona text-sm md:text-base font-helvetica hover:text-blueGreen transition-colors ${
            isScrolled ? "text-white" : ""
          }`}
        >
          {t(`NavBar.${section.charAt(0).toUpperCase() + section.slice(1)}`)}
        </button>
      </li>
    ))}
    <li>
      <Dropdown handleModalOpen={handleModalOpen} />
    </li>
    <li>
      <LanguageSelector />
    </li>
    <li>
    <button
  onClick={() => {
    if (typeof document !== "undefined") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  }}
  aria-label="Contact"
  className={`hidden md:block px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg border-2 ${
    isScrolled
      ? "bg-darkLeft text-whiteNeurona hover:bg-blueGreen"
      : "bg-whiteNeurona text-darkGrayNeurona border-whiteNeurona hover:bg-blueGreen hover:text-whiteNeurona"
  }`}
>
  {t("NavBar.Contact")}
</button>
    </li>
  </ul>
);

export default DesktopLinks;