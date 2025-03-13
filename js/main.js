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

const cart =[]
 
  const productsList = document.getElementById('productsList')
  const searchInput = document.getElementById('searchInput')
  const addProductForm = document.getElementById('addProductForm')
  const saveProduct = document.getElementById('saveProduct')
  const buy = document.getElementById('buy')


  function displayProducts(productsArr) {
    productsList.innerHTML = ''
    productsArr.forEach(product => {
      const productElement = document.createElement('div')
      productElement.className = 'col'
      productElement.innerHTML = `
        <div class="card mb-5" style="width: 18rem;">
          <img src="../../img/photo_2025-03-13_13-07-05.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.category}</p>
            <p class="card-text">Ціна: ${product.price}грн.</p>
            <button class="btn btn-primary" style="background: rgb(200, 38, 38); border: none;" onclick="addToCart(${product.id})">Купити</button>
          </div>
        </div>
      `
      productsList.appendChild(productElement)
    });
  }
   
  function filterProducts(query) {
    const filterProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    })
    displayProducts(filterProducts)
  }

  function addProduct(event) {
   event.preventDefault() 
   const name = document.getElementById('productName').value
   const description = document.getElementById('productDescription').value
   const price = document.getElementById('productPrice').value
   const image = document.getElementById('productImage').value
   const category = document.getElementById('productCategory').value

   const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    image,
    category
   }
   products.push(newProduct)
   displayProducts(products)
   addProductForm.reset()
  }

  function addToCart(productId) {
    const product = products.find(product => product.id === productId)
    if(product) cart.push(product)
    displayCart()
    updateCartButton()
  }

  function displayCart() {
    const cartList = document.getElementById('cartList')
    cartList.innerHTML =''

    cart.forEach((product, index) => {
      const cartItem = document.createElement('div')
      cartItem.innerHTML = `
        <div>
            <h5>${product.name}</h5>
            <p>${product.description}</p>
            <p>${product.category}</p>
            <p>${product.price}</p>
            <button class="btn btn-danger" onclick="removeFromCart(${index})">Видалити</button>
            <hr>
        </div>
      `
      cartList.appendChild(cartItem)
    })
    updateCartButton();
  }

  ////! Кількість товарів у кошику
  function updateCartButton() {
    buy.textContent = `Кошик (${cart.length})`
}

////! Змінювати к-ть товарів в корзині


////!	Видаляти з корзини
function removeFromCart(index) {
  cart.splice(index, 1)
  displayCart()
}

////! Загальна сума до оплати

  addProductForm.addEventListener('submit', addProduct)

  searchInput.addEventListener('input', e => {
    const query = e.target.value
    
    filterProducts(query)
  })

  displayProducts(products)