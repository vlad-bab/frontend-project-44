import gameEngine from '../index.js';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

const isPrime = (number) => {
    if (number === 2) {
        return true
    }

    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
        return true;
        }
    };

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
    
    const question = getRandomNumber();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    gameEngine(gameDescription, gameLogic);
};