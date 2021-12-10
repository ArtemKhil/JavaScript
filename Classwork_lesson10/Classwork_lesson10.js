// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// document.getElementById('btn5').onclick = function () {
//     let valueFirstName = document.form1.firstName.value;
//     let valueSurname = document.form1.surname.value;
//     let valueAge = document.form2.age.value;
//     let valueDateOfBirth = document.form2.dateOfBirth.value;
//     console.log(valueFirstName, valueSurname, valueAge, valueDateOfBirth);
// };


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let form = document.forms['tableBuilder'];
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let valueRows = +form.rows.value;
//     let valueColumns = +form.columns.value;
//     let valueData = form.data.value;
//
//     let table = document.createElement('table');
//
//     for (let i = 0; i < valueRows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < valueColumns; j++) {
//             let td = document.createElement('td');
//             td.innerText = valueData;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let swearWords = ['fuck', 'asshole', 'bullshit', 'bastard', 'bitch', 'holy shit', 'horseshit'];
//
// let btn = document.getElementById('btn6');
// btn.onclick = function () {
//     let valueWord = document.getElementById('swear').value;
//     for (const swearWord of swearWords) {
//         if (swearWord===valueWord) {
//         alert('This is a swear word,please delete')
//         }
//     }
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['fuck', 'asshole', 'bullshit', 'bastard', 'bitch', 'holy shit', 'horseshit'];
//
// let btn = document.getElementById('btn7');
// btn.onclick = function () {
//     let valueBad = document.getElementById('bad').value;
//     for (const badWord of badWords) {
//         if (valueBad.includes(badWord)) {
//         alert('Please check your sentence!!!')
//         }
//     }
// };

