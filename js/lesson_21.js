"use strict";

const arr = [1,2,3,4,5,6,7];

// удаляем последний элемент
arr.pop();

// добавляем элемент в конец
arr.push(1);



// итерация по эдементам массива
console.log('by index');
for (let i = 0; i < arr.length; i++) {
    // some logic
    console.log(arr[i]);
}

console.log('by \'of\'');
for (let value of arr) {
    // some logic
    console.log(value);
}

console.log('by forEach');
// первый элемент элемент массива
// второй элемент индекс элемента массива
// третий элемент сыллка на сам массив

arr.forEach(function(item, i , _arr){
    console.log(`${i}: ${item} внутри массива ${_arr}`);
});


// метод split
const str = 'apple, banana, carrot, potato';

const products = str.split(', ');
console.log(products); 

// метод join
const productsStr = products.join(', ');
console.log(productsStr);


// метод sort
products.sort();


function compareNum(a ,b) {
    return a - b;
}

const numArray = [1,2,356,8,90,4, 546,7,900 ,445453,];

numArray.sort(compareNum);
console.log(numArray);

