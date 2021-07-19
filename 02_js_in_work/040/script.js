'use strict';

 const now  = new Date(); // через конструктор

 // 
 //  const now  = new Date('2020-05-01');
//  const now  = new Date(2020, 5, 1, 20); месяца считаются с нуля))))))) 
 // или же так 
 //new Date.parse('2020-05-01');

 console.log(now);
// методы
now.getFullYear();
now.getMonth();
now.getUTCHours();
now.getHours(); 
now.getDay(); // 0 - вс, 6 - суббота
now.getTimezoneOffset();// etc

now.getTime(); // кол-во милисек с 1970года 

// так же есть методы set()
