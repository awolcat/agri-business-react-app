import React, { useState } from 'react';

const EnquiryForm = ({products}) => {
    const [formData, setFormData] = useState({
      country: '',
      city: '',
      product: '',
      quantity: '',
      price: '',
      email: '',
      name: '',
      notes: ''
    });
    const [status, setStatus] = useState('idle');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('submitting');
      try {
        // Send data to serverless function path
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          const error = await response.json();
          
          throw new Error(error.message || 'Submission failed');
        }
        setStatus('success');
        setFormData({ 
          country: '',
          city: '',
          product: '',
          quantity: '',
          price: '',
          email: '',
          name: '',
          notes: '' });
      } catch (error) {
        setStatus('error');
        console.error('Submission error:', error);
      }
    };
  
  
    return (
      <div>
        {status === 'success' && (
        <div className="mb-4 bg-green-50 border-green-200">
          <p>Message sent successfully!</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-4 bg-red-50 border-red-200">
          <p>Something went wrong.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} id="enquiry-form" className="max-w-lg mx-auto space-y-4 text-left">
        <div className='flex flex-row flex-wrap justify-between'>
          <div className='w-5/12'>
            <label className="block text-sm font-medium mb-1">Name or Org</label>
            <input
              type="name"
              required
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className='w-6/12'>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div className='flex flex-row gap-4 flex-nowrap items-end justify-end'>
          <div className='w-full'>
            <label className="block text-sm font-medium mb-1 ">Product</label>
            <select 
              required
              className="w-full p-2 border rounded-md"
              value={formData.product}
              onChange={(e) => setFormData({...formData, product: e.target.value})}
            >
              <option value="">Select a product</option>
              {products.map(p => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>
            </div>

            {/*Quantity*/}
            <div className='w-4/12 flex-grow-1'>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="0"
              required
              className="w-full p-2 border rounded-md text-center"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </div>
          {/*Unit*/}
        {formData.product && (<div className='w-4/12 flex-grow-0'>
          <label className="block text-sm font-medium mb-1"></label>
          <select
            required 
            disabled
            className="w-full p-2 border rounded-md"
            value={formData.product === 'Avocado Oil' ? 'ltrs' : 'kgs'}
          >
            <option value="ltrs">ltrs</option>
            <option value="kgs">kgs</option>
          </select>
        </div>)}
          </div>
          
        <div>
          <label className="block text-sm font-medium mb-1">Target Price (USD)</label>
          <input
            type="number"
            min="0"
            required
            className="w-full p-2 border rounded-md"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Additional Notes</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Submit Enquiry
        </button>
      </form>
      </div>
    );
  };

  export default EnquiryForm;