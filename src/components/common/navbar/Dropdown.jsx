import React from "react";
import Escala from "../../assets/tech/escala.png";
import Primeur from "../../assets/tech/primeur-Data-One.jpg";
import AI from "../../assets/tech/codegpt.png";
import { useTranslation } from "react-i18next";

const DropdownItem = ({ title, handleClick }) => (
  <li
    className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors cursor-pointer"
    onClick={handleClick}
  >
    <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">{title}</h3>
  </li>
);


const Dropdown = ({ handleModalOpen }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownItems = [
    {
      title: t("NavBar.Technology.Escala.Title"),
      subtitle: t("Dropdown.Technology.Escala.Title"),
      description: t("Dropdown.Technology.Escala.Description"),
      image: Escala,
      modalTitle: t("Dropdown.Technology.Escala.ModalTitle"),
    },
    {
      title: t("NavBar.Technology.Code.Title"),
      subtitle: t("Dropdown.Technology.CodeGPT.Title"),
      description: t("Dropdown.Technology.CodeGPT.Description"),
      image: AI,
      modalTitle: t("Dropdown.Technology.CodeGPT.ModalTitle"),
    },
    {
      title: t("NavBar.Technology.Primeur.Title"),
      subtitle: t("Dropdown.Technology.Primeur.Title"),
      description: t("Dropdown.Technology.Primeur.Description"),
      image: Primeur,
      modalTitle: t("Dropdown.Technology.Primeur.ModalTitle"),
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
