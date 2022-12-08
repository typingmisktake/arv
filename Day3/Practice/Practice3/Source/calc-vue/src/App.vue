<script>
import Calc from "./components/Calc.vue";

export default {
  components: {
    Calc,
  },
  data() {
    return {
      form: {
        num1: 0,
        num2: 0,
        operator: "+",
      },
    };
  },
};
</script>

<template>
  <main>
    <div>
      <div class="input">
        <label for="num1">Number 1:</label>
        <input type="number" name="num1" id="num1" v-model="form.num1" />
      </div>
      <div class="input">
        <label for="num2">Number 2:</label>
        <input type="number" name="num2" id="num2" v-model="form.num2" />
      </div>
      <div class="input">
        <label for="operator">Operator:</label>
        <select name="operator" id="operator" v-model="form.operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
    </div>
    <Calc :form="form"></Calc>
  </main>
</template>

<style>
main {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

input::-webkit-inner-spin-button {
  display: none;
}
input,
select {
  flex: 1;
  padding: 0.3rem;
}
</style>
