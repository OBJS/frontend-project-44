#!/usr/bin/env node

import greet from './cli.js';

const userName = greet();

const playGame = (core, gameDescription) => {
  for (let i = 0; i < 3; i += 1) {
    gameDescription;
    const [answer, correctAnswer] = core();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      //             Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
