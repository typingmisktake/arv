<script>
export default {
  data() {
    return {
      user: {
        name: "",
        address: "",
        pan: "",
      },
      paragraph: "",
    };
  },
  methods: {
    register() {
      if (
        this.user.name !== "" &&
        this.user.address !== "" &&
        this.user.pan !== ""
      )
        this.paragraph = `${this.user.name} lives in ${this.user.address} and his pan number is ${this.user.pan}.`;
    },
  },
};
</script>

<template>
  <div class="px-5 d-flex flex-column">
    <h1>Register</h1>
    <input
      type="text"
      name="name"
      id="name"
      v-model="user.name"
      placeholder="Enter your name"
      class="form-control mb-3"
    />
    <input
      type="text"
      name="address"
      id="address"
      placeholder="Enter address"
      v-model="user.address"
      class="form-control mb-3"
    />
    <input
      type="text"
      name="pan"
      id="pan"
      placeholder="Enter pan number"
      v-model="user.pan"
      class="form-control mb-3"
    />
    <button @click="register" class="btn btn-primary">Submit</button>
    <h3 class="display-6 mt-3">{{ paragraph }}</h3>
  </div>
</template>
