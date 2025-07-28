const cardItemsCount = document.querySelector('#card-items');
const card = document.querySelector('.card-items');

(function () {
  if (sessionStorage.getItem('orders')) {
    const orders = JSON.parse(sessionStorage.getItem('orders'));
    cardItemsCount.textContent = orders.length;
  } else {
    sessionStorage.setItem('orders', JSON.stringify([]));
  }
})();

(function () {
  const data = sessionStorage.getItem('orders');

  if (data) {
    const orders = JSON.parse(data);

    const obj = {};

    orders.forEach(order => {
      if (obj[order.id]) {
        obj[order.id].count += 1;
      } else {
        obj[order.id] = {
          ...order,
          count: 1,
        };
      }
    });

    console.log(obj);

    for (let item in obj) {
      const order = obj[item];
      console.log(order);

      const div = document.createElement('div');
      const name = document.createElement('h5');

      name.textContent = order.titleRu;
      const count = document.createElement('span');
      count.textContent = `ТОваров в корзине: ${order.count}`;
      div.append(name, count);
      card.appendChild(div);
    }
  }
})();
