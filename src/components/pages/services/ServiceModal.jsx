import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServiceModal = ({ isOpen, onClose, image, title, description, details }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const modalElement = document.getElementById("service-modal");
      if (modalElement) {
        modalElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="service-modal"
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-darkLeft rounded-2xl shadow-xl w-full max-w-5xl p-6 lg:p-8 flex flex-col lg:flex-row overflow-hidden relative max-h-[90vh]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-darkLeft p-4 relative">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blueGreen border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-48 lg:h-auto object-cover"
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
            )}
          </div>

          <div className="w-full lg:w-1/2 p-4 text-whiteNeurona overflow-y-auto max-h-[85vh]">
            <button
              className="absolute top-4 right-4 text-grayNeurona hover:text-whiteNeurona transition-colors focus:outline-none bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-600"
              onClick={onClose}
              aria-label={t("Close")}
            >
              <X className="w-6 h-6" />
            </button>
            {title && <h2 className="text-3xl font-bold mb-4 text-blueGreen">{title}</h2>}
            {description && <p className="text-lg leading-relaxed mb-4 text-grayNeurona">{description}</p>}
            <div className="border-t border-darkLeft pt-4">
              <ul className="space-y-2">
                {details?.map((detail, index) => (
                  <li key={index} className="text-whiteNeurona text-base leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-blueGreen rounded-full mt-2 mr-2"></span>{detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
