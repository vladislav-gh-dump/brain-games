const getRandomNumber = (limitNumber) => {
  const inclusiveLimitNumber = limitNumber + 1;
  const randomNumber = Math.random() * inclusiveLimitNumber;
  const roundDownNumber = Math.floor(randomNumber);

  return roundDownNumber;
};

export default getRandomNumber;
