<template>
  <v-sheet class="ma-2 pa-2">
    <v-card
        class="product"
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
        <v-btn @click="goToProductPage(props.productData.id)" class="button">
          Перейти к товару
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'ProductItem',
  })
</script>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    }
  })

  const emit = defineEmits(['item-clicked'])

  const goToProductPage = (productId) => {
    emit('item-clicked', productId)
  }
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
.product:hover{
  scale:1.01
}
.button{
  background-color: #0CD467;
  color:white;
  padding:10px 15px;
}
.image{
  border-radius: 15px;
}
</style>