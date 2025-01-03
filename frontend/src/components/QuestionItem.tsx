import React, { useEffect, useState } from 'react';
import { Question } from '../types/question';
import './QuestionItem.css';

type Props = {
  question: Question;
};

const QuestionItem: React.FC<Props> = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [question])
  
  return (
    <div className="question-item">
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            className={
              selectedOption
                ? option === question.answer
                  ? 'correct'
                  : option === selectedOption
                  ? 'wrong'
                  : ''
                : ''
            }
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionItem;
