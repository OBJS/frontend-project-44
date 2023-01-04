#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const userName = greet();

const generateRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateExpression = () => {
  const expressions = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * expressions.length);
  return expressions[rand];
};

const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = generateRandomInt(1, 11);
    const randomInt2 = generateRandomInt(1, 11);
    const randomExpression = generateExpression();
    const getAnswer = readlineSync.question(`Question: ${randomInt} ${randomExpression} ${randomInt2}\nYour answer: `);
    const getResultOfExpression = () => {
      switch (randomExpression) {
        case '+':
          return randomInt + randomInt2;
        case '-':
          return randomInt - randomInt2;
        case '*':
          return randomInt * randomInt2;
        default:
          break;
      }
    };
    const resultOfExpression = getResultOfExpression();
    const correct = resultOfExpression === Number(getAnswer);

    if (correct) {
      console.log('Correct!');
    } else {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${resultOfExpression}'.
            Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

console.log('What is the result of the expression?');
playGame();
