<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    goToGreetings(e) {
      e.preventDefault();
      this.$router.push({ path: "/greetings", query: { name: this.name } });
    },
  },
};
</script>
<template>
  <h1>Home</h1>
  <input type="text" v-model="name" />
  <button :disabled="!name" @click="goToGreetings">Go!</button>
</template>
