import {t} from "i18next";
import {useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {HashLink} from "react-router-hash-link";

const QuizResultss = ({score, totalQuestions, onRetake}) => {
  const passingScore = 80;
  const isPassed = score >= passingScore;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-6">
        {t("quiz.quizResults.title")}
      </div>
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
        <p>
          {t("quiz.quizResults.details.totalQuestions")}: {totalQuestions}
        </p>
        <p>
          {t("quiz.quizResults.details.correctAnswers")}:{" "}
          {Math.round((score / 100) * totalQuestions)}
        </p>
        <p>
          {t("quiz.quizResults.details.passingScore")}: {passingScore}%
        </p>
      </div>
      <button
        className="btn btn-primary mt-6"
        onClick={onRetake}>
        {t("quiz.quizResults.buttons.retakeQuiz")}
      </button>
      <HashLink
        to="/courseIntro#"
        className="btn btn-secondary mt-6"
        onClick={() => {
          localStorage.setItem("showQuiz", false);
        }}>
        {t("quiz.quizResults.buttons.restartModule")}
      </HashLink>
    </div>
  );
};

const Quiz = () => {
  const questions = JSON.parse(localStorage.getItem("questions"));
  console.log(questions);

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
    <div className="relative w-full h-[1000px] flex flex-col items-center justify-center bg-gray-100 py-20">
      {!isTestFinished ? (
        <>
          <div className="relative w-full max-w-[1020px] h-full max-h-[1060px] overflow-hidden">
            {questions?.map((question, index) => (
              <div
                key={question.id}
                className={` scale-95  absolute top-10 left-0 w-full min-h-[700px]  bg-white rounded-lg shadow-lg py-20 px-40 flex flex-col gap-10 transition-transform duration-500 ${
                  index === currentQuestion
                    ? "z-30 translate-y-0 opacity-100 "
                    : index < currentQuestion
                    ? "z-40 translate-y-[200%] opacity-100"
                    : "z-10 -translate-y-10 opacity-100"
                }`}
                style={{
                  transform:
                    index === currentQuestion ? "translateY(0)" : undefined,
                }}>
                {" "}
                <div className="  font-semibold">
                  <h3 className="mb-2 italic">{t("quiz.title")}</h3>
                  <span className="font-bold font-mono text-yellow-500 text-3xl">
                    {currentQuestion + 1}/{questions?.length}
                  </span>
                </div>
                <h2 className="text-lg font-semibold pb-4  border-b-2 border-b-yellow-500">
                  {question.id}.{question.name}
                </h2>
                <div className="flex flex-col space-y-2 ">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className=" label-text text-lg hover:bg-gray-50 rounded-md p-5 flex items-center  space-x-4">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        className="w-4 h-4 radio radio-warning"
                        checked={selectedOption?.id === option.id}
                        onChange={() => handleOptionChange(option)}
                      />
                      <span>{option.name}</span>
                    </label>
                  ))}
                </div>
                <div className="  flex space-x-4 z-[99]">
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    {currentQuestion === questions.length - 1
                      ? t("quiz.result")
                      : t("quiz.next")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <QuizResultss
          score={Math.round(score)}
          totalQuestions={questions.length}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
};

export default Quiz;
