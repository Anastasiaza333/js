//
// - створити блок,
const target=document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta

// let target = document.getElementById('target');

target.innerText='heyo';
// console.log(target.classList);
target.classList.add('wrap');
target.classList.add('collapse');
target.classList.add('alpha');
target.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту,
target.style.background = 'yellow';
target.style.color = 'blue ';
target.style.fontSize = '30px ';// розмір тексту
// - додати цей блок в body.
document.body.appendChild(target);
// - клонувати його повністю, та додати клон в body.
const copyBlock=target.cloneNode(true);
document.body.appendChild(copyBlock);

// - Є масив:
    let items=['Main','Products','About us','Contacts'];

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ulElement=document.createElement('ul');
for (const item of items) {
        let liElement = document.createElement('li');
         liElement.innerText=item;// виводимл наш масивчик в список
         ulElement.appendChild(liElement); // опміщаєм лішки в юл
    }
document.body.appendChild(ulElement);// вставляємо це в баді аби на сторінці ми бачили результат
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
for (const course of coursesAndDurationArray) {
    let coursesAndDurationArrayInfo = document.createElement('div');

    let h5 = document.createElement('h5');
    h5.innerText = `Title : ${course.title}`;

    let h4 = document.createElement('h4');
    h4.innerText = `Duration : ${course.monthDuration}`;

    coursesAndDurationArrayInfo.append(h5, h4);


    document.body.appendChild(coursesAndDurationArrayInfo);
}

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let coursesAndDurationArrayInfo = document.createElement('div');
    let h5 = document.createElement('h5');
    let h4 = document.createElement('h4');

    coursesAndDurationArrayInfo.classList='item';
    h5.classList='heading';
    h4.classList='heading';

    h5.innerText = course.title;
    h4.innerText = course.monthDuration;

    coursesAndDurationArrayInfo.append(h5, h4);
    document.body.appendChild(coursesAndDurationArrayInfo);
}
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (const simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');

    simpsonDiv.classList='member';

    p.innerText=`${simpson.name}-${simpson.surname}-${simpson.age}-${simpson.info}`
    img.setAttribute('src',simpson.photo);

    simpsonDiv.append(p,img);
    document.body.appendChild(simpsonDiv);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// for (const coursesArrayElement of coursesArray) {
//     const block=document.createElement('div');
//     const name=document.createElement('p');
//     const month=document.createElement('h3');
//     const hour=document.createElement('p');
//
//     name.innerText=coursesArrayElement.title;
//     month.innerText=coursesArrayElement.monthDuration;
//     hour.innerText=coursesArrayElement.hourDuration;
//
//     const module=document.createElement('div');
//     const ul=document.createElement('ul');
//
//     for (const module of coursesArrayElement.modules ) {
//         const li=document.createElement('li');
//         li.innerText=module;
//
//         ul.appendChild(li);
//
//     }
//     block.append(name,month,hour,ul);
//     document.body.appendChild(block);

for (const course of coursesArray) {
    const block = document.createElement('div');
    const title = document.createElement('h1');
    const durationBox = document.createElement('div');
    const month = document.createElement('div');
    const hour = document.createElement('div');
    const modules = document.createElement('div');
    const ul = document.createElement('ul');

    title.innerText = course.title;
    month.innerText = course.monthDuration;
    hour.innerText = course.hourDuration;


    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.innerText = course.modules[i];
        div.classList.add('blue-box');
        modules.appendChild(div);
    }

    for (let i = 3; i < course.modules.length; i++) {
        const li = document.createElement('li');
        li.innerText = course.modules[i];
        ul.appendChild(li);
    }

    block.classList.add('main');
    title.classList.add('blue-box', 'text-center');
    month.classList.add('blue-box', 'text-center', 'grow1');
    hour.classList.add('blue-box', 'text-center', 'grow5');
    modules.classList.add('blue-box');
    durationBox.classList.add('flex');


    modules.appendChild(ul);
    durationBox.append(month, hour)
    block.append(title, durationBox, modules);
    document.body.appendChild(block);
}

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
