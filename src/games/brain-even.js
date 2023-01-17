#!/usr/bin/env node

import readlineSync from 'readline-sync';
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameCore = () => {
  const tempArray = [];
  const randomInt = generateRandomInt(1, 101);
  const getAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
  const evenNumber = randomInt % 2 === 0;
  //   const oddNumber = randomInt % 2 !== 0;

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

const finalArray = gameCore();

const hint = `'${finalArray[0]}' is wrong answer ;(. Correct answer was '${finalArray[1]}'.
            Let's try again, `;

const start = () => {
  playGame(gameCore, finalArray[0], finalArray[1], hint);
};

export default start;
