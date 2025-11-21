
import React from 'react';
import Timeline from './Timeline';
import Certifications from './Certifications';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const aboutAnimation = {
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
};

const About: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>(aboutAnimation);

    return (
        <section id="about" className="py-24 bg-light-surface dark:bg-dark-surface">
            <div ref={sectionRef} className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 font-jp">About Me</h2>
                <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-12"></div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 text-center md:text-left">
                        <img
                            src="components\assets\photo_2024-11-07_09-27-191.jpg"
                            alt="Myself"
                            className="rounded-lg shadow-2xl object-cover w-full h-auto transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] dark:hover:shadow-[0_0_30px_rgba(99,230,190,0.6)]"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-4 text-light-accent dark:text-dark-accent">AI/ML Engineer & Developer</h3>
                        <p className="text-lg mb-4 leading-relaxed">
                            Aspiring AI/ML Engineer with hands-on experience in building end-to-end machine learning solutions, including data pipelines, NLP applications, and recommender systems.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Passionate about applying deep learning and AI to solve real-world problems with measurable impact. I specialize in Python, TensorFlow, and building intelligent systems that drive value.
                        </p>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
                    <Timeline />
                    <Certifications />
                </div>
            </div>
        </section>
    );
};

export default About;
