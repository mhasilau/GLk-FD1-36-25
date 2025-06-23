console.log('async 1');

const wrapper = document.querySelector('.wrapper');
const button = document.createElement('button');
button.innerText = 'async 1';
button.setAttribute('id', 'button');
wrapper.append(button);
