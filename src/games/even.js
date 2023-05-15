import gameEngine from '../index.js';
import getRandomNumber from '../randomNumberGenerator.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const gameLogic = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, gameLogic);
};
