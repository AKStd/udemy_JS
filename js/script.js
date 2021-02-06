"use strict"; // работа в новом режиме



console.log(1);
let number = 10; 
const leftBorderWidth = 1;

// описание объекта
const obj = {
    name: "asd",
    age: 25,
    dead: true
};

console.log(obj.age);

// массив - частный случай объекта

const arr = [
    '123',
    'esp;vjero',
    'ckaic',
    1,
    2,
    3,
    4,
    5,
];
console.log(arr[1]);

arr.forEach(element => console.log(element));

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// const result = confirm('lcnwicvreve?');
// console.log(result);

const result = prompt('ljesnvkj','owiu?');
console.log(result);

const questions = ['имя,', 'возраст?', 'да?'];
let answers = [];

for (let i = 0; i < questions.length;i++) {
    answers[i] = prompt(questions[i]);
}

console.log(answers);

// интерполяция

const len = 'len';
const str = `today is ${len}`;

let incr = 10,
    decr = 10;

// incr++;
// decr--;
// постфикс - возращает текущее значение и увеличивает 
// префикс - возвращает измененое значение сразу
    ++incr;
    --decr;
    console.log(incr);
    console.log(decr);
    
// остаток от деления %
    console.log(5%2);
// нестрогое сравнение
    console.log(2*4 == '8'); // даст true
    console.log(2*4 == 8); // даст true


//строгое сравнение
    console.log(2*4 === '8'); // даст false
    console.log(2*4 == 8); // даст true


// сравнение 
// || - или
// && - и 
// ! - отрицание


    let isChecked = true,
        isClosed = true;

    console.log(isChecked || isClosed);


// GIT
// git init

// установка локальных данных в репе
// git config --local user.name "your_name"
// git config --local user.email "your_email"

// добавить файды в КВ
// git add A

// сам коммит
// git commit -m"your_message

// логи комитов
// git log

// добавляеи ссыль на наш реп
// git remote add origin {url}

// пушинг -u всегда сюда в репу origin в ветку master
// git push -u origin master
//


// let num = 60;


// if (num < 50) {
//     console.log('no', num);
//     num++;
// } else if (num < 60) {
//     console.log('no', num);
// } else {
//     console.log('yes');
// }

// console.log('num -', num)

// (num === 61) ? console.log('yes') : console.log('no');


// условия
const num = 50;

switch (num) {
    case 49: 
        console.log('num is 49');
        break;
    case 50:
        console.log('num is 50');
        break;
    default:
        console.log('noo!');
        break;
}

// циклы

let numb = 50;

// var 1
while (numb <= 55) {
    console.log(numb);
    numb++;
}



// var 2
do {
    console.log(numb);
    numb++;
}
while(numb<60);


// var 3
for (let i= 1; i < 8; i++) {

    if (i == 6) {
        // прерываем
        break;

    } else if (i == 2) {
        // пропускаем
        continue;
    }
     
    console.log(i);
}


// Методы строк


let strg = 'text_and_text';


console.log(strg.slice(0,3));
console.log(strg.substring(3,6));

const _number = 12;
console.log(Math.round(_number));

const _test = '12.2px';


console.log(parseInt(_test));
console.log(parseFloat(_test));

