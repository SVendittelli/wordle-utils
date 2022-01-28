import { guesses, solutions } from "./words.mjs";

const placedLetters = [{ letter: "r", position: 2 }];

const includedLetters = [{ letter: "e", positions: [3] }];
const excludedLetters = ["t", "i", "o", "a", "s", "d", "c", "n"];

const checker = (potential) => {
  const letters = potential.split("");
  for (const { letter, position } of placedLetters) {
    if (letters[position] !== letter) return false;
  }
  for (const { letter, positions } of includedLetters) {
    for (const position of positions) {
      if (letters[position] === letter) return false;
    }
  }
  for (const excludedLetter of excludedLetters) {
    if (letters.includes(excludedLetter)) return false;
  }
  return true;
};

const potentialGuesses = guesses.filter(checker);
const potentialSolutions = solutions.filter(checker);

console.log("Potential guesses:", potentialGuesses, potentialGuesses.length);
console.log(
  "Potential solutions:",
  potentialSolutions,
  potentialSolutions.length
);
console.log(
  `Total options: ${potentialSolutions.length + potentialGuesses.length}`
);
