import readlineSync from 'readline-sync';

export default (textRules, generateRoundProperties) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(textRules);

  let countRounds = 0;
  while (countRounds !== 3) {
    const roundProperties = generateRoundProperties();
    const { question, correctAnswer } = roundProperties;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    countRounds += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
