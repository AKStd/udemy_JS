"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


console.log(box);     

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red'; 

// несколько стилей
box.style.cssText = 'background-color: blue; width: 500px';

// итерация

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// создание элементов
const div = document.createElement('div');
const text = document.createTextNode('text here');
div.classList.add('black');


// работа с DOM

document.body.append(div);

// wrapper.append(div);
// wrapper.prepend(div);
// hearts[1].before(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

function toH1(text) {
    return `<h1>${text}</h1>`;
}


// div.innerHTML = toH1('Hello world');

div.insertAdjacentHTML('beforebegin', toH1('Hello world'));

