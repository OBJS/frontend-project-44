#!/usr/bin/env node

import readlineSync from 'readline-sync';
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
  numbersSeries[replacementNumber] = '..';
  const questionOutput = numbersSeries.join(' ');
  const userAnswer = Number(readlineSync.question(`Question: ${questionOutput}\nYour answer: `));
  answerStore.push(userAnswer, hiddenNumber);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
