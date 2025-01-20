import React from "react";
import { useTranslation } from "react-i18next";
import FormField from "./FormField";

const ContactForm = ({
  formData,
  onChange,
  onSubmit,
  errorMessage,
  successMessage,
  isSubmitting = false,
  formRef,
}) => {
  const { t } = useTranslation();

  return (
    <form
      ref={formRef} 
      onSubmit={onSubmit}
      className="w-full p-6 bg-transparent rounded-xl shadow-none transform transition-transform duration-1000"
    >
      {/* Mensajes de error y éxito */}
      <div className="h-[1rem] mb-3">
        {errorMessage && (
          <div
            className="text-red-500 text-sm"
            role="alert"
            aria-live="assertive"
            id="form-error"
          >
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div
            className="text-green-500 text-sm"
            role="status"
            aria-live="polite"
            id="form-success"
          >
            {successMessage}
          </div>
        )}
      </div>

      {/* Campos del formulario */}
      <div className="flex flex-col gap-4">
        <FormField
          id="name"
          name="name"
          label={t("Contact.Name")}
          placeholder={t("Contact.Name")}
          value={formData.name}
          onChange={onChange}
          required
          aria-invalid={!!errorMessage}
          aria-describedby="form-error"
        />

        <FormField
          id="lastName"
          name="lastName"
          label={t("Contact.Last")}
          placeholder={t("Contact.Last")}
          value={formData.lastName}
          onChange={onChange}
          required
          aria-invalid={!!errorMessage}
          aria-describedby="form-error"
        />

        <FormField
          id="company"
          name="company"
          label={t("Contact.Company")}
          placeholder={t("Contact.Company")}
          value={formData.company}
          onChange={onChange}
          aria-describedby="form-error"
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label={t("Contact.Email")}
          placeholder={t("Contact.Email")}
          value={formData.email}
          onChange={onChange}
          required
          aria-invalid={!!errorMessage}
          aria-describedby="form-error"
        />

        <FormField
          id="message"
          name="message"
          label={t("Contact.Message")}
          placeholder={t("Contact.Message")}
          value={formData.message}
          onChange={onChange}
          isTextArea
          required
          aria-invalid={!!errorMessage}
          aria-describedby="form-error"
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 mt-6 font-bold text-lg rounded-lg shadow-md focus:outline-none transition duration-200 ${
          isSubmitting
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-blueGreen text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-400"
        }`}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? t("Contact.Sending") : t("Contact.Send")}
      </button>
    </form>
  );
};

export default ContactForm;
