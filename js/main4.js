'use strict';
const getrend100 = () => Math.ceil( Math.random() * 100 );

const compNumber = getrend100();
const startTime =Date.now();
let userNumber = +prompt('Я загадал число от 1 до 100. Угадай что это за число:');

while ( userNumber !== compNumber) {
    if (userNumber > compNumber ) {
        userNumber = +prompt('мое число меньше' + userNumber);
    } else {
        userNumber = +prompt('мое число больше' + userNumber);
    }
}
const gameTime = Date.now() - startTime;
alter ('все правильно ,мое число =' + compNumber + 'вы его угадализа' +(gameTime/1000).toFixed(3) + 'ссссекунд');


