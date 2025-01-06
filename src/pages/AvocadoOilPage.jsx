import { CircleCheck } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { products } from "../components/Landing";
import EnquireButton from "../components/EnquireButton";
import VirginOil from '../assets/virgin-avocado-oil.webp';
import RefinedOil from '../assets/refined-avocado-oil.webp';

const AvocadoOilPage = () => {
  const oils = [
    {
      name: "Extra Virgin Avocado Oil",
      badge: "Premium Grade",
      image: VirginOil,
      description: "Cold-pressed from the finest Kenyan avocados, our Extra Virgin Avocado Oil retains all the natural nutrients and flavors. With its high smoke point and rich, buttery taste, it's perfect for both cooking and finishing dishes.",
      features: [
        "Cold-pressed extraction",
        "Rich in antioxidants",
        "Smoke point: 480°F/249°C",
        "Ideal for high-heat cooking",
        "Perfect for dressings and dips"
      ],
      usages: "Great for sautéing, frying, roasting, baking, and as a finishing oil for salads"
    },
    {
      name: "Refined Avocado Oil",
      badge: "All-Purpose",
      image: RefinedOil,
      description: "Our Refined Avocado Oil undergoes careful processing to create a versatile, neutral-flavored oil that maintains its excellent nutritional benefits while being perfect for everyday cooking.",
      features: [
        "Neutral taste profile",
        "High in healthy fats",
        "Smoke point: 500°F/260°C",
        "Versatile cooking applications",
        "Gentle refining process"
      ],
      usages: "Excellent for deep frying, stir-frying, and any high-heat cooking method"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Kenyan Avocado Oil</h1>
          <p className="text-xl">Pure, Healthy, and Sustainably Produced</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-12 text-center">
          Experience the exceptional quality of our avocado oils, carefully extracted from premium Kenyan avocados. 
          Whether you're a professional chef or home cook, we offer the perfect oil for your culinary needs.
        </p>

        {/* Oil Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {oils.map((oil, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={oil.image} 
                alt={`${oil.name} bowl`}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <span className="inline-block px-4 py-1 text-sm text-white bg-green-600 rounded-full mb-4">
                  {oil.badge}
                </span>
                <h2 className="text-2xl font-bold mb-4">{oil.name}</h2>
                <p className="text-gray-600 mb-6">{oil.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {oil.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-gray-700">
                        <CircleCheck size={16} color="#18d100" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Recommended Uses:</h3>
                  <p className="text-gray-600">{oil.usages}</p>
                </div>
              </div>
                <EnquireButton />
            </div>
          ))}
        </div>

        {/* Quality Statement */}
        <div className="mt-16 text-center bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Our Quality Commitment</h2>
          <p className="text-gray-700">
            Every bottle of our avocado oil is produced under strict quality control measures, 
            ensuring you receive the purest, highest-quality product. Our oils are tested for 
            purity and are free from additives and preservatives.
          </p>
        </div>
        <EnquiryForm products={products} />
      </div>
    </div>
  );
};

export default AvocadoOilPage;