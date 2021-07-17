const btns = document.querySelectorAll('button');
// console.log(btns);
// console.log(btns[0].classList.length);

// взять класс по индексу
console.log(btns[0].classList.item(0));

// можно добавлять по несколько классов!!!
// добавить класс
btns[0].classList.add('red');

// убрать класс
btns[0].classList.remove('blue');

// убрать если есть, убрать, если нет
btns[0].classList.toggle('blue');

// можно проверить наличие класса
if (btns[1].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', () =>{
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

// делегирование

// получаем роидителя кнопок и назначаем обработчик через него


const wrapper = document.querySelector('.btn-block');
console.log(wrapper);
wrapper.addEventListener('click', (event) => {
    // проверяем тег чайлда
    // if (event.target && event.target.tagName == "BUTTON") {
    //      console.log('Hello');
    // }
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
   }
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);