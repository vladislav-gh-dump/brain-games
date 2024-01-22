import game from '../index.js';

const getRandomNumber = (limitNumber) => {
  const inclusiveLimitNumber = limitNumber + 1;
  const randomNumber = Math.random() * inclusiveLimitNumber;
  const roundDownNumber = Math.floor(randomNumber);

  return roundDownNumber;
};

const doCalculations = (firstNumber, secondNumber, operator) => {
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
  const correctAnswer = `${doCalculations(firstNumber, secondNumber, operator)}`;

  return { question, correctAnswer };
};

export default () => {
  game('What is the result of the expression?', generateRoundProperties);
};
