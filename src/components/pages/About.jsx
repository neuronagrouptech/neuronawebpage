import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/about/1.png';
import Image2 from '../assets/about/2.png';

const About = () => {
    // Intersection Observers
    const [refVision, inViewVision] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const [refWhy, inViewWhy] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div id="about" className="text-whiteNeurona font-helvetica">
            {/* Our Vision Section */}
            <section ref={refVision} className="max-w-7xl mx-auto px-10 py-20">
                <div className="flex flex-col md:flex-row items-center relative gap-16">
                    {/* Text Content */}
                    <div
                        className={`transition-transform duration-700 ease-out ${
                            inViewVision ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}
                    >
                        <h2 className="text-5xl font-helvetica mb-6 text-blueGreen">Our Vision</h2>
                        <h3 className="text-3xl font-helvetica mb-8 text-whiteNeurona">Revolutionizing the Future with AI</h3>
                        <p className="text-whiteNeurona leading-relaxed mb-6 max-w-3xl text-lg">
                            At Neurona, we’re driven by a bold vision to transform industries and everyday life through the power
                            of Artificial Intelligence and immersive VR/AR technology. Our goal is to lead the charge in reshaping
                            how businesses operate and how people experience the world around them.
                        </p>
                        <p className="text-whiteNeurona leading-relaxed max-w-3xl text-lg">
                            We believe that the future of innovation lies in harnessing these cutting-edge technologies to solve
                            complex challenges and create smarter, more efficient solutions.
                        </p>
                    </div>

                    {/* Image Content */}
                    <div
                        className={`transition-transform duration-700 ease-out ${
                            inViewVision ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                    >
                        <img
                            src={Image1}
                            alt="AI Eye"
                            className="w-full max-w-lg rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Why Neurona Section */}
            <section ref={refWhy} className="max-w-7xl mx-auto px-10 py-20">
                <div className="flex flex-col md:flex-row-reverse items-center relative gap-16">
                    <div
                        className={`transition-transform duration-700 ease-out ${
                            inViewWhy ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                    >
                        <h2 className="text-right  text-5xl font-helvetica mb-6 text-blueGreen">Why Neurona</h2>
                        <h3 className="text-right  text-3xl font-helvetica mb-8 text-whiteNeurona">
                            A Strategic Partner for Long-Term Growth
                        </h3>
                        <p className="text-whiteNeurona leading-relaxed mb-6 max-w-3xl text-lg">
                            Choosing Neurona means partnering with a forward-thinking team that’s committed to your long-term
                            success. We don’t just offer short-term solutions; we provide scalable strategies designed to grow
                            with your business. Whether it’s implementing cloud solutions, automating critical processes, or developing tailored
                            machine learning models, we focus on creating a roadmap that evolves with your needs. With Neurona,
                            you’re not just preparing for the future — you’re leading it.
                        </p>
                    </div>

                    <div
                        className={`transition-transform duration-700 ease-out ${
                            inViewWhy ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}
                    >
                        <img
                            src={Image2}
                            alt="Robot handshake"
                            className="w-full max-w-lg rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
