import React, { useState, useEffect } from 'react';
import { ChevronDown} from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import ProductCard from './ProductCard';
import AboutSection from './AboutUs';
import avocadoImage from '../assets/avocadoes.jpeg';
import avocadoOilImage from '../assets/avocadooil.jpeg';
import macademiaImage from '../assets/macademia.jpeg';
import avocadoVarietyImage from '../assets/avocadovariety.jpeg';
import heroImg from '../assets/hero.jpeg';
import ProductDetailModal from './ProductDetailModal';
import BenefitsBanner from './BenefitsBanner';
import InfoBanner from './InfoBanner';

// Previous products array remains the same
export const products = [
  {
    name: 'Fresh Avocados',
    varieties: ['Hass', 'Fuerte', 'Reed'],
    packaging: ['4kg Box', '10kg Box', 'Bulk Order'],
    image: avocadoImage,
    href: '/avocadoes',
    varietyImage: avocadoVarietyImage,
    index: 0
  },
  {
    name: 'Pure Avocado Oil',
    varieties: ['Extra Virgin', 'Refined'],
    packaging: ['250ml Bottle', '500ml Bottle', '1L Bottle', 'Bulk Order'],
    image: avocadoOilImage,
    href: '/avocado-oil',
    index: 1
  },
  {
    name: 'Organic Macadamia Nuts',
    varieties: ['Raw', 'Roasted', 'Salted'],
    packaging: ['250g Pack', '500g Pack', '1kg Pack', 'Bulk Order'],
    image: macademiaImage,
    href: '/macadamia-nuts',
    index: 2
  }
];

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const openModal = (index) => {
    setCurrentProductIndex(index);
    setIsModalOpen(true);
  };

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
    <div id="home" className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <header className="relative mx-auto h-[34rem]">
        <img className="h-full w-full object-cover h-128" src={heroImg} alt="Avocados" />
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:mx-auto opacity-0 flex flex-col items-start gap-4 animate-fade-in">
            <p className='underline-me text-white font-bold text-xl'>Organic & Natural</p>
            <h1 className="text-4xl md:text-5xl text-left font-bold text-green-400">
              Premium Agricultural 
            </h1>
            <h1 className="text-4xl md:text-5xl text-left font-bold text-white">
              Products
            </h1>
            <p className="text-l w-4/6 md:w-2/6 text-left text-slate-200">
              Quality avocados, pure avocado oil, and premium macadamia nuts sourced directly
              from the best organic farms. 
            </p>
            <a 
              href="#products" 
              className="inline-flex items-center bg-green-400 hover:text-black px-6 py-3 rounded-md hover:bg-green-500 transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#products')}
            >
              Discover More
              <ChevronDown className="ml-2" />
            </a>
          </div>
        </div>
      </header>

      {/* Benefits Banner */}
      <BenefitsBanner />

      {/* About Us - with fade in animation */}
      <AboutSection />
      
      {/* Products */}
      <ProductDetailModal
            key={currentProductIndex}
            products={products} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            index={currentProductIndex} 
      />
      <section id="products" className="py-16 h-[96rem] md:h-full bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto flex flex-col h-full items-center px-4">
          
          <h2 className="text-lg mb-4 text-center">OUR PRODUCTS</h2>
          <h3 className="text-4xl font-bold text-center mb-12">
            Organic & Quality Products
          </h3>
          <div className="grid grid-cols-1 h-full md:grid-cols-1 lg:grid-cols-3 gap-8 w-5/6">
            {products.map((product, index) => (
              <div key={product.name} style={{ animationDelay: `${index * 200}ms` }}>
                <ProductCard product={product}
                             setModalOpen={(idx) => openModal(idx)} />
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Info Banner */}
      <InfoBanner />

      {/* Enquiry Form */}
      <EnquiryForm products={products}/>

    </div>
    </>
  );
};

export default LandingPage;
