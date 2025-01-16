import React from "react";
import Escala from "../../assets/tech/escala.png";
import Primeur from "../../assets/tech/primeur.png";
import AI from "../../assets/tech/codegpt.png";
import { useTranslation } from "react-i18next";

const DropdownItem = ({ title, handleClick }) => (
  <li
    className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors cursor-pointer"
    onClick={handleClick}
  >    <div>
      <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">{title}</h3>
    </div>
  </li>
);

const Dropdown = ({ handleModalOpen }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownItems = [
    {
      title: t("NavBar.Technology.Escala.Title"),
      description:
        "El CRM con IA, WhatsApp y herramientas de marketing integradas para vender más y mejor. Promueve tus servicios y multiplica tus ventas con un CRM que sí es fácil de usar.",
      image: Escala,
      modalTitle: "Escala",
    },
    {
      title: t("NavBar.Technology.Code.Title"),
      description:
        "Explore our AI Code Assistants and Copilot Generator Platform, tailored for AI coding. We offer the perfect solution, specifically designed to make it simple for the engineering teams to code using AI.",
      image: AI,
      modalTitle: "CodeGPT",
    },
    {
      title: t("NavBar.Technology.Primeur.Title"),
      description:
        "PRIMEUR DATA ONE® is our Hybrid Data Integration Platform, developed based on 35 years’ experience managing the data of the most important Fortune 500 companies worldwide.",
      image: Primeur,
      modalTitle: "Primeur",
    },
  ];

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Dropdown button */}
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

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-darkLeft bg-opacity-95 z-50 rounded-lg shadow-lg">
          <ul className="w-72 rounded-lg shadow-lg">
            {dropdownItems.map((item) => (
              <DropdownItem
                key={item.modalTitle}
                title={item.title}
                description={item.description}
                image={item.image}
                handleClick={() =>
                  handleModalOpen(item.modalTitle, item.description, item.image)
                }
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
