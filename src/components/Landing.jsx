import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin} from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import Navigation from './Navigation';
import ProductCard from './ProductCard';
import AboutSection from './AboutUs';
import avocadoImage from '../assets/avocadoes.jpeg';
import avocadoOilImage from '../assets/avocadooil.jpeg';
import macademiaImage from '../assets/macademia.jpeg';
import avocadoVarietyImage from '../assets/avocadovariety.jpeg';

// Previous products array remains the same
const products = [
  {
    name: 'Fresh Avocados',
    varieties: ['Hass', 'Fuerte', 'Reed'],
    packaging: ['4kg Box', '10kg Box', 'Bulk Order'],
    image: avocadoImage,
    varietyImage: avocadoVarietyImage
  },
  {
    name: 'Avocado Oil',
    varieties: ['Extra Virgin', 'Refined'],
    packaging: ['250ml Bottle', '500ml Bottle', '1L Bottle', 'Bulk Order'],
    image: avocadoOilImage
  },
  {
    name: 'Macadamia Nuts',
    varieties: ['Raw', 'Roasted', 'Salted'],
    packaging: ['250g Pack', '500g Pack', '1kg Pack', 'Bulk Order'],
    image: macademiaImage
  }
];

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Update nav background
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    
    <div className="min-h-screen bg-gray-50">
      <Navigation isScrolled={isScrolled} scrollProgress={scrollProgress} />
      {/*<ProgressBar progress={scrollProgress} />*/}

      {/* Hero Section */}
      <header className="bg-green-600 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Agricultural Products
            </h1>
            <p className="text-xl mb-8">
              Quality avocados, pure avocado oil, and premium macadamia nuts
            </p>
            <a 
              href="#products" 
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#products')}
            >
              View Products
              <ChevronDown className="ml-2" />
            </a>
          </div>
        </div>
      </header>

      {/* About Us - with fade in animation */}
      <AboutSection />
      
      {/* Products */}
      <section id="products" className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.name} style={{ animationDelay: `${index * 200}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center opacity-0 animate-fade-in-up">Make an Enquiry</h2>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <EnquiryForm products={products}/>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center opacity-0 animate-fade-in-up">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Mail, title: 'Email', content: 'contact@example.com' },
                { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
                { icon: MapPin, title: 'Address', content: '123 Farm Road\nAgricultural District' }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex flex-col items-center text-center opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <item.icon className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Agricultural Business. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;