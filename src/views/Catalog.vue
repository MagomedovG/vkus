<template>
  <div class="products-container container">
    <div class="header">
      <div class="header-container">
        <div class="header_title">
          Vkus
        </div>

        <!-- Поиск -->
        <!-- <div class="search">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по названию..."
            class="search-input"
            @input="filterProducts"
          />
          <button class="search-btn">🔍</button>
        </div> -->

        <!-- Кнопки -->
        <div class="nav-buttons">
          <div class="phone">
            <a href="tel:+79388007868">+7 (938) 800-78-68</a>
          </div>
          <button @click="goToPage('about')">О нас</button>
          <button @click="goToPage('catalog')">Каталог</button>
          <button @click="goToPage('CartView')" class="phone">
            <a href="/cart">
              Корзина ({{store.cart.length}})
            </a>
          </button>
        </div>
        
      </div>
    </div>
    <catalog-main-section/>
    <h2 class="subtitle">ЧТО МЫ МОЖЕМ ПРЕДЛОЖИТЬ</h2>
    <v-row no-gutters>
      <v-col
          v-for="product in store.products"
          :key="product.id"
          cols="12"
          sm="4"
          @click="goToProductPage(product.id)"
          class="product-list"
      >
        <product-item
            :product-data="product"
            @item-clicked="goToProductPage"
        />
      </v-col>
    </v-row>
    <footer class="footer">
        <h2>Контакты</h2>
        <p>г.Каспийск</p>
        <p>с 9:00 до 4:00</p>
        <div class="phone">
            <a href="tel:+79388007868">+7 (938) 800-78-68</a>
          </div>
    </footer>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import ProductItem from "@/components/ProductItem.vue";
  import CatalogMainSection from "@/components/CatalogMainSection.vue";
  export default defineComponent({
    name: 'CatalogView',
    components: {
      ProductItem,
      CatalogMainSection
    },
    setup() {
      const store = productsStore();
      const router = useRouter();
      const search = ref("");

      const goToProductPage = (id) => {
        router.push({ name: "ProductView", params: { id } });
      };
      const filteredProducts = computed(() => {
      if (!search.value) {
        return store.products;
      }
      return store.products.filter((product) =>
        product.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

      const goToPage = (page) => {
        router.push({ name: page });
      };

      // onMounted(async () => {
      //   await store.fetchProductsFromDB();
      // });

      return {
        store,
        search,
        goToProductPage,
        goToPage,
        filteredProducts
      };
  },
  })
</script>

<script setup>
  import { onMounted, ref } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()

  const search = ref('')

  const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } })
  }


  onMounted(async () => {
    // await store.fetchProductsFromDB()
  })
</script>

<style scoped>
.header {
  /* background-color: #f8f8f8; */
  padding: 10px 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  border-bottom:2px solid #f8f8f8;
}
.header_title{
  font-size: 22px;
  color:#0CD467;
  font-weight: bold;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.phone {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.phone a{
  color:black;
  text-decoration: none;
}
.search {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 4px;
}

.nav-buttons {
  display: flex;
  gap: 15px;
}

.nav-buttons button {
  /* background-color: #007bff; */
  /* color: white; */
  border: none;
  /* padding: 8px 16px; */
  cursor: pointer;
  border-radius: 4px;
}

.nav-buttons button:hover {
  color:#00AF00;
}
.nav-buttons a:hover {
  color:#00AF00;
}
.products-container {
  width: 100%;
}
.products-list {
  width: 100%;
}
.subtitle{
  font-size: 52px;
  margin-top: 150px;
  margin-bottom: 50px;
}
.footer{
  margin-top: 200px;
  margin-bottom: 121px;
}
.footer p{
  font-size: 40px;
  margin-bottom: 5px;
  font-weight: bold;
}
.footer h2{
  font-size: 52px;
  margin-bottom: 100px;
  font-weight: bold;
}
.footer a{
  font-size: 40px;
  margin-top: 2px;
  color:#00AF00;
  font-weight: bold;

}
</style>