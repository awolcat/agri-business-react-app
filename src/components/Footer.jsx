import { useState } from 'react';
import {Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {

    const [formData, setFormData] = useState({
        email: '',
      });
      const [status, setStatus] = useState('idle');

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
          //Send data to serverless function path
          const response = await fetch('/api/subscribe', {
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
            email: '',
        });
        } catch (error) {
          setStatus('error');
        }
      };
      
  return (
    <footer className=" text-white">
        <div className='flex justify-center bg-stone-800 py-20 md:w-full'>
            <div className="flex flex-row flex-wrap w-4/6 md:w-full gap-8 md:gap-4 justify-start md:justify-center">
                <div className="flex flex-col items-start text-left md:w-60">
                    <h3 className="font-semibold text-2xl w-fit leading-6">Extra Fresh</h3>
                    <h3 className="font-semibold text-2xl w-fit mb-2">Farm</h3>
                    <p className="text-sm">
                        Premium avocados, avocado oil, and macadamia nuts sourced directly
                        from the best organic farms.
                    </p>
                </div>
                <div className="flex flex-col text-left md:w-28 gap-2">
                    <h3 className="font-bold">Links</h3>
                    <div className="flex flex-row justify-between rounded-lg w-2/6 h-[0.2rem]">
                        <div className="bg-green-500 w-4/6 rounded-lg"></div>
                        <div className="bg-green-500 w-1 rounded-lg"></div>
                    </div>
                    <ul className="list-disc list-inside pl-2 text-sm">
                        <li><a href='#home'>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#enquiry">Enquiry</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start text-left md:w-1/6 gap-2">
                    <h3 id="contact" className="font-bold">Contacts</h3>
                    <div className="flex flex-row justify-between rounded-lg w-1/5 h-[0.2rem]">
                        <div className="bg-green-500 w-4/6 rounded-lg"></div>
                        <div className="bg-green-500 w-1 rounded-lg"></div>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <li className='flex gap-2 items-center'>
                            <Phone size={14} color="#18d100" />
                            <p className='text-sm'>+61 (426) 442 026</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Phone size={14} color="#18d100" />
                            <p className='text-sm'>+254 (745) 333 213</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Mail size={14} color="#18d100" />
                            <p className='text-sm'>extrafreshfarm01@gmail.com</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <MapPin size={14} color="#18d100" />
                            <p className='text-sm'>Thika, Kenya</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start text-left gap-2 md:w-60 md:ml-10">
                    <h3 className="font-bold">Newsletter</h3>
                    <div className="flex flex-row justify-between rounded-lg w-1/5 h-[0.2rem]">
                        <div className="bg-green-500 w-4/6 rounded-lg"></div>
                        <div className="bg-green-500 w-1 rounded-full"></div>
                    </div>
                    <p className="text-sm">
                        Subscribe to our weekly Newsletter and
                        receive updates via email.
                    </p>
                    <div className='relative w-64 h-10'>
                        <div className='absolute inset-0 w-full flex h-full items-center'>
                            <form className='w-full h-full' onSubmit={handleSubmit} id='newsletter'>
                                <label htmlFor='newsletter-email' className='sr-only'>Email Address</label>
                                <input
                                    id='newsletter-email' 
                                    type='email'
                                    placeholder='Email Address'
                                    className=' absolute inset-0 bg-stone-700 text-sm rounded-l-md px-2 h-full w-5/6'
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                <button
                                    type='submit'
                                    className='absolute right-0 bg-green-500 w-1/6 text-white rounded-r-md px-2 h-full flex items-center justify-center disabled:opacity-75'
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ?
                                    <div id='loading'></div> :
                                    <>
                                        <Send size={14}/>
                                    </>
                                }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-stone-900 py-8 text-center">
          <p className="text-xs font-semibold">Copyright &copy; 2024 Extra Fresh Farm. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;