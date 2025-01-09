import {useState} from "react";
import Modal from "../components/Modal";
import { questions } from "../mock/quest";


const Quiz = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
    <div className="quiz-container p-4 bg-slate-200 rounded-lg w-96 mx-auto mt-28">
      {questions.length > 0 && (
        <>
          <h2>{questions[currentQuestion].questionText}</h2>
          <ul className="mb-2">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label className=" label flex justify-start gap-3 items-center">
                  <input
                    type="radio"
                    name="answer"
                    className="radio radio-primary radio-sm"
                    value={option}
                    onChange={() => handleAnswerSelection(option)}
                    checked={selectedAnswer === option}
                  />
                  {option}
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
  );
};

export default Quiz;
