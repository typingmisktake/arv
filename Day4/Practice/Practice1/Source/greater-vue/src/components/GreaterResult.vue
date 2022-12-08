<script>
export default {
  props: {
    num1: undefined,
    num2: undefined,
  },
};
</script>
<template>
  <h1 v-if="num1 !== undefined && num2 !== undefined">
    <span v-if="num1 > num2">{{ num1 }} is Greater</span>
    <span v-else-if="num2 > num1">{{ num2 }} is Greater</span>
    <span v-else>Both are equal.</span>
  </h1>
</template>
