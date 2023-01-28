#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameCore = () => {
  const tempArray = [];
  const randomInt = generateRandomInt(1, 101);
  const getAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
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
  tempArray.push(getAnswer, correctAnswer);
  return tempArray;
};

const start = () => {
  playGame(gameCore, gameDescription);
};

export default start;
