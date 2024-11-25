import {CircleCheck} from 'lucide-react';


const AboutSection = () => (
    <section id="about" className="py-2 h-full md:h-[64rem] lg:h-[34rem] bg-white">
      <div className="container mx-auto h-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0 h-full justify-items-center items-center px-0">
          <div className="relative w-full md:w-5/6 h-[34rem] lg:h-full lg:justify-self-start">
            <div className='absolute h-[22rem] w-80 inset-0'>
              <img className='object-cover object-top h-[22rem] w-80 rounded-lg' src='/src/assets/macademiatree.webp' alt='Macademia tree'/>
            </div>
            <div className='absolute h-[22-rem] w-80 bottom-0 right-0 border-4 border-white rounded-lg'>
              <img className='object-cover object-right h-[22rem] w-80 rounded-lg' src='/src/assets/avocadoontree.webp' alt='Avocado tree'/>
            </div>
          </div>
          
          <div className="flex flex-col lg:justify-self-start justify-center text-left gap-8 opacity-0 animate-fade-in-up w-5/6">
            <h1 className='text-xl'>ABOUT US</h1>
            <h2 className='text-4xl font-bold pr-10'>Pure Agriculture and Organic Farm</h2>
            <div className='flex flex-col gap-3'>
              <h3 className='text-2xl text-green-500'>We’re Leaders in the Agriculture Market </h3>
              <p className=''>
                We are dedicated to producing and supplying the highest quality agricultural products
                to customers worldwide. Our farms utilise sustainable farming practices to ensure the
                best quality produce while protecting the environment.
              </p>
            </div>
            <ul>
              <li className='flex gap-2 items-center'>
                <CircleCheck size={16} color="#18d100" />
                <p>Experienced in cultivation and processing</p>
              </li>
              <li className='flex gap-2 items-center'>
                <CircleCheck size={16} color="#18d100" />
                <p>Maintain strict quality control standards</p>
              </li>
              <li className='flex gap-2 items-center'>
                <CircleCheck size={16} color="#18d100" />
                <p>Organic and natural product</p>
              </li>
            </ul>
          </div>
                              
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;