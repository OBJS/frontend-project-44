#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const expressions = ['+', '-', '*'];
  const generatedExpression = generateRandomInt(0, 3);
  return expressions[generatedExpression];
};

const getResultOfExpression = (integer1, integer2, expression) => {
  let result;

  switch (expression) {
    case '+':
      result = integer1 + integer2;
      break;
    case '-':
      result = integer1 - integer2;
      break;
    case '*':
      result = integer1 * integer2;
      break;
    default:
      break;
  }

  return result;
};

const startGameCore = () => {
  const answerStore = [];
  const randomInt1 = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const userAnswer = Number(readlineSync.question(`Question: ${randomInt1} ${randomExpression} ${randomInt2}\nYour answer: `));

  const correctAnswer = getResultOfExpression(randomInt1, randomInt2, randomExpression);
  answerStore.push(userAnswer, correctAnswer);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
