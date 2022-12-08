<script>
import About from "../components/About.vue";

export default {
  components: { About },
};
</script>
<template>
  <div>
    <span v-if="$route.params.name"> <About :name="$route.params.name" /></span>
    <h1>This is an about page</h1>
    <RouterLink to="/" class="green">&lt; Hello</RouterLink>
  </div>
</template>
