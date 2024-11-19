import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';



const ProductDetailModal = ({ products, isOpen, onClose }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const product = products[currentProductIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  const handleNextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 top-0 h-full"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-scroll p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid justify-items-end mb-4">
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-gray-900"
          >
            <X />
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={handlePrevProduct} 
            className="p-2 bg-gray-100 rounded-full"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <button 
            onClick={handleNextProduct} 
            className="p-2 bg-gray-100 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Varieties</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.varieties.map((variety) => (
                  <div 
                    key={variety} 
                    className="p-4 bg-gray-50 rounded-lg text-center"
                  >
                    {variety}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Packaging Options</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.packaging.map((pack) => (
                  <div 
                    key={pack} 
                    className="p-4 bg-gray-50 rounded-lg text-center"
                  >
                    {pack}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;