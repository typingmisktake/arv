<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: { HelloWorld },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<template>
  <header>
    <HelloWorld v-bind:name="name" />
    <input v-model="name" />
  </header>
</template>
