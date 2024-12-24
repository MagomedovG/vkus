<template>
    <div class="chat-form">
      <div class="flex flex-row justify-between mt-32 mb-32 form">
        <div class="w-5/12 form">
          <!-- <span class="chat-description">{{$t('form.descr')}}</span> -->
        </div>
        <form class="form form-element" method="post" @submit.prevent="submit">
          <label for="message" class="mt-2">
            Комментарий к заказу ({{ store.cart.length }} товара на сумму {{ totalSum }} руб.)
          </label>
          <input class="mb-5" type="text" id="message" v-model="message.text" placeholder="Комментарий">
          <label for="name" class="">Ваше имя</label>
          <input type="text" class="mb-5" id="name" v-model="message.company" placeholder="Имя">
          <label for="email" class="">Номер для связи</label>
          <input type="text" class="mb-5" id="email" v-model="message.number" placeholder="Номер телефона">
          <label for="email" class="">Адрес доставки</label>
          <input type="text" class="mb-5" id="email" v-model="message.address" placeholder="Адрес">
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import { defineEmits } from 'vue';
  import { productsStore } from "@/stores/products";
  
  const store = productsStore();
  
  const message = ref({
    number: "",
    text: "",
    company: "",
    address: ""
  });
  
  const token = ref('8133631034:AAH3bw42njWBy0jh7U-pLfnuLRTZ9-A_Q14');
  const chatId = ref('560917432');
  const emit = defineEmits(["is-complete", "not-complete"]);
  
  // Вычисляем сумму товаров в корзине
  const totalSum = computed(() => store.cart.reduce((sum, item) => sum + item.price, 0));
  
  // Список названий товаров
  const productNames = computed(() => store.cart.map(item => item.name));
  
  // Следим за изменениями в корзине и выводим список товаров в консоль
  watch(() => store.cart, (newCart) => {
    console.log("Список товаров:", newCart.map(item => item.name));
  }, { immediate: true });
  
  const postData = async (url = '', data = {}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message);
    }
  };
  
  const submit = () => {
    // Проверяем, что все поля заполнены
    if (message.value.text && message.value.company && message.value.number) {
      const fullMessage = `Заказ от клиента ${message.value.company}: Комментарий к заказу: "${message.value.text}"
      Номер для связи: ${message.value.number}
      Сумма заказа: ${totalSum.value} руб.
      Товары: ${productNames.value.join(", ")}
      Адрес: ${message.value.address}`;
      
      postData(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage}`)
        .then(() => {
          message.value.text = "";
          message.value.company = "";
          message.value.number = "";
          emit("is-complete", true);
        })
        .catch(error => {
          console.error('Error sending message:', error);
          emit("not-complete", true);
        });
    } else {
      // Если какое-то поле не заполнено, отправляем false
      emit("not-complete", true);
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .form-element {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  input {
    background-color: #f6f6f6;
    padding: 20px 15px;
  }
  button {
    background: #4e89ee;
    padding: 20px;
    border-radius: 15px;
    color: white;
  }
  button:hover {
    background: #265fc1;
    scale: 1.008;
  }
  </style>
  