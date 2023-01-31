#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGameCore = () => {
  const answerStore = [];
  const randomInt = generateRandomInt(1, 20);
  const question = `Question: ${randomInt}\nYour answer: `;

  const isPrime = () => {
    if (randomInt < 2) {
      return 'no';
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
  answerStore.push(question, correctAnswer);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
