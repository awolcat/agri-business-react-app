import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
  
  // Navigation component
  const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navLinks = [
      { href: '/', text: 'Home' },
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
      <nav className="w-full sticky top-0 z-50 mx-auto transition-all duration-75 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="text-3xl text-slate-700">Extra Fresh Farm</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={(e) => link.text !== "Home" ? scrollToSection(e, link.href) : null}
                  className="hover:text-green-400 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/*Call CTA*/}
            <div className='hidden lg:flex flex-row text-slate-700 items-center gap-2'>
              <PhoneCall />
              <div className="flex flex-col justify-start">
                <p className='text-xs text-left font-bold'>+61 (426) 442-026</p>
                <p className='text-xs text-left font-bold'>+254 (745) 333-213</p>
              </div>
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
          <div className={`transition-all duration-500`}>
            <div className={`${isMenuOpen ? 'pb-4 space-y-2 visible max-h-64 overflow-y-scroll opacity-100 bg-white text-green-600 shadow-md'
                            :'hidden max-h-0 opacity-0'} `}>
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
              <div className='flex flex-row text-slate-500 items-center justify-center gap-2'>
                <PhoneCall />
                <div className="flex flex-col justify-start">
                  <p className='text-xsm text-left'>+61 (426) 442-026</p>
                  <p className='text-xsm text-left'>+254 (745) 333-213</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<ProgressBar progress={scrollProgress} />*/}
      </nav>
    );
  };

  export default Navigation;