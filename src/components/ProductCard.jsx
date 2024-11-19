import React, { useState } from 'react';

// Enhanced Product Card with hover effects
const ProductCard = ({ product, setModalOpen }) => {
  return (
    <div 
      className="relative opacity-0 translate-y-8 animate-fade-in-up bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300 animate-fade-in cursor-pointer"
        />
        
      </div>

      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

      <div className="flex justify-between mb-4">
        <div 
          className="flex-1 bg-blue-500 text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
          onClick={() => setModalOpen(product.index) }
        >
          Varieties
        </div>
        <div 
          className="flex-1 bg-green-500 text-white text-center py-2 rounded cursor-pointer hover:bg-green-600 transition duration-200 ml-2"
          onClick={() => setModalOpen(product.index) }
        >
          Packaging
        </div>
      </div>
    </div>
  );
};

export default ProductCard;