import React, { useState } from "react";
import i18n from "../i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", selectedLanguage);
  };

  return (
    <select
      className="bg-transparent text-whiteNeurona text-sm md:text-base lg:text-lg border-none outline-none cursor-pointer"
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
