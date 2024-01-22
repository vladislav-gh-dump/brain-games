import game from '../index.js';
import getRandomNumber from '../utils/random-number.js';

const isEvenNumber = (number) => (number % 2 === 0);

const generateRoundProperties = () => {
  const number = getRandomNumber(50);

  const question = `${number}`;
  const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', generateRoundProperties);
};
