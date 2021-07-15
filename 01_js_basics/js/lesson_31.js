"use strict";

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () =>{
//     alert('click');
// });

// btn.addEventListener('click', () =>{
//     alert('second click');
// });

// работа с очередями событий

// btn.addEventListener('mouseenter', (event, ourData) => {
//     console.log(event);
// });

// let i = 0;
// const deleteElement = (event) => { 
//     // event.target.remove();
//     console.log(event.target);
//     i++;
//     if (i >= 1){
//         btn.removeEventListener('mouseenter', deleteElement);
//     }

// };

const deleteElement = (event) => { 
    // event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);

};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// переопределение стандартоного поведения элементов

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(link.href);
});

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});