import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import ContactForm from "../../forms/contact/ContactForm";

const Modal = ({ isOpen, onClose, image, title, description }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage(t("Contact.Messages.Errors.RequiredFields"));
      return;
    }

    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      setErrorMessage(t("Contact.Messages.Errors.InvalidEmail"));
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMessage(t("Contact.Messages.Success.EmailSent"));
          setFormData({
            name: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });
        },
        () => {
          setErrorMessage(t("Contact.Messages.Errors.EmailFailed"));
        }
      );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg lg:max-w-5xl bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
        {/* Botón para cerrar el modal */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Distribución en Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Columna 1: Imagen y Texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left bg-gray-100 rounded-lg p-6 shadow-md">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg object-contain shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <h2
              id="modal-title"
              className="text-3xl font-extrabold text-gray-900 mt-6 mb-4"
            >
              {title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              {description}
            </p>
          </div>

          {/* Columna 2: Formulario */}
          <div className="w-full bg-darkRight p-6 rounded-lg">
            <h2 className="text-2xl text-center text-whiteNeurona font-bold mb-4">
              {t("Solicita una demo ahora")}
            </h2>
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              errorMessage={errorMessage}
              successMessage={successMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
