<script>
export default {
  data() {
    return {
      username: "",
      key: "",
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      if (this.username !== "admin" && this.key !== "admin") {
        alert("Invalid username or password");
        return;
      }
      this.isLoggedIn = true;
    },
    logout() {
      this.username = "";
      this.key = "";
      this.isLoggedIn = false;
    },
  },
};
</script>

<template>
  <div v-if="!isLoggedIn" class="text-center">
    <h1>Login</h1>
    <input
      type="text"
      name="username"
      id="username"
      v-model="username"
      placeholder="Enter username"
      class="form-control mb-3"
    />
    <input
      type="password"
      name="password"
      id="password"
      v-model="key"
      placeholder="Enter password"
      class="form-control mb-3"
    />
    <input type="submit" value="Login" @click="login" class="btn btn-primary" />
  </div>
  <div v-else class="text-end">
    <h1>Hello, {{ username }}</h1>
    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>
