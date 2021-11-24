// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minNum = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     }else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// };
// minNum(12, 23, 34);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const maxNum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     }else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     }else{
//         console.log(num3)}
// }
// maxNum(23, 4, 67);


// - створити функцію яка повертає найбільше число з масиву

// let arrayNum = [1, 4, 35, 78, 32, 48, 98, 66];
//
// const maxArrNum = (array) => {
//     let max = [0];
//     for (const element of array){
//         if (element>max){
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(maxArrNum(arrayNum));


// - створити функцію яка повертає найменьше число з масиву

// let arrNum = [23, 4, 56, 87, 457, 14, 34];

// const minArrNum = (array) => {
//     let min = array[0];
//     for (const element of array){
//         if (element<min){
//             min = element;
//         }
//     }
//     return min;
// };
// console.log(minArrNum(arrNum));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrNum = [23, 4, 56, 87, 457, 14, 34];
//
// const sumArrayNum = (nums) => {
//     let result = 0;
//     for (const num of nums) {
//         result = result + num;
//     }
//     return result;
// };
// console.log(sumArrayNum(arrNum));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//  let arrNum = [23, 4, 56, 87, 457, 14, 34];
//
// const avgArrayNum = (nums) => {
//     let result = 0;
//     for (const num of nums){
//         result = result + num;
//     }
//     return result/ nums.length
// };
//
// console.log(avgArrayNum(arrNum));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const minMaxNum = (nums) => {
//     let min = nums[0];
//     let max = nums[0];
//     for (const num of nums) {
//         if (num < min) {
//             min = num;
//         }
//         if (num>max) {
//             max = num;
//         }
//     }
//     console.log(max);
//     return min;
// };


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// const randomNum = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr; i++) {
//         newArr.push(Math.round(Math.random() * 100));
//     }
//     return newArr;
// };
// console.log(randomNum(15));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const randomNumWithLimit = (arr,limit) => {
//     let newArr = [];
//     for (let i = 0; i < arr; i++) {
//         newArr.push(Math.round(Math.random() * limit));
//     }
//     return newArr;
// };
// console.log(randomNumWithLimit(10, 50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arrNum = [12, 34, 5, 67, 89];
//
// const reverseArr = (array) => {
//     let newArr = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = array[i];
//     }
//     return newArr;
// };
// console.log(reverseArr(arrNum));

