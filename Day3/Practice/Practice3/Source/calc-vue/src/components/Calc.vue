<script>
export default {
  props: {
    form: {
      num1: Number,
      num2: Number,
      operator: String,
    },
  },
  methods: {
    add: (a, b) => a + b,
    div: (a, b) => a / b,
    mul: (a, b) => a * b,
    sub: (a, b) => a - b,

    calculate() {
      let num1 = this.form.num1,
        num2 = this.form.num2;

      switch (this.form.operator) {
        case "+":
          return this.add(num1, num2);
        case "-":
          return this.sub(num1, num2);
        case "/":
          return this.div(num1, num2);
        case "*":
          return this.mul(num1, num2);
        default:
          return "Invalid operator";
      }
    },
  },
};
</script>
<template>
  <h1 style="text-align: center">{{ calculate() }}</h1>
</template>
