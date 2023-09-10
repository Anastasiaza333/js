// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str0='hello world';
let str1='lorem ipsum';
let str2='javascript is cool';
console.log(str0,str1,str2);
console.log(str0.length);
console.log(str1.length);
console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str0.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str0.toLowerCase());
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// console.log(str.replace(' ',''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str4 = 'Ревуть воли як ясла повні';
let stringToarray=(str) => str.split(' ');
console.log(stringToarray((str4)));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const  arr=[10,8,-7,55,987,-1011,0,1050,0];
console.log(arr);
const result4=arr.map((num)=>num.toString());
console.log(result4);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    function sortNums(nums){
    let sort =nums.sort((a,b)=>{
        return a - b;
    });
        console.log(sort);
}

sortNums(nums,'ascending');

function sortNums2(nums){
    let sort =nums.sort((a,b)=>{
        return b - a ;
    });
    console.log(sort);
}

sortNums2(nums,'descending');

// ==========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort=coursesAndDurationArray.sort((u1,u2)=>{
    return u2.monthDuration -u1.monthDuration;
});
console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredUsers=coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filteredUsers);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let maped=coursesAndDurationArray.map(function (value, index){
    return { id:index+1,title:value.title,monthDuration:value.monthDuration};
})
console.log(maped);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
]

// - знайти піковий туз
const ace=cards.filter((card)=>card.value==='ace'&& card.cardSuit==='spade');
console.log(ace);
// - всі шістки
const six=cards.filter((card)=>card.value==='6');
console.log(six);
// - всі червоні карти
const redCards=cards.filter((card)=>card.color==='red');
console.log(redCards);
// - всі буби
const diamonds=cards.filter((card)=>card.cardSuit==='diamonds');
console.log(diamonds);
// - всі трефи від 9 та більше
const a=cards.filter((card)=>card.cardSuit==='clubs'&& ['9','10', 'ace','jack','queen','king'].includes(card.value));
console.log(a);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const cards4=cards.reduce((acc,cur)=>{
    switch(cur.cardSuit){
        case 'spade':
        acc.spades.push(cur);
        break;
        case 'clubs':
            acc.spades.push(cur);
            break;
        case 'heart':
            acc.spades.push(cur);
            break;
        case 'diamonds':
            acc.spades.push(cur);
            break;

    }
    return acc;
},{spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]});

console.log(cards4);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
    let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
  console.log(coursesArray);
// --написати пошук всіх об'єктів, в який в modules є sass
coursesArray.filter((value) => value.modules.includes('sass'));
// --написати пошук всіх об'єктів, в який в modules є docker
coursesArray.filter((value) => value.modules.includes('docker'));