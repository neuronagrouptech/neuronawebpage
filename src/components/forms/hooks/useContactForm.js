import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
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
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errorMessage || successMessage) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e, formRef) => {
    e.preventDefault();

    if (isEmailSent) {
      setErrorMessage(t("Contact.Messages.Errors.EmailSent"));
      return;
    }

    if (!formData.name || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage(t("Contact.Messages.Errors.RequiredFields"));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage(t("Contact.Messages.Errors.InvalidEmail"));
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMessage(t("Contact.Messages.Success.EmailSent"));
          setIsEmailSent(true);

          setFormData({
            name: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });

          setTimeout(() => setIsEmailSent(false), 3600000);
        },
        () => {
          setErrorMessage(t("Contact.Messages.Errors.EmailFailed"));
        }
      );
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    successMessage,
  };
};

export default useContactForm;
