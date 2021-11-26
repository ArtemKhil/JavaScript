// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let strFirst = 'hello world';
// let lengthFirst = strFirst.length;
// console.log(lengthFirst);
//
// let strSecond = 'lorem ipsum';
// let lengthSecond = strSecond.length;
// console.log(lengthSecond);
//
// let strThird = 'javascript is cool';
// let lengthThird = strThird.length;
// console.log(lengthThird);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str1ToUpCase = str1.toUpperCase();
// console.log(str1ToUpCase);
//
// let str2 = 'lorem ipsum';
// let str2ToUpCase = str2.toUpperCase();
// console.log(str2ToUpCase);
//
// let str3 = 'javascript is cool';
// let str3ToUpCase = str3.toUpperCase();
// console.log(str3ToUpCase);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let strOne = 'HELLO WORLD';
// let strOneToLowCase = strOne.toLowerCase();
// console.log(strOneToLowCase);
//
// let strTwo = 'LOREM IPSUM';
// let strTwoToLowCase = strTwo.toLowerCase();
// console.log(strTwoToLowCase);
//
// let strThree = 'JAVASCRIPT IS COOL';
// let strThreeToLowCase = strThree.toLowerCase();
// console.log(strThreeToLowCase);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trimmedStr = str.trim();
// console.log(trimmedStr);


// - Напишіть функцію , яка перетворює рядок на масив слів.

// let str = 'Каждый охотник желает знать';
//
// const strToArray = (str) => {
//     let strChanged = str.split(' ');
//     return strChanged;
// };
// console.log(strToArray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const deleteCharacters = (str,index) => {
//     let delChar = str.substr(0, index);
//     return delChar;
// };
// console.log(deleteCharacters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    //let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insertDashToUpCase = (str) => {
//     let strChanged = str.split(' ').join('-').toUpperCase();
//     return strChanged;
// };
// console.log(insertDashToUpCase(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'good morning artem';
//
// const firstLetterUpCase = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// };
// console.log(firstLetterUpCase(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'good morning artem';
// const firstLetterCap = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// };
// console.log(firstLetterCap(str));
