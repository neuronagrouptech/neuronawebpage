import React from "react";
import Escala from "../../assets/tech/escala.png";
import Primeur from "../../assets/tech/primeur.png";
import AI from "../../assets/tech/codegpt-logo.svg";
import { useTranslation } from "react-i18next";

const Dropdown = ({ handleModalOpen }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative w-full flex justify-center items-center">
      <button
        className="text-whiteNeurona font-medium text-base py-3 px-4 w-auto text-center rounded-lg hover:shadow-lg flex items-center justify-center transition-colors bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-darkLeft bg-opacity-95 z-50 rounded-lg shadow-lg">
          <ul className="w-72 rounded-lg shadow-lg">
            <li
              className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors"
              onClick={() =>
                handleModalOpen(
                  "Escala",
                  "El CRM con IA, WhatsApp y herramientas de marketing integradas para vender más y mejor. Promueve tus servicios y multiplica tus ventas con un CRM que sí es fácil de usar.",
                  Escala
                )
              }
            >
              <img src={Escala} alt="Escala" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
                  {t("NavBar.Technology.Escala.Title")}
                </h3>
              </div>
            </li>
            <li
              className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors"
              onClick={() =>
                handleModalOpen(
                  "CodeGPT",
                  "Explore our AI Code Assistants and Copilot Generator Platform, tailored for AI coding. We offer the perfect solution, specifically designed to make it simple for the engineering teams to code using AI.",
                  AI
                )
              }
            >
              <img src={AI} alt="CodeGPT" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
                  {t("NavBar.Technology.Code.Title")}
                </h3>
              </div>
            </li>
            <li
              className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors"
              onClick={() =>
                handleModalOpen(
                  "Primeur",
                  "PRIMEUR DATA ONE® is our Hybrid Data Integration Platform, developed based on 35 years’ experience managing the data of the most important Fortune 500 companies worldwide.",
                  Primeur
                )
              }
            >
              <img src={Primeur} alt="Primeur" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">
                  {t("NavBar.Technology.Primeur.Title")}
                </h3>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
