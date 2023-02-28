import gameEngine from '../index.js';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

const getProgression = (startNumber, progressionStep, progressionLength) => {
    const progression = [];
    
    for (let i = 0; i < progressionLength; i += 1) {
        progression.push(startNumber + progressionStep * i);
    }

    return progression;
};

const gameDescription = 'What number is missing in the progression?';

const gameLogic = () => {
    const startNumber = getRandomNumber(1, 9);
    const progressionStep = getRandomNumber(1, 9);
    const progressionLength = 10;

    const progression = getProgression(startNumber, progressionStep, progressionLength);

    const randomIndex = getRandomNumber(0, progression.length - 1)
    const hiddenNumber = progression[randomIndex];
    progression[randomIndex] = '..';

    const question = progression.join(' ');
    const correctAnswer = hiddenNumber.toString();

    return [question, correctAnswer];
};

export default () => {
    gameEngine(gameDescription, gameLogic);
};