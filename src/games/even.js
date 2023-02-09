import readlineSync from 'readline-sync';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

export const startEvenGame = () => {
    const maxRoundsCount = 3;
    const isEven = (number) => number % 2 === 0;
    
    const gameLogic = () => {
        const question = getRandomNumber();
        const correctAnswer = isEven(question) ? 'yes' : 'no';

        return [question, correctAnswer];
    };

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= maxRoundsCount; i += 1) {
        const roundData = gameLogic();
        const [question, correctAnswer] = roundData;
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);

            return;
        }

        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};