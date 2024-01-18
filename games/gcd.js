import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const gcd = (number1, number2) => ((!number2) ? number1 : gcd(number2, number1 % number2));

const generateRoundProperties = () => {
  const multiplier = getRandomNumber(10);
  const number1 = multiplier * getRandomNumber(10);
  const number2 = multiplier * getRandomNumber(10);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: `${gcd(number1, number2)}`,
  };
};

export default () => {
  game('Find the greatest common divisor of given numbers.', generateRoundProperties);
};
