import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const isEvenNumber = (number) => number % 2 === 0;

const generateRoundProperties = () => {
  const number = getRandomNumber(50);

  return {
    question: number,
    correctAnswer: isEvenNumber(number) ? 'yes' : 'no',
  };
};

export default () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', generateRoundProperties);
};
