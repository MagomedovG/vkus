<template>
  <button class="button" @click="router.push({ name: 'Catalog' })">Вернуться в каталог</button>
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
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'CartView'
  })
</script>

<script setup>
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";

  const router = useRouter()

  const store = productsStore()

  const removeFromCart = (id) => {
    store.removeFromCart(id)
  }

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
.back-button{
  margin-bottom:50px;
}
.image{
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}
.button{
  background-color: #0CD467;
  color:white;
  padding:10px 15px;
  border-radius: 7px;
  margin-bottom: 50px;
}
</style>