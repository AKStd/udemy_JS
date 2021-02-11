"use strict"; // работа в новом режиме

const numberOffilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''); // после запятой идет значение по умолчанию
console.log(`значение переменной numberOffilms = ${numberOffilms}`);

let personalMovieDB = {
    count : numberOffilms,
    movies : {}, // пустой объект
    actors : {},
    genres : [], // пустой массив
    privat : false
};


function isItNull(strg) {
    if (strg == null) {
        return false;
    } else if (strg == ''){
        return false;
    } else if (strg.lenght >= 50) {
        return false;
    } else {
        return true;
    }
    
}


console.log(isItNull(null));


for  (let i = 0; i < 2; i++) {
    let lastMovieTitle = prompt('последний фильм?' , ''),
        lastMovieRate = prompt(`как оценишь ${lastMovieTitle}?` ,'');

    let answers = [lastMovieTitle, lastMovieRate];
    console.log(answers);

    for (let j = 0; j< answers.lenght; j++) {
        console.log(answers[j]);
    }

    personalMovieDB.movies[lastMovieTitle] = lastMovieRate;

}
console.log(personalMovieDB);


// funcs:

// functin declaration ()
// создается до начала выполнения в скрипте, можно вызвать перед объявлением
//
function isItNull(strg) {
    if (strg == null) {
        return false;
    } else if (strg == ''){
        return false;
    } else if (strg.lenght >= 50) {
        return false;
    } else {
        return true;
    }
    
}


console.log(isItNull(null));


// fuction expression 
// создается только тогда, когда доходит поток кода, можно вызвать только после объявления

let jet = function() {
    console.log('this is func declaration');
};

jet();

// стрелочная функция 

const calc = (a, b) => a + b;


var x = 1 == '1';
console.log(x);