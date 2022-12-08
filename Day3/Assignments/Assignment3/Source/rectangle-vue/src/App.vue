<script>
import Login from "./components/Login.vue";
import Rectangle from "./components/Rectangle.vue";
import Register from "./components/Register.vue";

export default {
  components: {
    Login,
    Rectangle,
    Register,
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <Register />
      </div>
      <div class="col-md-4">
        <Login />
      </div>
    </div>
    <div class="row">
      <Rectangle />
    </div>
  </div>
</template>
