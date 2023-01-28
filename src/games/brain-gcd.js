#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = console.log('Find the greatest common divisor of given numbers.');

const gameCore = () => {
  const tempArray = [];
  let randomInt1 = generateRandomInt(1, 100);
  let randomInt2 = generateRandomInt(1, 100);
  tempArray.push(Number(readlineSync.question(`Question: ${randomInt1} ${randomInt2}\nYour answer: `)));
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

  const correctAnswer = getCorrectAnswer();
  tempArray.push(correctAnswer);

  return tempArray;
};

const start = () => {
  playGame(gameCore, gameDescription);
};

export default start;
