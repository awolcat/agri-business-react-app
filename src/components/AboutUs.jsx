import {Leaf, Tractor} from 'lucide-react';
import avocadoTree from '../assets/avocadotree.jpeg';
import trailerLoading from '../assets/trailerloading.jpeg';

const AboutSection = () => (
    <section id="about" className="py-2 h-[34rem] bg-white">
      <div className="container mx-auto h-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full justify-items-center items-center">
          <div className="relative h-full w-3/4">
            <div className='absolute h-[18rem] w-80 bottom-0 right-0'>
              <img className='object-cover object-top h-[18rem] w-80 rounded-lg' src='/src/assets/macademiatree.webp' alt='Macademia tree'/>
            </div>
            <div className='absolute h-[18-rem] w-80 inset-0 '>
              <img className='object-cover object-center h-[18rem] w-80 rounded-lg' src='/src/assets/avocadoontree.webp' alt='Avocado tree'/>
            </div>
          </div>
          
          <div className="flex flex-col justify-center text-left gap-8 opacity-0 animate-fade-in-up w-4/5 h-4/5">
            <h3 className='text-xl'>ABOUT US</h3>
            <h1 className='text-5xl font-bold'>Pure Agriculture and Organic Farm</h1>
            <p className='text-xl'>
              With decades of experience in cultivation and processing, we maintain strict quality
              control standards throughout our supply chain, from farm to delivery.
            </p>
          </div>
                              
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;