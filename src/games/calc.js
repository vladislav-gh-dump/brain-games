import game from '../index.js';
import getRandomNumber from '../utils/random-number.js';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      return null;
  }
};

const generateRoundProperties = () => {
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = `${calculate(firstNumber, secondNumber, operator)}`;

  return { question, correctAnswer };
};

export default () => {
  game('What is the result of the expression?', generateRoundProperties);
};
