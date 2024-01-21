import game from '../src/index.js';

const getRandomNumber = (limitNumber) => {
  const inclusiveLimitNumber = limitNumber + 1;
  const randomNumber = Math.random() * inclusiveLimitNumber;
  const roundDownNumber = Math.floor(randomNumber);

  return roundDownNumber;
};

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
