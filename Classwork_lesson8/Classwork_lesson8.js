// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let mainHeader = document.getElementById('main_header');
// mainHeader.classList.add('sep-2021');


// b) робить шириниу елементу ul 400px

// let ulChanger = document.getElementsByTagName('ul');
// ulChanger[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let allLinkLists= document.getElementsByClassName('linkList');
// for (const element of allLinkLists) {
//     element.style.width = '50%';
// }


// d) отримує текст який зберігається в елементі з класом listElement2

// function addSomeText(text) {
//     let elementsByClassName = document.getElementsByClassName('listElement2');
//     elementsByClassName.innerText(text);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allLi = document.getElementsByTagName('li');
// for (const oneLi of allLi) {
//     oneLi.style.backgroundColor = 'grey';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     a.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     if (a.innerText === 'link3') {
//         a.style.fontSize = '40px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     a.classList.add(a.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const element of elementsByClassName) {
//     element.style.backgroundColor = prompt('Pick your color');
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const element of elementsByClassName) {
//     if (element.textContent==='content 2 segment') {
//         element.style.backgroundColor = prompt('Pick your color');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому теkст на довільний. Текст отримати з prompt()

// let content1Text = document.getElementsByClassName('content_1');
// for (const text of content1Text) {
//     text.innerText = prompt('Write any text!!!');
// }


// l) отримати елементи p та змінити їм padding на 20px

// let allPs = document.getElementsByTagName('p');
// for (const p of allPs){
//     p.style.padding = '20px';
//}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
// for (const element of elementsByClassName){
//     element.innerText = 'sep-2021';
// }
