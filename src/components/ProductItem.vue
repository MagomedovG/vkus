<template>
  <v-sheet class="ma-2 pa-2">
    <v-card
        class="product"
        @click="goToProductPage(props.productData.id)"
    >
      <v-img
          :src="props.productData.image"
          height="200px"
          class="image"
          cover
      />

      <v-card-title>
        {{ props.productData.brand }}
      </v-card-title>

      <v-card-subtitle>
        {{ props.productData.price }} р.
      </v-card-subtitle>

      <v-card-text>
        {{ props.productData.description }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click.stop="addToCart" class="button">
          Добавить в корзину
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';
  import { computed } from 'vue';
  import { productsStore } from "@/stores/products";

  const store = productsStore();
  
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    }
  });

  // Функция для поиска продукта по ID
  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === props.productData.id);
  });

  const emit = defineEmits(['item-clicked']);

  // Переход на страницу товара
  const goToProductPage = (productId) => {
    emit('item-clicked', productId);
  };

  // Добавление товара в корзину
  const addToCart = () => {
    const product = selectedProduct.value;  // Получаем продукт из computed
    if (product) {
      store.addToCart(product);  // Добавляем продукт в корзину
    }
  };
</script>

<style scoped>
.product{
  height: 425px;
  border:1px solid #0CD467;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:15px;
  transition: all .03s ease-in-out;
  border-radius: 15px;
}

.product:hover {
  scale: 1.01;
}

.button{
  background-color: #0CD467;
  color:white;
  padding:10px 15px;
}

.image {
  border-radius: 15px;
}
</style>
