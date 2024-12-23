import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        "id": 1,
        "brand": "Марка А",
        "price": 150.99,
        "name": "Хлеб пшеничный",
        "description": "Свежий пшеничный хлеб с хрустящей корочкой.",
        "image": "https://www.abc-bakery.com/wp-content/uploads/2021/01/fresh-bread.jpg"
      },
      {
        "id": 2,
        "brand": "Марка Б",
        "price": 89.99,
        "name": "Молоко 3.2%",
        "description": "Пастеризованное молоко 3.2% жирности, полезное для здоровья.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqvwmA6OMs-nQUmaI1uF2lhZ38K10BkuNPQ&s"
      },
      {
        "id": 3,
        "brand": "Марка В",
        "price": 230.49,
        "name": "Яйца куриные",
        "description": "Свежие яйца куриные, отличного качества.",
        "image": "https://www.verywellfit.com/thmb/a2B5BptPbVyn5D32o6DtvwUhrho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-eggs-1241675-hero-10f5e2b2275b44c48d71e51b6022d900.jpg"
      },
      {
        "id": 4,
        "brand": "Марка Г",
        "price": 95.99,
        "name": "Картофель",
        "description": "Картофель среднего размера, идеален для жарки и пюре.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Raw_Potatoes.jpg"
      },
      {
        "id": 5,
        "brand": "Марка Д",
        "price": 120.50,
        "name": "Морковь",
        "description": "Свежая морковь, насыщенная витаминами и микроэлементами.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Carrot_on_white.jpg"
      },
      {
        "id": 6,
        "brand": "Марка Е",
        "price": 250.00,
        "name": "Томаты",
        "description": "Свежие томаты, вкусные и сочные, с богатым вкусом.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/44/Tomato_je.jpg"
      },
      {
        "id": 7,
        "brand": "Марка Ж",
        "price": 89.99,
        "name": "Огурцы",
        "description": "Хрустящие огурцы с приятным вкусом.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/English_Cucumber.jpg"
      },
      {
        "id": 8,
        "brand": "Марка И",
        "price": 179.99,
        "name": "Куриное филе",
        "description": "Нежное куриное филе, без костей и шкурки.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/97/Chicken_breast_meat.jpg"
      },
      {
        "id": 9,
        "brand": "Марка К",
        "price": 129.99,
        "name": "Сыр твердый",
        "description": "Качественный твердый сыр, с насыщенным вкусом.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swiss_cheese.jpg"
      },
      {
        "id": 10,
        "brand": "Марка Л",
        "price": 75.49,
        "name": "Йогурт натуральный",
        "description": "Натуральный йогурт без добавок и сахара, полезный и вкусный.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Plain_yogurt_in_bowl.jpg"
      },
      {
        "id": 11,
        "brand": "Марка М",
        "price": 99.00,
        "name": "Мука пшеничная",
        "description": "Высококачественная пшеничная мука для выпечки.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flour_bag.jpg"
      },
      {
        "id": 12,
        "brand": "Марка Н",
        "price": 220.00,
        "name": "Рыба лосось",
        "description": "Свежий лосось, отличный выбор для жарки или запеканки.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Salmon_fish.jpg"
      },
      {
        "id": 13,
        "brand": "Марка О",
        "price": 60.00,
        "name": "Капуста белокочанная",
        "description": "Свежая капуста, идеальна для салатов и тушеных блюд.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/Cabbage_5.jpg"
      },
      {
        "id": 14,
        "brand": "Марка П",
        "price": 180.00,
        "name": "Свинина",
        "description": "Нежное мясо свинины, подходит для жарки и тушения.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Raw_pork.jpg"
      },
      {
        "id": 15,
        "brand": "Марка Р",
        "price": 120.00,
        "name": "Печенье овсяное",
        "description": "Полезное овсяное печенье с натуральными ингредиентами.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Oatmeal_cookies.jpg"
      }
    ]
    ,
      cart: []
  }),

  actions: {
    // fetchProductsFromDB() {
    //   fetch('https://dummyjson.com/products')
    //       .then(res => res.json())
    //       .then(json => {
    //         this.products = json.products;
    //       })
    // },

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      console.log('>>>>> ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})