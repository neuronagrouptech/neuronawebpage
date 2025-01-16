import React from "react";
import ReactCountryFlag from "react-country-flag";

const Flag = ({ country }) => {
  return (
    <ReactCountryFlag
      className="w-6 h-6"
      countryCode={country}
      svg
      style={{
        width: "1.5em",
        height: "1.5em",
      }}
      aria-label={`Flag of ${country}`}
    />
  );
};

export default Flag;
