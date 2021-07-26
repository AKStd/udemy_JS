'use strict';

// 1)в обчном режиме this - вернет window, в строгом режиме (use strict) - undefined

// function showThis() {
//     console.log(this);
// }
// showThis();


// 2) контекст у методов объекта - сам объект

// function showThis(a,b) {


//         function sum() {

//             return a + b;
//         }
//         return sum;
//     }

// const x = showThis(4,5);

// console.log(x);

// const obj = {
//     a:20,
//     b:15, 
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);

//         }
//         shout();
//     }
// };

// 3) контекст у конструктора ссылается на только что созданный объект (новый экземпляр объект)

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// 4)Ручное присвоение контекста: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// // разница в синтаксисе
// sayName.call(user, 'Johanson');
// sayName.apply(user, ['Johanson']);

// // создание новой функции с констектом

// function count(num) {
//     return this * num
// }

// const double = count.bind(2);


const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.log(this); // вернет сам элемент, для классических функций
});

// у стрелочной функции нет своего контекста, он берет его от родителя
const obj = {
    num:5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();


const double = (a) => {
    return a*2;
};

// OR 

const double1 = (a) => a * 2;
