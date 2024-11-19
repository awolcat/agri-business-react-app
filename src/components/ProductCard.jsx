import React, { useState } from 'react';

// Enhanced Product Card with hover effects
const ProductCard = ({ product, setModalOpen }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div 
      className="relative opacity-0 translate-y-8 animate-fade-in-up bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
      onMouseLeave={handleMouseLeave} // Keep mouse leave on the parent div
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300 animate-fade-in cursor-pointer"
        />
        
        {/* Overlay that shows on hover */}
        {hoveredSection && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white rounded-md animate-fade-in"
            onMouseEnter={() => handleMouseEnter(hoveredSection)} // Keep overlay visible on hover
          >
            <div className="p-4 text-left">
              <h4 className="font-medium">{hoveredSection === 'varieties' ? 'Varieties' : 'Packaging Options'}</h4>
              <ul className="list-disc list-inside">
                {(hoveredSection === 'varieties' ? product.varieties : product.packaging).map(option => (
                  <li key={option} className="text-gray-200 animate-fade-in-left">{option}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

      <div className="flex justify-between mb-4">
        <div 
          className="flex-1 bg-blue-500 text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
          onMouseEnter={() => handleMouseEnter('varieties')}
          onClick={() => setModalOpen(true)}
        >
          Varieties
        </div>
        <div 
          className="flex-1 bg-green-500 text-white text-center py-2 rounded cursor-pointer hover:bg-green-600 transition duration-200 ml-2"
          onMouseEnter={() => handleMouseEnter('packaging')}
          onClick={() => setModalOpen(true)}
        >
          Packaging
        </div>
      </div>
    </div>
  );
};

export default ProductCard;