// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`We are driving with speed ${this.maxSpeed}mph`)
//     };
//
//     this.info = function () {
//         console.log(`model-${this.model},
//                      manufacturer-${this.manufacturer},
//                      year-${this.year},
//                      maxSpeed-${this.maxSpeed},
//                      volume-${this.volume} `)
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     };
//
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     };
//
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     };
// };
//
// let addedCars = new Car('Macan', 'Porsche', 2021, 360, 3.0);
// console.log(addedCars);
// addedCars.drive();
// addedCars.info();
// addedCars.increaseMaxSpeed(30);
// addedCars.changeYear(2022);
// addedCars.addDriver('Artem Khilchenko');



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class CarClass {
//     constructor(model,manufacturer,year,maxSpeed,volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`We are driving with speed ${this.maxSpeed} mph`)
//     };
//
//     info() {
//         console.log(`model-${this.model},
//                      manufacturer-${this.manufacturer}
//                      year-${this.year}
//                      maxSpeed-${this.maxSpeed}
//                      volume-${this.volume}`)
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     };
//
//     changeYear(newValue) {
//         console.log(this.year = newValue);
//     };
//
//     addDriver(driver) {
//         console.log(this.driver = driver);
//     };
//
// }
//
// let addedCars= new CarClass('X5','BMW','2020',280,3.2)
// addedCars.drive();
// addedCars.info();
// addedCars.increaseMaxSpeed(20);
// addedCars.changeYear(2021);
// addedCars.addDriver('Julia');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name,age,shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// };
//
// let cinderellasArray=[
//     new Cinderella('Julia',19,32),
//     new Cinderella('Anna',22,33),
//     new Cinderella('Sophia',23,34),
//     new Cinderella('Kelly',25,35),
//     new Cinderella('Clair',26,36),
//     new Cinderella('Linda',27,37),
//     new Cinderella('Helen',29,38),
//     new Cinderella('Maria',32,39),
//     new Cinderella('Katie',35,40),
//     new Cinderella('Hanna',35,41)
// ];


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name, age, findShoe) {
//         this.name = name;
//         this.age = age;
//         this.findShoe = findShoe;
//     }
// };
// const prince = new Prince('Robin', 32, 39);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// const coupleInLove = (cinderellasArray,prince) => {
//     for (const item of cinderellasArray) {
//         if (item.shoeSize===prince.findShoe) {
//             return `your cinderella: ${item.name}`;
//         }
//     }
// };
// console.log(coupleInLove(cinderellasArray, prince));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const coupleInLove1 = cinderellasArray.find((item) => item.shoeSize === prince.findShoe);
// console.log(coupleInLove1);