// then method
(async () => {
    // await fetch('./assets/data/questions.json')
    //     .then((res) => {
    //         // const question = res.json();
    //         // console.log(res)
    //         // res.json()

    //         return res.json()
    //     }).then((ques) => {
    //         console.log(ques)
    //     }).catch((er) =>  {
    //         console.warn('an error ocurred')
    //     }).finally(() => {
    //         console.log('operation  completed')
    //     });

    // console.log('after api fetch')

    //try catch block
    try {
        const questions = await fetch('./assets/data/questions.json')
            .then((res) => res.json());

        console.log(questions)
    } catch (error) {
        console.log('an error ocurred');
    } finally {
        console.log('operation completed')
    }
})();




// import { ALPHABETS, MAX_CHANCES } from './constants.js';
// import { displayWords, displayChances } from './utils.js';
// import EXERCISES from '../data/exercises.json' assert { type: 'json' }  // this is how json files are parsed to js objects when importing.

// const alphabetContainer = document.querySelector('.alphabets');
// const category = document.getElementById('category');
// const hint = document.getElementById('hint');
// const restart = document.getElementById('restart');

// let current_exe_indx = 0;
// let current_exercise = EXERCISES[current_exe_indx];
// let selected_letters = [];

// const getRandomExerciseIndex = () => {
//   return Math.floor(Math.random() * EXERCISES.length);
// };

// const loadNextExercise = () => {
//   if (current_exe_indx < EXERCISES.length || current_exe_indx >= EXERCISES.length) {
//     current_exe_indx = getRandomExerciseIndex();
//   } else {
//     current_exe_indx++;
//   }
//   current_exercise = EXERCISES[current_exe_indx];

//   selected_letters = [];
//   displayExercise();
// };


// const displayExercise = () => {
//   if (current_exercise) {
//     category.innerHTML = current_exercise.category;

//     displayWords(current_exercise.word, selected_letters);
//   };
// };

// ALPHABETS.forEach((letter) => {
//   const btn = document.createElement('button');
//   btn.innerHTML = letter;

//   btn.addEventListener('click', () => {
//     if (selected_letters.includes(letter) || selected_letters.length >= MAX_CHANCES) {
//       return;
//     }
//     selected_letters.push(letter);

//     displayChances(selected_letters);
//     console.log(selected_letters);
//     // btn.disabled = true;

//     displayExercise();
//   });

//   alphabetContainer.appendChild(btn);
// });

// hint.addEventListener('click', () => {
//   const clue = document.querySelector('#clue span');
//   clue.innerHTML = current_exercise.clue;
// });


// restart.addEventListener('click', () => {
//   loadNextExercise();
// });

// displayExercise();



// import { MAX_CHANCES } from "./constants.js";

// const wordsDisplay = document.querySelector('.words-display');
// const numberOfLives = document.querySelector('.numberOfLives');

// export const displayWords = (word = '', selected_letters = []) => {
//   wordsDisplay.innerHTML = '';

//   for (let i = 0; i < word.length; i++) {
//     const letter = word[i].toUpperCase();

//     if (selected_letters.includes(letter)) {
//       wordsDisplay.innerHTML += `<span>${letter}</span>`
//     } else {
//       wordsDisplay.innerHTML += '<span></span>'
//     }
//   }
// };

// export const displayChances = (selected_letters = []) => {
//   const left = MAX_CHANCES - selected_letters.filter(letter => !current_exercise.word.includes(letter)).length;

//   if (left > 0 && left !== 1) {
//       numberOfLives.innerHTML = "You have " + left + " chances left";
//   } else if (left === 1) {
//       numberOfLives.innerHTML = "You have " + left + " chance left";
//   } else {
//       numberOfLives.innerHTML = 'Game Over!';
//   };

//   if (selected_letters.every(letter => current_exercise.word.includes(letter))) {
//       numberOfLives.innerHTML = "You Win";
//   }
// };