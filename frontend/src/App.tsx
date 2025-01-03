import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import QuestionInput from './components/QuestionInput';
import { fetchQuestions } from './services/api';
import { Question } from './types/question';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const loadQuestions = async (count: number) => {
    const data = await fetchQuestions(count);
    setQuestions(data);
  };

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <QuestionInput onFetch={loadQuestions} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
