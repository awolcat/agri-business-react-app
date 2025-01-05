import { CircleCheck, ChevronDown } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { products } from "../components/Landing";

const AvocadoPage = () => {
  const avocados = [
    {
      name: "Hass Avocado",
      badge: "Most Popular",
      description: "Our premium Hass avocados feature a creamy, rich flesh and distinctive pebbly dark skin that turns from green to purplish-black when ripe. Perfect for guacamole and toast.",
      features: [
        "Rich, nutty flavor",
        "Creamy texture",
        "Year-round availability"
      ]
    },
    {
      name: "Fuerte Avocado",
      badge: "Classic Choice",
      description: "Fuerte avocados are known for their smooth, green skin and subtle flavor. These pear-shaped fruits are slightly larger than Hass and maintain their green color when ripe.",
      features: [
        "Mild, creamy flavor",
        "Smooth texture",
        "Seasonal availability"
      ]
    },
    {
      name: "Reed Avocado",
      badge: "Gourmet Selection",
      description: "Reed avocados are large, round fruits with thick, slightly pebbled green skin. They're known for their exceptional flavor and high oil content, making them perfect for salads.",
      features: [
        "Buttery flavor",
        "Dense, creamy texture",
        "Limited seasonal availability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Kenyan Avocados</h1>
          <p className="text-xl">Sustainably grown in the rich soils of Kenya</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-12 text-center">
          Experience the finest selection of Kenyan avocados, cultivated with care in our sustainable farms. 
          Each variety offers unique characteristics perfect for different culinary applications.
        </p>

        {/* Avocado Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avocados.map((avocado, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src="/api/placeholder/400/200" 
                alt={avocado.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm text-white bg-green-600 rounded-full mb-4">
                  {avocado.badge}
                </span>
                <h2 className="text-2xl font-bold mb-4">{avocado.name}</h2>
                <p className="text-gray-600 mb-6">{avocado.description}</p>
                <ul className="space-y-2">
                  {avocado.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-gray-700">
                      <CircleCheck size={16} color="#18d100" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
              </div>
              <a 
                    href="#enquiry" 
                    className="inline-flex items-center bg-green-500 font-semibold text-white hover:text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all duration-300 hover:scale-105 mb-6"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('enquiry')?.scrollIntoView({behavior: "smooth"})}}
              >
                    Enquire
                    <ChevronDown className="ml-2" />
                </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enquiry Form */}
      <EnquiryForm products={products}/>
    </div>
  );
};

export default AvocadoPage;