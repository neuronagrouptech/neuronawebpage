import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
  const [isEmailSent, setIsEmailSent] = useState(false); // Bloqueo para evitar spam

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
      setErrorMessage("You have already sent a message. Please try again later.");
      return;
    }

    if (!formData.name || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage("Name, last name, email, and message are required!");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address!");
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
              setSuccessMessage("Your message has been sent!");
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
              setErrorMessage("Failed to send email. Please try again later.");
            }
        );
  };

  return (
      <div
          id="contact"
          ref={observerRef}
          className="relative z-10 flex flex-col md:flex-row justify-left items-center font-helvetica px-4 sm:px-10 md:ml-20 mb-16 md:mb-48"
      >
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`w-full md:w-1/2 p-4 rounded-lg font-helvetica transform transition-transform duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
        >
          <h1 className="text-4xl md:text-5xl text-whiteNeurona font-helvetica mb-6">
            Contact Us
          </h1>

          {/* Error and Success Messages */}
          <div className="h-[1rem] mb-3">
            {errorMessage && <div className="text-red-500 text-base">{errorMessage}</div>}
            {successMessage && <div className="text-blueGreen text-base">{successMessage}</div>}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-helvetica text-blueGreen mb-2">
              Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-xl font-helvetica text-blueGreen mb-2">
              Last Name
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
            />
          </div>

          {/* Company */}
          <div className="mb-4">
            <label htmlFor="company" className="block text-xl font-helvetica text-blueGreen mb-2">
              Company (Optional)
            </label>
            <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-helvetica text-blueGreen mb-2">
              Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="me@company.com"
                className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-xl font-helvetica text-blueGreen mb-2">
              Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="4"
                className="w-full px-4 py-2 bg-darkGrayNeurona text-whiteNeurona rounded-lg focus:outline-none focus:ring-2 focus:ring-blueGreen text-base"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
              type="submit"
              className="w-full py-2 shadow-blueGreen text-lg bg-darkRight text-white font-helvetica rounded-lg hover:bg-blueGreen focus:outline-none focus:ring-2 focus:ring-blueGreen focus:ring-offset-2 hover:shadow-lg hover:shadow-blueGreen transition-colors duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default Contact;
