
import { MAX_CHANCES } from "./constants.js";
const wordsDisplay = document.querySelector('.words-display');
const numberOfLives = document.querySelector('.numberOfLives');

export const displayWords = (word = '', selected_letters = []) => {
    wordsDisplay.innerHTML = '';

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toUpperCase();

        if (selected_letters.includes(letter)) {
            wordsDisplay.innerHTML += `<span>${letter}</span>`
        } else {
            wordsDisplay.innerHTML += '<span></span>'
        }
    }
};

export const displayChances = (selected_letters = []) => {
  let wrongGuesses = 0;
  let remainingChances = MAX_CHANCES;
  
  for (let i = 0; i < selected_letters.length; i++) {
    const selectedLetter = selected_letters[i];
    const foundIndex = current_exercise.word.toUpperCase().indexOf(selectedLetter);

    if (foundIndex >= 0) {
      
      displayWords(current_exercise.word, selected_letters);
    } else {
      
      wrongGuesses++;
      remainingChances--;
      if (remainingChances <= 0) {
        numberOfLives.innerHTML = 'Game Over!';
      } else {
        numberOfLives.innerHTML = `you have ${remainingChances} chance left`;
      }
    }
  }
  if (wrongGuesses === 0) {
    displayWords(current_exercise.word, selected_letters);
  }
};
