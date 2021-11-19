// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     }else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// }
//
// minNumber(455, 67, 98);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//     }else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// }
//
// maxNumber(23, 45, 567);


// - створити функцію яка повертає найбільше число з масиву

// let arrNum = [34, 23, 65, 789, 5, 78];
//
// function maxArrayNum(array) {
//     let max = array[0];
//     for (const num of array){
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
//
// console.log(maxArrayNum(arrNum));


// - створити функцію яка повертає найменьше число з масиву

//  let arrNum = [34, 23, 65, 789, 5, 78,564,9875,3];
//
// function minArrayNum(array) {
//     let min = array[0];
//     for (const num of array){
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// console.log(minArrayNum(arrNum));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayNums = [34, 5, 78, 8, 98, 123];
//
// function sumArrayNums(nums) {
//     let result = 0;
//     for (const num of nums) {
//         result = result + num;
//     }
//     return result;
// }
//
// console.log(sumArrayNums(arrayNums));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//  let arrayNums = [34, 5, 78, 8, 98, 123];
//
// function avgArrayNums(nums) {
//     let result = 0;
//     for (const num of nums) {
//         result = result + num;
//     }
//     return result / nums.length;
// }
//
// console.log(avgArrayNums(arrayNums));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMaxFunc(nums) {
//     let max = nums[0];
//     let min = nums[0];
//     for (const num of nums) {
//         if (num>max){
//             max = num;
//         }
//         if (num<min){
//             min = num;
//         }
//     }
//     console.log(max);
//     return min;
// }


// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomFunc(arr) {
//     for (let i=0;i<15;i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function randomFunc(arr,limit) {
//     for (let i = 0; i < 17; i++) {
//
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverseArrFunc(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
// }