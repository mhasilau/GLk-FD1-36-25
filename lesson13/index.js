// let m = 0;
// console.log('start while');
// while (m < 50) {
//   console.log('m=', m);
//   m++;
//
//   if (m === 14) {
//     break;
//   }
// }
// console.log('end while');
//
// let i = 10;
// console.log('start do while');
// do {
//   console.log('i=', i);
//   i++;
// } while (i < 5);
// console.log('end do while');

//
// i = i + 156456;
// i += 15498;
// i++;
//
// i = i - 114356;
// i -= 151261;
// i--;

// let x1 = 5;
// let y1 = x1;
// x1++;
// console.log(`x=${x1} y=${y1}`);
//
// let x2 = 5;
// x2++;
// let y2 = x2;
//
// console.log(`x=${x2} y=${y2}`);


// for (let i = 0; i < 10; i++) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }

// const arr = [31, 34, 315, 3874, 351, 38, 743, 51, 43];
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//
//   if (element % 7 === 0) {
//     continue;
//   }
//
//   console.log(element);
// }


// const obj = {
//   name: 'John',
//   age: 32,
//   surname: 'Doe',
// };
//
// for (const objKey in obj) {
//   console.log(objKey, obj[objKey]);
// }
//
// const arr = [31, 34, 315, 3874, 351, 38, 743, 51, 43];
// for (const element of arr) {
//   console.log('element', element);
// }
//
// for (const idx in arr) {
//   console.log('idx', idx);
// }

// const arr = [31, 34, 315, 351, 3874, 38, 743, 51, 43];
// let count = 0;
//
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     count++;
//     if (arr[j] > arr[j + 1]) {
//       const temp = arr[j]; // 3874
//       arr[j] = arr[j + 1]; // arr[j] = 351
//       arr[j + 1] = temp;
//     }
//   }
//   console.log(i, arr);
//
// }
//
// console.log(arr);
// console.log(count);


// const obj = {
//   name: 'John',
//   hobbies: ['football', 'chess'],
//   age: function() {
//     console.log(21);
//   },
// };
// obj.age();
//
// const a = {};
// a.name = 'Mike';
// a['age'] = 65;
//
// console.log(a);
//
// const a = {
//   name: 'Mike',
//   age: 21,
//   surname: 'Doe',
//   hobbies: {
//     a: 1,
//   },
// };
//
// const b = Object.create(a);
// console.log(b.name);
//
// const keys = Object.keys(a);
// console.log(keys);
//
// const values = Object.values(a);
// console.log(values);
//
// const entries = Object.entries(a);
// console.log(entries);
//
// const assign = Object.assign(a, { name: 'John', isMarried: true });
// console.log(assign);

// Object.freeze(a);
// a.hobbies = {
//   a: 2,
// };
// console.log(a);

// Object.seal(a);
// a.hobbies = {
//   a: 2,
// };
// a.age = 88;
// a.www = 'www';
// console.log(a);

// const a = {
//   a: 1,
// };
// const b = a;
// b.b = 3;
// const c = a;
// c.c = 5;
//
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

// const a = {
//   a: 1,
// };
//
// const b = Object.assign({}, a);
// b.b = 4;
//
// const c = {
//   ...a,
// };
//
// a.c = 45;
//
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);


// alert('Hello World!');
// const conf = confirm('are you sure?');
// console.log(conf);
// if (conf) {
//   console.log('redirect');
// } else {
//   console.log('stay here');
// }
// const enter = prompt('Hello World!', 'user');
// console.log(enter);
// if (enter) {
//   console.log(enter);
// } else {
//   console.log('something');
// }

// const a = 1;
// const b = prompt('enter number');
// console.log(1 - '1gdfgd');

//
// [1,1,1,2,3,4,5]
// {
//   '1': 3,
//   '2': 1,
// }
