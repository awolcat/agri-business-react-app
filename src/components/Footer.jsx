import {Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-white">
        <div className='flex justify-center bg-stone-800 py-20 md:w-full'>
            <div className="flex flex-row flex-wrap w-4/6 md:w-full gap-8 md:gap-4 justify-start md:justify-center">
                <div className="flex flex-col items-start text-left md:w-60">
                    <h3 className="font-semibold mb-2 text-2xl w-4/6">Extra Fresh Farm</h3>
                    <p className="text-sm">
                        Premium avocados, avocado oil, and macadamia nuts sourced directly
                        from the best organic farms.
                    </p>
                </div>
                <div className="flex flex-col text-left md:w-28">
                    <h3 className="font-semibold mb-2 text-2xl">Links</h3>
                    <p className="pl-2 text-sm">
                        <ul className="list-disc list-inside">
                            <li><a href='#home'>Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#enquiry">Enquiry</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </p>
                </div>
                <div className="flex flex-col items-start text-left md:w-1/6">
                    <h3 className="font-semibold mb-2 text-2xl">Contacts</h3>
                    <ul className='flex flex-col gap-1'>
                        <li className='flex gap-2 items-center'>
                            <Phone size={14} color="#18d100" />
                            <p className='text-sm'>+61 (426) 442 026</p>
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
                <div className="flex flex-col items-start text-left md:w-60 md:ml-10">
                    <h3 className="font-semibold mb-2 text-2xl">Newsletter</h3>
                    <p className="text-sm">
                        Subscribe to our weekly Newsletter and
                        receive updates via email.
                    </p>
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