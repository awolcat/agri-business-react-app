import EnquireButton from "../components/EnquireButton";
import { products } from "../components/Landing";
import EnquiryForm from "../components/EnquiryForm";

const MacadamiaPage = () => {
  const features = [
    "100% natural, no additives",
    "Harvested at peak ripeness",
    "Rich in healthy fats and nutrients",
    "Creamy, buttery texture",
    "Sourced from Kenyan highlands",
    "Perfect for snacking or cooking"
  ];

  const nutritionalInfo = [
    "Protein: 7.9g per 100g",
    "Healthy Fats: 75.8g per 100g",
    "Fiber: 8.6g per 100g",
    "Rich in Vitamin B1, B6, and manganese",
    "Excellent source of heart-healthy monounsaturated fats"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Raw Macadamia Nuts</h1>
          <p className="text-xl">Nature's Perfect Snack from the Highlands of Kenya</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Product Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={products[2].image} 
              alt="Raw Macadamia Nuts"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <span className="inline-block px-4 py-1 text-sm text-white bg-amber-600 rounded-full mb-4">
                Premium Grade
              </span>
              
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience the exceptional quality of our raw macadamia nuts, carefully harvested 
                  from the fertile highlands of Kenya. Each nut is naturally rich in flavor, delivering 
                  the pure, buttery taste and creamy texture that makes macadamias famous worldwide.
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Product Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutritional Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
                <ul className="space-y-2">
                  {nutritionalInfo.map((info, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage Suggestions */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold mb-4">Ways to Enjoy</h2>
                <p className="text-gray-700">
                  Perfect for healthy snacking straight from the pack, our raw macadamia nuts also add 
                  luxury to your favorite recipes. Use them in baking, blend into smoothies, crush for 
                  salad toppings, or process into creamy nut butter. Their versatility makes them a 
                  valuable addition to any kitchen.
                </p>
              </div>
            </div>
            <EnquireButton />
          </div>

          {/* Quality Statement */}
          <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Our Quality Promise</h2>
            <p className="text-gray-700">
              Every batch of our macadamia nuts undergoes strict quality control measures to ensure 
              premium quality and freshness. We take pride in delivering nuts that meet the highest 
              standards of excellence, from harvest to packaging.
            </p>
          </div>
        </div>
        <EnquiryForm products={products} />
      </div>
    </div>
  );
};

export default MacadamiaPage;