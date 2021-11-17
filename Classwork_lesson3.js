// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

// let i = 0;
// while (i<arrNum.length) {
//
//     console.log(arrNum[i]);
//     i++;
// }


//     2. перебрати його циклом for

// for (let i = 0; i < arrNum.length; i++) {
//
//     console.log(arrNum[i]);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i<arrNum.length){
//     if (i % 2 === 1) {
//
//         console.log(arrNum[i]);
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arrNum.length; i++) {
//     if (i % 2 === 1) {
//         console.log(arrNum[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while(i<arrNum.length) {
//     if (i%2===0) {
//         console.log(arrNum[i]);
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i=0;i<arrNum.length;i++) {
//     if (i % 2 === 0) {
//         console.log(arrNum[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 3 === 0) {
//         arrNum[i] = "okten";
//     }
// }
// console.log(arrNum);


// 8. вивести масив в зворотньому порядку.

// for (let i = arrNum.length - 1; i >= 0; i--) {
//     console.log(arrNum[i]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// 1.Reverse while;

// let i = arrNum.length - 1;
// while (i>=0) {
//
//     console.log(arrNum[i]);
//
//     i--;
// }


// 2. Reverse for;

// for (let i = arrNum.length - 1; i >= 0; i--) {
//     console.log(arrNum[i]);
// }


// 3. Reverse while with odd index;

// let i = arrNum.length - 1;
// while (i >= 0) {
//     if (i % 2 === 1) {
//         console.log(arrNum[i]);
//     }
//     i--;
// }


// 4.Reverse for with odd index;

// for (i = arrNum.length - 1; i >= 0; i--) {
//     if (i % 2 === 1) {
//         console.log(arrNum[i]);
//     }
// }


// 5.Reverse while with even index;

// let i = arrNum.length - 1;
// while (i >= 0) {
//     if (i % 2 === 0) {
//         console.log(arrNum[i]);
//     }
//     i--;
// }


// 6.Reverse for with even index;

// for (let i = arrNum.length - 1; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(arrNum[i]);
//     }
// }


// 7.Reverse for with 'okten' word replacement;

// for (let i = arrNum.length - 1; i >= 0; i--) {
//     if (i % 3 === 0) {
//         arrNum[i] = 'okten';
//     }
// }
// console.log(arrNum);