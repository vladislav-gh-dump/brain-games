import game from '../index.js';

const getRandomNumber = (limitNumber) => {
  const inclusiveLimitNumber = limitNumber + 1;
  const randomNumber = Math.random() * inclusiveLimitNumber;
  const roundDownNumber = Math.floor(randomNumber);

  return roundDownNumber;
};

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
