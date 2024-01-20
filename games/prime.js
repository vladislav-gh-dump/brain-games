import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number > 1 ? 'yes' : 'no';
};

const generateRoundProperties = () => {
  const number = getRandomNumber(10) + 1;

  return {
    question: number,
    correctAnswer: `${isPrimeNumber(number)}`,
  };
};

export default () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', generateRoundProperties);
};
