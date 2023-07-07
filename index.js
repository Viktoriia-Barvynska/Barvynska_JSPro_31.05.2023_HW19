//=================HW19==================
// Масив категорій та відповідних товарів
const productsByCategory = {
  'Електроніка': ['Телефон', 'Ноутбук', 'Телевізор'],
  'Одяг': ['Футболка', 'Джинси', 'Спідниця'],
  'Книги': ['Роман', 'Детектив', 'Наукова література']
};

  // Отримуємо елементи DOM
  const categoryList = document.getElementById('categoryList');
  const productList = document.getElementById('productList');
  const productDetails = document.getElementById('productDetails');

  //  обробник подій на категорії
  categoryList.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'A') {
      const category = target.textContent;
      showProducts(category);
    }
  });

  //  обробник подій на товари
  productList.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'A') {
      const product = target.textContent;
      showProductDetails(product);
    }
  });

  //  обробник подій на кнопку "Купити"
  productDetails.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const product = target.dataset.product;
      buyProduct(product);
    }
  });

  // Функція для відображення товарів обраної категорії
  function showProducts(category) {
    const products = productsByCategory[category];
    productList.innerHTML = '';

    products.forEach(product => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = product;
      li.appendChild(a);
      productList.appendChild(li);
    });
  }

  // Функція для відображення деталей товару
  function showProductDetails(product) {
    productDetails.innerHTML = `<h3>${product}</h3>
                                <button data-product="${product}">Купити</button>`;
  }

  // Функція для покупки товару
  function buyProduct(product) {
    alert(`Товар "${product}" куплено!`);
    clearProductDetails();
  }

  // Функція для очищення деталей товару
  function clearProductDetails() {
    productDetails.innerHTML = '';
  }