const DB_API = 'https://fd1-36-default-rtdb.firebaseio.com';

(function() {
  const id = JSON.parse(sessionStorage.getItem('id'));
  if (!id) {
    window.location.href = '../index.html';
  }

  fetch(`${DB_API}/users/${id}.json`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
})();