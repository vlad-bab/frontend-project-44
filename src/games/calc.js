import readlineSync from 'readline-sync';
import { getRandomNumber } from '/home/vladislavba/frontend-project-44/src/randomNumberGenerator.js';

export const startCalcGame = () => {
    const maxRoundsCount = 3;
    const operators = ['+', '-', '*'];
    
    const gameLogic = () => {
        const firstNumber = getRandomNumber(1, 50);
        const secondNumber = getRandomNumber(1, 50);
        const operator = operators[getRandomNumber(0, operators.length - 1)];

        const question = `${firstNumber} ${operator} ${secondNumber}`;
        const correctAnswer = eval(question);

        return [question, correctAnswer];
    };

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('What is the result of the expression?');

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

