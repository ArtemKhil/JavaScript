// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNum = [12, 45, -67, 98, 234];
// let arrStr = ['user', 'box', 'name', 'age', 'status'];
// let arrMixData = ['car', 34, true, 'laptop', false];
// console.log(arrNum);
// console.log(arrStr);
// console.log(arrMixData);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 'Good';
// array[1] = 'Morning';
// array[2] = 'Artem';
// array[3] = 7;
// array[4] = 'am';
// array[5] = true;
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Artem Khilchenko</div>')
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}...Artem Khilchenko</div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
// document.write(`<h1>This is while loop</h1>`)
//
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i} This is while loop</h1>`)
//
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrNum = [24, 6, 98, 67, -65, 13, 45, 76, 34, 267];
// for (let i = 0; i < arrNum.length; i++) {
//
//     console.log(arrNum[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrStr = ['table', 'car', 'country', 'people', 'one', 'name', 'laptop', 'city', 'email', 'window'];
// let i = 0;
// while (i < arrStr.length) {
//
//     console.log(arrStr[i]);
//
//     i++;
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrMixData = [45, true, 'welcome', 678, false, 'food', 'drink', true, 65, 134];
// for (let i = 0; i < arrMixData.length; i++) {
//
//     console.log(arrMixData[i]);
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrBooleanType = [false, 67, 'Monday', true, 78, 'Friday', false, 980, true, 'Sunday'];
// for (let i = 0; i < arrBooleanType.length; i++) {
//     if (typeof arrBooleanType[i] === 'boolean') {
//
//         console.log(arrBooleanType[i]);
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrNumType = [45, true, 'Sunday', 56, false, 'city', 89, true, 156, 'Thursday'];
// for (let i = 0; i < arrNumType.length; i++) {
//     if (typeof arrNumType[i] === 'number') {
//
//         console.log(arrNumType[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrStrType = [48, false, 'spring', 54, 'car', 'user', false, 78, 'airport', 7];
// for(let i=0;i<arrStrType.length;i++){
//     if (typeof arrStrType[i] === 'string') {
//
//         console.log(arrStrType[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = true;
// array[1] = 56;
// array[2] = 'Good';
// array[3] = 'afternoon';
// array[4] = 'user';
// array[5] = false;
// array[6] = 67;
// array[7] = 'Email';
// array[8] = 456;
// array[9] = true;
//
// for (let i = 0; i < array.length; i++) {
//
//     console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('current loop step' + i + '');
//     document.write('current loop step' + i + '');
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('current loop step' + i + '');
//     document.write('current loop step' + i + '');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log('current loop step' + i + '');
//     document.write('current loop step' + i + '');
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('current loop step' + i + '');
//         document.write('current loop step' + i + '');
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0;i<100;i++){
//     if (i % 2 === 1) {
//         console.log('current loop step' + i + '');
//         document.write('current loop step' + i + '');
//     }
// }