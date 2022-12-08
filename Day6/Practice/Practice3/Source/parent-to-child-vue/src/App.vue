<script>
import Display from "./components/Display.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: {
    Display,
  },
};
</script>

<template>
  <div>
    <Display :name="name" />
    <input
      type="text"
      name="name"
      id="name"
      v-model="name"
      placeholder="Enter your name..."
    />
  </div>
</template>
