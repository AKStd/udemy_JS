window.addEventListener('DOMContentLoaded', () => {

    // TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>{
        const target = event.target;
        // выглядит немного через жопу, но так мы понимаем, какой элемент из списка передан в t
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) =>{
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // TIMER
    
    const deadline = '2021-11-11';

    function getTimeReamaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 *24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 * 60) % 60)),
            seconds = Math.floor((t / 1000) % 60);
        return {
                'total' : t,
                'days': days,
                'hours': hours,
                'minutes': minutes, 
                'seconds' : seconds,
             };
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        updateClock();  

        function updateClock() {
            const t = getTimeReamaning(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        //  убираем прокрутку
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);

    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        // возвращаем прокрутку
        document.body.style.overflow = '';
    }
 

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });


    const modalTimerId = setTimeout(openModal, 9999999999999999999999999999999); 


    function showModalByScroll (){
        if (window.pageYOffset +  document.documentElement.clientHeight >= document
            .documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Классы 
    
    class MenuCard {
        constructor(src, alt,title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        
        render () {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                this.element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            `;
            this.parent.append(element);
        }
    }
    // здесь будет больно
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд:" + 
        "больше свежих овощей и фруктов. Продукт активных и здоровых людей." + 
        "Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        ".menu .container",
        "menu__item",
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Меню \"Премиум\"",
        "В меню \"Премиум\" мы используем не только красивый дизайн упаковки," + 
        "но и качественное исполнение блюд." + 
        "Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",      
        15,
        ".menu .container",
        "menu__item",
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        "Меню \"Постное\"",
        "Меню \"Постное\" - это тщательный подбор ингредиентов:" + 
        "полное отсутствие продуктов животного происхождения," + 
        "молоко из миндаля, овса, кокоса или гречки, правильное" + 
        "количество белков за счет тофу и импортных вегетарианских стейков.",              
        12,
        ".menu .container",
        "menu__item",
    ).render();
    

    // Forms
    const forms = document.querySelectorAll('form');
    
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'success',
        failure: 'Fail',
    };

    forms.forEach(item =>{
        postData(item);
    });

    function postData(form){
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            // - не нужно использовать заголовки с formData
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);
            
            // преобразование formData в json
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status == 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    console.log(request.response);
                    showThanksModal(message.failure);
                }
            });


        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('.modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
             thanksModal.remove();
             prevModalDialog.classList.add('show');
             prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

});



