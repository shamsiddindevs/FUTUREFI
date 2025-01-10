import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons

const Modal = ({ show, onClose, score, totalQuestions }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, navigate]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 text-3xl mr-2" /> {/* Icon with styles */}
          <h2 className="font-bold text-lg">Quiz Finished!</h2>
        </div>
        <p className="py-4">
          Your score: {score}/{totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default Modal;
