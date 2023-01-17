#!/usr/bin/env node

import greet from './cli.js';

const userName = greet();

// const playGame = (core, answer) => {
//   for (let i = 0; i < 3; i += 1) {
//     core();
//     if (answer[2 * i + 1] === Number(answer[2 * i])) {
//       console.log('Correct!');
//     } else {
//       return console.log(`'${answer[2 * i]}' is wrong answer ;(. Correct answer was '${answer[2 * i + 1]}'.
//             Let's try again, ${userName}!`);
//     }
//   }
//   return console.log(`Congratulations, ${userName}!`);
// };

const playGame = (core, answer, correctAnswer, hint) => {
  for (let i = 0; i < 3; i += 1) {
    core();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${hint}${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
