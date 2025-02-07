import { useEffect, useState, useCallback, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ModalImage = memo(({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-darkLeft text-grayNeurona">
        Error loading image
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blueGreen border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-48 lg:h-auto object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
      />
    </>
  );
});

ModalImage.displayName = "ModalImage";

const ServiceModal = ({ isOpen, onClose, image, title, description, details }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      const modalElement = document.getElementById("service-modal");
      if (modalElement) {
        if ("scrollBehavior" in document.documentElement.style) {
          modalElement.scrollIntoView({
            behavior: shouldReduceMotion ? "auto" : "smooth",
            block: "start",
          });
        } else {
          modalElement.scrollIntoView(true);
        }
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown, shouldReduceMotion]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: "easeIn",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.2,
        duration: shouldReduceMotion ? 0.1 : 0.3,
      },
    },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="service-modal"
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOutsideClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="bg-darkLeft rounded-2xl shadow-xl w-full max-w-5xl p-6 lg:p-8 flex flex-col lg:flex-row overflow-hidden relative max-h-[90vh] shadow-blueGreen"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-darkLeft p-4 relative">
            <ModalImage src={image} alt={title} />
          </div>

          <div className="w-full lg:w-1/2 p-4 text-whiteNeurona overflow-y-auto max-h-[85vh]">
            <motion.button
              className="absolute top-4 right-4 text-grayNeurona hover:text-whiteNeurona transition-colors focus:outline-none focus:ring-2 focus:ring-blueGreen bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-600"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("Close")}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div variants={contentVariants} initial="hidden" animate="visible">
              {title && (
                <h2 id="modal-title" className="text-3xl font-bold mb-4 text-blueGreen">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg leading-relaxed mb-4 text-grayNeurona">
                  {description}
                </p>
              )}
              {details && details.length > 0 && (
                <div className="border-t border-darkLeft pt-4">
                  <ul className="space-y-2">
                    {details.map((detail, index) => (
                      <motion.li
                        key={index}
                        className="text-whiteNeurona text-base leading-relaxed flex items-start"
                        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                          duration: shouldReduceMotion ? 0.1 : 0.3,
                        }}
                      >
                        <span className="w-2 h-2 bg-blueGreen rounded-full mt-2 mr-2" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(ServiceModal);