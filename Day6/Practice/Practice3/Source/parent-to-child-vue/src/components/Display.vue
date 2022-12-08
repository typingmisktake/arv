<script>
export default {
  props: {
    name,
  },
};
</script>

<template>
  <h1 v-if="name">Hello, {{ name }}.</h1>
</template>
