"use strict";

let str = 'some';
// let strObject = new String(str);


// смотри наследование
console.dir([1,2,3,4,5,6]);


// absract object
const soldier = {
    name: 'unnamed',
    health: 100,
    armor: 100,
    sayHello: function(){
        return `say hello to ${this.name}`;
    }
};

// создаем экземпляры объекта  
// bad case
const Jax = {
    name: 'Jax',
    health:400
};

// Jax.__proto__ = soldier;

console.log(Jax);
// but
console.log(Jax.armor);

console.log(Jax.sayHello());


const Nick = {};
Object.setPrototypeOf(Nick, soldier);
// or
const John = Object.create(soldier);