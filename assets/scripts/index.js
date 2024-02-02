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
        if (MAX_CHANCES - selected_letters.length <= 0) return;

        selected_letters.push(letter);

        displayChances(selected_letters);
        console.log(selected_letters);
        btn.disabled = true;

        displayExercise();
    });

    alphabetContainer.appendChild(btn);
});

hint.addEventListener('click', () => {
    const clue = document.querySelector('#clue span');
    clue.innerHTML = current_exercise.clue;
});

const animate = () =>{
    const drawMe = MAX_CHANCES();
    drawArray[drawMe]();
}

const hangmanCanvas = () => {
    const myStickman = document.querySelector('.stickman');
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
};

const head = () => {
    const myStickman = document.querySelector('.stickman');
    myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
}

const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

const frame1 = () => {
    draw(0, 150, 150, 150);
}

const frame2 = () => {
    draw(10, 0, 10, 600);
}

const frame3 = () => {
    draw(0, 5, 70, 5);
}

const frame4 = () => {
    draw(60, 5, 60, 15);
}

const torso = () => {
    draw(60, 46, 20, 50);
}

const rightArm = () => {
    draw(60, 46, 100, 50);
}

const leftArm = () => {
    draw(60, 46, 20, 50);
}

const rightLeg = () => {
    draw(60, 70, 100, 100);
}

const leftLeg = () => {
    draw(60, 70, 100, 100);
}

const drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

restart.addEventListener('click', () => {
    loadNextExercise();
});

displayExercise();
