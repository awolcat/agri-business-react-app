const SuccessModal = ({ onClose, message = "Message sent successfully!" }) => {
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-xl max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-green-700 font-semibold">Success</h2>
            <button 
              onClick={onClose} 
              className="text-green-700 hover:text-green-900"
            >
              ✕
            </button>
          </div>
          <p className="text-green-800">{message}</p>
        </div>
      </div>
    );
  };
  
  export default SuccessModal;