<script>
export default {
  computed: {
    alphabets() {
      const alphabets = [];
      for (let i = 65; i < 91; i++) {
        alphabets.push(String.fromCharCode(i));
      }
      return alphabets;
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="alphabet of alphabets">
        {{ alphabet }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 64px;
  width: 720px;
}
ul > li {
  background-color: antiquewhite;
  padding-left: 12px;
  height: 100px;
  width: 100px;
}
</style>
