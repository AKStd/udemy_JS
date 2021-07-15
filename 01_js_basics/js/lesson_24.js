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
        }
        this.count = numberOffilms;
        return this.count;
    },

    rememberMyFilms: function() {
        for (let i =0; i < this.count; i++) {
            const movie = prompt('Последний фильм?', ''),
                  rate = prompt('На сколько его оцените?', '');
            if (movie != null && rate != null && movie != '' && rate != '' && movie.length < 50) {
                this.movies[movie] = rate;
                console.log('Done with', movie);
                return `movie ${movie} - rate ${rate}`;
            } else {
                console.log('Something wrong with', movie);
                let exception = `Something wrong with ${movie}`;
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

    
    writeYourGenres: function() {
        for (let i=0; i<3; i++) {
            let genre = prompt(`${i+1} место среди Ваших любимых жанров?`);
            if (genre === '' || genre == null) {
                console.log('введены некорректные данные');
                i--;
            } else {
                this.genres[i] = genre; 
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`${i+1} - ${item}`);
        }
        );
    },

};
