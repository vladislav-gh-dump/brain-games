import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const chooseRandom = (list) => list[getRandomNumber(list.length - 1)];

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return `${number1 + number2}`;
    case '-':
      return `${number1 - number2}`;
    case '*':
      return `${number1 * number2}`;
    default:
      return null;
  }
};

const generateRoundProperties = () => {
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);
  const operator = chooseRandom(['+', '-', '*']);

  return {
    question: `${number1} ${operator} ${number2}`,
    correctAnswer: calc(number1, number2, operator),
  };
};

export default () => {
  game('What is the result of the expression?', generateRoundProperties);
};
