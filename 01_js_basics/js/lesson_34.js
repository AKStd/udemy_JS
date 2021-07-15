// События моб браузеров
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log("START");
        // e.touches - про касания
        // targetTouches  - инфа по касаниям
        // changedTouches - список пальцев

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log("MOVE");

    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log("END");

    });

}); 