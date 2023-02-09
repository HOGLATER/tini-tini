'use strict';
/* разработчик */
/* Ляшенко глеб*/
const developer = 'Gleb Lashenko';
const language = 'JavaScript';
let feature = 'best';
console.log('Hi, my name is '+ developer +'!');
console.log( '${language} is the ${feature} ')
let userName = ('ваше имя:')
let age = + prompt(userName + ' сколько вам полных лет?');
let currentYear = + prompt(userName + ' какой сейчас год?');
let nfdj = 2050 -currentYear + age;
alert (userName + ' в 2050-ом году вам будет '+ nfdj)
