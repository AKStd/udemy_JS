"use strict";


// работа от родителя
// обращение к DOM по элементам
console.log(document.body);

// элемент HTML
console.log(document.documentElement);

// получение вложенных элементов -> псевдомассив (узлы)
console.log(document.body.childNodes);

// по ноде
console.log(document.body.firstChild);
console.log(document.body.lastChild);

// по элементу
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// работа от любого элемента
 
console.log(document.querySelector('#current'));

// получение родителя
// по ноде
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);

// по элементу
console.log(document.querySelector('#current').parentElement);
console.log(document.querySelector('#current').parentElement.parentElement);

// получение соседей
// получение по data аттрибуту
// по ноде
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

// по элементу
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// получение детей 


 for (let node of document.body.childNodes) {
     if (node.nodeName == '#text') {
         continue;
     }
     console.log(node);
 }
