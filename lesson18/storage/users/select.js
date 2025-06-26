const userName = document.querySelector('#name');
const userAge = document.querySelector('#age');
const userNickname = document.querySelector('#nickname');
const select = document.querySelector('#select');

const users = JSON.parse(localStorage.getItem('users')) || [];

users.forEach((user) => {
  const option = document.createElement('option');
  option.text = user.nickname;
  option.value = user.id;
  select.appendChild(option);
});

select.onchange = (e) => {
  console.log(e.target.value);

  const user = users.find(user => user.id === Number(e.target.value));
  userName.textContent = user.name;
  userAge.textContent = user.age;
  userNickname.textContent = user.nickname;
};