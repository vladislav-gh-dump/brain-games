import game from '../index.js';
import getRandomNumber from '../utils.js';

const findGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGCD(secondNumber, firstNumber % secondNumber);
};

const generateRoundProperties = () => {
  const commonMultiplier = getRandomNumber(10);
  const firstNumber = commonMultiplier * getRandomNumber(10);
  const secondNumber = commonMultiplier * getRandomNumber(10);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${findGCD(firstNumber, secondNumber)}`;

  return { question, correctAnswer };
};

export default () => {
  game('Find the greatest common divisor of given numbers.', generateRoundProperties);
};
