<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    notifyParent() {
      this.$emit("input", this.name);
    },
  },
  emits: ["input"],
};
</script>

<template>
  <input
    type="text"
    name="name"
    class="px-4 py-2 w-full rounded-full"
    id="name"
    placeholder="Enter your name..."
    v-model="name"
    @input="notifyParent"
  />
</template>
