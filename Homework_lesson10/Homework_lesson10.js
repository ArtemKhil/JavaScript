// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let someText = document.getElementById('text');
// let button1 = document.getElementById('btn1');
// button1.onclick = function () {
//     someText.style.display = 'none';
// };


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button2 = document.getElementById('btn2');
// button2.onclick = function () {
//     button2.style.display = 'none';
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let ageChecker = document.getElementById('btn3');
// ageChecker.onclick = function () {
//     let age = document.getElementById('userAge');
//     if (age.value < 18) {
//         alert('You are too young');
//     }else {
//         alert('Welcome');
//     }
// };


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.querySelector('.menu');
// let viewerElement = menuElement.querySelector('.viewer');
// viewerElement.onclick = function () {
//     menuElement.classList.toggle('collapse');
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'Artem',body:'Good Morning'},
//     {title:'Julia', body: 'Time to go home'},
//     {title: 'Anna', body: 'It is too early'},
//     {title: 'Viktor', body: 'It is too late'}
// ];
//
//
// for (const comment of comments) {
//     let commentDiv = document.createElement('div');
//
//     let title = document.createElement('h2');
//     title.innerText = comment.title;
//
//     let bodyComment = document.createElement('div');
//     bodyComment.classList.add('body-comment');
//     bodyComment.innerText = comment.body;
//
//     let commentBtn = document.createElement('button');
//     commentBtn.innerText = 'Hide comment';
//
//     commentBtn.onclick = function () {
//         bodyComment.classList.toggle('collapse-comment');
//     };
//
//     commentDiv.append(title, bodyComment, commentBtn);
//     document.body.appendChild(commentDiv);
//
// }
