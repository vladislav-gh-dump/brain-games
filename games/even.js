import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const isEvenNumber = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEvenNumber(number) ? 'yes' : 'no');

const getRoundProperties = () => {
  const randomNumber = getRandomNumber(50);
  const correctAnswer = getCorrectAnswer(randomNumber);

  return { question: randomNumber, correctAnswer };
};

export default () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', getRoundProperties);
};
