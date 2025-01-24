import { t } from "i18next";
import {useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HashLink } from "react-router-hash-link";

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
      <HashLink to='/courseIntro#'
        className="btn btn-secondary mt-6"
        onClick={()=>setShowQuiz(false)}>
        {t("quiz.quizResults.buttons.restartModule")}
      </HashLink>
    </div>
  );
};

const Quiz = (props) => {
  const { quiz: questions, setShowQuiz } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTestFinished, setIsTestFinished] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption && selectedOption.is_correct) {
      setScore(score + 100 / questions?.length);
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsTestFinished(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };
  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsTestFinished(false);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      {!isTestFinished ? (
        <>
          <div className="absolute top-10 text-center text-yellow-500 font-semibold">
            {t("quiz.title")} {currentQuestion + 1}/{questions?.length}
          </div>
          <div className="relative w-full max-w-[500px] h-full max-h-[400px] overflow-hidden">
            {questions?.map((question, index) => (
              <div
                key={question.id}
                className={`border border-yellow-500 absolute top-10 left-0 w-full min-h-[300px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-500 ${
                  index === currentQuestion
                    ? "z-30 translate-y-0 opacity-100"
                    : index < currentQuestion
                    ? "z-40 translate-y-[200%] opacity-100"
                    : "z-10 -translate-y-4 opacity-100"
                }`}
                style={{
                  transform: index === currentQuestion ? "translateY(0)" : undefined,
                }}
              >
                <h2 className="text-lg font-semibold mb-4">{question.name}</h2>
                <div className="flex flex-col space-y-2">
                  {question.options.map((option) => (
                    <label key={option.id} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        className="w-4 h-4"
                        checked={selectedOption?.id === option.id}
                        onChange={() => handleOptionChange(option)}
                      />
                      <span>{option.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 flex space-x-4 z-[99]">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 ${
                currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {t("quiz.back")}
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              {currentQuestion === questions.length - 1 ? t("quiz.finish") : t("quiz.next")}
            </button>
          </div>
        </>
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



