const userName = document.querySelector('#user-name');
const userAge = document.querySelector('#user-age');
const userNickname = document.querySelector('#user-nickname');
const btn = document.querySelector('#add-btn');
const toSelectBtn = document.querySelector('#to-select');

const users = [];

btn.onclick = () => {
  const user = {
    id: users.length,
    name: userName.value,
    age: userAge.value,
    nickname: userNickname.value,
  };

  users.push(user);

  userName.value = '';
  userAge.value = '';
  userNickname.value = '';

  localStorage.setItem('users', JSON.stringify(users));
};

toSelectBtn.onclick = () => {
  window.location.href = './select.html';
};