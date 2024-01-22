import game from '../index.js';
import getRandomNumber from '../utils/random-number.js';

const getProgressionNumbers = (lengthArray, firstNumber, differenceOfNumbers) => {
  const progressionNumbers = [firstNumber];

  let nextNumber = firstNumber;
  for (let i = 1; i < lengthArray; i += 1) {
    nextNumber += differenceOfNumbers;
    progressionNumbers.push(nextNumber);
  }

  return progressionNumbers;
};

const generateRoundProperties = () => {
  const firstNumber = getRandomNumber(30);
  const differenceOfNumbers = getRandomNumber(5);

  const progressionNumbers = getProgressionNumbers(10, firstNumber, differenceOfNumbers);
  const indexOfMissingNumber = getRandomNumber(progressionNumbers.length - 1);
  const missingNumber = progressionNumbers[indexOfMissingNumber];
  progressionNumbers[indexOfMissingNumber] = '..';

  const question = progressionNumbers.join(' ');
  const correctAnswer = `${missingNumber}`;

  return { question, correctAnswer };
};

export default () => {
  game('What number is missing in the progression?', generateRoundProperties);
};
