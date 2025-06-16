// const arr = [4, 5, 26, 23, 21, 3, 5];
// arr.sort((a, b) => a - b);
// console.log(arr);
//
//
// const arr2 = [4, 5, 26, 23, 21, 3, 5];
//
// arr2.sort(function(a, b) {
//   return a - b;
// });
//
// console.log(arr2);

// const func = function(name) {
//
// };
//
// function getUserName(callback) {
//   const name = prompt('enter your name');
//   // console.log(name, func);
//   callback(name);
//   sayHello(name);
// }
//
// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }
//
// function sayGoodBy(name) {
//   console.log(`Good by ${name}`);
// }
//
// getUserName(sayHello);
// getUserName(sayGoodBy);
//
// const createPlayer = (initialScore) => {
//   let score = initialScore; // Приватная переменная
//   return {
//     getScore: function() {
//       return score;
//     },
//     addScore: function(amount) {
//       score += amount;
//     },
//   };
// };
//
// const player1 = createPlayer(100);
// console.log(player1);
// console.log(player1.getScore()); // 100
// player1.addScore(50);
// console.log(player1.getScore()); // 150
//
// const player2 = createPlayer(77);
// console.log(player2.getScore());
// player2.addScore(555);
// console.log(player2.getScore());

// const arr = [1, 364, 93, 5, 9, 74, 9, 46, 87, 46, 84, 684, 8];
// let max = arr[0]; // 364
// let min = arr[0];
//
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
//
// console.log(max);
// console.log(min);

// const a = 1;
//
// function f() {
//   const a2 = 7;
//   // console.log('func start', a);
//
//   for (let i = 0; i < 10; i++) {
//     const masha = 'masha';
//     // console.log('for', a);
//     if (true) {
//       const u1 = 'petya';
//       const u2 = 'vasya';
//       console.log(masha);
//     }
//     if (true) {
//       const u1 = 'petya';
//       const u2 = 'vasya';
//       console.log(a);
//     }
//
//     // console.log(u1);
//   }
// }
//
// f();
// console.log(a2);
//
// console.log('window end', a);


// const arr = [13, 5, 43, 74, 38, 1, 46, 8, 34, 87];
// console.log(arr);
// const someArr = arr.some((num) => num % 2 === 0);
// console.log(someArr);
//
// const someArr2 = arr.some(function(num) {
//   return num % 2 === 0;
// });
// console.log(someArr2);
// const someArr3 = arr.some(isSome);
//
// function isSome(num) {
//   return num % 2 === 0;
// }
//
// console.log(someArr3);
//
// let isSomeTrue = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     isSomeTrue = true;
//   }
// }
// console.log(isSomeTrue);

//
// const everyArr = arr.every(num => num % 2 === 0);
// console.log(everyArr);

// arr.forEach((element, index, array) => {
//   if (index % 2 === 0) {
//     array[index] = element * 2;
//   }
//   // console.log(element, index, array);
// });
// console.log(arr);

// const mapArr = arr.map((element, index) => {
//   if (index % 2 === 0) {
//     return element * 2;
//   }
//   return element / 2;
// });
// console.log(mapArr);

// //
// const filterArr = arr.filter(num => num % 2 === 0);
// console.log(filterArr);

// const findIndexArr = arr.findIndex(num => num % 2 === 0);
// console.log(findIndexArr);

// const objArr = [
//   {
//     name: 'John',
//     age: 45,
//     id: 1,
//   },
//   {
//     name: 'mike',
//     age: 34,
//     id: 2,
//   },
//   {
//     name: 'nick',
//     age: 54,
//     id: 3,
//   },
// ];
//
// const findArr = objArr.find(user => user.id === 2);
// console.log(findArr);

// const arrForFlat = [1, 2, 3, 4, [5]];
// const flatArr = arrForFlat.flat();
// console.log(flatArr);


// const phrases = ['hello world', 'good bye', 'happy new year'];
// [['hello', 'world'], ['good', 'bye'], ['happy', 'new', 'year']];
//
// const words = phrases.flatMap(phrase => phrase.split(' '));
// console.log(words);


// const arr = [13, 5, 43, 77];
// const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);
//
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 20 },
// ];
//
// const groupedByAge = users.reduce((acc, user) => {
//   const age = user.age;
//   if (!acc[age]) {
//     acc[age] = [];
//   }
//
//   acc[age].push(user);
//   return acc;
// }, {});
//
// console.log(groupedByAge);

n = 3;
const arr = [0, 0, 0, 13, 5, 5, 43, 77];