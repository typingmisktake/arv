<script>
export default {
  props: {
    id: String,
    student: Object,
  },
  data() {
    return {
      feesData: new Map([
        [
          32,
          {
            status: "Paid",
            date: new Date("2022-08-01"),
            amount: 20000,
          },
        ],
      ]),
    };
  },
  computed: {
    fees() {
      return this.feesData.get(parseInt(this.id));
    },
  },
};
</script>
<template>
  <h1 class="mt-5 mb-2 text-3xl">Fees</h1>
  <div class="">
    <div class="rounded-lg shadow cursor-pointer bg-slate-200 shadow-primary">
      <div class="p-4">
        <h2 class="mb-3 text-2xl">
          <span class="text-base">Roll No</span> {{ id }}
        </h2>
        <div class="grid grid-cols-2">
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Status</span>
            {{ fees.status }}
          </h3>
          <h3 class="text-lg whitespace-nowrap">
            <span class="text-sm">Date</span>
            {{ fees.date.toDateString() }}
          </h3>

          <h3 class="text-lg font-bold">
            <span class="text-sm">Amount</span>
            &#8377; {{ fees.amount }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
