#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const startGameCore = () => {
  const answerStore = [];
  const numbersSeries = [];
  let randomInt = generateRandomInt(1, 100);
  const progressionStep = generateRandomInt(1, 11);
  const progressionLength = generateRandomInt(5, 11);

  let i = 0;
  while (i < progressionLength) {
    randomInt += progressionStep;
    numbersSeries.push(randomInt);
    i += 1;
  }

  const replacementNumber = generateRandomInt(0, numbersSeries.length);
  const hiddenNumber = numbersSeries[replacementNumber];
  const correctAnswer = String(hiddenNumber);
  numbersSeries[replacementNumber] = '..';
  const questionOutput = numbersSeries.join(' ');
  const question = `Question: ${questionOutput}\nYour answer: `;
  answerStore.push(question, correctAnswer);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
