/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // задание 1
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__content .promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),

        // работа с формой
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        // отменяем стандартное поведение страницы в браузере
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        // проверяем форму на пустоту
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            // чистим форму
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
        }

        event.target.reset();




    });

    const deleteAdv = (arr) => {
        arr.forEach(item =>{
            item.remove();
        });
    };

    

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url(img/bg.jpg)';
    };

    

    const sortArr = (arr) => {
        arr.sort();
    };

    

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}: ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach(
            (btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    // удаление элемента из массива
                    films.splice(i, 1);

                    createMovieList(films, parent);
                    
                });
        });



    }

    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);

}); 