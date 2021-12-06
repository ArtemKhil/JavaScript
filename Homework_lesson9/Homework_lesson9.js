// Все робити за допомоги js.

// - створити блок,

//let newDiv = document.createElement('div');


//     - додати йому класи wrap, collapse, alpha, beta

// newDiv.classList.add('wrap');
// newDiv.classList.add('collapse');
// newDiv.classList.add('alpha');
// newDiv.classList.add('beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// newDiv.style.backgroundColor = 'yellow';
// newDiv.style.color = 'blue';
// newDiv.style.fontSize = '40px';
// newDiv.innerText = 'Artem Khilchenko';

// - додати цей блок в body.

//document.body.appendChild(newDiv);


// - клонувати його повністю, та додати клон в body.

//let cloneNodeDiv = newDiv.cloneNode(true);
//document.body.appendChild(cloneNodeDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// const menuArr = ['Main', 'Products', 'About us', 'Contacts'];
//
// let menuDiv = document.getElementsByClassName('menu')[0];
// menuArr.forEach(value => {
//     let menuLi = document.createElement('li');
//     menuLi.innerText = value;
//     menuDiv.appendChild(menuLi);
// });


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(value => {
//     let divElement = document.createElement('div');
//     let data = '';
//     for (let key in value) {
//         data += `${key}: ${value[key]}`;
//     }
//     divElement.innerText = data;
//     document.body.appendChild(divElement);
// });



// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(value => {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//
//     let h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//
//     h1Element.innerText = value.title;
//     pElement.innerText = value.monthDuration;
//
//     divElement.append(h1Element, pElement);
//     document.body.appendChild(divElement);
//
// });

