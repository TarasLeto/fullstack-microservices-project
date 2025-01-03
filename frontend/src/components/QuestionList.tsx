import React from 'react';
import { Question } from '../types/question';
import QuestionItem from './QuestionItem';

type Props = {
  questions: Question[];
};

const QuestionList: React.FC<Props> = ({ questions }) => {
  return (
    <div>
      {questions.map((q) => (
        <QuestionItem key={q.id} question={q} />
      ))}
    </div>
  );
};

export default QuestionList;
