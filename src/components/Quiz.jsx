import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questionsData from '../data/questionsData.js';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    nextQuestion();
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
      if (questionsData[questionIndex].correctIndex === answerIndex) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="bg-gray-100 h-screen p-4 rounded-lg shadow">
      {currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <Result score={calculateScore()} totalQuestions={questionsData.length} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default Quiz;