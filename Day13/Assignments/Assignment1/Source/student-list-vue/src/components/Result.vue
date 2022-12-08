<script>
export default {
  props: {
    id: String,
    student: Object,
  },
  data() {
    return {
      results: new Map([
        [
          32,
          {
            result: "Pass",
            marks: {
              total: 600,
              obtained: 350,
            },
            grade: "B",
          },
        ],
      ]),
    };
  },
  computed: {
    result() {
      return this.results.get(parseInt(this.id));
    },
  },
};
</script>
<template>
  <h1 class="mt-5 mb-2 text-3xl">Result</h1>
  <div class="">
    <div class="rounded-lg shadow cursor-pointer bg-slate-200 shadow-primary">
      <div class="p-4">
        <h2 class="mb-3 text-2xl">
          <span class="text-base">Roll No</span> {{ id }}
        </h2>
        <div class="grid grid-cols-2">
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Total Marks</span>
            {{ result.marks.total }}
          </h3>
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Result</span>
            {{ result.result }}
          </h3>
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Obtained Marks</span>
            {{ result.marks.obtained }}
          </h3>
          <h3 class="text-lg font-bold">
            <span class="text-sm">Grade</span>
            {{ result.grade }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
