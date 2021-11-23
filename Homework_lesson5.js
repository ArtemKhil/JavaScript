// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка обчислює та повертає площу прямокутника.

// const calcRectangleArea = (a, b) => a * b;
// console.log(calcRectangleArea(10, 4));


// - створити функцію яка обчислює та повертає площу кола

// const calcCircleArea = (r) => {
//     let radius = r ** 2;
//     return Math.PI * radius;
// }
// console.log(calcCircleArea(5));


// - створити функцію яка обчислює та повертає площу циліндру

// const calcCylinderArea = (r, h) => 2 * Math.PI * r * h;
// console.log(calcCylinderArea(2, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrayMix = [34, true, 'winter', 45, false, 'christmas', 'user'];
// const arrayFunc = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// arrayFunc(arrayMix);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const pCreator = (text) => {
//     document.write(`<p>${text}</p>`)
// };
// pCreator('Good morning Artem');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const ulCreator = (text) => {
//     document.write(`<ul>
//                     <li>${text}</li>
//                     <li>${text}</li>
//                     <li>${text}</li>
//                     </ul>`)
// };
// ulCreator('ulCreator is ready to use');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const ulCreator = (text,number) => {
//     for (let i = 0; i < number; i++) {
//         document.write(`<ul> <li>${text}</li> </ul>`)
//      }
// };
// ulCreator('ulCreator is working', 12);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayMixData = [45, false, 'summer', true, 65, 78, 'winter',false];
//
// const olCreator = (array) => {
//     document.write(`<ol>`)
//
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//
//     document.write(`</ol>`)
// };
// olCreator(arrayMixData);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//  let arrayObj = [{id: 1, name: 'Artem', age: 34}, {id: 2, name: 'Julia', age: 35}, {id: 3, name: 'Anna', age: 5}];
//
// const objCreator = (array) => {
//     for (const arrElement of array){
//         document.write(`<div>${arrElement.id}.${arrElement.name},${arrElement.age}</div>`);
//     }
// };
// objCreator(arrayObj);
