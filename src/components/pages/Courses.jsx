import React, { useRef } from "react";
import Navbar from "../common/Navbar"; 
import Footer from "../common/Footer";
import Copyright from "../common/Copyright";
import ContactForm from "../forms/contact/ContactForm";
import useContactForm from "../forms/hooks/useContactForm";
import Logo from "../assets/LOGO.avif";

const Courses = () => {
  const formRef = useRef(null);
  const {
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    successMessage,
    isSubmitting,
  } = useContactForm();

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-darkLeft to-darkRight text-white">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Sección izquierda: Logo y texto */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <img
            src={Logo}
            alt="Logo Neurona"
            className="mx-auto md:mx-0 w-96 h-auto"
          />
          <p className="mt-8 text-lg md:text-xl font-medium">
            Regístrate a nuestro Taller <span className="font-bold">GRATIS</span>
          </p>
          <h3 className="text-xl md:text-2xl font-bold">
            OPTIMIZA PROCESOS DE VENTA GANADORES CON CRM
          </h3>
          <p className="text-sm md:text-base font-light">
            Optimiza la creación de contenido de Emails y landing pages en
            escala con Inteligencia Artificial.
          </p>
        </div>

        {/* Sección derecha: Formulario reutilizado */}
        <div className="md:w-1/2 bg-transparent p-6 rounded-lg shadow-lg mt-8 md:mt-0 text-darkGrayNeurona">
          <ContactForm
            formData={formData}
            onChange={handleChange}
            onSubmit={(e) => handleSubmit(e, formRef)}
            errorMessage={errorMessage}
            successMessage={successMessage}
            isSubmitting={isSubmitting}
            formRef={formRef}
          />
        </div>
      </div>

        <Footer />
        <Copyright />

    </div>
  );
};

export default Courses;
