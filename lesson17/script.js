// console.log('Start');
//
// setTimeout(() => {
//   console.log('Timeout 1');
// }, 11110);
//
// Promise.resolve().then(() => {
//   console.log('Promise 1');
// });
//
// setTimeout(() => {
//   console.log('Timeout 2');
// }, 0);
//
// console.log('End');

// CRUD

const obj = {
  body: 'body', // dflfhjdlfd
  title: 'title',
  userId: 1,
};

// fetch('https://jsonplaceholder.typicode.com/posts/6', {
//   method: 'GET',
// }).then(response => response.json()).then(data => {
//   console.log(data);
// });
// console.log(JSON.stringify(obj, null, 2));
// console.log(JSON.stringify(obj));
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(obj),
// }).then(response => response.json()).then(data => {
//   console.log(data);
// }).catch(error => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//   method: 'PUT',
//   body: JSON.stringify(obj),
// }).then(response => response.json()).then(data => {
//   console.log(data);
// }).catch(error => console.log(error.message));
console.log('start');
fetch('https://jsonplaceholder.typicode.com/posts/2', {
  method: 'DELETE',
}).then(response => response.json()).then(data => {
  console.log(data);
}).catch(error => console.log(error.message));
console.log('end');



