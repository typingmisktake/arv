<script>
import Child from "./components/Child.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleInput(name) {
      this.name = name;
    },
  },
};
</script>

<template>
  <div class="flex min-h-screen justify-center items-center bg-slate-200">
    <div>
      <h1 class="text-3xl font-bold text-center mb-3" v-if="name">
        Hello, {{ name }}.
      </h1>
      <Child @input="handleInput"></Child>
    </div>
  </div>
</template>
