import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const signs = ['+', '-', '*'];

const getCorrectAnswer = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const getRoundProperties = () => {
  const randomNumber1 = getRandomNumber(50);
  const randomNumber2 = getRandomNumber(50);
  const randomSign = signs[getRandomNumber(2)];

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2, randomSign);
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;

  return { question, correctAnswer };
};

export default () => {
  game('What is the result of the expression?', getRoundProperties);
};
