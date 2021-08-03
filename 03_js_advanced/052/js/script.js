'use strict';


const inputRub = document.querySelector('#rub'),
    inputUSD =  document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

    request.open('GET', 'js/current.json'); // настройка
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () =>{
        if (request.status == 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что то не так";
        }
    });
    // request.addEventListener('readystatechange', () =>{
    //     if (request.readyState == 4 && request.status == 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUSD.value = "Что то не так";
    //     }
    // });
    // status
    // statusText

    // response
    // readyState
});
