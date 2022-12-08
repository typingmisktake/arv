<script>
export default {
  data() {
    return {
      students: new Map([
        [
          32,
          {
            name: "John Doe",
            rollNo: 32,
          },
        ],
      ]),
    };
  },
};
</script>
<template>
  <h1 class="mt-5 mb-2 text-3xl">Students</h1>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <RouterLink
      v-for="[id, student] in students"
      :key="id"
      :to="{ path: `/student/${id}` }"
    >
      <div
        class="px-8 py-4 transition-all duration-300 rounded-lg shadow cursor-pointer hover:shadow-md hover:shadow-primary bg-slate-200 shadow-primary"
      >
        <h2 class="text-xl">
          {{ student.name }}
          <span class="text-base opacity-75">({{ student.rollNo }})</span>
        </h2>
      </div>
    </RouterLink>
  </div>
</template>
