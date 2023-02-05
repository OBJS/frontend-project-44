#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getNumberSeries = (start, step, length, store = []) => {
  let i = 0;
  let nextNumber = start;
  while (i < length) {
    nextNumber += step;
    store.push(nextNumber);
    i += 1;
  }
};

const startBrainProgressionCore = () => {
  const numbersSeries = [];
  const randomInt = generateRandomInt(1, 100);
  const progressionStep = generateRandomInt(1, 11);
  const progressionLength = generateRandomInt(5, 11);

  getNumberSeries(randomInt, progressionStep, progressionLength, numbersSeries);

  const replacementNumber = generateRandomInt(0, numbersSeries.length);
  const hiddenNumber = numbersSeries[replacementNumber];
  const correctAnswer = String(hiddenNumber);
  numbersSeries[replacementNumber] = '..';
  const questionOutput = numbersSeries.join(' ');
  const question = `Question: ${questionOutput}\nYour answer: `;

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainProgressionCore, gameDescription);
};

export default start;
