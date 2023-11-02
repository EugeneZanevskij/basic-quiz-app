import React from 'react';

const Answer = ({ answer, onAnswerSelect }) => {
  return (
    <li
      className="cursor-pointer hover:bg-gray-200 rounded p-2 mb-2"
      onClick={onAnswerSelect}
    >
      {answer}
    </li>
  );
};

export default Answer;