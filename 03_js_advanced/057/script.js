'use strict';

// filter
const  names = ['qwqweqw', 'eberbebreb', 'iwefiwebff', 'wenfiwefbwfheifweigeifg']; 
const shortNames = names.filter(name => {
    return name.length < 10;
});
console.log(shortNames);


// map
let answers = ['vEFEFrsrv', 'isgrviRFBRSyrs', "ieyrIGIigi"];
answers = answers.map(an => an.toLowerCase());
console.log(answers);


// every/some -> bool

const some = [4,'rhveh', 'OEUH'];
// если хоть один подходит под условие
console.log(some.some(item => typeof(item) === 'number'));
// если ВСЕ подходят под условие
console.log(some.every(item => typeof(item) === 'number'));


// reduce 

const arr = [4, 5, 1, 3, 2, 6,];

// можно накапливать суммы, оч удобно
const result = arr.reduce((sum, current) => {
    return sum + current;
});
console.log(result);

const result2 = arr.reduce((sum, current) => sum + current, 5); // sum будет равна 5!
console.log(result2);


const arr1 = ['apple', 'orange', 'pear'];

const result1 = arr1.reduce((sum, item) => `${sum}, ${item}`);
console.log(result1);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    cat: 'animal',
    dog: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0])
.reduce((sum, item) => `${sum}, ${item}`);
console.log(newArr);