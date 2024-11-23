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
import ProductDetailModal from './ProductDetailModal';
import TopBanner from './TopBanner';
import BenefitsBanner from './BenefitsBanner';
import InfoBanner from './InfoBanner';

// Previous products array remains the same
const products = [
  {
    name: 'Fresh Avocados',
    varieties: ['Hass', 'Fuerte', 'Reed'],
    packaging: ['4kg Box', '10kg Box', 'Bulk Order'],
    image: avocadoImage,
    varietyImage: avocadoVarietyImage,
    index: 0
  },
  {
    name: 'Pure Avocado Oil',
    varieties: ['Extra Virgin', 'Refined'],
    packaging: ['250ml Bottle', '500ml Bottle', '1L Bottle', 'Bulk Order'],
    image: avocadoOilImage,
    index: 1
  },
  {
    name: 'Organic Macadamia Nuts',
    varieties: ['Raw', 'Roasted', 'Salted'],
    packaging: ['250g Pack', '500g Pack', '1kg Pack', 'Bulk Order'],
    image: macademiaImage,
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
    
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation isScrolled={isScrolled} scrollProgress={scrollProgress} />
      {/*<ProgressBar progress={scrollProgress} />*/}

      {/* Hero Section */}
      <header className="relative mx-auto h-[34rem]">
        <img className="h-full w-full object-cover h-128" src="/src/assets/hero_image.jpeg" alt="Avocados" />
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:mx-auto opacity-0 flex flex-col items-start gap-4 animate-fade-in-up">
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
        <div className="container mx-auto flex flex-col items-center px-4">
          
          <h2 className="text-lg mb-4 text-center">OUR PRODUCTS</h2>
          <h3 className="text-4xl font-bold text-center mb-12">
            Organic & Quality Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6">
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
                { icon: Mail, title: 'Email', content: 'extrafreshfarm01@gmail.com' },
                { icon: Phone, title: 'Phone', content: '+61 (426) 442 026\n+254 745 333213' },
                { icon: MapPin, title: 'Address', content: 'Thika, Kenya' }
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
          <p>&copy; 2024 Extra Fresh Farm.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;