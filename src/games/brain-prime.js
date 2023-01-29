#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const gameCore = () => {
  const tempArray = [];
  const randomInt = generateRandomInt(1, 20);
  tempArray.push(readlineSync.question(`Question: ${randomInt}\nYour answer: `));

  const isPrime = () => {
    if (randomInt < 2) {
      return 'no';
    } else if (randomInt === 2) {
      return 'yes';
    }

    let i = 2;
    const range = randomInt;
    while (i < range) {
      if (randomInt % i === 0) {
        return 'no';
      }
      i += 1;
    }

    return 'yes';
  };

  const correctAnswer = isPrime();
  tempArray.push(correctAnswer);

  return tempArray;
};

const start = () => {
  playGame(gameCore, gameDescription);
};

export default start;
