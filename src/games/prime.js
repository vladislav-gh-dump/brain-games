import game from '../index.js';
import getRandomNumber from '../utils.js';

const isPrimeNumber = (number) => {
  const firstNotPrimeNumber = 1;
  const firstPrimeNumber = 2;

  if (number === firstNotPrimeNumber) {
    return false;
  }

  for (let i = firstPrimeNumber; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundProperties = () => {
  const firstNotPrimeNumber = 1;
  const number = firstNotPrimeNumber + getRandomNumber(10);

  const question = `${number}`;
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', generateRoundProperties);
};
