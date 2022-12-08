<script>
export default {
  props: {
    name: Object,
  },
  methods: {
    goToHome(e) {
      e.preventDefault();
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<template>
  <h1>Hello, {{ name }}</h1>
  <button @click="goToHome">Go back!</button>
</template>
