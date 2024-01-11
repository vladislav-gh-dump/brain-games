import readlineSync from 'readline-sync';

export default (questionText) => {
  const answer = readlineSync.question(questionText);

  return answer;
};
