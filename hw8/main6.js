// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    [this.id=id,
    this.name=name,
    this.surname=surname,
    this.email=email,
    this.phone=phone,]
    console.log(this)
}

console.log(User);

let arr= [];


for (let i = 1; i <= 10; i++) {
    arr.push(new User(`${13-i}`, `User${i}`,`vasya${i}`,`email@${i}`,`+3805679462${i}`));
}
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers=arr.filter((user)=>user.id % 2 === 0)
console.log(filterUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort=arr.sort((a,b)=>{
        return  a.id-b.id;
})
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
     constructor(id,name, surname , email, phone, order) {
         [this.id=id,
         this.name=name,
         this.surname=surname,
         this.email=email,
         this.phone=phone,
         this.order=order]
     }

}

console.log(Client);
// створити пустий масив, наповнити його 10 об'єктами Client
let arr1= [];
for(let i=0;i<10;i++){
    let client=new Client(5,'you','me','vasya@email.com','+380779345672',Math.floor(Math.random()*10+1));
    arr1.push(client);
}
console.log(arr1);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort1=arr1.sort((a,b)=>{
    return  a.order-b.order;
})
console.log(sort1);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model,maker,yearOfLaunch,maxSpeed,engineCapacity) {
    this.model = model,
        this.maker = maker,
        this.yearOfLaunch = yearOfLaunch,
        this.maxSpeed = maxSpeed,
        this.engineCapacity = engineCapacity

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info = function () {
        console.log(`назва моделі-${this.maker}
      виробник - ${this.manufacturer}
      рік випуску - ${this.year}
      максимальна швидкість - ${this.maxSpeed} км/год
      об'єм двигуна - ${this.engineVolume} л\``)
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`нова максимальна швидкість ${this.maxSpeed}`)
    }
    changeYear = function (newValue) {
         this.yearOfLaunch=newValue;
        console.log(`змінено рік випуску на ${this.yearOfLaunch}`)
    }
    addDriver = function (driver) {
        this.driver=driver
        console.log(`новий водій,ім'я ${driver.name} і вік ${driver.age}`)
    }
}
    console.log(Car)

let car = new Car('Lamborgini', 'Lamborghini Trattori', 2022, 300, 2)
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(400);
car.changeYear(2024);
let driver={
    name:'teo',
    age:23
}
car.addDriver(driver)



// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    class Car1 {
        constructor(model, maker, yearOfLaunch, maxSpeed, engineCapacity) {
            this.model = model,
                this.maker = maker,
                this.yearOfLaunch = yearOfLaunch,
                this.maxSpeed = maxSpeed,
                this.engineCapacity = engineCapacity,

                drive()
            {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            }
            info()
            console.log(`назва моделі-${this.maker}
      виробник - ${this.manufacturer}
      рік випуску - ${this.year}
      максимальна швидкість - ${this.maxSpeed} км/год
      об'єм двигуна - ${this.engineVolume} л\``)
        }

        increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
            console.log(`нова максимальна швидкість ${this.maxSpeed}`)
        }

        changeYear = function (newValue) {
            this.yearOfLaunch=newValue;
            console.log(`змінено рік випуску на ${this.yearOfLaunch}`)
        }

        addDriver = function (driver) {
            this.driver=driver
            console.log(`новий водій,ім'я ${driver.name} і вік ${driver.age}`)
        }
    }

    let car1 = new Car1('Lamborgini', 'Lamborghini Trattori', 2022, 300, 3)
    console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(400);
car1.changeYear(2024);
let driver1={
    name:'teo',
    age:23
}
car1.addDriver(driver1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
    class Popelushka {
        constructor(name, age, footsize) {
            [
                this.name = name,
                this.age = age,
                this.footsize = footsize,
            ]
        }
    }

    console.log(Popelushka);

    let popelushky = [];

    for (let i = 0; i < 10; i++) {
        let popelushka = new Popelushka(`Nastya ${i}`, 19 + i, 32 + (i - 3))
        popelushky.push(popelushka)
    }
    console.log(popelushky);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    class Prince {
        constructor(name, age, foundTufelka) {
            [this.age = age,
                this.name = name,
                this.foundTufelka = foundTufelka,]
        }
    }

    let prince = new Prince('vasya', 23, 37);
    console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    let findpopelushka = popelushky
        .find((popelushka) => popelushka.footsize === prince.foundTufelka)
    console.log(findpopelushka);

    for (let i = 0; i < popelushky.length; i++) {
        if (popelushky[i].footsize === prince.foundTufelka) {
            console.log('this popelushka')

        } else if (popelushky[i].footsize !== prince.foundTufelka) {
            console.log('oh')
        }
    }
