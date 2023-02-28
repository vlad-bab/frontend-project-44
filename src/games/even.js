import gameEngine from '../index.js';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
    const isEven = (number) => number % 2 === 0;

    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    gameEngine(gameDescription, gameLogic);
};