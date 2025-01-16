import React, { useState } from "react";
import i18n from "../trans/i18n";
import { useTranslation } from "react-i18next";
import Flag from "../common/utills/Flag"; 

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };

  const languages = [
    {
      code: "en",
      label: "English",
      countryCode: "US", 
    },
    {
      code: "es",
      label: "Español",
      countryCode: "ES", 
    },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-whiteNeurona text-sm md:text-base font-helvetica font-medium rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer hover:border border-blueGreen transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blueGreen"
      >
        <span>{t("NavBar.Language")}</span>
        <svg
          className={`h-4 w-4 ml-2 fill-current text-whiteNeurona transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293l4.293 4.293 4.293-4.293 1.414 1.414-5.707 5.707-5.707-5.707z" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-darkRight border border-blueGreen rounded-lg shadow-lg z-50">
          {languages.map(({ code, label, countryCode }) => (
            <li
              key={code}
              className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-helvetica text-whiteNeurona hover:bg-blueGreen cursor-pointer ${
                i18n.language === code ? "bg-blueGreen" : ""
              }`}
              onClick={() => chooseLanguage(code)}
            >
              <Flag country={countryCode} />
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
