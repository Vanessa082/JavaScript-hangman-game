import { ALPHABETS } from './constants.js';
import QUESTIONS from '../data/questions.json' assert { type: 'json' }  // this is how json files are parsed to js objects when importing.

(async () => {
    console.log('1) hello');

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello van')
            // resolve();
        }, 3000);
    });

    console.log('hello');
})();

console.log("i'm outside")

const alphabetContainer = document.querySelector('.alphabets');
const category = document.getElementById('category');
const input = document.querySelector('.input');
const numberOfLives = document.querySelector('.numberOfLives');
const myCanvas = document.querySelector('.myCanvas');
const hint = document.getElementById('hint');
const reset = document.getElementById('reset');

ALPHABETS.forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerHTML = letter;

    btn.addEventListener('click', (e) => {
        //
    });

    alphabetContainer.appendChild(btn);
})