import React, { useState } from "react";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown relative w-full">
        {/* Botón de despliegue (Ahora basado en hover) */}
        <div className="text-whiteNeurona font-medium text-base py-3 px-4 w-full text-left rounded-lg hover:shadow-lg flex items-center justify-between transition-colors">
          <span>Technologies</span>
          <svg
            className="fill-current h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>

        {/* Menú desplegable */}
        <ul
          className={`absolute left-0 mt-2 w-full rounded-lg shadow-blueGreen bg-darkRight z-50 transition-all duration-300 ${
            isHovered ? "block" : "hidden"
          }`}
        >
          {/* Elemento 1 */}
          <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
            <img
              src="/path/to/crm-icon.png"
              alt="CRM"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-whiteNeurona font-semibold text-base">
                CRM
              </h3>
              <p className="text-grayNeurona text-sm leading-relaxed">
                Gestiona mejor tus relaciones y optimiza tus procesos comerciales.
              </p>
            </div>
          </li>

          {/* Elemento 2 */}
          <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
            <img
              src="/path/to/ai-icon.png"
              alt="AI Coding"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-whiteNeurona font-semibold text-base">
                AI Coding for Developers
              </h3>
              <p className="text-grayNeurona text-sm leading-relaxed">
                Descubre cómo la inteligencia artificial puede mejorar tu código.
              </p>
            </div>
          </li>

          {/* Elemento 3 */}
          <li className="flex items-start gap-4 px-4 py-3 hover:bg-blueGreen transition-colors">
            <img
              src="/path/to/primeur-icon.png"
              alt="Primeur"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-whiteNeurona font-semibold text-base">
                Primeur
              </h3>
              <p className="text-grayNeurona text-sm leading-relaxed">
                Innovación para la gestión de datos empresariales.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
