<script>
export default {
  props: {
    field: Object,
    placeholder: String,
    type: "text",
  },
};
</script>
<template>
  <div class="flex flex-col w-full">
    <input
      :type="type"
      @blur="field.$touch"
      :class="{
        'px-4 py-2 text-black outline-none transition-all w-full ': true,
        'focus:border-sky-500 focus:border-l-8': !field.$dirty || !field.$model,
        'border-rose-500 border-l-8 ': field.$dirty && field.$invalid,
        'border-green-500 border-l-8':
          (field.$dirty || field.$model) &&
          !field.$invalid &&
          field.$model != '',
      }"
      :placeholder="placeholder"
      v-model="field.$model"
    />
    <div class="">
      <div class="" v-for="error of field.$errors" :key="error.$uid">
        <div class="text-sm text-rose-500">
          {{ error.$message }}
        </div>
      </div>
    </div>
  </div>
</template>
,
