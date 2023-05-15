import gameEngine from '../index.js';
import getRandomNumber from '../randomNumberGenerator.js';

const operators = ['+', '-', '*'];

const getResultOfExpression = (firstValue, operator, secondValue) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(Operator `${operator} - is incorrect!`);
  }
};

const gameDescription = 'What is the result of the expression?';

const gameLogic = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

export default () => {
  gameEngine(gameDescription, gameLogic);
};
