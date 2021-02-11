'use strict';




let numberOffilms;


let personalMovieDB = {
    count : numberOffilms,
    movies : {}, // пустой объект
    actors : {},
    genres : [], // пустой массив
    privat : false
};


function start() {

    numberOffilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
        numberOffilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        personalMovieDB.count = numberOffilms;
    }
}



function rememberMyFilms() {
    for (let i =0; i<2; i++) {
        const a = prompt('Последний фильм?', ''),
              b = prompt('На сколько его оцените?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done with', a);
        } else {
            console.log('Something wrong with', a);
            i--;
        }
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count <10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}


function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {

    for (let i=0; i<3; i++) {
        personalMovieDB.genres.push(prompt(`${i+1} место среди Ваших любимых жанров?`));
    }
    console.log(personalMovieDB.genres);
}




// start();
// rememberMyFilms();
// detectPersonalLevel();
showMyDB();
writeYourGenres();