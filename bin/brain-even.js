#!/usr/bin/env node

import question from '../src/cli.js';

const getRandomNumber = () => {
  const rangeNumber = 100;
  const randomNumber = Math.random();

  return Math.floor(randomNumber * rangeNumber);
};

const checkEvenNumber = (number) => number % 2 === 0;

const app = () => {
  console.log('Welcome to the Brain Games!');

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countCorrectAnswers = 0;
  while (countCorrectAnswers !== 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const answer = question('Your answer: ');
    const isEvenNumber = checkEvenNumber(randomNumber);

    let correctAnswer = 'yes';
    if (isEvenNumber === false) {
      correctAnswer = 'no';
    }

    if (answer === correctAnswer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      countCorrectAnswers = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
};

app();
