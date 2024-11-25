import { MapPin } from 'lucide-react';

  // TopBanner component
  const TopBanner = () => {
      
    return (
      <div className="w-full mx-auto bg-slate-100 h-10 items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm h-10">
            {/* Location */}
            <div className='flex flex-row items-center gap-1'>
               <MapPin size={16}/> 
               <p>Thika, Kenya</p>
            </div>
            {/* Language */}
            <p>English</p>
          </div>
        </div>    
      </div>
    );
  };

  export default TopBanner;