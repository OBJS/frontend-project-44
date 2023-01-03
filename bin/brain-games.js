#!/usr/bin/env node

import askForName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askForName;
console.log(`Hello, ${name}!`);

export default (name);
