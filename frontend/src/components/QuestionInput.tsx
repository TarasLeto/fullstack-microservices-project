import React, { useState } from 'react';

type Props = {
  onFetch: (count: number) => void;
};

const QuestionInput: React.FC<Props> = ({ onFetch }) => {
  const [count, setCount] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFetch(count);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Questions:
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          min="1"
        />
      </label>
      <button type="submit">Fetch Questions</button>
    </form>
  );
};

export default QuestionInput;
