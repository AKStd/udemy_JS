'use strict';

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parent: {
        mom: 'Olga', 
        dad: 'Mike',
    }
};

console.log(JSON.stringify(persone));

// Глубокие копии

const clone = JSON.parse(JSON.stringify(persone));