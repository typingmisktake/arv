<script>
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";

import ErrorMessage from "./components/ErrorMessage.vue";
import Display from "./components/Display.vue";

export default {
  components: {
    ErrorMessage,
    Display,
  },
  data() {
    return {
      v$: useVuelidate(),
      id: null,
      name: "",
      address: "",
      profiles: [],
    };
  },
  validations() {
    return {
      id: { required: helpers.withMessage("Id is required", required) },
      name: {
        required: helpers.withMessage("Name is required", required),
        minLength: helpers.withMessage(
          "Name must be at least 3 characters long",
          minLength(3)
        ),
      },
      address: {
        required: helpers.withMessage("Address is required.", required),
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      if (!this.v$.$validate()) return;

      this.profiles.push({
        id: this.id,
        name: this.name,
        address: this.address,
      });
    },
  },
};
</script>
<template>
  <form @submit="submit">
    <input
      type="number"
      name="id"
      id="id"
      v-model="id"
      @blur="v$.id.$touch"
      placeholder="id"
    />
    <ErrorMessage :errors="v$.id.$errors" />
    <input
      type="text"
      name="name"
      id="name"
      placeholder="name"
      v-model="name"
      @blur="v$.name.$touch"
    />
    <ErrorMessage :errors="v$.name.$errors" />
    <input
      type="text"
      name="address"
      id="address"
      placeholder="address"
      v-model="address"
      @blur="v$.address.$touch"
    />
    <ErrorMessage :errors="v$.address.$errors" />
    <button type="submit">Submit</button>
  </form>
  <Display :profiles="profiles" />
</template>
