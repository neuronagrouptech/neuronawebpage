import React, { useState } from "react";
import PropTypes from "prop-types";

const DropdownItem = ({ title, handleClick }) => (
  <li
    className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors cursor-pointer"
    onClick={handleClick}
  >
    <h3 className="text-whiteNeurona font-semibold text-base lg:text-lg">{title}</h3>
  </li>
);

const Dropdown = ({ title, items, handleItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Dropdown button */}
      <button
        className="text-whiteNeurona font-medium text-base py-3 px-4 w-auto text-center rounded-lg hover:shadow-lg flex items-center justify-center transition-colors bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
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
            {items.map((item) => (
              <DropdownItem
                key={item.modalTitle}
                title={item.title}
                handleClick={() => {
                  handleItemClick(item);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      modalTitle: PropTypes.string,
    })
  ).isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default Dropdown;