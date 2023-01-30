#!/usr/bin/env node

import greet from './cli.js';

const userName = greet();

const playGame = (gameCore, gameDescription) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(gameDescription);
    const [userAnswer, correctAnswer] = gameCore();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
