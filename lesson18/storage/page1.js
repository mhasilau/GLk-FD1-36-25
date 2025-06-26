const lsH1 = document.querySelector('#hello-user1');
const ssH1 = document.querySelector('#hello-user2');
const delLsBtn = document.querySelector('#del-ls');
const delSsBtn = document.querySelector('#del-ss');
const clearLsBtn = document.querySelector('#clear-ls');
const clearSsBtn = document.querySelector('#clear-ss');

const ls = localStorage.getItem('inp');
const ss = sessionStorage.getItem('inp');

lsH1.textContent = `Hello, ${ls}`;
ssH1.textContent = `Hello, ${ss}`;

delLsBtn.onclick = () => {
  localStorage.removeItem('inp');
};

delSsBtn.onclick = () => {
  sessionStorage.removeItem('inp');
};

clearLsBtn.onclick = () => {
  localStorage.clear();
};
clearSsBtn.onclick = () => {
  sessionStorage.clear();
};