<script>
import AdmissionForm from "./components/AdmissionForm.vue";

export default {
  components: {
    AdmissionForm,
  },
};
</script>
<template>
  <div class="flex justify-center min-h-screen bg-slate-800">
    <div class="py-10">
      <div class="container">
        <div class="p-12 text-white shadow-xl bg-slate-700">
          <h1 class="mb-5 text-3xl">Admission Form</h1>
          <AdmissionForm />
        </div>
      </div>
    </div>
  </div>
</template>
