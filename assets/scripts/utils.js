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
        numberOfLives.innerHTML = 
        "you have " + left  + " chance left";
    } else {
        numberOfLives.innerHTML = 'Game Over!';
    };

    for(let i = 0; i < selected_letters.length; i++){
        if(selected_letters.includes + MAX_CHANCES === selected_letters.length){
            numberOfLives.innerHTML = "You Win";
        }
    }
};
