<template>
<div class="header">
    <!-- Контейнер для хедера -->
    <div class="header-container">
      <!-- Номер телефона -->
      <div class="phone">
        
      </div>

      <!-- Поиск -->
      <div class="search">
        <!-- <input
          v-model="search"
          type="text"
          placeholder="Поиск по названию..."
          class="search-input"
          @input="filterProducts"
        /> -->
        <button class="search-btn">🔍</button>
      </div>

      <!-- Кнопки -->
      <div class="nav-buttons">
        <div class="phone">
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <button @click="goToPage('about')">О нас</button>
        <button @click="goToPage('catalog')">Каталог</button>
        <button @click="goToPage('cart')">Корзина</button>
      </div>
      
    </div>
  </div>
</template>
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


</script>
<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'HeaderSection',
  })
</script>
<style scoped>
.header {
  background-color: #f8f8f8;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background-color: #0056b3;
}
</style>