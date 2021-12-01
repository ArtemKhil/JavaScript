// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

// let idContent = document.getElementById('content').innerText;
// console.log(idContent);


// -- отримує текст з блоку з id "rules"

// let idRules = document.getElementById('rules').innerText;
// console.log(idRules);


// -- замініть текст параграфа з id 'content' на будь-який інший

// let changedIdContent = document.getElementById('content');
// changedIdContent.innerText = 'Students need to be exposed to as many different types of texts as possible.' +
//     'They also need the chance to develop an understanding of how the texts work – like teaching any aspect of the language, you need to do it step-by-step so students know how things are done.' +
//     'So, before asking students to write their own short texts they need models.';


// -- замініть текст параграфа з id 'rules' на будь-який інший

// let changedIdRules = document.getElementById('rules');
// changedIdRules.innerText = 'Adrian Tennant delves into the detail of how texts are put together and how you can infer meaning. ' +
//     'He also covers the presumptions we make when reading texts and how to deal with issues such as vocabulary within a text as well as issues connected to punctuation.';


// -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// for (const child of children) {
//     child.style.backgroundColor = 'red';
// }


// -- змініть кожному елементу колір тексту на синій

// let children = document.body.children;
// for ( const child of children) {
//     child.style.backgroundColor = 'skyblue';
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let classListOfRules = document.getElementById('rules');
// console.log(classListOfRules.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let fc_rules = document.getElementsByClassName('fc_rules');
// for (const fc_rule of fc_rules ) {
//     fc_rule.style.color = 'red';
// }
