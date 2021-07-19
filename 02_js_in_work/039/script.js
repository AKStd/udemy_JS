// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000,'Hello'); // время указывается в милисекундах


// const timerId2 = setTimeout(logger, 2000);

// function logger () {
//     console.log('Hello form logger');
// }
// // удаляем таймер через переменную, в которую мы его и поместили
// clearInterval(timerId);


// const  btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     // const timerId2 = setTimeout(logger, 2000);

//     // каждые 2000 мс
//     const timerId2 = setInterval(logger, 2000);
//     clearInterval(timerId2);


// });

// let i = 0;
// let timerId3;

// function logger2(text) {
//     if (i === 3) {
//         clearInterval(timerId3);
//     }
//     console.log(text);
//     i++;
//  }


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";


        }
    }
}

btn.addEventListener('click', myAnimation);