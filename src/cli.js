import readlineSync from 'readline-sync';

const askForName = readlineSync.question('May I have your name? ');

export default (askForName);
