// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// const nameFixer = (name) => {
//     let fixedName = name.replaceAll('..', ' ')
//                         .replaceAll('---', ' ')
//                         .replaceAll('__', ' ');
//     return fixedName;
// };
// console.log(nameFixer(n1));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const randomNumArray = (size) => {
//     let newArr = [];
//     for (let i=0;i<size;i++) {
//         newArr.push(Math.round(Math.random() * 100));
//     }
//     return newArr;
// };
// console.log(randomNumArray(20));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let array = [23, 3, 45, 67, 98, 90, 567, 1, 35, 907];
// array.sort((a, b) => a - b);
// console.log(array);
//
// array.sort((a, b) => b - a);
// console.log(array);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr = [1, 3, 4, 6, 88, 43, 46, 68, 12, 24, 782, 60];
//
// let filteredArr = arr.filter(value => value % 2 === 0);
// console.log(filteredArr);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//  let arr = [1, 3, 4, 6, 88, 43, 46, 68, 12, 24, 782, 60];
//
// let arrToString = arr.map(value => value.toString());
// console.log(arrToString);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

//  let arr = [1, 3, 4, 6, 88, 43, 46, 68, 12, 24, 782, 60];

// const arrSorter = (arr, direction) => {
//     if (direction==='asc') return arr.sort((a, b) => a - b);
//     if (direction==='desc') return arr.sort((a, b) => b - a);
// };
// console.log(arrSorter(arr, 'desc'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sortedCourses = coursesAndDurationArray.sort((a, b) =>b.monthDuration-a.monthDuration);
// console.log(sortedCourses);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filteredCourses);
