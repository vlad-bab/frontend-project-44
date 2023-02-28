import gameEngine from '../index.js';
import getRandomNumber from '../randomNumberGenerator.js';

const getGreatestCommonDivisor = (firstValue, secondValue) => {
  if (firstValue === 0) {
    return secondValue;
  }
  return getGreatestCommonDivisor(secondValue % firstValue, firstValue);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatestCommonDivisor.toString();

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, gameLogic);
};
