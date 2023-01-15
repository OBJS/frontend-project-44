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

const testArray = [];

const gameCore = () => {
  const randomInt = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const getAnswer = readlineSync.question(`Question: ${randomInt} ${randomExpression} ${randomInt2}\nYour answer: `);
  testArray.push(getAnswer);
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
  testArray.push(correctAnswer);
//   return correctAnswer;
};

const start = () => {
  playGame(gameCore, testArray);
};

export default start;
