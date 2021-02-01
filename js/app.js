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

for  (let i = 0; i < 2; i++) {
    let lastMovieTitle = prompt('последний фильм?' , ''),
        lastMovieRate = prompt(`как оценишь ${lastMovieTitle}?` ,'');

    personalMovieDB.movies[lastMovieTitle] = lastMovieRate;

}
console.log(personalMovieDB);
