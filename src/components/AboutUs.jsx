import {Leaf, Tractor} from 'lucide-react';
import avocadoTree from '../assets/avocadotree.jpeg';
import trailerLoading from '../assets/trailerloading.jpeg';

const AboutSection = () => (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center opacity-0 animate-fade-in-up mb-0.5">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center items-center">
          <div className="flex flex-col gap-4 items-center justify-items-center justify-center text-gray-600 opacity-0 animate-fade-in-up w-full md:w-3/5">
            <div className='flex flex-row justify-center justif-items-center items-center'>
                <div className='w-8'>
                    <p><Leaf size={48} color="green"/></p>
                </div>
            </div>
            <p className='text-3xl text-center'>
            
              We are dedicated to producing and supplying the highest quality agricultural products
              to customers worldwide. Our farms utilize sustainable farming practices to ensure
              the best quality produce while protecting the environment.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in-up w-4/5 h-4/5">
            <img 
              src={avocadoTree} 
              alt="About Us" 
              className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
          
          <div className="opacity-0 animate-fade-in-up w-4/5 h-4/5">
            <img 
              src={trailerLoading} 
              alt="About Us" 
              className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-items-center justify-center text-gray-600 opacity-0 animate-fade-in-up w-full md:w-3/5">
            <div className='flex flex-row justify-center justif-items-center items-center'>
                <div className='w-8'>
                    <p><Tractor size={48} color="green"/></p>
                </div>
            </div>
            <p className='text-3xl text-center'>
              With decades of experience in cultivation and processing, we maintain strict quality
              control standards throughout our supply chain, from farm to delivery.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;