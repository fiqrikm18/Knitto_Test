import { createInterface } from 'node:readline';
import { stdin, stdout } from 'process';

import FizzBuzz from './fizzbuzz';
import Palindrome from './palindrome';

const rl = createInterface({
  input: stdin,
  output: stdout
});

const runApp = () => {
  rl.question("Menu\n1. FizzBuzz.\n2. Palindrome.\n0. Exit.\n\nPlease select to test: ", function (answer) {
    switch (Number(answer)) {
      case 0:
        console.log("Thanks!");
        process.exit(0);
        break;
      case 1:
        fizzBuzzCall();
        break;
      case 2:
        palindromeCall();
        break;
      default:
        console.log("Feature nit availabe.");
    }
  });
}

const fizzBuzzCall = () => {
  rl.question("Please insert a number: ", function (answer) {
    const fizzBuzz = new FizzBuzz();
    const arr = fizzBuzz.solve(Number(answer));

    arr.forEach((item) => {
      console.log(item + "\n");
    });
    runApp();
  });
}

const palindromeCall = () => {
  rl.question("Please insert a word: ", function (answer) {
    const palindrome = new Palindrome();
    const isPalindrome = palindrome.solve(answer);

    isPalindrome ? console.log(`${answer} is a palindrome`) : console.log(`${answer} is not a palindrome`);
    runApp();
  });
}

runApp();