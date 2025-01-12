import React, { useState } from "react";
import Escala from "../../assets/partners/escala.svg";
import Primeur from "../../assets/partners/primeur.svg";
import AI from "../../assets/partners/codegpt-logo.svg";
import { useTranslation } from "react-i18next";

const Dropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className="relative w-full flex justify-center items-center">
{/* Botón de despliegue */}
<button
    className="text-whiteNeurona font-medium text-base py-3 px-4 w-auto text-center rounded-lg hover:shadow-lg flex items-center justify-center transition-colors bg-transparent"
    onClick={toggleDropdown}
  >
        <span>{t("NavBar.Technology.Title")}</span>
    <svg
      className={`fill-current h-5 w-5 transform transition-transform ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </button>

      {/* Menú desplegable */}
      {isOpen && (
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-darkLeft bg-opacity-95 z-50 rounded-lg shadow-lg">
    <ul className="w-72 rounded-lg shadow-lg">
      {/* Elemento 1 */}
      <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
        <img
          src={Escala}
          alt="CRM"
          className="h-12 w-12 object-contain"
        />
        <div>
          <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
            {t("NavBar.Technology.Escala.Title")}
          </h3>
          <p className="text-grayNeurona text-xs lg:text-sm leading-relaxed">
            {t("NavBar.Technology.Escala.Subtitle")}
          </p>
        </div>
      </li>

      {/* Elemento 2 */}
      <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
        <img
          src={AI}
          alt="AI Coding"
          className="h-12 w-12 object-contain"
        />
        <div>
          <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
            {t("NavBar.Technology.Code.Title")}
          </h3>
          <p className="text-grayNeurona text-xs lg:text-sm leading-relaxed">
            {t("NavBar.Technology.Code.Subtitle")}
          </p>
        </div>
      </li>

      {/* Elemento 3 */}
      <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
        <img
          src={Primeur}
          alt="Primeur"
          className="h-12 w-12 object-contain"
        />
        <div>
          <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
            {t("NavBar.Technology.Primeur.Title")}
          </h3>
          <p className="text-grayNeurona text-xs lg:text-sm leading-relaxed">
            {t("NavBar.Technology.Primeur.Subtitle")}
          </p>
        </div>
      </li>
    </ul>
  </div>
)}
    </div>
  );
};

export default Dropdown;
