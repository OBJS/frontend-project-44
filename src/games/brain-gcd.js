#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const startBrainGcdCore = () => {
  let randomInt1 = generateRandomInt(1, 100);
  let randomInt2 = generateRandomInt(1, 100);
  const question = `Question: ${randomInt1} ${randomInt2}\nYour answer: `;
  const getCorrectAnswer = () => {
    while (randomInt1 !== 0 && randomInt2 !== 0) {
      if (randomInt1 > randomInt2) {
        randomInt1 %= randomInt2;
      } else {
        randomInt2 %= randomInt1;
      }
    }
    return randomInt1 + randomInt2;
  };

  const correctAnswer = String(getCorrectAnswer());

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainGcdCore, gameDescription);
};

export default start;
