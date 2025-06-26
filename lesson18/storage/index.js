const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');

btn.onclick = () => {
  console.log(inp.value);
  localStorage.setItem('inp', inp.value);
  sessionStorage.setItem('inp', inp.value);

  window.location.href = './page1.html';
};

