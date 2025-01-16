import React, { useRef } from "react";
import useContactForm from "../forms/hooks/useContactForm";
import useVisibilityObserver from "../forms/hooks/useVisibilityObserver";
import ContactForm from "../forms/contact/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const { formData, handleChange, handleSubmit, errorMessage, successMessage } =
    useContactForm(t);
  const { isVisible, observerRef } = useVisibilityObserver();

  return (
    <div
      id="contact"
      ref={observerRef}
      className="min-h-screen relative z-10 flex flex-col md:flex-row justify-center items-center font-sans px-4 sm:px-10 md:mx-20 mb-16 md:mb-48 pt-28 space-y-10 md:space-y-0 md:space-x-10"
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl text-whiteNeurona font-sans mb-6">
          {t("Contact.Title")}
        </h1>
        <p className="text-lg text-grayNeurona leading-relaxed font-sans">
          {t("Contact.Description")}
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <ContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={(e) => handleSubmit(e, formRef)}
          errorMessage={errorMessage}
          successMessage={successMessage}
          formRef={formRef}
          isVisible={isVisible}
        />
      </div>
    </div>
  );
};

export default Contact;
