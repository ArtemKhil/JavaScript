// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calcRectangleArea(a,b) {
//     let sRectangle = a * b;
//     return sRectangle;
// }
//
// console.log(calcRectangleArea(4, 12));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calcCircleArea(r) {
//     let radius = r ** 2;
//     let sCircle = Math.PI * radius;
//     return sCircle;
// }
//
// console.log(calcCircleArea(3));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calcCylinderArea(h,r) {
//     let sCylinder = 2 * Math.PI * h * r;
//     return sCylinder;
// }
//
// console.log(calcCylinderArea(4, 8));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrayForFunc = [23, 45, 76, false, 'start', true, 'yes', 54, -12];
//
// function arrayFunc(arrayForFunc){
//       for (let i=0;i<arrayForFunc.length;i++) {
//             console.log(arrayForFunc[i]);
//       }
// }
// arrayFunc(arrayForFunc);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pTextCreator(text) {
//       document.write(`<p>${text}</p>`)
// }
// pTextCreator('This is text creator function');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulCreator(initials) {
//       document.write(`<ul>
//                       <li>${initials}</li>
//                       <li>${initials}</li>
//                       <li>${initials}</li>
//                       </ul>`) }
//
// ulCreator('Artem Khilchenko');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulNumCreator(text,number) {
//       for (let i = 0;i<number;i++){
//             document.write(`<ul> <li>${text}</li> </ul>`);
//       }
// }
//
// ulNumCreator('Artem Khilchenko', 6);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrMix = [true, 54, 'seven', false, 145, 'summer'];
//
// function primElementFunc(array) {
//        document.write(`<ol>`)
//
//          for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//
//         document.write(`</ol>`)
// }
//
// primElementFunc(arrMix);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrayObj = [{id: 1, name: 'Artem', age: 34}, {id: 2, name: 'Julia', age: 35}, {id: 3, name: 'Anna', age: 5}];
//
// function objCreator(array) {
//       for (const arrayElement of array){
//             document.write(`<div>${arrayElement.id}.${arrayElement.name}-${arrayElement.age}</div>`);
//       }
// }
//
// objCreator(arrayObj);