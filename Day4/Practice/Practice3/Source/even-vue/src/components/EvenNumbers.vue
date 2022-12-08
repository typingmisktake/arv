<script>
export default {
  computed: {
    numbers() {
      return Array(100)
        .fill()
        .map((_, x) => ++x)
        .filter((value) => value % 2 === 0);
    },
  },
};
</script>
<template>
  <div class="numbers">
    <h1>Even Numbers</h1>
    <div>
      <div v-for="number of numbers" class="number">
        {{ number }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.numbers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  min-height: 100vh;
}
.numbers > div {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  place-content: center;
}
.number {
  height: 100px;
  background: linear-gradient(135deg, #27ec73, rgb(58, 243, 41));
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
