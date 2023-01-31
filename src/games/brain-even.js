#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameCore = () => {
  const answerStore = [];
  const randomInt = generateRandomInt(1, 101);
  const question = `Question: ${randomInt}\nYour answer: `;
  const evenNumber = randomInt % 2 === 0;

  const getCorrectAnswer = () => {
    let correct;
    if (evenNumber) {
      correct = 'yes';
    } else {
      correct = 'no';
    }

    return correct;
  };

  const correctAnswer = getCorrectAnswer();
  answerStore.push(question, correctAnswer);

  return answerStore;
};

const start = () => {
  playGame(startGameCore, gameDescription);
};

export default start;
