import axios from 'axios';

const fetchQuestions = async (count: number) => {
  const services = [
    process.env.MATH_SERVICE_URL,
    process.env.HISTORY_SERVICE_URL,
    process.env.GEOGRAPHY_SERVICE_URL,
  ];

  const requests = services.map((url) => axios.get(`${url}/questions?count=${Math.ceil(count / 3)}`));

  const responses = await Promise.all(requests);
  const questions = responses.flatMap((response) => response.data);

  return questions.slice(0, count);
};

export default fetchQuestions;
