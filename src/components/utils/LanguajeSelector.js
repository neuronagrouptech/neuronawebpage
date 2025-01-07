import React, { useState } from "react";
import i18n from "../trans/i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="relative">
      <select
        className="bg-darkRight text-whiteNeurona text-sm md:text-base lg:text-lg border border-blueGreen rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueGreen cursor-pointer hover:bg-darkLeft transition-all duration-150"
        onChange={chooseLanguage}
        defaultValue={selectedLanguage}
      >
        <option value="en" className="text-whiteNeurona">
          EN 
        </option>
        <option value="es" className="text-whiteNeurona">
          ES 
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
