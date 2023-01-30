#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const expressions = ['+', '-', '*'];
  const generatedExpression = Math.floor(Math.random() * expressions.length);
  return expressions[generatedExpression];
};

const startGameCore = () => {
  const answerStore = [];
  const randomInt1 = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const userAnswer = Number(readlineSync.question(`Question: ${randomInt1} ${randomExpression} ${randomInt2}\nYour answer: `));

  const getResultOfExpression = () => {
    let result;

    switch (randomExpression) {
      case '+':
        result = randomInt1 + randomInt2;
        break;
      case '-':
        result = randomInt1 - randomInt2;
        break;
      case '*':
        result = randomInt1 * randomInt2;
        break;
      default:
        break;
    }

    return result;
  };

  const correctAnswer = getResultOfExpression();
  answerStore.push(userAnswer, correctAnswer);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
