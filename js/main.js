const products = [
    {
      id: 1,
      name: "Футболка 'Класика'",
      description: "Базова футболка з 100% бавовни. Ідеально підходить для повсякденного носіння.",
      price: 299,
      image: "images/tshirt.jpg", // Замініть на реальний шлях до зображення
      category: "Одяг",
    },
    {
      id: 2,
      name: "Джинси 'Slim Fit'",
      description: "Сучасні джинси, що підкреслюють фігуру. Виготовлені з якісного деніму.",
      price: 799,
      image: "images/jeans.jpg", // Замініть на реальний шлях до зображення
      category: "Одяг",
    },
    {
      id: 3,
      name: "Навушники 'Air Pro'",
      description: "Бездротові навушники з активним шумозаглушенням. Чудовий звук та комфорт.",
      price: 1499,
      image: "images/headphones.jpg", // Замініть на реальний шлях до зображення
      category: "Електроніка",
    },
    {
      id: 4,
      name: "Рюкзак 'Міський'",
      description: "Місткий та зручний рюкзак для міста. Підходить для ноутбука та інших речей.",
      price: 599,
      image: "images/backpack.jpg", // Замініть на реальний шлях до зображення
      category: "Аксесуари",
    },
    {
      id: 5,
      name: "Книга 'Програмування на JavaScript'",
      description: "Посібник для початківців з програмування на JavaScript. Вивчіть основи та створіть свої проекти.",
      price: 349,
      image: "images/book.jpg", // Замініть на реальний шлях до зображення
      category: "Книги",
    },
    {
      id: 6,
      name: "Смарт-годинник 'FitTrack'",
      description: "Відстежуйте свою активність, пульс та сон за допомогою цього стильного смарт-годинника.",
      price: 999,
      image: "images/smartwatch.jpg", // Замініть на реальний шлях до зображення
      category: "Електроніка",
    },
    {
      id: 7,
      name: "Кеди 'Класичні'",
      description: "Універсальні кеди, які підійдуть до будь-якого образу. Зручні та стильні.",
      price: 699,
      image: "images/sneakers.jpg", // Замініть на реальний шлях до зображення
      category: "Взуття",
    },
    {
      id: 8,
      name: "Кавоварка 'Espresso'",
      description: "Насолоджуйтесь ароматною кавою еспресо вдома. Проста у використанні та догляді.",
      price: 1299,
      image: "images/coffee_maker.jpg", // Замініть на реальний шлях до зображення
      category: "Побутова техніка",
    },
    {
      id: 9,
      name: "Парфуми 'Summer Breeze'",
      description: "Легкий та освіжаючий аромат для літнього настрою. Підходить для щоденного використання.",
      price: 499,
      image: "images/perfume.jpg", // Замініть на реальний шлях до зображення
      category: "Косметика",
    },
    {
      id: 10,
      name: "Планшет 'Tab Pro'",
      description: "Потужний планшет для роботи та розваг. Яскравий екран та тривалий час роботи.",
      price: 1999,
      image: "images/tablet.jpg", // Замініть на реальний шлях до зображення
      category: "Електроніка",
    },
  ];
 
  const productsList = document.getElementById('productsList')
  const searchInput = document.getElementById('searchInput')

  function displayProducts(productsArr) {
    productsArr.forEach(product => {
      const productElement = document.createElement('div')
      productElement.className = 'col'
      productElement.innerHTML = `
        <div class="card" style="width: 18rem; margin: 5px">
          <img src="https://bigkyiv.com.ua/_next/image/?url=https%3A%2F%2Fadm.bigkyiv.com.ua%2Fwp-content%2Fuploads%2F2023%2F02%2Fsnymok-%D1%8Dkrana-2023-02-06-v-12.59.55.png&w=3840&q=75" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.category}</p>
            <p class="card-text">Ціна: ${product.price}грн.</p>
            <button class="btn btn-primary">Купити</button>
          </div>
        </div>
      `
      productsList.appendChild(productElement)
    });
  }
   
  function filterProducs(query) {
    const filterProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    })
    displayProducts(filterProducts)
  }

  searchInput.addEventListener('input',e => {
    const query = e.target.value
    productsList.innerHTML = ''
    filterProducs(query)
  })

  displayProducts(products)