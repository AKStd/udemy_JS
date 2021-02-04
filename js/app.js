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
