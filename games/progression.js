import game from '../src/index.js';

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const chooseRandomIndex = (list) => getRandomNumber(list.length - 1);

const getProgressionArray = (lengthArray, firstNumber, diffNumber) => {
  const array = [firstNumber];
  let progressionNumber = firstNumber;
  for (let i = 0; i < lengthArray - 1; i += 1) {
    progressionNumber += diffNumber;
    array.push(progressionNumber);
  }
  return array;
};

const generateRoundProperties = () => {
  const firstNumber = getRandomNumber(30);
  const diffNumber = getRandomNumber(5);
  const progressionArray = getProgressionArray(10, firstNumber, diffNumber);

  const randomIndex = chooseRandomIndex(progressionArray);
  const correctAnswer = `${progressionArray[randomIndex]}`;
  progressionArray[randomIndex] = '..';

  return {
    question: progressionArray.join(' '),
    correctAnswer,
  };
};

export default () => {
  game('Find the greatest common divisor of given numbers.', generateRoundProperties);
};
