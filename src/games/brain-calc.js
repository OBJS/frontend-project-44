#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const expressions = ['+', '-', '*'];
  const generatedExpressionIndex = generateRandomInt(0, 3);
  return expressions[generatedExpressionIndex];
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

const startBrainCalcCore = () => {
  const randomInt1 = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const question = `Question: ${randomInt1} ${randomExpression} ${randomInt2}\nYour answer: `;

  const correctAnswer = String(getResultOfExpression(randomInt1, randomInt2, randomExpression));

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainCalcCore, gameDescription);
};

export default start;
