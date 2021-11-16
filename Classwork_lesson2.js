// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let firstNum = +prompt('Enter first number?');
// let secondNum = +prompt('Enter second number');
// if (firstNum > secondNum) {
//     console.log('First number is higher');
// } else if (firstNum === secondNum) {
//     console.log('These numbers are equal');
// } else{
//     console.log('Second number is higher');
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flatNumber = +prompt('Enter the flat number from 1 to 90');
// if (flatNumber > 0 && flatNumber <= 20) {
//     console.log('Flat is located in the first building');
// }
// else if (flatNumber >= 21 && flatNumber <= 48) {
//     console.log('Flat is located in the second building');
// }
// else if (flatNumber >= 49 && flatNumber <= 90) {
//     console.log('Flat is located in the third building');
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let userNumber = +prompt('Enter any number');
// if (userNumber === 10) {
//     console.log('Correct number');
// } else{
//     console.log('Incorrect number');
// }


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = "[]";
// if (x === typeof 'number') {
//     console.log('1 This is number');
// }
// else if (x===typeof 'string') {
//     console.log('2 This is string');
// }
// else if (x===typeof 'boolean') {
//     console.log('3 This is boolean');
// }
// else if (x === typeof 'object' || 'array') {
//     console.log('4 It could be object or array');
// }
// else {
//     console.log('Please write a correct type of data');
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let outAirTemp = +prompt('What is the out temperature today? Please enter number');
// if (outAirTemp >= 10 && outAirTemp <= 22) {
//     alert('We go to Okten office for practise lesson');
// } else {
//     alert('Sit at home and do your online course');
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне .

// let prizeType = +prompt('Please enter number from 1 to 5');
// switch (prizeType){
//     case 1:
//         alert('You are the winner,please take your car key');
//         break;
//     case 2:
//         alert('You are the winner,please take your bike key');
//         break;
//     case 3:
//         alert('You are the winner,please take your new home key');
//         break;
//     case 4:
//         alert('You are the winner,please take your new phone');
//         break;
//     case 5:
//         alert('You are the winner,please take your new laptop');
//         break
//     default:
//         alert('Sorry,we have got the winner already ');
// }