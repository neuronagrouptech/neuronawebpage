import React from "react";
import LanguageSelector from "../../utils/LanguajeSelector";
import Solutions from "./Solutions";

const MobileMenu = ({ handleModalOpen, t, closeMenu }) => (
  <div className="absolute top-16 left-0 w-full bg-darkLeft bg-opacity-95 text-whiteNeurona flex flex-col items-center space-y-4 py-6 z-50">
    {["home", "about", "services", "cases", "partners"].map((section) => (
      <button
        key={section}
        className="text-base font-helvetica hover:text-blueGreen transition-colors"
        onClick={() => {
          document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
          });
          closeMenu();
        }}
      >
        {t(`NavBar.${section.charAt(0).toUpperCase() + section.slice(1)}`)}
      </button>
    ))}
    <Solutions handleModalOpen={handleModalOpen} />
    <LanguageSelector />
    <button
      className="px-6 py-2 bg-whiteNeurona text-darkGrayNeurona text-sm rounded-full hover:bg-blueGreen hover:text-whiteNeurona transition"
      onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
        closeMenu();
      }}
    >
      {t("NavBar.Contact")}
    </button>
  </div>
);

export default MobileMenu;