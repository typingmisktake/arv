<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          name: "Product1",
          price: 25,
          quantity: 3,
        },
        {
          name: "Product2",
          price: 450,
          quantity: 10,
        },
        {
          name: "Product3",
          price: 12,
          quantity: 250,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex flex-wrap">
    <div v-for="product of products" class="w-full p-5 md:w-1/2 lg:w-1/3">
      <Product
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
      />
    </div>
  </div>
</template>
