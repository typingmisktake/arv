<script>
export default {
  data() {
    return {
      length: "",
      width: "",
    };
  },
  computed: {
    area() {
      console.log(this.length, this.width);
      return this.length * this.width;
    },
  },
};
</script>

<template>
  <div class="px-5 d-flex flex-column mt-5">
    <h1>Find area of circle</h1>
    <div class="row">
      <div class="col-md-6">
        <input
          type="number"
          class="form-control form-control-lg mb-3"
          name="length"
          id="length"
          v-model="length"
          placeholder="Enter length"
        />
        <input
          type="number"
          name="breadth"
          class="form-control form-control-lg mb-3"
          id="breadth"
          v-model="width"
          placeholder="Enter width"
        />
      </div>
      <div class="col-md-6 d-flex justify-content-center align-content-center">
        <h1 v-if="length != '' && width != ''" class="display-1">
          Area: {{ area }}
        </h1>
      </div>
    </div>
  </div>
</template>
