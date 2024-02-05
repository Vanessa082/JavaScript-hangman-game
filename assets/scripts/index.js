import { ALPHABETS, MAX_CHANCES } from './constants.js';
import { displayWords, displayChances } from './utils.js';
import EXERCISES from '../data/exercises.json' assert { type: 'json' }  // this is how json files are parsed to js objects when importing.

const alphabetContainer = document.querySelector('.alphabets');
const category = document.getElementById('category');
const hint = document.getElementById('hint');
const restart = document.getElementById('restart');

let current_exe_indx = 0;
let current_exercise = EXERCISES[current_exe_indx];
let selected_letters = [];

const loadNextExercise = () => {
    if (current_exe_indx < EXERCISES.length) {
        current_exe_indx++;
        current_exercise = EXERCISES[current_exe_indx];

        selected_letters = [];
        displayExercise();
    };
};

const displayExercise = () => {
    if (current_exercise) {
        category.innerHTML = current_exercise.category;

        displayWords(current_exercise.word, selected_letters);
    };
};

ALPHABETS.forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerHTML = letter;

    btn.addEventListener('click', () => {
        if (selected_letters.includes(letter)) return;

        selected_letters.push(letter);

        displayChances(selected_letters, current_exercise);
        console.log(selected_letters);

        displayExercise();
    });

    alphabetContainer.appendChild(btn);
});

hint.addEventListener('click', () => {
    const clue = document.querySelector('#clue span');
    clue.innerHTML = current_exercise.clue;
});


restart.addEventListener('click', () => {
    loadNextExercise();
});

displayExercise();
