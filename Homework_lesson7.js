// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id,name,surname,email,phone) {
//     this.id = id,
//     this.name=name,
//     this.surname=surname,
//     this.email=email,
//     this.phone=phone
// };


// створити пустий масив, наповнити його 10 об'єктами new User(....)

// const userArray = [
//     new User(3, 'Artem', 'Khilchenko', 'art@gmail.com', '+380957496035'),
//     new User(5, 'Julia', 'Rom', 'jul@gmail.com', '+380660079856'),
//     new User(2,'Anna','Khil','anna@gmail.com','+380679876783'),
//     new User(1,'Steve','Gillen','steve@gmail.com','+30679832365'),
//     new User(4,'Andrew','McCarthy','andr@gmail.com','+380978764563'),
//     new User(6,'John','Murray','jmurr@gmail.com','+380978567690'),
//     new User(10,'Roger','Allen','rog@gmail.com','+380984567896'),
//     new User(8,'Ben','Davies','ben@gmail.com','+380676547893'),
//     new User(7,'Shaun','Neil','shaun@gmail.com','+380978679890'),
//     new User(9,'James','Rowland','james@gmail.com','+380664657689')
// ];
// console.log(userArray);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = userArray.filter((element) => {
//     if (element.id % 2 === 0) {
//         return element
//     }
// });
// console.log(filteredUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedUsers = userArray.sort((a, b) => a.id - b.id);
// console.log(sortedUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }


// створити пустий масив, наповнити його 10 об'єктами Client

// const clientArray = [
//     new Client(3, 'Artem', 'Khilchenko', 'art@gmail.com', '+380957496035',['laptop','PC','Ipod']),
//     new Client(5, 'Julia', 'Rom', 'jul@gmail.com', '+380660079856',['fridge','freezer','TV','mobile phone']),
//     new Client(2,'Anna','Khil','anna@gmail.com','+380679876783',['table','chairs','sofa','bed',]),
//     new Client(1,'Steve','Gillen','steve@gmail.com','+30679832365',['car','bike','scooter']),
//     new Client(4,'Andrew','McCarthy','andr@gmail.com','+380978764563',['apple','pear']),
//     new Client(6,'John','Murray','jmurr@gmail.com','+380978567690',['melon','nuts','eggs','bread']),
//     new Client(10,'Roger','Allen','rog@gmail.com','+380984567896',['juice','water','beer','wine','milk']),
//     new Client(8,'Ben','Davies','ben@gmail.com','+380676547893',['plums','apricot','grapes']),
//     new Client(7,'Shaun','Neil','shaun@gmail.com','+380978679890',['beetroot','potatoes','cucumber']),
//     new Client(9,'James','Rowland','james@gmail.com','+380664657689',['mango','papaya'])
// ];
// console.log(clientArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortedClientOrderClient = clientArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedClientOrderClient);