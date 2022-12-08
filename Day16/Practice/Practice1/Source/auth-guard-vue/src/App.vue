<script>
import Home from "./views/HomeView.vue";

export default {
  components: { Home },
};
</script>

<template>
  <div class="absolute top-0 w-full">
    <Home />
  </div>
  <main
    class="flex flex-1 min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
    <div class="container flex p-5">
      <RouterView />
    </div>
  </main>
</template>
