#!/usr/bin/env node

import question from '../src/cli.js';

const getRandomNumber = () => {
  const rangeNumber = 100;
  const randomNumber = Math.random();

  return Math.floor(randomNumber * rangeNumber);
};

const checkEvenNumber = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  const isEvenNumber = checkEvenNumber(number);

  let correctAnswer = 'no';
  if (isEvenNumber) {
    correctAnswer = 'yes';
  }

  return correctAnswer;
};

const gameRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = getCorrectAnswer(randomNumber);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const askUserName = () => {
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

const app = () => {
  console.log('Welcome to the Brain Games!');

  const userName = askUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countGameRounds = 0;
  while (countGameRounds !== 3) {
    const isWinRound = gameRound();

    if (!isWinRound) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    countGameRounds += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

app();
