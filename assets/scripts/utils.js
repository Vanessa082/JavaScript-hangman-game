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
    const left = MAX_CHANCES - selected_letters.length;

    if (left > 0) {
        numberOfLives.innerHTML = left;
    } else {
        numberOfLives.innerHTML = 'u lost';
    }
};
