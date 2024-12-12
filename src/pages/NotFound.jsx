import { ChevronLeft } from "lucide-react";

const NotFound = () => {
    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className="flex flex-col items-center justify-between h-content gap-4 p-8">
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-2xl font-semibold'>Page Not Found</p>
            <p>The page you requested does not exist, check the url or find your way back home below</p>
            <a 
              href="https://extrafreshfarm.com" 
              className="inline-flex items-center bg-green-400 hover:text-black px-6 py-3 rounded-md hover:bg-green-500 transition-all duration-300 hover:scale-105"
            >
                <ChevronLeft className="mr-2" />
              Go Home
            </a>
        </div>
    </div>
    );
};

export default NotFound;