import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useContactForm from "../../forms/hooks/useContactForm";
import ContactForm from "../../forms/contact/ContactForm";

const Modal = ({ isOpen, onClose, image, title, description }) => {
  const { t } = useTranslation();
  const formRef = useRef();
  const modalRef = useRef(null);

  const { 
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    successMessage,
  } = useContactForm(t);

  useEffect(() => {
    if (isOpen) {
      // Guarda la posición actual del scroll
      const scrollPosition = window.pageYOffset;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Restaura la posición del scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <div className="relative inline-block w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 lg:p-8 overflow-visible text-left align-middle transition-all transform">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors focus:outline-none"
            onClick={onClose}
            aria-label={t("Close")}
          >
            ✕
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left bg-gray-50 rounded-lg p-6 shadow-md">
              {image && (
                <div className="relative w-full max-w-xs lg:max-w-sm">
                  <img
                    src={image}
                    alt={title || "Modal Image"}
                    className="w-full h-auto rounded-lg object-contain shadow-lg"
                  />
                </div>
              )}
              {title && (
                <h2
                  id="modal-title"
                  className="text-3xl font-bold text-gray-900 mt-6 mb-4"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {description}
                </p>
              )}
            </div>

            <div className="w-full bg-darkRight p-6 rounded-lg shadow-md">
              <h2 className="text-2xl text-center text-whiteNeurona font-bold mb-4">
                {t("Dropdown.Title")}
              </h2>
              <ContactForm
                formData={formData}
                onChange={handleChange}
                onSubmit={(e) => handleSubmit(e, formRef)}
                errorMessage={errorMessage}
                successMessage={successMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;