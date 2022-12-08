<script>
import { logout, user } from "../auth";
export default {
  methods: {
    onLogout() {
      logout();
      this.$router.push("/");
    },
  },
  computed: {
    user() {
      return user();
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-center w-full">
    <div class="p-10 shadow bg-slate-200 dark:bg-slate-800 dark:text-white">
      <h1 class="mb-5 text-4xl">Welcome, {{ user }}.</h1>
      <button
        class="w-full px-4 py-2 text-white bg-slate-900"
        @click="onLogout()">
        Logout
      </button>
    </div>
  </div>
</template>
