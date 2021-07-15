"use strict";

// old way
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);


// modern way
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
}
);

console.log(hearts);

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);