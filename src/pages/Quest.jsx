import { t } from "i18next";
import {useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuizResultss = ({score, totalQuestions, onRetake,setShowQuiz}) => {
  const passingScore = 80;
  const isPassed = score >= passingScore;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-6">{t("quiz.quizResults.title")}</div>
      <div className="w-48 h-48 mb-4">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: isPassed ? "green" : "red",
            pathColor: isPassed ? "green" : "red",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div className="text-lg font-semibold mb-4">
        {isPassed ? (
          <span className="text-green-500">✅</span>
        ) : (
          <span className="text-red-500">❌</span>
        )}
      </div>
      <div className="text-gray-700">
        <p>{t("quiz.quizResults.details.totalQuestions")}: {totalQuestions}</p>
        <p>{t("quiz.quizResults.details.correctAnswers")}: {Math.round((score / 100) * totalQuestions)}</p>
        <p>{t("quiz.quizResults.details.passingScore")}: {passingScore}%</p>
      </div>
      <button
        className="btn btn-primary mt-6"
        onClick={onRetake}>
       {t("quiz.quizResults.buttons.retakeQuiz")}
      </button>
      <button
        className="btn btn-secondary mt-6"
        onClick={()=>setShowQuiz(false)}>
        {t("quiz.quizResults.buttons.restartModule")}
      </button>
    </div>
  );
};

const Quiz = (props) => {
  console.log(props);
  const {quiz: questions, setShowQuiz} = props;



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [result, setResult] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
   

    const isCorrect = selectedOption.is_correct;

    if (isCorrect) {
      setScore(score + 100 / questions?.length); // Update score dynamically
    }

    setResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setResult(null);
    } else {
      setIsTestFinished(true); // Mark the test as finished
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setResult(null);
    setIsTestFinished(false);
  };

  return (
    <div className="h-full">
      {!isTestFinished ? (
        <div className="flex justify-center items-center h-full bg-gray-100">
          <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">
              {t("quiz.title")} {currentQuestion + 1}/{questions?.length}
            </h2>
            <p className="mb-4">{questions[currentQuestion]?.name}</p>
            <div className="flex flex-col gap-2">
              {questions[currentQuestion]?.options?.map((option) => (
                <label
                  key={option.id}
                  className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={option.id}
                    className="radio radio-primary mr-2"
                    checked={selectedOption?.id === option?.id}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option.name}
                </label>
              ))}
            </div>
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={handleSubmit}>
              {t("quiz.start")}
            </button>
            {!selectedOption && (
              <div className="mt-4 p-2 rounded-md text-gray-800 bg-green-200">
                {t("quiz.unselect")}
              </div>
            )}
            {result && (
              <button
                className="btn btn-secondary mt-4 w-full"
                onClick={handleNext}>
                {currentQuestion < questions.length - 1
                  ? t("quiz.next")
                  : t("quiz.result")}
              </button>
            )}
          </div>
        </div>
      ) : (
        <QuizResultss
          score={Math.round(score)}
          totalQuestions={questions.length}
          onRetake={handleRetake}
          setShowQuiz={setShowQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
