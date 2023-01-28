#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = console.log('What is the result of the expression?');

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
  tempArray.push(readlineSync.question(`Question: ${randomInt} ${randomExpression} ${randomInt2}\nYour answer: `));
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

const start = () => {
  playGame(gameCore, gameDescription);
};

export default start;
