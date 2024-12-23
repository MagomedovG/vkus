<template>

  

  <div class="product">
    <v-btn
      @click="router.push({ name: 'Catalog' })"
      color="primary"
      variant="elevated"
      class="button"
      style="margin: 100px 0; width:200px"
  >
    Назад в Каталог
  </v-btn>
    <div class="product-image">
      <img :src="selectedProduct.image" alt="" class="">
    </div>
    <div class="product-details">
      <p>Производитель: {{ selectedProduct.brand }}</p>
      <p>Описание: {{ selectedProduct.description }}</p>
      <h2 style="margin-bottom: 50px;">Цена: {{ selectedProduct.price }} р.</h2>
      <v-btn
          variant="elevated"
          class="button"
          @click="addToCart"
      >Добавить в корзину</v-btn>
    </div>
  </div>
</template>


<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'ProductDetails'
  })
</script>

<script setup>
  import { computed } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRoute, useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()
  const route = useRoute()

  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
  })

  const addToCart = () => {
    store.addToCart(selectedProduct.value)
    router.push({ name: 'CartView' })
  }
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  max-width: 70vw;
  margin: 0 auto;
}

.product-image {
  margin-right: 24px;
  
}
.product-image img{
  width:500px;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
}
.button{
  background-color: #0CD467;
  color:white;
  padding:10px 15px;
}
</style>