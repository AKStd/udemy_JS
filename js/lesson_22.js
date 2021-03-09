"use strict";


let a = 5,
    b = a;


b  = b + 5;
console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};


const copy = obj;
copy.a = 10;

console.log(obj);
console.log(copy);

// первый способ создания копии

function copyObject(mainDB) {
    let copyObj = {};

    let key;
    for (key in mainDB) {
        console.log(`${key} - ${(typeof key)}`);
        if ((typeof key) == 'object') {
            console.log(key, 'here the object in object');
            copyObject(key);
        } else {
            copyObj[key] = mainDB[key];
        }
        
    }
    return copyObj;
}


const numbers = {
    a:2,
    b:5,
    c: {
        x:1,
        y:12
    }
};

const newNumbers = copyObject(numbers);

console.log('this is original');
console.log(numbers);
console.log('this is copy');
console.log(newNumbers);

// теперь можно менять, кроме вложенных объектов


const add = {
    d:17,
    e:20
};


// второй способ

const clone = Object.assign({}, add);
clone.d  = 20;


// третий способ
const simpleArray = [1,2,3,4,5,6,7,];
const newArray = simpleArray.slice();

newArray[1] = '12323r';

console.log(simpleArray);
console.log(newArray);



// четвертый способ (es6 и es8)

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'lj', 'blogger'];

// соединяем массивы - синтаксический сахарок - распаковка

const internet = [...video, ...blogs, 'vk'];

console.log(video);
console.log(blogs);
console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    }
const testArray = [1,2,3];
log(...testArray);