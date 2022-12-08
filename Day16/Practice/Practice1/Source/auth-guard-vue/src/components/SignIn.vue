<script>
import { login } from "../auth";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (!login({ user: this.username, key: this.password }))
        return alert("Invalid username or password");
      alert("Login successful");
      this.$router.push({ name: "welcome" });
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-center w-full">
    <div class="p-10 shadow bg-slate-200 dark:bg-slate-800 dark:text-white">
      <h1 class="mb-5 text-4xl text-center">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            type="text"
            v-model="username"
            class="w-full px-4 py-2 focus:outline focus:outline-slate-800 dark:focus:outline-slate-200"
            placeholder="Username" />
        </div>
        <div class="mb-5">
          <input
            type="password"
            v-model="password"
            class="w-full px-4 py-2 focus:outline focus:outline-slate-800 dark:focus:outline-slate-200"
            placeholder="Password" />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-slate-800 dark:bg-slate-900">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
