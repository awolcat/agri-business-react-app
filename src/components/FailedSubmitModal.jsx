import { useEffect } from "react";

const FailModal = ({ isOpen, onClose, message = "Something went wrong!" }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to re-enable scrolling when modal closes
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 top-50 animate-fade-in">
        <div className="bg-red-50 flex flex-col gap-5 border border-red-200 p-6 rounded-lg shadow-xl max-w-sm w-full">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-red-700 font-semibold">Error</h2>
          </div>
          <p className="text-red-800">{message}</p>
          <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        > Back to Home
        </button>
        </div>
      </div>
    );
  };
  
  export default FailModal;