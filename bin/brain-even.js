#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const userName = greet();
const generateRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = generateRandomInt(1, 101);
    const getAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
    const evenNumber = randomInt % 2 === 0;
    const oddNumber = randomInt % 2 !== 0;

    if (evenNumber) {
      if (getAnswer === 'yes') {
        console.log('Correct!');
      } else {
        return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes'.
                Let's try again, ${userName}!`);
      }
    } else if (oddNumber) {
      if (getAnswer === 'no') {
        console.log('Correct!');
      } else {
        return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'no'.
                Let's try again, ${userName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame();
