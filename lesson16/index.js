// const btn = document.getElementsByTagName('button')[0];
// console.log(btn);
// const btn = document.querySelector('button');
// console.log(btn);
// btn.innerText = 'Hello World!';

// const btn1 = document.getElementById('btn-1');
// const btn1 = document.querySelector('#btn-1');
// btn1.innerText = 'Hello World!';

// const btns = document.getElementsByTagName('button');
// const btns2 = document.querySelectorAll('button');

// console.log(btns);
// console.log(btns2);

// for (let i = 0; i < btns.length; i++) {
//   if (btns[i].id === 'btn-3') {
//     btns[i].innerText = 'new text';
//   }
// }

// const div = document.querySelector('div');
// // div.innerText = 'Hello';
// // div.textContent = 'Hello';
// // div.textContent = '<p>fdf</p>';
// div.innerHTML = '<button id="btn-1" class="btn">click me</button>\n' +
//   '<button id="btn-2" class="btn">click me 2</button>\n' +
//   '<button id="btn-3" class="submit">click me 3</button>';

// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.querySelector('#btn-2');

// btn1.style.color = 'red';
// btn1.style.fontSize = '20px';
// btn1.className = 'class';
// btn1.classList.add('class');

// let btn1Clicks = 0;
// btn1.innerText = `clicks = ${btn1Clicks}`;
//
// function btn1Click() {
//   btn1Clicks++;
//   btn1.innerText = `clicks = ${btn1Clicks}`;
//   if (btn1Clicks % 2) {
//     btn1.className = 'class';
//   } else {
//     btn1.className = 'btn';
//   }
// }
//
// btn1.addEventListener('click', btn1Click);
// btn2.onclick = () => {
//   btn1.removeEventListener('click', btn1Click);
// };

// btn2.onclick = function() {
//   btn1.removeEventListener('click', btn1Click);
// };
// function removeClass1() {
//   btn1.removeEventListener('click', btn1Click);
// };
// btn2.onclick = removeClass1;

// btn1.removeEventListener('click', () => {
// });

// const btn3 = document.querySelector('#btn-3');
// const div = document.querySelector('.div');
//
// btn3.onclick = () => {
//   const p1 = document.createElement('p');
//   p1.innerText = 'p1';
//   const p2 = document.createElement('p');
//   p2.innerText = 'p2';
//   // div.append(p1, p2);
//   div.appendChild(p1);
//   div.appendChild(p2);
// };

const usersData = [
  {
    img: 'https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=480&w=480',
    name: 'Cat',
  },
  {
    img: 'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    name: 'Bird',
  },
  {
    img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
    name: 'Stich',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUqWrUdROtm8SjwkCXx9jpfVfMqrDdTNHkA&s',
    name: 'Dolphin',
  },
  {
    img: 'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg',
    name: 'Abstract',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRSfXk9Ih9KQF6Wvo1iFljSUiebuDyuq0Ww&s',
    name: 'Girl',
  },
];

// const wrapper = document.querySelector('.wrapper');
//
// for (const user of usersData) {
//   const friendDiv = document.createElement('div');
//   friendDiv.classList.add('friend');
//   const photoDiv = document.createElement('div');
//   const userDiv = document.createElement('div');
//   photoDiv.classList.add('photo');
//   userDiv.classList.add('user');
//   const img = document.createElement('img');
//   img.src = user.img;
//   photoDiv.append(img);
//   const span = document.createElement('span');
//   span.textContent = user.name;
//   userDiv.append(span);
//   friendDiv.append(photoDiv, userDiv);
//   wrapper.append(friendDiv);
// }
//
// const inp = document.querySelector('#name');
// const val = document.querySelector('#inp-val');
//
// inp.addEventListener('input', (event) => {
//   console.log(event.target.value);
//   val.innerText = event.target.value;
// });

// document.addEventListener('keydown', (event) => {
//   // console.log(event.key);
//   if (event.altKey && event.key === 'c') {
//     console.log('copy');
//   }
// });

const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(e);
});