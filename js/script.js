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
//
//
//
//
