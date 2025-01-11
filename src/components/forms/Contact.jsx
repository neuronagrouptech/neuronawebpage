import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const formRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (currentObserver) observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (successMessage || errorMessage) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
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

          // Reset the form
          setFormData({
            name: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });

          // Remove email-sent lock after 1 hour
          setTimeout(() => setIsEmailSent(false), 3600000); // 1 hour in milliseconds
        },
        () => {
          setErrorMessage(t("Contact.Messages.Errors.EmailFailed"));
        }
      );
  };

  return (
    <div
      id="contact"
      ref={observerRef}
      className="min-h-full relative z-10 flex flex-col md:flex-row justify-left items-center font-sans px-4 sm:px-10 md:ml-20 mb-16 md:mb-48 pt-28"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`w-full md:w-1/2 p-4 rounded-lg font-sans transform transition-transform duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl text-whiteNeurona font-sans mb-6">
          {t("Contact.Title")}
        </h1>

        {/* Error and Success Messages */}
        <div className="h-[1rem] mb-3">
          {errorMessage && <div className="text-red-500 text-base">{errorMessage}</div>}
          {successMessage && <div className="text-blueGreen text-base">{successMessage}</div>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-xl font-sans text-blueGreen mb-2">
            {t("Contact.Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("Contact.Name")}
            className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-xl font-sans text-blueGreen mb-2">
            {t("Contact.Last")}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={t("Contact.Last")}
            className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label htmlFor="company" className="block text-xl font-sans text-blueGreen mb-2">
            {t("Contact.Company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("Contact.Company")}
            className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-sans text-blueGreen mb-2">
            {t("Contact.Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("Contact.Email")}
            className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-xl font-sans text-blueGreen mb-2">
            {t("Contact.Message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("Contact.Message")}
            rows="4"
            className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 shadow-blueGreen text-lg bg-darkRight text-whiteNeurona font-sans rounded-lg hover:bg-blueGreen focus:outline-none focus:ring-2 focus:ring-blueGreen focus:ring-offset-2 hover:shadow-lg hover:shadow-blueGreen transition-colors duration-150"
        >
          {t("Contact.Send")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
