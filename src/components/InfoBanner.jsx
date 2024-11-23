import { ChartLine, ChevronDown } from "lucide-react";

const infoBanner = () => {
  return (
    <div className="relative mx-auto h-[20rem] md:h-[13rem]">
        <img className="h-full w-full object-cover" src="/src/assets/hero_image.jpeg" alt="Avocados" />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute inset-0 flex flex-row items-center">
            <div className="container flex flex-row flex-wrap gap-8 justify-center md:justify-between mx-auto w-5/6">
                <div className="flex flex-row items-center justify-center flex-wrap justify-self-start gap-4">
                    <ChartLine size={96} color="#18d100" />
                    <h1 className="text-5xl font-bold text-white text-center" style={{fontFamily: 'Brush Script MT, cursive'}}>
                        Leaders in the Market
                    </h1>
                </div>
                <div className="flex flex-row items-center gap-4">
                <a 
                    href="#products" 
                    className="inline-flex items-center bg-green-400 hover:text-black px-6 py-3 rounded-md hover:bg-green-500 transition-all duration-300 hover:scale-105"
                    onClick={(e) => scrollToSection(e, '#products')}
                    >
                    Enquire
                    <ChevronDown className="ml-2" />
                </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default infoBanner;