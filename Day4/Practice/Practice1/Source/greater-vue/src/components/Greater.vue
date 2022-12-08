<script>
import GreaterResult from "./GreaterResult.vue";
export default {
  components: {
    GreaterResult,
  },
  data() {
    return {
      num1: undefined,
      num2: undefined,
    };
  },
};
</script>
<template>
  <div>
    <h1>Find Greater Number</h1>
    <form action="">
      <input
        type="number"
        name="num1"
        id="num2"
        placeholder="Enter a number here"
        v-model="num1"
      />
      <input
        type="number"
        name="num2"
        id="num2"
        placeholder="Enter another number"
        v-model="num2"
      />
    </form>
    <GreaterResult :num1="num1" :num2="num2" />
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
input {
  padding: 0.5rem;
}
</style>
