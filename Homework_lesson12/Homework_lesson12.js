// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let postsDiv = document.getElementsByClassName('posts')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const valueItem of value) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//
//             let postUserIdDiv = document.createElement('div');
//             postUserIdDiv.innerText=`userId: ${valueItem.userId}`
//
//             let postIdDiv = document.createElement('div');
//             postIdDiv.innerText = `id: ${valueItem.id}`;
//
//             let postTitle = document.createElement('h3');
//             postTitle.innerText = valueItem.title;
//
//             let postBody = document.createElement('div');
//             postBody.innerText = valueItem.body;
//
//
//             postDiv.append(postUserIdDiv,postIdDiv,postTitle,postBody);
//             postsDiv.appendChild(postDiv);
//         }
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let commentsDiv = document.getElementsByClassName('comments')[0];
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         for (const valueElement of value) {
//             let commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//
//             let postIdDiv = document.createElement('div');
//             postIdDiv.innerText = `postId: ${valueElement.postId}`;
//
//             let divId = document.createElement('div');
//             divId.innerText = `id: ${valueElement.id}`;
//
//             let nameH2 = document.createElement('h2');
//             nameH2.innerText = valueElement.name;
//
//             let emailDiv = document.createElement('div');
//             emailDiv.innerText = valueElement.email;
//
//             let bodyDiv = document.createElement('div');
//             bodyDiv.innerText = valueElement.body;
//
//
//             commentDiv.append(postIdDiv, divId, nameH2, emailDiv,bodyDiv);
//             commentsDiv.appendChild(commentDiv);
//         }
//     });

