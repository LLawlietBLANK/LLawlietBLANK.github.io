import React from 'react';
import anime from 'animejs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/Icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const linkRef = React.useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        anime({
            targets: linkRef.current,
            translateY: -5,
            scale: 1.1,
            color: '#63e6be',
            duration: 300,
            easing: 'easeOutSine'
        });
    };

    const handleMouseLeave = () => {
        anime({
            targets: linkRef.current,
            translateY: 0,
            scale: 1,
            color: '#c0c5d9',
            duration: 300,
            easing: 'easeInSine'
        });
    };

    return (
        <a
            href={href}
            ref={linkRef}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-gray-400 dark:text-dark-text transition-colors"
        >
            {children}
        </a>
    );
};


const Contact: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>({
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    return (
        <section id="contact" className="py-24 bg-light-bg dark:bg-dark-bg">
            <div ref={sectionRef} className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 font-jp">Get In Touch</h2>
                <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-12"></div>
                <div className="max-w-lg mx-auto text-center">
                    <p className="text-lg mb-8">I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!</p>
                    <a
                        href="https://drive.google.com/drive/u/0/folders/1SkIVV16UJNEnBWF7zySqaHns4gpDxrlo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-light-accent dark:bg-dark-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
                    >
                        Resume
                    </a>

                    <div className="mt-16 flex justify-center space-x-8">
                        <SocialLink href="https://github.com/LLawlietBLANK">
                            <GitHubIcon className="w-8 h-8" />
                        </SocialLink>
                        <SocialLink href="https://linkedin.com/in/saksham-sharma2303">
                            <LinkedInIcon className="w-8 h-8" />
                        </SocialLink>
                    </div>

                    <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Saksham Sharma. All rights reserved.</p>
                        <p>Designed & Built with ♡</p>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
