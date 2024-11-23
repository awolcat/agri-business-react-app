import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

// Enhanced Product Card with hover effects
const ProductCard = ({ product, setModalOpen }) => {
  return (
    <div 
      className="relative h-full h-[24rem] w-full opacity-0 translate-y-8 animate-fade-in-up bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in cursor-pointer"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black to-green opacity-80 "></div>
      <div className="absolute inset-0 flex flex-col text-white justify-between py-4 items-center">
        <div className='flex flex-col items-center gap-2 w-full'>
          <p className='uppercase text-sm'>{product.name.split(' ').shift()}</p>
          <h3 className="text-2xl font-semibold text-green-500 mb-2">{product.name.split(' ').slice(1, 3).join(' ')}</h3>
          <ul className="list-disc truncate w-full inline-flex justify-evenly px-2 mb-4 font-bold text-lg">
            {product.varieties.map((variety, index) => (
              <li key={index} className='float-left '>{variety}</li>
            ))}
          </ul>
          <a 
              href="#products" 
              className="inline-flex bg-white text-green-400 px-4 py-1 rounded-full hover:text-green-500 transition-all duration-300 hover:scale-105"
              onClick={() => setModalOpen(product.index) }
            >
              Enquire
              <ChevronRight className="ml-2" />
            </a>
        </div>
        <div className="bg-white text-green-500 rounded-lg px-4 py-2">
          <p className="text-center uppercase">PACKAGING</p>
          <p className="text-sm text-center uppercase">OPTIONS</p>
          <ul className="text-black text-left list-disc list-inside">
            {product.packaging.map((pack, index) => (
              <li key={index} className="text-sm">{pack}</li>
            ))}
          </ul>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;