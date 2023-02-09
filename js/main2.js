'use strict';
const D1 = '---------\n|       |\n|   *   |\n|       |\n---------\n';
const D2 = '---------\n| *     |\n|       |\n|     * |\n---------\n';
const D3 = '---------\n| *     |\n|   *   |\n|     * |\n---------\n';
const D4 = '---------\n| *   * |\n|       |\n| *   * |\n---------\n';
const D5 = '---------\n| *   * |\n|   *   |\n| *   * |\n---------\n';
const D6 = '---------\n| *   * |\n| *   * |\n| *   * |\n---------\n';

let isThrow = confirm('Бросаем кубик?');
if(isThrow) {
    let randomNumber = Math.ceil( Math.random() * 6);
    if (randomNumber === 1)
    console.log(D1);
    if (randomNumber === 2)
    console.log(D2);
    if (randomNumber === 3)
    console.log(D3);
    if (randomNumber === 4)
    console.log(D4);
    if (randomNumber === 5)
    console.log(D5);
    if (randomNumber === 6)
    console.log(D6);
} else{
    console.log('перезагрузите страницу');
}