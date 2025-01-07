import React, { useState } from "react";
import i18n from "../trans/i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", selectedLanguage);
  };

  return (
    <select
      className="bg-transparent text-whiteNeurona text-base md:text-lg lg:text-xl border-none outline-none cursor-pointer hover:text-blueGreen transition"
      onChange={chooseLanguage}
      defaultValue={selectedLanguage}
    >
      <option value="en" className="text-darkLeft">
        English
      </option>
      <option value="es" className="text-darkLeft">
        Spanish
      </option>
    </select>
  );
};

export default LanguageSelector;
