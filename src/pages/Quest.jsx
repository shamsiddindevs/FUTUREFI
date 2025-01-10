import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";

const Quiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://mission.uz/en/api/v1/modul/${id}/`);
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1440/980')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="quiz-container p-4 bg-slate-200 rounded-lg w-96">
          {questions.length > 0 && (
            <>
              <h2>{questions[currentQuestion].name}</h2>
              <ul className="mb-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <label className="label flex justify-start gap-3 items-center">
                      <input
                        type="radio"
                        name="answer"
                        className="radio radio-primary radio-sm"
                        value={option.name}
                        onChange={() => handleAnswerSelection(option.name)}
                        checked={selectedAnswer === option.name}
                      />
                      {option.name}
                    </label>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleNextQuestion}
                className="btn btn-primary btn-sm">
                Next
              </button>
            </>
          )}
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            score={score}
            totalQuestions={questions.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
