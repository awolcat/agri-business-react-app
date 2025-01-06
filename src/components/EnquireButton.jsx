import { ChevronDown } from "lucide-react"

const EnquireButton = () => {
    return (
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
    )
}

export default EnquireButton;