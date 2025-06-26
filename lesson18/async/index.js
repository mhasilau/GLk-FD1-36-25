// fetch('https://jsonplaceholder.typiode.com/posts/6', {
//   method: 'GET',
// }).then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   }).finally();


// result.then(res => {
//   console.log(res);
//   return res.json();
// }).then(data => {
//   console.log(data);
// });

const url = 'https://jsonplaceholder.typicode.com';
const data = 'posts';
const id = 4;

async function getData() {
  try {
    const post = await fetch(`${url}/${data}?_limit=10?_page=3`, {
      method: 'GET',
    });
    console.log(await post.json());
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('finish');
  }
}

getData();
