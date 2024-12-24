<template>
  <a href="/" class="button">Вернуться в каталог</a>

  <form-component id="form" @isComplete="completedForm" @notComplete="errorForm" />

  <div v-if="!store.cart.length" style="text-align: center">
    <h1>Корзина пуста...</h1>
  </div>
  <div class="cart-items" v-else>
    <h1 style="margin-bottom: 50px;text-align: center;">Корзина</h1>
    <div
      class="cart-item"
      v-for="item in store.cart"
      :key="item.id"
    >
      <div class="item-details">
        <img :src="item.image" alt="" class="image">
        <span>{{ item.name }}</span>
        <span>Производитель: {{ item.brand }}</span>
        <span>Категория: {{ item.category }}</span>
        <span>Цена: {{ item.price }} р.</span>
        <button @click="removeFromCart(item.id)" class="button" style="background-color: red; margin-bottom: 0;">Удалить из корзины</button>
      </div>
    </div>
    <!-- Кнопка для заказа -->
    <button class="button order-button" @click="openModal">Заказать</button>
  </div>

  <!-- Модальное окно -->
  <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <h2>Оформление заказа</h2>

      <!-- Уведомление об успехе -->
      <div v-if="complete" class="success-message">
        <p>Форма успешно отправлена!</p>
      </div>

      <!-- Уведомление об ошибке -->
      <div v-if="notComplete" class="error-message">
        <p>Ошибка при отправке формы. Пожалуйста, попробуйте ещё раз.</p>
      </div>

      <!-- Форма -->
      <form-components id="order-form" @isComplete="completedForm" @notComplete="errorForm" />
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'CartView'
  });
</script>

<script setup>
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";
import { ref } from "vue";

import FormComponents from "@/components/FormComponents.vue";

const router = useRouter();
const store = productsStore();
const complete = ref(false);
const notComplete = ref(false);
const isModalOpen = ref(false);

const completedForm = () => {
  complete.value = true;
  notComplete.value = false; // Убедимся, что сообщение об ошибке скрыто
  setTimeout(() => {
    complete.value = false; // Скрыть сообщение через 3 секунды
  }, 3000);
};

const errorForm = () => {
  notComplete.value = true;
  complete.value = false; // Убедимся, что сообщение об успехе скрыто
  setTimeout(() => {
    notComplete.value = false; // Скрыть сообщение через 3 секунды
  }, 3000);
};

const removeFromCart = (id) => {
  store.removeFromCart(id);
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 26px;
}

.item-details img {
  width: 20%;
}

.image {
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}

.button {
  background-color: #0CD467;
  color: white;
  padding: 10px 15px;
  border-radius: 7px;
  margin-bottom: 50px;
  text-decoration: none;
}

.order-button {
  margin-top: 20px;
  background-color: #007BFF;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
