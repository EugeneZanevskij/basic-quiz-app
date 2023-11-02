const Result = ({ score, totalQuestions, onRestart }) => {
  const calculatePercentage = () => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Quiz Result</h2>
      <p className="text-lg">Your score: {score}/{totalQuestions}</p>
      <p className="text-lg">Percentage: {calculatePercentage()}%</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700"
        onClick={onRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default Result;