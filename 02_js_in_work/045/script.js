'use strict';
 
// конструкторы

// const num = new Number(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };

}

const user = new User('ivan', 28);
console.log(user);
user.hello();

// частичное переопределение метода
User.prototype.exit = function() {
    console.log(`User ${this.name} leave our chat`);
};
user.exit();