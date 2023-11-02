import Answer from './Answer';

const Question = ({ question: { question, options }, onAnswerSelect }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <ul>
        {options.map((option, index) => (
          <Answer key={index} answer={option} onAnswerSelect={() => onAnswerSelect(index)} />
        ))}
      </ul>
    </div>
  );
};

export default Question;