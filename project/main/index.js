const products = [
  {
    id: 1,
    titleRu: 'Бэтмэн',
    titleEn: 'Batman',
    description: 'Фильм про летучую мышь',
    img: 'https://upload.wikimedia.org/wikipedia/ru/1/13/Batman_poster.jpg',
    kinopoisk: 8,
    imdb: 8,
    genre: ['fantastic'],
    isPreferred: false,
    year: 2000,
  },
  {
    id: 2,
    titleRu: 'Супермэн',
    titleEn: 'Superman',
    description: 'Фильм про супер человека',
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/32/Superman_%282025_film%29_poster.jpg/250px-Superman_%282025_film%29_poster.jpg',
    kinopoisk: 8,
    imdb: 8,
    genre: ['fantastic'],
    isPreferred: false,
    year: 2000,
  },
  {
    id: 3,
    titleRu: 'Пеле',
    titleEn: 'Pele',
    description: 'Фильм про футболиста',
    img: 'https://www.kino-teatr.ru/movie/posters/big/1/8/119981.jpg',
    kinopoisk: 8,
    imdb: 8,
    genre: ['biography'],
    isPreferred: false,
    year: 2000,
  },
];

const filmsDiv = document.querySelector('.films');
const getDataBtn = document.querySelector('#get-data');
const cardItemsCount = document.querySelector('#card-items');
const cardPage = document.querySelector('.bucket');

(function () {
  if (sessionStorage.getItem('orders')) {
    const orders = JSON.parse(sessionStorage.getItem('orders'));
    cardItemsCount.textContent = orders.length;
  } else {
    sessionStorage.setItem('orders', JSON.stringify([]));
  }
})();

cardPage.onclick = () => {
  window.location.href = '/project/card/card.html';
};

function draw(filterOption) {
  filmsDiv.innerHTML = '';
  let filmsToDraw = [...products];

  if (filterOption) {
    filmsToDraw = products.filter(film => film.genre.includes(filterOption));
  }

  filmsToDraw.forEach(product => {
    const film = document.createElement('div');
    film.classList.add('film');

    const filmInfo = document.createElement('div');
    filmInfo.classList.add('film-info');

    const poster = document.createElement('div');
    poster.classList.add('poster');
    const img = document.createElement('img');
    img.src = product.img;
    poster.appendChild(img);

    const about = document.createElement('div');
    about.classList.add('about');

    const title = document.createElement('div');
    title.classList.add('title');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = product.titleRu;
    const year = document.createElement('b');
    year.innerText = product.year;
    title.append(titleSpan, year);

    const description = document.createElement('div');
    description.classList.add('description');
    const span = document.createElement('span');
    span.innerText = product.description;
    description.appendChild(span);

    const actions = document.createElement('div');
    actions.classList.add('actions');
    const more = document.createElement('button');
    more.innerText = 'Подробнее';
    const prefer = document.createElement('button');
    prefer.innerText = 'В избранное';
    actions.append(more, prefer);

    const buyContainer = document.createElement('div');
    const moreBtn = document.createElement('button');
    moreBtn.textContent = '+';
    const lessBtn = document.createElement('button');
    lessBtn.textContent = '-';
    const count = document.createElement('span');
    count.textContent = '0';
    buyContainer.append(lessBtn, count, moreBtn);

    more.onclick = () => {
      alert(`${product.id} ${product.titleRu}`);
    };

    moreBtn.onclick = () => {
      count.textContent = +count.textContent + 1;
      const orders = JSON.parse(sessionStorage.getItem('orders'));
      orders.push(product);
      sessionStorage.setItem('orders', JSON.stringify(orders));
      cardItemsCount.innerText = orders.length;
    };

    lessBtn.onclick = () => {
      if (+count.textContent > 0) {
        count.textContent = +count.textContent - 1;

        const orders = JSON.parse(sessionStorage.getItem('orders'));
        console.log(orders);
        const index = orders.findIndex(order => order.id === product.id);

        orders.splice(index, 1);

        // orders.push(product);
        sessionStorage.setItem('orders', JSON.stringify(orders));
        cardItemsCount.innerText = orders.length;
      }
    };

    film.append(filmInfo, actions, buyContainer);
    about.append(title, description);
    filmInfo.append(poster, about);
    filmsDiv.appendChild(film);
  });
}

draw();

const filterBio = document.querySelector('#bio');
filterBio.onchange = e => {
  e.preventDefault();
  console.log(e.target.value);
  draw(e.target.value);
};

const arr = [
  {
    id: 1,
    name: 'qqq',
    age: 4356,
  },
  {
    id: 2,
    name: 'qqq',
    age: 4356,
  },
  {
    id: 3,
    name: 'www',
    age: 4356,
  },
  {
    id: 4,
    name: 'www',
    age: 4356,
  },
  {
    id: 5,
    name: 'eee',
    age: 4356,
  },
  {
    id: 6,
    name: 'eee',
    age: 4356,
  },
];

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.onclick = () => {
  const arrFil = arr.filter(el => el.name === 'qqq');
  draw(arrFil);
};
btn2.onclick = () => {
  const arrFil = arr.filter(el => el.name === 'www');
  draw(arrFil);
};
btn3.onclick = () => {
  const arrFil = arr.filter(el => el.name === 'eee');
  draw(arrFil);
};

// function draw(arr) {
//   arr.forEach(el => {
//     console.log(el);
//   });
// }
