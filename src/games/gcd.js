import gameEngine from '../index.js';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

const getGreatestCommonDivisor = (a, b) => {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a%b;
        } else {
            b = b%a;
        }
    }

    return a + b;
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