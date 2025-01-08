import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Modal = ({show, onClose, score, totalQuestions}) => {
    const navigate = useNavigate()
   

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
        navigate('/')
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, history]);

  if (!show) {
    return null;
  }

return (
    <div className="modal modal-open">
        <div className="modal-box">
            <h2 className="font-bold text-lg">Quiz Finished!</h2>
            <p className="py-4">
                Your score: {score}/{totalQuestions}
            </p>
        </div>
    </div>
);
};

export default Modal;
