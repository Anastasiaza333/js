// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square=(a,b)=>a*b;
    console.log(square(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareOfCircle=(r)=>r*3.14*r;
console.log(squareOfCircle(6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let squareOfCylinder=(h,r)=>

    (2*Math.PI*r*r)+(2*Math.PI*r*h);
console.log(squareOfCylinder(4,9));


// - створити функцію яка приймає масив та виводить кожен його елемент
const array=[23,'hey',true,2];
let foo=(array)=>
{
    if (array.length) {
        for (const item of array) {
            console.log(item);
        }
    }
}
foo(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writer=(text)=>{
    document.write(`<p>${text}</p>`);
}
writer('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let foo1=(text)=>{
    document.write(`<ul>`);
    document.write(`
      <li>${text}</li>
      <li>${text}</li>
      <li>${text}</li>
`)

    document.write(`</ul>`);
}
foo1('cool');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let foo2=(text)=>{
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        const numberElement = 3[i];


        document.write(`
      <li>${text}</li>
      
`)
    }
    document.write(`</ul>`);


}
foo2('cool');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let foo3=(arr)=>{
    document.write(`<ul>`);
    for (const item of arr) {



        document.write(`
      <li>${item}</li>
      
`)
    }
    document.write(`</ul>`);


}
foo3(['dfsf','sdbag',34,true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users=[{id:1,name:'vasya',age:31}];
let func=(arr)=>{
    for (const user of arr) {
        document.write(`<div>
<p>${user.id}</p>
<p>${user.name}</p>
<p>${user.age}</p>
</div>
`)
    }
}
func(users);
// - створити функцію яка повертає найменьше число з масиву
 let findMinimum=(arr)=>{
    let min=arr[0];
    for (let i = 1; i < array.length; i++) {
        const arrayElement = arr[i];
        if(arr[i]<min){
            min=arr[i];
        }
        return min;
    }
}
const numbers=[9,4,5,7];
const minimum=findMinimum(numbers);
console.log(`Найменше число:${minimum}`);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

    const sum= (arrOfNumbers)=>{
    let result=0;
        for (let items of arrOfNumbers) {
            result+=items;
        }
        return result;
}
console.log('result:',sum([3,2,9]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr,index1,index2)=>{
    const numIndex1=arr[index1];
    const numIndex2=arr[index2];

    arr[index1]=numIndex2;
    arr[index2]=numIndex1;

    return arr;
}
console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange=(sum,currencies,resultCurrency)=>{
    let result=0;
    for(const cur of currencies){
        if(cur.currency===resultCurrency){
            result=sum/cur.value
        }
    }
    return result;
}
const  result=exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log('result:',result);