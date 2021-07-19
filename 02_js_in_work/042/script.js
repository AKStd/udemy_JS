'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;


const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    // btn.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
     
});
console.log(box.getBoundingClientRect());

// берем стили объекта по факту сейчас
const style =  window.getComputedStyle(box);
