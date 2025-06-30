// const obj = {};
// obj[1] = 'number';
// obj['1'] = 'string';
//
// delete obj['1'];
// console.log(obj);

const a = [1, 2, 3];

const map = new Map();
map.set(1, 'number');
map.set('1', 'string');
map.set(true, 'boolean');
map.set(a, 'array');
map.set({ a: 2 }, 'object');


// console.log(map.get(true));
// console.log(map.has(true));
// console.log(map.size);
// console.log(map);
//
// map.delete(true);
// map.clear();
// console.log(map);

// map.forEach((item, key, map) => {
//   console.log(key, item);
//   console.log(map);
// });
//
// console.log([...map]);


// const a = [1, 2, 3];
// const b = [1, 2, 3];
//
// let isEqual = true;
// a.forEach((item, index) => {
//   if (item !== b[index]) {
//     isEqual = false;
//   }
// });
//
// console.log(isEqual);


// ... // rest or spread

// function f(a, ...dfgdfgdf) {
//   console.log(dfgdfgdf);
// }
//
// f(1, 2, 3, 4, 5, 56, 6);
//
// const arr = [1, 2, 3]; // console.log(1,2,3)
// console.log(...arr);
//
// const obj2 = {
//   a: 1,
//   b: 2,
//   c: {
//     c1: 3,
//   },
// };
//
// // JSON.parse();
// // JSON.stringify();
//
// const obj3 = {
//   ...obj2,
// };
//
// const obj4 = JSON.parse(JSON.stringify(obj2));
// console.log('4', obj4);
//
// obj2.c.c1 = 4;
//
// console.log('3', obj3);
// const arr = [1, 2, 3];
// const set = new Set([1, 1, 1, 2, 2, 2, 3, 34, 4, 4, 5, 6]);
// set.add(11);
// set.add(1);
// set.add(arr);
// set.add(arr);
// console.log(set);
//
// console.log(set.size);
//
//
// console.log([...set]);

// const regexp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,8}$/;
// const regexp = /test/;
//
// const email = 'test@test.sdfdsgdfghdfsgs';
// console.log(regexp.test(email));
// console.log(email.match(regexp));

//
// const inp = document.querySelector('#text');
// const sub = document.querySelector('#submit');
//
// sub.onclick = (event) => {
//   event.preventDefault();
//   console.log(inp.value);
// };


const wrapper = document.querySelector('.wrapper');
const wr1 = document.querySelector('.wr1');
const wr2 = document.querySelector('.wr2');
const wr3 = document.querySelector('.wr3');
const body = document.querySelector('body');


wrapper.addEventListener('click', (event) => {
  event.stopPropagation();
  body.style.backgroundColor = '#20fe27';
  console.log('wrapper green');
});

wr1.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('wr1 purple');
  body.style.backgroundColor = '#e621c8';
});

wr2.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('wr2 yellow');
  body.style.backgroundColor = '#edd00c';
});

wr3.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('wr3 blue');
  body.style.backgroundColor = '#002cf6';
});















