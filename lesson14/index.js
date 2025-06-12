// f(2, 4, 7);

// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
//
// sayHello('mikhail');
// sayHello('mike');
// sayHello('mary');
//
// function sum(a, b) {
//   console.log(a + b);
// }
//
// sum(2, 3);
// sum(32, 31);

// function f(a, b, c) {
//   console.log(a + b * c);
// }
//
// f(2, 4, 7);
// f(4, 7, 2);
// f(7, 2, 4);

// const sayHi = function(a) {
//   console.log('sayHi', a);
// };
//
//
// sayHi(235234);
//
//
// function f(a, b, c) {
//   console.log('f', a + b * c);
// }
//

// const arrowF = (data) => console.log(`I got ${data}`);
//
// arrowF(4354);

// (function() {
//   console.log('hi');
// })();

// const a = 16;
// console.log(Math.sqrt(a));
//
//
// function square(a, b, c) {
//   const D = b * b - 4 * a * c;
//   const halfB = b / 2;
//   const D1 = halfB * halfB - a * c;
//   console.log(D, D1);
//   if (D > 0) {
//     const x1 = (-b + Math.sqrt(D)) / (2 * a);
//     const x2 = (-b - Math.sqrt(D)) / (2 * a);
//     console.log(x1, x2);
//   } else if (D < 0) {
//     console.log('no');
//   } else if (D === 0) {
//     const x = (-b + Math.sqrt(D)) / (2 * a);
//     console.log(x);
//   }
// }
//
// square(-1, 6, 7);

//
// function sum(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       // это условие можно не писать
//       str[i] === str[i].toUpperCase() && // a !== A | A === A
//       str[i] >= 'A' && str[i] <= 'Z' // a-z A-Z
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
//
// sum('Jk jB NU!Kj b.,KU');


// function sum(a, b) {
//   return a + b;
// }
//
// const a = sum(3, 4);
// console.log(a);


function f(a, b, ...rest) {
  // console.log(arguments);
  console.log(rest);
  console.log(a, b);
}

f(1, 2, 3, 4, 5);

















