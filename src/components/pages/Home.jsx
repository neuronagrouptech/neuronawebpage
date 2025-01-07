import React from 'react';
import {ChevronDown} from 'lucide-react'; // Importamos el icono desde lucide-react
import NeuronaLogo from '../assets/LOGO.avif';

const Home = () => {
    // Función para desplazarse a la siguiente sección
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center">
            {/* Contenido principal del Home */}
            <div
                id="home"
                className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-6"
            >
                {/* Título principal */}
                <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white font-bold tracking-wide drop-shadow-lg">
                    Revolutionizing Business <br/> with Innovative Solutions
                </h1>
                {/* Subtítulo */}
                <p className="text-white text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-sm">
                    Partner with <span className="font-semibold text-indigo-400">NEURONA</span> to drive growth and
                    disrupt the status quo.
                </p>
                {/* Logo visible solo en dispositivos móviles */}
                <img
                    src={NeuronaLogo}
                    alt="Company Logo"
                    className="block sm:hidden w-4/5 mt-4 animate-pulse"
                />
                {/* Botón circular */}
                <button
                    onClick={scrollToNextSection}
                    className="mt-8 w-14 h-14 flex items-center justify-center rounded-full bg-white hover:bg-indigo-400 shadow-lg transition-all duration-300 aminate-bounce"
                >
                    <ChevronDown className="text-indigo-600 hover:text-white w-6 h-6"/>
                </button>
            </div>
        </div>
    );
};

export default Home;
