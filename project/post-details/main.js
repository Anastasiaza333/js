//  На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

const postId = new URL(location.href).searchParams.get('postId');
const detailsContainer = document.getElementById('post-details-container');

const fetchPostDetails = () => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(post => {

            const postDetailsContainer = document.createElement('div');

            if (post.title) {
                const postTitle = document.createElement('div');
                postTitle.textContent = post.title;
                postTitle.classList.add('post-title');
                postDetailsContainer.appendChild(postTitle);
            }

            if (post.body) {
                const postBody = document.createElement('div');
                postBody.textContent = post.body;
                postBody.classList.add('post-body');
                postDetailsContainer.appendChild(postBody);
            }

            detailsContainer.appendChild(postDetailsContainer);


            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(comments => {
                    const commentsList = document.createElement('ul');
                    comments.forEach(comment => {
                        const commentItem = document.createElement('li');

                        const commentName = document.createElement('div');
                        commentName.textContent = comment.name;
                        commentName.classList.add('comment-name');
                        commentItem.appendChild(commentName);

                        const commentEmail = document.createElement('div');
                        commentEmail.textContent = comment.email;
                        commentEmail.classList.add('comment-email');
                        commentItem.appendChild(commentEmail);

                        const commentBody = document.createElement('div');
                        commentBody.textContent = comment.body;
                        commentBody.classList.add('comment-body');
                        commentItem.appendChild(commentBody);

                        commentsList.appendChild(commentItem);
                    });


                    detailsContainer.appendChild(commentsList);
                })
                .catch(error => console.error('Error fetching comments:', error));
        })
        .catch(error => console.error('Error fetching post details:', error));
};

fetchPostDetails();
