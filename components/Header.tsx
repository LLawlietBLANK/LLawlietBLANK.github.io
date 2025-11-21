
import React, { useState, useEffect } from 'react';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold font-jp cursor-pointer text-light-accent dark:text-dark-accent"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Home
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="font-medium text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
