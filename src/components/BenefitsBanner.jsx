import {Leaf, Truck, Handshake, ShieldCheck} from 'lucide-react';

const benefits = [
  {
    icon: <Handshake size={50} color='#4ade80' />,
    name: 'Return Policy',
    content: 'Money Back Guarantee.'
  },
  {
    icon: <Truck size={50} color='#4ade80' />,
    name: 'Fast Shipping',
    content: '2-Day Delivery.'
  },
  {
    icon: <ShieldCheck size={50} color='#4ade80' />,
    name: 'Quality Assurance',
    content: 'Guranteed Grade-A Products.'
  }
]; 

console.log(benefits);

const BenefitsBanner = () => (
    <section id="benefits" className="container mx-auto py-5 flex justify-center">
      <div className="flex flex-col flex-wrap items-start w-fit bg-white gap-2 -mt-14 z-50 py-5 rounded-lg shadow-lg md:justify-center md:flex-row px-4 md:gap-4 lg:gap-0 divide-x divide-gray-300">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="flex flex-row w-fit items-center gap-2 px-8 md:px-12">
              <div>
                {benefit.icon}
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h3 className="text-left font-bold">{benefit.name}</h3>
                <p className='text-left text-gray-600'>{benefit.content}</p>
              </div>
            </div>
          ))} 
      </div>
    </section>
  );
  
  export default BenefitsBanner;