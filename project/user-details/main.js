
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
//

const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    const json = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await json.json();

    const wrap = document.getElementById('wrap');

    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    id.textContent = `id: ${user.id}`;
    username.textContent = `username: ${user.username}`;
    email.textContent = `email: ${user.email}`;
    phone.textContent = `phone: ${user.phone}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    city.textContent = `city: ${user.address.city}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;
    lat.textContent = `lat: ${user.address.geo.lat}`;
    lng.textContent = `lng: ${user.address.geo.lng}`;
    website.textContent = `website: ${user.website}`;
    companyName.textContent = `companyName: ${user.company.name}`;
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    bs.textContent = `bs: ${user.company.bs}`;

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    wrap.appendChild(ul);

}
void foo();

const wrap = document.getElementById('wrap');

const fetchPosts = () =>
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            const postsList = document.createElement('ul');
            posts.forEach(post => {
                const postItem = document.createElement('li');
                postItem.textContent = post.title;

                const postButton = document.createElement('button');
                postButton.innerText = 'details about post';
                postButton.addEventListener('click', () => {
                    location.href = `../post-details/post-details.html?postId=${post.id}`;
                });

                postItem.appendChild(postButton);
                postsList.appendChild(postItem);
            });

            wrap.appendChild(postsList);
        })
        .catch(error => console.error('error fetching posts:', error));

const button = document.createElement('button');
button.innerText = 'post of current user';
button.addEventListener('click', fetchPosts);

wrap.appendChild(button);
