#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const startBrainPrimeCore = () => {
  const randomInt = generateRandomInt(1, 20);
  const question = `Question: ${randomInt}\nYour answer: `;

  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainPrimeCore, gameDescription);
};

export default start;
