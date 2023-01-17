#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

console.log('What is the result of the expression?');

const generateExpression = () => {
  const expressions = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * expressions.length);
  return expressions[rand];
};

const gameCore = () => {
  const tempArray = [];
  const randomInt = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const getAnswer = readlineSync.question(`Question: ${randomInt} ${randomExpression} ${randomInt2}\nYour answer: `);
  tempArray.push(Number(getAnswer));
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
  const correctAnswer = getResultOfExpression();
  tempArray.push(correctAnswer);

  return tempArray;
};

const finalArray = gameCore();

const hint = `'${finalArray[0]}' is wrong answer ;(. Correct answer was '${finalArray[1]}'.
            Let's try again, `;

const start = () => {
  playGame(gameCore, finalArray[0], finalArray[1], hint);
};

export default start;
