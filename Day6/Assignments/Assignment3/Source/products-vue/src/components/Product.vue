<script>
export default {
  props: {
    name: "",
    price: undefined,
    quantity: undefined,
  },
  computed: {
    gross() {
      return this.price * this.quantity;
    },
    discount() {
      return this.gross * 0.05;
    },
    final() {
      return this.gross - this.discount;
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-3 shadow-2xl">
    <div class="p-3 text-white bg-blue-500">
      <h2 class="text-2xl tracking-widest">{{ name }}</h2>
    </div>
    <div class="flex justify-between text-lg">
      <div class="p-3">
        <p>Price : &#8377;{{ price }}</p>
        <p>Quantity: {{ quantity }}</p>
      </div>
      <div class="p-3">
        <p>Gross Total : &#8377;{{ gross }}</p>
        <p>Discount (5%): {{ discount }}</p>
      </div>
    </div>
    <div class="p-3 text-white bg-green-500">
      <p class="flex items-center justify-between text-xl">
        <span>Total</span>
        <span class="text-2xl font-semibold"> &#8377;{{ final }}</span>
      </p>
    </div>
  </div>
</template>
