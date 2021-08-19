'use strinct';

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка  данных...');
        
        const product = {
            name: 'TV',
            price: 2000,
        };
        resolve(product);
    }, 2000);
});


req.then(product => {
    // здесь по сути мы определяем метод resolve()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            // resolve(product);
            reject(product);
        }, 2000);
    }).then(data => {
        data.modify = true;
        return data;
    }).then(data => {
        data.status = 'success';
        console.log('Данные получены');
        console.log(data);
    }).catch((data) => {
        data.status = 'failure';
        console.error('Something wrong');
    }).finally(() =>{
        console.log('Конец');
    });
});




// setTimeout(() => {
//     console.log('Подготовка  данных...');
    
//     const product = {
//         name: 'TV',
//         price: 2000,
//     };

//     setTimeout(() => {
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000);

// }, 2000);

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(2000).then(() => console.log('2000 ms'));

// после  выполнения всех списков промисов
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

// ждем первого!
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});