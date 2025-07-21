const DB_API = 'https://fd1-36-default-rtdb.firebaseio.com';

const userName = document.querySelector('#username');
const userEmail = document.querySelector('#email');
const userAvatar = document.querySelector('#avatar');
const submit = document.querySelector('#submit');
const getData = document.querySelector('#get-data');
const usersDiv = document.querySelector('.users');


submit.onclick = event => {
  event.preventDefault();
  const userData = {
    username: userName.value,
    email: userEmail.value,
    avatar: userAvatar.value,
  };

  addData(userData);
};

function addData(data) {
  fetch(`${DB_API}/users.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    username.value = '';
    email.value = '';
    avatar.value = '';
  }).catch((e) => console.log(e));
}

getData.onclick = event => {
  event.preventDefault();
  getDataF();

};

function getDataF() {
  fetch(`${DB_API}/users.json`)
    .then(res => res.json())
    .then((data) => {

      const arr = Object.values(data).map((element, i) => {
        return {
          ...element,
          id: Object.keys(data)[i],
        };
      });
      usersDiv.innerHTML = '';
      arr.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('users-div');
        const name = document.createElement('input');
        const email = document.createElement('input');
        const avatar = document.createElement('img');

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        const actionsDiv = document.createElement('div');
        actionsDiv.append(editBtn, deleteBtn);
        name.value = element.username;
        email.value = element.email;
        avatar.src = element.avatar;

        editBtn.onclick = event => {
          event.preventDefault();
          const data = {
            username: name.value,
            email: email.value,
            avatar: element.avatar,
          };


          editData(element.id, data);
        };

        deleteBtn.onclick = event => {
          event.preventDefault();
          deleteData(element.id);
        };

        div.append(avatar, name, email, actionsDiv);
        usersDiv.appendChild(div);
      });

    });
}

function editData(id, data) {
  fetch(`${DB_API}/users/${id}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function deleteData(id) {
  fetch(`${DB_API}/users/${id}.json`, {
    method: 'DELETE',
  }).then(() => getDataF());
}