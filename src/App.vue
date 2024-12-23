<template>
  <!-- <header>

    <div class="toolbar-container">
      <v-btn
          @click="router.push({ name: 'CartView' })"
          color="primary"
          variant="elevated"

      >Корзина: {{ store.cart.length }}
      </v-btn>
    </div>
  </header> -->
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>


<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
.toolbar-container{
  max-width: 70vw;
  margin: 0 auto;
}
</style>
