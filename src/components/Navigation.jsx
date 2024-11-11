import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Progress Bar component
const ProgressBar = ({ progress }) => (
    <div className="h-1 bg-gray-200">
      <div 
        className="h-full bg-green-600 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
  
  
  // Navigation component
  const Navigation = ({ isScrolled, scrollProgress }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navLinks = [
      { href: '#about', text: 'About' },
      { href: '#products', text: 'Products' },
      { href: '#enquiry', text: 'Enquiry' },
      { href: '#contact', text: 'Contact' }
    ];
  
    const scrollToSection = (e, href) => {
      e.preventDefault();
      const element = document.querySelector(href);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };
  
    return (
      <nav className={`fixed z-50 container mx-auto transition-all duration-300 ${isScrolled ? 'bg-white text-green-600 shadow-md' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="text-xl font-bold">ExtraFreshFarm</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-green-400 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
  
          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 
                          ${isMenuOpen ? 'max-h-64 opacity-100 bg-white text-green-600 shadow-md'
                                       :'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pb-4 space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block py-2 hover:text-green-400 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <ProgressBar progress={scrollProgress} />
      </nav>
    );
  };

  export default Navigation;