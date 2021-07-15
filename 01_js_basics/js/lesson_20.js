'use strict';

const options = {
    name: 'xar',
    colors: 'yellow',
    sub: {
        border: 'black',
    }
};

// console.log(options.name);

// delete options.colors;

// итерация по объекту
// for (let key in options) {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
// }

function RecIter(obj) {
    for (let key in obj) {
        let keyType = typeof (obj[key]);
        console.log(keyType);
        if (keyType === 'object') {
            console.log(`${key} - is object`);
                RecIter(obj[key]);
        }
        else {
            console.log(`свойство ${key} имеет значение ${obj[key]}`);
        }

    }
}