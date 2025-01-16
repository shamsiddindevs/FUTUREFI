// App.js
import  { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "Each financial decision you make involves trade-offs between ______ you and ______ you.",
      options: ["Past and future", "Present and past", "Present and future"],
      correct: "Present and future",
      explanation:
        "Each financial decision involves trade-offs between your present and future selves. Spending today can affect your future savings.",
    },
    {
      question:
        "Dorothy starts investing at age 15, putting aside $100 per month until she is 25. Alex starts investing at age 30. Who is better prepared for retirement?",
      options: ["Dorothy", "Alex", "They would be equally prepared"],
      correct: "Dorothy",
      explanation:
        "Dorothy is better prepared because she benefits from compounding. Starting earlier allows her investments to grow more over time.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setResult("Please select an answer.");
      return;
    }

    const isCorrect = selectedOption === questions[currentQuestion].correct;
    setResult(
      isCorrect
        ? `Correct! ${questions[currentQuestion].explanation}`
        : `Incorrect. ${questions[currentQuestion].explanation}`
    );
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setResult(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md ">
        <h2 className="text-lg font-bold mb-4">
          Question {currentQuestion + 1}/{questions.length}
        </h2>
        <p className="mb-4">{questions[currentQuestion].question}</p>
        <div className="flex flex-col gap-2">
          {questions[currentQuestion].options.map((option) => (
            <label key={option} className="cursor-pointer flex items-center">
              <input
                type="radio"
                name="option"
                value={option}
                className="radio radio-primary mr-2"
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {result && (
          <div className="mt-4 p-2 rounded-md text-white bg-gray-800">
            {result}
          </div>
        )}
        {result && currentQuestion < questions.length - 1 && (
          <button
            className="btn btn-secondary mt-4 w-full"
            onClick={handleNext}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

