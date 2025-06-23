const userName = document.querySelector('#user-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.onclick = (event) => {
  event.preventDefault();

  const userData = {
    email: email.value,
    password: password.value,
    name: userName.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  console.log(userData);
  window.location.href = './page/index.html';
};