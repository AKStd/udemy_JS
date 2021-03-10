"use strict";


let personalMovieDB = {
    count : 0,
    movies : {}, // пустой объект
    actors : {},
    genres : [], // пустой массив
    privat : false,

    start: function() {
        let numberOffilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
            numberOffilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
            this.count = numberOffilms;
        }
    },

    rememberMyFilms: function() {
        for (let i =0; i<this.count; i++) {
            const a = prompt('Последний фильм?', ''),
                  b = prompt('На сколько его оцените?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('Done with', a);
            } else {
                console.log('Something wrong with', a);
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (this.count <10) {
            console.log('Просмотрено мало фильмов');
        } else if (this.count > 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },

};


for (let i = 0; i < 3;i++) {
    console.log(`privat - ${personalMovieDB.privat}`);
    console.log('toggle this');
    personalMovieDB.toggleVisibleMyDB();
}
