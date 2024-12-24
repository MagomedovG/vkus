import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    products:  [
      {
        "id": 1,
        "brand": "БКК",
        "price": 150.99,
        "name": "Хлеб пшеничный",
        "description": "Хлеб ржаной на закваске без дрожжей нарезанный",
        "image": "https://img.05.ru/ut11img/darkstore/00000209279/1.jpg"
      },
      {
        "id": 2,
        "brand": "Чабан",
        "price": 89.99,
        "name": "Молоко пастеризованное",
        "description": "Пастеризованное молоко 3.2% жирности, полезное для здоровья.",
        "image": "https://img.05.ru/ut11img/darkstore/00000187785/3.jpg "
      },
      {
        "id": 3,
        "brand": "Столовые",
        "price": 230.49,
        "name": "Яйца куриные",
        "description": "Яйцо столовое 10 штук бумажная упаковка",
        "image": "https://img.05.ru/ut11img/darkstore/00000189563/1.jpg"
      },
      {
        "id": 4,
        "brand": "Картофель",
        "price": 95.99,
        "name": "Картофель",
        "description": "1кг",
        "image": "https://img.05.ru/ut11img/darkstore/00000207333/3.jpg"
      },
      {
        "id": 5,
        "brand": "Морковь",
        "price": 120.50,
        "name": "Морковь",
        "description": " Вес 500г",
        "image": "https://img.05.ru/ut11img/darkstore/00000207101/3.jpg"
      },
      {
        "id": 6,
        "brand": "Томаты",
        "price": 250.00,
        "name": "Томаты",
        "description": "Черри 500г",
        "image": "https://img.05.ru/ut11img/darkstore/00000207330/2.jpg"
      },
      {
        "id": 7,
        "brand": "Огурцы",
        "price": 89.99,
        "name": "Огурцы",
        "description": "Вес 500г",
        "image": "https://img.05.ru/ut11img/darkstore/00000207332/2.jpg"
      },
      {
        "id": 8,
        "brand": "Филе куриное Хицунов",
        "price": 199.99,
        "name": "Куриное филе",
        "description": "Филе 175-250гр Халяль",
        "image": "https://img.05.ru/ut11img/darkstore/00000209070/2.jpg"
      },
      {
        "id": 9,
        "brand": "Фарш говяжий Gur Meat",
        "price": 199.99,
        "name": "Фарш говяжий",
        "description": "Фарш говяжий замороженный 500гр Gur Meat",
        "image": "https://img.05.ru/ut11img/darkstore/00000208106/5.jpg"
      },
      {
        "id": 10,
        "brand": "Биойогурт АктиБио",
        "price": 75.49,
        "name": "Йогурт натуральный",
        "description": "Биойогурт с черникой и льняными семенами 130гр АктиБио",
        "image": "https://img.05.ru/ut11img/darkstore/00000206746/1.jpg"
      },
      {
        "id": 11,
        "brand": "Мука Снежана",
        "price": 99.00,
        "name": "Мука пшеничная",
        "description": "Высший сорт, 2кг",
        "image": "https://img.05.ru/ut11img/darkstore/00000187671/1.jpg"
      },
      {
        "id": 12,
        "brand": "Чабан",
        "price": 220.00,
        "name": "Масло сливочное",
        "description": "Масло сливочное 82,5%, 180гр",
        "image": "https://img.05.ru/ut11img/darkstore/00000187795/2.jpg"
      },
      {
        "id": 13,
        "brand": "Цветная капуста",
        "price": 360.00,
        "name": "Капуста белокочанная",
        "description": "Цветная капуста 1100-1400г",
        "image": "https://img.05.ru/ut11img/darkstore/00000231394/2.jpg"
      },
      {
        "id": 14,
        "brand": "Макаронные изделия Makfa",
        "price": 180.00,
        "name": "Макаронные изделия",
        "description": "Рожки гладкие 400гр",
        "image": "https://img.05.ru/ut11img/darkstore/00000169813/3.jpg"
      },
      {
        "id": 15,
        "brand": "Фасоль красная Мистраль",
        "price": 220.00,
        "name": "Фасоль красная",
        "description": "для супов и гарниров 450гр",
        "image": "https://img.05.ru/ut11img/darkstore/00000175574/8.jpg"
      }
    ],
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