<script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      students: new Map([
        [
          32,
          {
            name: "John Doe",
            father: "Michael Doe",
            mother: "Michelle Doe",
            class: "3-B",
            rollNo: 32,
          },
        ],
      ]),
    };
  },
  computed: {
    student() {
      return this.students.get(parseInt(this.id));
    },
  },
};
</script>
<template>
  <h1 class="mt-5 mb-2 text-3xl">Student Detail</h1>
  <div class="">
    <div class="rounded-lg shadow cursor-pointer bg-slate-200 shadow-primary">
      <div class="p-4">
        <h2 class="text-2xl">
          {{ student.name }}
        </h2>
        <div class="grid grid-cols-2">
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Father</span>
            {{ student.father }}
          </h3>
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Mother</span>
            {{ student.mother }}
          </h3>

          <h3 class="text-lg">
            <span class="text-sm">Roll No</span>
            {{ student.rollNo }}
          </h3>
          <h3 class="text-lg">
            <span class="text-sm">Class</span>
            {{ student.class }}
          </h3>
        </div>
      </div>
      <div class="flex flex-col">
        <RouterLink :to="{ name: 'fees', params: { id } }">
          <button class="w-full px-4 py-2 m-0 text-white bg-secondary group">
            <span
              class="invisible -mr-3 transition-all duration-300 hover:-mr-0 group-hover:visible group-hover:-mr-0"
              >&gt;
            </span>
            <span class="bg-secondary">Fees Details</span>
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'result', params: { id } }">
          <button
            class="w-full px-4 py-2 m-0 duration-500 rounded-b-lg bg-primary group"
          >
            <span
              class="invisible -mr-3 transition-all duration-300 hover:-mr-0 group-hover:visible group-hover:-mr-0"
              >&gt;
            </span>
            <span class="bg-primary">Result Details</span>
          </button>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
