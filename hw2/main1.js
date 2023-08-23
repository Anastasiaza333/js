//масиви та об'єкти
//1
let arr=[34,69,true,false,1,0,'hey','hello world',3,76];
console.log(arr);
//2
let book1={
    title:'love' ,
    pageCount:100,
    genre:'fantastic'

};
console.log(book1);
let book2={
    title:'criminal' ,
    pageCount:200,
    genre:'detective'

};
console.log(book2);
let book3={
    title:'family' ,
    pageCount:300,
    genre:'comedy'

};
console.log(book3);
//3
let book4={
    title:'family' ,
    pageCount:300,
    genre:'comedy',
    authors:[
        {name:'vasya',age:34},
        {name:'nikita',age:12}
    ],

};
// console.log(book4);
// let book5={
//     title:'family' ,
//     pageCount:300,
//     genre:'comedy',
//     authors:[name:'vasya',age:34],
//
// };
// console.log(book5);
// let book6={
//     title:'family' ,
//     pageCount:300,
//     genre:'comedy',
//     authors:[name:'vasya',age:34],
//
// };
// console.log(book6);
//4
let users=[
    {name:'nastiia',username:'light',password:123321},//0
    {name:'vasya',username:'boy',password:987765},//1
    {name:'nazar',username:'cool',password:643486},//2
    {name:'igor',username:'yep',password:121093},//3
    {name:'yuliia',username:'water',password:494306},//4
    {name:'katiia',username:'sun',password:324143},//5
    {name:'sofiia',username:'you',password:898598},//6
    {name:'vita',username:'beauty',password:754747},//7
    {name:'oliia',username:'flower',password:359095},//8
    {name:'sam',username:'kaktus',password:949839}//9


];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//логічні розгалуження

//1

let x=34;
if(x!==0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
// let a=1;
// if(a!==0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно')
// }
let a=0;
if(a!==0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
// let a=-3;
// if(a!==0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно')
// }

//2
let time=34;
if(time>45 && time<=59){
    console.log('четверта частина години');
}else if(time>30 && time<=45){
    console.log('третя частина години');
}else if(time>15 && time<=30){
    console.log('друга частина години ');
}else if(time>0 && time<=15){
    console.log('перша частина години');
}
//3
let day=+prompt('введіть число від 1 до 31');
if(day>0 && day<=10) {
    console.log('перша декада');
}else if ( day>10 && day<=20 ){
    console.log('друга декада');
}else {
    console.log('третя декада');
}
//4
let schedule=prompt('what day is it today?');

switch(schedule) {
    case '1':
        console.log('monday');
        break;


case '2' :
    console.log('tuesday');
    break;

    case '3' :
        console.log('wensday');
        break;

    case '4' :
        console.log('thursday');
        break;


    case '5' :
        console.log('friday');
        break;

    case '6' :
        console.log('saturday');
        break;

    case '7' :
        console.log('sunday');
        break;
    default:
        console.log('error');
}

//5
let f=+prompt('введіть число f' );
let b=+prompt('введіть число b');
if(f>b){
    console.log('число f більше');
}else if(b>f) {
    console.log('число b більше');
}else{
    console.log('числа рівні');
}

//6
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1='';//фолсі це пуста стрічка ,тому підставляється дефолт ,тому що у нас оператор або
let result=x1 || 'default';
let result2=x1 ?? 'default';
console.log(result);
console.log(result2);
let x2=0;
let result3=x2 || 'default';
console.log(result3);
//7
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
