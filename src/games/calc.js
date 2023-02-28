import gameEngine from '../index.js';
import getRandomNumber from '../randomNumberGenerator.js';

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';
    
const gameLogic = () => {
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = eval(question).toString();

    return [question, correctAnswer];
};

export default () => {
    gameEngine(gameDescription, gameLogic);
};