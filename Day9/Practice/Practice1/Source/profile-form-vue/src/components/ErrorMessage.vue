<script>
export default {
  props: {
    errors: "",
  },
};
</script>

<template>
  <div :class="{ error: errors.length }">
    <div class="input-errors" v-for="error of errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
