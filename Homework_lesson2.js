// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Please enter number between 0 and 59');
// if (time<=15){
//     console.log('this is first quarter of an hour ')
// } else if (time<=30) {
//     console.log('this is second quarter of an hour')
// } else if (time <=45) {
//     console.log('this is third quarter of an hour')
// } else if (time <=59) {
//     console.log('this is fourth quarter of an hour')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('Enter number between 1 and 31');
// if (day <= 15) {
//     console.log('this is first half of the month')
// } else if(day>15 && day<=31){
//     console.log('this is second half of the month')
// } else if(day>31){
//     console.log('please enter correct day of the month')
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = 'TEST';
// if(test!==true){
//     console.log('Correct')
// }else{
//     console.log('Incorrect')
// }
//
// let script = test !== true ? console.log('Correct') : console.log('Incorrect');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Enter any of these numbers 0,1,-3');
// if (a!==0) {
//     console.log('Correct')
// }else {
//     console.log('Incorrect')
// }
//
// let script = a !== 0 ? console.log('Correct') : console.log('Incorrect');


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let weekPlan = +prompt('Enter day of the week from 1 to 7');
// switch (weekPlan) {
//     case 1:
//         console.log('Make some plans for Tuesday');
//         break;
//     case 2:
//         console.log('Make some plans for Wednesday');
//         break;
//     case 3:
//         console.log('Make some plans for Thursday')
//         break;
//     case 4:
//         console.log('Make some plans for Friday');
//         break;
//     case 5:
//         console.log('Make some plans for weekend');
//         break;
//     case 6:
//         console.log('Relax!!!It is Saturday');
//         break;
//     case 7:
//         console.log('Relax!!!It is Sunday');
//         break;
//     default:
//         console.log('Please type a correct day of the week!!!')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Please enter number of days in this year');
// if (year % 2 === 0) {
//     console.log('This is a leap year');
// }
// else{
//     console.log('This is normal year');
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let officialJsName = prompt('What is the official name of JavaScript?');
//
// if(officialJsName==='ECMAScript'){
//     alert('This is correct');
// }
// else{
//     alert('Do not know? ECMAScript');
// }
